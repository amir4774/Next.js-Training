"use client";
import Link from "next/link";
import ShowUser from "../../components/ShowUser";
import ShowRepos from "../../components/ShowRepos";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import stylesSearch from "../../styles/search.module.css";
import { Suspense } from "react";

const PersonPage = () => {
  const userContent = useSelector((state: RootState) => state.user.user);
  const reposContent = useSelector((state: RootState) => state.repo.repos);
  return (
    <main>
      {userContent.login ? (
        <Suspense fallback={<h3 style={{ color: "#fff" }}>Loading...</h3>}>
          <ShowUser user={userContent} />
          <ShowRepos repos={reposContent} user={userContent} />
        </Suspense>
      ) : (
        <div className={stylesSearch.link}>
          <Link href="/search">Please Search First!</Link>
        </div>
      )}
    </main>
  );
};

export default PersonPage;
