"use client";
import { useState, FormEvent } from "react";
import { FaSearch } from "react-icons/fa";
import stylesForm from "../styles/search.module.css";
import LoadingPage from "../app/loading";

const Search = ({ getName }: { getName: Function }) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text === "") {
      alert("Please enter a name");
      return;
    }

    setLoading(true);
    const res = await fetch(`/api/search?query=${text}`);
    const data = await res.json();

    if (data.login) {
      // Finde e user
      getName(data);
      setNotFound(false);
    } else {
      // alert("No results found");
      setNotFound(true);
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : notFound ? (
        <h1 style={{ color: "#fff" }}>No results found</h1>
      ) : (
        <form className={stylesForm.form} onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            className={stylesForm.main_input}
            placeholder="Search for the profile you want..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          
          <button className={stylesForm.btn_search} type="submit">
            <FaSearch className={stylesForm.icon} />
          </button>
        </form>
      )}
    </>
  );
};

export default Search;
