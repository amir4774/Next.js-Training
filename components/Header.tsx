"use client";
import Link from "next/link";
import "../styles/header.css";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";

const Header = () => {
  const userContent = useSelector((state: RootState) => state.user.user);

  const activeLink = (selectedLink: HTMLAnchorElement) => {
    // Remove choose class from all links
    const links = document.querySelectorAll(".link");
    links.forEach((link) => link.classList.remove("choose"));
    // Add choose class to the selected link
    selectedLink.classList.add("choose");
  };

  return (
    <header className="header">
      <h1 className="title">GITHUB PROFILE FINDER</h1>
      <nav className="links">
        <Link
          className="link choose"
          href="/"
          onClick={(e) => activeLink(e.target as HTMLAnchorElement)}
        >
          Home
        </Link>

        <Link
          className="link"
          href="/search"
          onClick={(e) => activeLink(e.target as HTMLAnchorElement)}
        >
          Search
        </Link>

        <Link
          className="link"
          href="/person"
          onClick={(e) => activeLink(e.target as HTMLAnchorElement)}
        >
          {userContent.login ? userContent.login : "Person"}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
