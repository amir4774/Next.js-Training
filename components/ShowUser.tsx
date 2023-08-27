import stylesShowUsers from "../styles/showUsers.module.css";
import { FaRegShareSquare } from "react-icons/fa";
import { User } from "../Interfaces/interfaces";

const ShowUser = ({ user, summary }: { user: User; summary?: string }) => {
  return (
    <>
      <div className={stylesShowUsers.main_card}>
        <img src={user.avatar_url} alt="" className={stylesShowUsers.img} />
        <div>
          <div className={stylesShowUsers.name}>
            <div className={stylesShowUsers.title}>
              <h1>{user.name ? user.name : user.login}</h1>
              <a href={`https://github.com/${user.login}`} target="_blank">
                GITHUB <FaRegShareSquare />
              </a>
            </div>
            <p className={stylesShowUsers.summary}>
              {summary ? summary : user.bio}
            </p>
          </div>

          <div className={stylesShowUsers.info}>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
            <p>Repos: {user.public_repos}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowUser;
