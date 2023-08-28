"use client";
import Link from "next/link";
import { useState } from "react";
import Search from "../../components/Search";
import stylesSearch from "../../styles/search.module.css";
import { User } from "../../Interfaces/interfaces";
import { useDispatch } from "react-redux";
import { setUserContent } from "../../Redux/UserReducer";
import { setRepoContent } from "../../Redux/ReposReducer";

const SearchPage = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState<User>();

  const userHandler = async (result: User) => {
    setUser(result);

    const res = await fetch(
      `https://api.github.com/users/${result.login}/repos`,
      {
        next: {
          revalidate: 100,
        },
      }
    );
    const repos = await res.json();
    
    dispatch(setUserContent(result));
    dispatch(setRepoContent(repos));
  };

  return (
    <main>
      {user ? (
        <div className={stylesSearch.link}>
          <Link href="/person">Go to persen to see {user.login}</Link>
        </div>
      ) : (
        <Search getName={(result: User) => userHandler(result)} />
      )}
    </main>
  );
};
export default SearchPage;
