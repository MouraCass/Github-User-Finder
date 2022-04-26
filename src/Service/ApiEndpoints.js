const githubAPI = "https://api.github.com";
const users = "/users/";
const repos = "/repos";
function getUserApiUrl(username) {
  return `${githubAPI}${users}${username}`;
}
function getUserReposApiUrl(username) {
  return `${githubAPI}${users}${username}${repos}`;
}
export { getUserApiUrl, getUserReposApiUrl };
