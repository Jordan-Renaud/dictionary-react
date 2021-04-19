import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [definition, setDefinition] = useState(null);

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setDefinition(response.data);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleWordChange} />
      </form>
      <Results JSON={definition} />
    </div>
  );
}
