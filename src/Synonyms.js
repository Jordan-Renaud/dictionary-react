import "./Synonyms.css";
import React from "react";

export default function Synonyms({ synonymArray }) {
  if (synonymArray) {
    return (
      <ul>
        {synonymArray.map((synonym, index) => (
          <li key={index}>{synonym}</li>
        ))}
      </ul>
    );
  } else {
    return null;
  }
}
