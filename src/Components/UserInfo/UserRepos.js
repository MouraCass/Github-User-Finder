import React from "react";
import "./styles.css";

function UserRepos({ repos }) {
  return (
    <div className="userReposContainer">
      {Array.isArray(repos) &&
        repos.map((r, i) => (
          <div className="userRepo" key={i}>
            <div className="repoTitle">
              <div className="repoName">
                <a href={r.html_url}> {r.name} </a>
              </div>
              <div className="repoStat">
                <div>Language: {r.language} </div>
                <div>Stars: {r.stargazers_count} </div>
              </div>
            </div>
            <div className="repoDescription">{r.description}</div>
          </div>
        ))}
    </div>
  );
}

export default UserRepos;
