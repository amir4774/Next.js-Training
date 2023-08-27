"use client";
import Link from "next/link";
import stylesHeader from "../styles/header.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";


const Header = () => {
  
  const userContent = useSelector((state: RootState) => state.user.user);
  
  return (
    <>
      <div className={stylesHeader.header}>
        <h1 className={stylesHeader.title}>GITHUB PROFILE FINDER</h1>
        <div className={stylesHeader.links}>
          <Link href="/">Home</Link>
          <Link href="/search">Search</Link>
          <Link href="/person">{userContent.login ? userContent.login : 'Person'}</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
