import { ERROR_NAMES } from "../constants/errors.constants.js";
import { usersService } from "../users/users.service.js";

/**
 {
    id: string,
    title: string,
    content: string,
    authorId: string,
    createdAt: Date,
    updatedAt: Date,
 }
 */
const posts = [];

function getAll(filter) {
  return posts;
}

function getById(postId) {
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    const error = new Error("Post not found");
    error.name = ERROR_NAMES.ERROR_POST_NOT_FOUND;
    throw error;
  }

  return post;
}

function create(postData, username) {
  const user = usersService.getByUsername(username);

  const newPost = {
    ...postData,
    id: crypto.randomUUID(),
    authorId: user.id,
    createAt: new Date(),
    updatedAt: new Date(),
  };

  posts.push(newPost);
  return newPost;
}

function update(postId, postData, username) {
  const post = postsService.getById(postId);
  const user = usersService.getByUsername(username);

  _checkOwnership(post.authorId, user.id); // this will throw or do nothing

  const updatedPost = { ...post, ...postData, updatedAt: new Date() };

  const idx = posts.indexOf(post);
  posts.splice(idx, 1);
  posts.push(updatedPost);

  return updatedPost;
}

function remove(postId, username) {
  const post = postsService.getById(postId);
  const user = usersService.getByUsername(username);

  _checkOwnership(post.authorId, user.id); // this will throw or do nothing

  const idx = posts.indexOf(post);
  const [deleted] = posts.splice(idx, 1);

  if (!deleted) {
    const error = new Error("Post not found");
    error.name = ERROR_NAMES.ERROR_POST_NOT_FOUND;
    throw error;
  }

  return deleted;
}

function _checkOwnership(authorId, userId) {
  if (authorId !== userId) {
    const error = new Error("You are not the author of this post");
    error.name = ERROR_NAMES.ERROR_UNAUTHORIZED;
    throw error;
  }
}

export const postsService = {
  getAll,
  getById,
  create,
  update,
  remove,
};
