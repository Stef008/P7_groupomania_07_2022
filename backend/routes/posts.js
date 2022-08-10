const express = require("express");
const router = express.Router();

const { ctrlToken } = require("../middleware/auth");

const { allPosts, addPost } = require("../controllers/posts");

router.use(ctrlToken);
router.get("/", allPosts);
router.post("/", addPost);

module.exports = { router };
