export interface User {
  login: string;
  avatar_url: string;
  name: string;
  followers: number;
  following: number;
  public_repos: number;
  bio: string;
}

export interface RepoProps {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
}

export interface Params {
  name: string;
  login: string;
}

export interface Contents {
  type: string;
  path: string;
}
