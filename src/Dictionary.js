import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${word} def`);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleWordChange} />
      </form>
    </div>
  );
}
