const express = require("express");
const router = express.Router();
const storage = require("../middleware/multer");
const { ctrlToken } = require("../middleware/auth");

const { allPosts, addPost, addCommentary, addLike, deletePost } = require("../controllers/posts");

router.use(ctrlToken);
router.get("/", allPosts);
router.post("/", storage, addPost);
router.post("/:id", addCommentary);
router.post("/:id/likes", addLike)
router.delete("/:id", deletePost);

module.exports = { router };
