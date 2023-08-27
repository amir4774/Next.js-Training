import { Suspense } from "react";
import Repo from "../../../components/Repo";
import RepoDirs from "../../../components/RepoDirs";
import { Params } from "../../../Interfaces/interfaces";
import stylesRepos from "../../../styles/repos.module.css";
import { FaRegShareSquare } from "react-icons/fa";

export function generateMetadata({
  params: { name, login },
}: {
  params: Params;
}) {
  return {
    title: `${login}/${name}`,
  };
}

async function getRepo(name: string, login: string) {
  const res = await fetch(`https://api.github.com/repos/${login}/${name}`);
  const data = await res.json();

  return data;
}

const SelectedRepo = async ({
  params: { name, login },
}: {
  params: Params;
}) => {
  const repo = await getRepo(name, login);

  return (
    <div className={stylesRepos.main_card}>
      <a
        href={`https://github.com/${login}/${name}`}
        target="_blank"
        className={stylesRepos.github}
      >
        GITHUB <FaRegShareSquare />
      </a>

      <Suspense fallback={<div style={{ color: "#fff" }}>Loading repo...</div>}>
        <Repo repo={repo} mainClass={true} />
      </Suspense>

      <hr style={{ margin: "10px 0" }} />

      <Suspense fallback={<div style={{ color: "#fff" }}>Loading dirs...</div>}>
        <RepoDirs name={repo.name} login={login} />
      </Suspense>
    </div>
  );
};

export default SelectedRepo;
