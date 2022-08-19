const express = require("express");
const router = express.Router();


const storage = require("../middleware/multer");
const { ctrlToken } = require("../middleware/auth");
const { userLiked, checkLike }  = require("../controllers/likes");
const { allPosts, addPost, addCommentary, deletePost } = require("../controllers/posts");


router.use(ctrlToken);


router.get("/", allPosts);
router.post("/", storage, addPost);
router.post("/:id", addCommentary);
router.post("/:id/likes", userLiked)
router.post("/:id/check", checkLike)
router.delete("/:id", deletePost);


module.exports = { router };
