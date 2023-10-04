const Post = require("../models/posts");
const User = require("../models/User");

module.exports = {
  AddPost: (req, res) => {
    Post.create({
      title: req.body.title,
      content: req.body.content,
      userId: req.body.userId,
    })
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        console.error("Error creating user:", err);
        res.status(500).send(err);
      });
  },
  getAllPostsWhereUserId: (req, res) => {
    const { userId } = req.params;

    Post.findAll({
      where: {
        userId,
      },
    })
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        res.status(500).send(err);
      });
  },
  getAllPosts: (req, res) => {
    Post.findAll({})
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        res.status(500).send(err);
      });
  },
};
