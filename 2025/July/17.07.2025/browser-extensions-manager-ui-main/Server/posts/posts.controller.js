import { ERROR_NAMES } from "../constants/errors.constants.js";
import { postsService } from "./posts.service.js";

function getAll(req, res) {
  const { filter } = req.query;
  try {
    const posts = postsService.getAll(filter);
    return res.status(200).json({ message: "Posts found", posts });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Somthing went wrong" });
  }
}

function getById(req, res) {
  const { postId } = req.params;

  if (!postId) {
    return res.status(404).json({ message: "Post not found" });
  }

  try {
    const post = postsService.getById(postId);
    return res.status(200).json({ message: "Post found", post });
  } catch (error) {
    console.log(error);
    switch (error.name) {
      case ERROR_NAMES.ERROR_POST_NOT_FOUND:
        return res.status(404).json({ message: "Post not found" });
      default:
        return res.status(500).json({ message: "Somthing went wrong" });
    }
  }
}

function create(req, res) {
  const { title, content } = req.body ?? {};

  if (!title || !content) {
    console.log("title", title);
    console.log("content", content);
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    const { username } = req.user;
    const post = postsService.create({ title, content }, username);
    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    console.log(error);
    switch (error.name) {
      case ERROR_NAMES.ERROR_USER_NOT_FOUND:
        return res.status(401).json({ message: "User not found" });
      default:
        return res.status(500).json({ message: "Somthing went wrong" });
    }
  }
}

function update(req, res) {
  const { postId } = req.params;

  if (!postId) {
    return res.status(404).json({ message: "Post not found" });
  }

  const { title, content } = req.body ?? {};

  if (!title || !content) {
    console.log("title", title);
    console.log("content", content);
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    const { username } = req.user;
    const updatedPost = postsService.update(
      postId,
      { title, content },
      username
    );
    return res
      .status(200)
      .json({ message: "Post updated successfully", updatedPost });
  } catch (error) {
    console.log(error);
    switch (error.name) {
      case ERROR_NAMES.ERROR_POST_NOT_FOUND:
        return res.status(404).json({ message: error.message });
      case ERROR_NAMES.ERROR_USER_NOT_FOUND:
        return res.status(401).json({ message: error.message });
      case ERROR_NAMES.ERROR_UNAUTHORIZED:
        return res.status(403).json({ message: error.message });
      default:
        return res.status(500).json({ message: "Something went wrong" });
    }
  }
}

function remove(req, res) {
  const { postId } = req.params;

  if (!postId) {
    return res.status(404).json({ message: "Post not found" });
  }

  try {
    const { username } = req.user;
    const removedPost = postsService.remove(postId, username);
    return res
      .status(200)
      .json({ message: "Post removed successfully", removedPost });
  } catch (error) {
    console.log(error);
    switch (error.name) {
      case ERROR_NAMES.ERROR_POST_NOT_FOUND:
        return res.status(404).json({ message: error.message });
      case ERROR_NAMES.ERROR_USER_NOT_FOUND:
        return res.status(401).json({ message: error.message });
      case ERROR_NAMES.ERROR_UNAUTHORIZED:
        return res.status(403).json({ message: error.message });
      default:
        return res.status(500).json({ message: "Something went wrong" });
    }
  }
}

export const postsController = {
  getAll,
  getById,
  create,
  update,
  remove,
};
