const { prisma } = require("../dataBase/db");

async function userLiked(req, res) {
  const email = req.email;
  const postId = Number(req.params.id);
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });
    console.log(post);
    if (post == null) {
      return res.status(404).send({ error: "Post not found" });
    }
    if (post != null && post.liked == null) {
      await prisma.post.update({
        where: {
          id: postId,
        },
        data: {
          liked: email,
        },
      });
      return res.send({ message: "Post is liked", data: 1, count: 1 });
    }
    if (post != null && post.liked != null) {
      let usersWhoLike = post.liked.split("|");

      if (usersWhoLike.includes(email)) {
        if (usersWhoLike.length == 1) {
          console.log("=1");
          await prisma.post.update({
            where: {
              id: postId,
            },
            data: {
              liked: null,
            },
          });
          return res.send({
            message: "post has been disliked",
            data: 3,
            count: 0,
          });
        } else {
          console.log(">1");
          usersWhoLike = usersWhoLike.filter(function (item) {
            return item !== email;
          });
          if (usersWhoLike.length == 1) {
            await prisma.post.update({
              where: {
                id: postId,
              },
              data: {
                liked: usersWhoLike[0],
              },
            });
          } else {
            let newLiked = usersWhoLike.array.join("|");
            await prisma.post.update({
              where: {
                id: postId,
              },
              data: {
                liked: newLiked,
              },
            });
          }
          return res.send({
            message: "post has been disliked",
            data: 3,
            count: usersWhoLike.length,
          });
        }
        
      } else {
        const newUsersWhoLike = post.liked + "|" + email;
        let totalCount = usersWhoLike.length + 1;
        await prisma.post.update({
          where: {
            id: postId,
          },
          data: {
            liked: newUsersWhoLike,
          },
        });
        return res.send({
          message: "Post is liked",
          data: 1,
          count: totalCount,
        });
      }
    }
  } catch (err) {
    return res.status(500).send({ error: "Post search failed" });
  }
}

async function checkLike(req, res) {
  const postId = Number(req.params.id);
  const email = req.email;
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });
    if (post == null) {
      return res.status(404).send({ error: "Post not found" });
    }
    if (post != null && post.liked == null) {
      return res.send({
        message: "Post not liked by this user",
        data: 1,
        count: 0,
      });
    }
    if (post != null && post.liked != null) {
      const usersLiked = post.liked.split("|");

      if (usersLiked.includes(email)) {
        return res.send({
          message: "Post already liked by this user",
          data: 2,
          count: usersLiked.length,
        });
      } else {
        return res.send({
          message: "Post not liked by this user",
          data: 1,
          count: usersLiked.length,
        });
      }
    }
  } catch (err) {
    return res.status(500).send({ error: "Post search failed" });
  }
}

module.exports = { userLiked, checkLike };
