import "./Results.css";
import React from "react";

export default function Results({ JSON }) {
  if (JSON) {
    return (
      <div>
        <h1>{JSON[0].word}</h1>
        <p>{JSON[0].phonetics[0].text}</p>
        {JSON[0].meanings.map((definition, index) => {
          return (
            <div key={index}>
              <h2>{definition.partOfSpeech}</h2>
              <p>{definition.definitions[0].definition}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}