const { prisma } = require("../dataBase/db");

const commentary1 = {
  user: "juju@gmail.com",
  content: "oui, j'adore !",
};
const commentary2 = {
  user: "juju@gmail.com",
  content: "incroyable ?",
};
const post1 = {
  user: "stef@gmail.com",
  content: "Hello",
  url: "https://picsum.photos/400/200",
  commentarys: [],
  id: 1,
};
const post2 = {
  user: "theo@gmail.com",
  content: "C'est super",
  url: "https://picsum.photos/400/200",
  commentarys: [commentary2],
  id: 2,
};
const post3 = {
  user: "yoyo@gmail.com",
  content: "Whaouu",
  url: "https://picsum.photos/400/200",
  commentarys: [commentary1, commentary2],
  id: 3,
};
const posts = [post1, post2, post3];

async function allPosts(req, res) {
  const email = req.email;
  console.log("email:", email);
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

function addCommentary(req, res) {
  const postId = req.params.id;
  const post = posts.find((post) => post.id === postId);
  if (post == null) {
    return res.status(404).send({ error: "Post not found" });
  }
  const id =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  const user = req.email;
  const commentaryToAdd = { id, user, content: req.body.commentary };
  post.commentarys.push(commentaryToAdd);
  res.send({ post });
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
