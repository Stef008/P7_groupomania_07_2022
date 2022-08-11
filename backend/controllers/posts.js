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
};
const post2 = {
  user: "theo@gmail.com",
  content: "C'est super",
  url: "https://picsum.photos/400/200",
  commentarys: [commentary2],
};
const post3 = {
  user: "yoyo@gmail.com",
  content: "Whaouu",
  url: "https://picsum.photos/400/200",
  commentarys: [commentary1, commentary2],
};
const posts = [post1, post2, post3];

function allPosts(req, res) {
  const email = req.email;
  res.send({ posts, email });
}

function addPost(req, res) {
  const content = req.body.content;
  const getImage = req.file != null;
  console.log("getImage:", getImage);
  console.log("req.body", req.body);
  const url = getImage ? makeImageUrl(req) : null;
  console.log("url:", url);
  const user = req.email;
  const post = {
    content,
    user,
    commentarys: [],
    url : url,
    id: posts.length + 1,
  };
  console.log("post:", post);
  posts.unshift(post);
  res.send({ post });
}

function makeImageUrl(req) {
  let pathImage = req.file.path.replace("\\", "/");
  const protocol = req.protocol;
  const host = req.get("host");
  return `${protocol}://${host}/${pathImage}`;
}

module.exports = { allPosts, addPost };
