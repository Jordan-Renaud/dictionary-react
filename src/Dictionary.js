import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [definition, setDefinition] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    const photoApiKey =
      "563492ad6f917000010000019cb4951889ac4b93bb997ea4aaf82789";
    let dictApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    let photoApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=4`;
    let headers = { Authorization: `Bearer ${photoApiKey}` };

    axios.get(dictApiUrl).then(handleDictResponse);
    axios.get(photoApiUrl, { headers: headers }).then(handlePhotoResponse);
  }

  function handleDictResponse(response) {
    setDefinition(response.data);
  }

  function handlePhotoResponse(response) {
    setPhotos(response.data.photos);
  }

  return (
    <div className="Dictionary">
      <div className="search">
        <form onSubmit={search}>
          <span>Enter word</span>
          <input type="search" onChange={handleWordChange} />
        </form>
      </div>
      <Results JSON={definition} />
      <Photos photoArray={photos} />
    </div>
  );
}
