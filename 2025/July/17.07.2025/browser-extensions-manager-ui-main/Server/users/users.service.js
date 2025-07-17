import { ERROR_NAMES } from "../constants/errors.constants.js";

const users = [];

function checkIfUserExist(username) {
  const user = users.find((user) => user.username === username);

  if (user) {
    return true;
  }

  return false;
}

function getByUsername(username) {
  const user = users.find((user) => user.username === username);
  if (!user) {
    const error = new Error("User not found");
    error.name = ERROR_NAMES.ERROR_USER_NOT_FOUND;
    throw error;
  }

  return user;
}

function create({ username, password }) {
  const userWithPassword = {
    id: crypto.randomUUID(),
    username,
    password,
  };

  users.push(userWithPassword);

  return userWithPassword;
}

export const usersService = {
  getByUsername,
  create,
  checkIfUserExist,
};
