import "./Synonyms.css";
import React from "react";

export default function Synonyms({ synonymArray }) {
  if (synonymArray) {
    return (
      <ul className="Synonyms">
        {synonymArray.map((synonym, index) => (
          <li className="list-item" key={index}>
            {synonym}
          </li>
        ))}
      </ul>
    );
  } else {
    return null;
  }
}
