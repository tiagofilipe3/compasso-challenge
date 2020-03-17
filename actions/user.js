import github from "../src/http/github";

export const getUser = q => github.get(`/users/${q}`);

export const getUserRepos = username => github.get(`/users/${username}/repos`);

export const getUserStarred = username =>
  github.get(`/users/${username}/starred`);
