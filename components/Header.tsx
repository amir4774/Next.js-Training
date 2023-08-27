import Link from "next/link";
import stylesHeader from '../styles/header.module.css'

const Header = () => {
  return (
    <>
      <div className={stylesHeader.header}>
        <h1 className={stylesHeader.title}>GITHUB PROFILE FINDER</h1>
        <div className={stylesHeader.links}>
          <Link href="/">Home</Link>
          <Link href="/search">Search</Link>
        </div>
        
      </div>
    </>
  );
};

export default Header;
