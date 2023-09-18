import { PostsModel } from "../model/Post.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostsModel.find();
    res.status(200).json(posts);
  } catch (error) {}
};
export const createPost = async (req, res) => {
  try {
    const newPost = req.body;

    const post = new PostsModel(newPost);
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
export const deletePost = async (req, res) => {
  try {
    const deletePost = req.body;
    console.log(deletePost);
    const post = await PostsModel.findByIdAndDelete({ _id: deletePost._id });
    console.log(post);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
export const updatePost = async (req, res) => {
  console.log(req.body);
  try {
    const update = req.body;
    const post = await PostsModel.findOneAndUpdate(
      { _id: update._id },
      update,
      { new: true }
    );
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
