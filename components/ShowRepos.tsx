"use client";
import { useState } from "react";
import Link from "next/link";
import Repo from "./Repo";
import SearchRepos from "./SearchRepos";
import { User } from "../Interfaces/interfaces";
import { RepoProps } from "../Interfaces/interfaces";
import stylesRepos from "../styles/repos.module.css";

const ShowRepos = ({ repos, user }: { repos: RepoProps[]; user: User }) => {
  const [reposAcc, setReposAcc] = useState(repos);

  return (
    <>
      <SearchRepos
        user={user}
        repos={repos}
        getReposName={(result: RepoProps[]) => setReposAcc(result)}
      />

      <div className={stylesRepos.grid}>
        {reposAcc.map((repo) => (
          <Link
            href={`/${user.login}/${repo.name}`}
            className={stylesRepos.post}
            key={repo.id}
          >
            <Repo repo={repo} mainClass={false} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ShowRepos;
