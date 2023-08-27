import { Contents } from "../Interfaces/interfaces";
import stylesRepos from "../styles/repos.module.css";

async function fetchRepoContents(name: string, login: string) {
  const res = await fetch(
    `https://api.github.com/repos/${login}/${name}/contents`,
    {
      next: {
        revalidate: 100,
      },
    }
  );
  const contents = await res.json();

  return contents;
}

const RepoDirs = async ({ name, login }: { name: string; login: string }) => {
  const contents: Contents[] = await fetchRepoContents(name, login);
  const dirs = contents.filter((content) => content.type === "dir");

  return (
    <div>
      {dirs.length > 0 ? (
        <>
          <h2 className={stylesRepos.repo_dirs_title}>Directories</h2>
          <div>
            {dirs.map((dir) => (
              <div>
                <a href='#' key={dir.path}>{dir.path}</a>
              </div>
            ))}
          </div>
        </>
      ) : (
        <h2>No directories found</h2>
      )}
    </div>
  );
};

export default RepoDirs;
