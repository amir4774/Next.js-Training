"use client";
import Link from "next/link";
import ShowUser from "../../components/ShowUser";
import ShowRepos from "../../components/ShowRepos";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import stylesSearch from "../../styles/search.module.css";

const PersonPage = () => {
  const userContent = useSelector((state: RootState) => state.user.user);
  const reposContent = useSelector((state: RootState) => state.repo.repos);

  return (
    <>
      {userContent.login ? (
        <>
          <ShowUser user={userContent} />
          <ShowRepos repos={reposContent} user={userContent} />
        </>
      ) : (
        <div className={stylesSearch.link}>
          <Link href="/search">Please Search First!</Link>
        </div>
      )}
    </>
  );
};

export default PersonPage;
