const { prisma } = require("../dataBase/db");

async function allPosts(req, res) {
  const email = req.email;
  const posts = await prisma.post.findMany({
    include: {
      commentarys: {
        orderBy: {
          createdAt: "asc",
        },
        include: {
          user: {
            select: {
              email: true,
            },
          },
        },
      },
      user: {
        select: {
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  res.send({ posts, email });
}

async function addPost(req, res) {
  const content = req.body.content;
  const email = req.email;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    const userId = user.id;
    const post = { userId, content };
    makeUrlImage(req, post);

    const newPost = await prisma.post.create({ data: post });
    res.send({ post: newPost });
  } catch (err) {
    res.status(500).send({ error: "a problem has occurred" });
  }
}

function makeUrlImage(req, post) {
  const hasImage = req.file != null;
  if (!hasImage) return;
  let pathImage = req.file.path.replace("\\", "/");
  const protocol = req.protocol;
  const host = req.get("host");
  const url = `${protocol}://${host}/${pathImage}`;

  post.imageUrl = url;
}

async function addCommentary(req, res) {
  const postId = Number(req.params.id);
  const post = await prisma. post.findUnique({
    where:{ id: postId }})
    console.log('post:', post);
  if (post == null) {
    return res.status(404).send({ error: "Post not found" });
  }
  const userCommentary = await prisma.user.findUnique({
    where: { email: req.email },
  });

  const userId = userCommentary.id;
  const commentToAdd = { userId, postId, content: req.body.commentary };
  const commentary = await prisma.commentary.create({ data: commentToAdd });
  res.send({ commentary })
}

function deletePost(req, res) {
  const postId = req.params.id;
  const post = posts.find((post) => post.id === postId);
  if (post == null) {
    return res.status(404).send({ error: "Post not found" });
  }
  const index = posts.index(post);
  posts.splice(index, 1);
  res.send({ message: `Post ${postId} deleted`, post });
}

module.exports = { allPosts, addPost, addCommentary, deletePost };
