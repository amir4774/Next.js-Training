import { User } from "../Interfaces/interfaces";
import ShowRepos from "../components/ShowRepos";
import ShowUser from "../components/ShowUser";

async function getMyAccount() {
  const res = await fetch("https://api.github.com/users/amir4774");
  const data = await res.json();

  return data;
}

async function getRepos(login: string) {
  const res = await fetch(`https://api.github.com/users/${login}/repos`, {
    next: {
      revalidate: 100,
    },
  });
  const repos = await res.json();

  return repos;
}

const HomePage = async () => {
  const user: User = await getMyAccount();
  const repos = await getRepos(user.login);

  return (
    <>
      <ShowUser
        user={user}
        summary="I have been familiar with Front-End for almost 1 years. I am
            interested in working in this field. I started my journey by
            learning HTML, CSS and JavaScript. In addition, despite not having
            professional experience, due to my interest and perseverance, I have
            gained valuable knowledge in React, TypeScript, and Redux."
      />
      <ShowRepos user={user} repos={repos} />
    </>
  );
};

export default HomePage;
