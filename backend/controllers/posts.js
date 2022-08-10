const post1 = {
  user: "stef@gmail.com",
  content: "Hello",
  url: "https://picsum.photos/400/200",
};
const post2 = {
  user: "theo@gmail.com",
  content: "C'est super",
  url: "https://picsum.photos/400/200",
};
const post3 = {
  user: "yoyo@gmail.com",
  content: "Whaouu",
  url: "https://picsum.photos/400/200",
};

function allPosts(req, res) {
  const posts = [post1, post2, post3];
  const email = req.email;
  res.send({ posts, email });
}

module.exports = { allPosts };
