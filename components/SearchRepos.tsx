import { RepoProps, User } from "../Interfaces/interfaces";
import stylesSearchRepos from "../styles/searchRepos.module.css";

const SearchRepos = ({
  user,
  repos,
  getReposName,
}: {
  user: User;
  repos: RepoProps[];
  getReposName: Function;
}) => {
  const handleSearchRepos = (value: string) => {
    const reposName = repos.filter((repo) =>
      repo.name.toLowerCase().includes(value.toLowerCase())
    );
    getReposName(reposName);
  };

  return (
    <>
      <div className={stylesSearchRepos.form}>
        <input
          type="text"
          placeholder="Search Repos..."
          className={stylesSearchRepos.search_input}
          onChange={(e) => handleSearchRepos(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchRepos;
