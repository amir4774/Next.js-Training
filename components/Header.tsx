"use client";
import Link from "next/link";
import stylesHeader from "../styles/header.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";


const Header = () => {
  
  const userContent = useSelector((state: RootState) => state.user.user);
  
  return (
    <>
      <header className={stylesHeader.header}>
        <h1 className={stylesHeader.title}>GITHUB PROFILE FINDER</h1>
        <nav className={stylesHeader.links}>
          <Link href="/">Home</Link>
          <Link href="/search">Search</Link>
          <Link href="/person">{userContent.login ? userContent.login : 'Person'}</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
