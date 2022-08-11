const express = require("express");
const router = express.Router();
const storage = require("../middleware/multer");
const { ctrlToken } = require("../middleware/auth");

const { allPosts, addPost } = require("../controllers/posts");

router.use(ctrlToken);
router.get("/", allPosts);
router.post("/", storage, addPost);

module.exports = { router };
