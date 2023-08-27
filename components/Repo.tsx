import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
import stylesRepos from "../styles/repos.module.css";
import { RepoProps } from "../Interfaces/interfaces";

const Repo = ({
  repo: { name, description, stargazers_count, forks_count, watchers_count },
  mainClass,
}: {
  repo: RepoProps;
  mainClass: boolean;
}) => {
  return (
    <>
      <h2>{name}</h2>
      <p>{description}</p>
      <div className={!mainClass ? stylesRepos.flex : stylesRepos.main}>
        <div className={stylesRepos.repo_info}>
          <FaStar />
          <span>{stargazers_count}</span>
        </div>

        <div className={stylesRepos.repo_info}>
          <FaCodeBranch />
          <span>{forks_count}</span>
        </div>

        <div className={stylesRepos.repo_info}>
          <FaEye />
          <span>{watchers_count}</span>
        </div>
      </div>
    </>
  );
};

export default Repo;
