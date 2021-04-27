import "./Photos.css";
import React from "react";

export default function Photos({ photoArray }) {
  if (photoArray) {
    console.log(photoArray);

    return (
      <section className="Photos">
        {photoArray.map((photo, index) => {
          return (
            <div className="filter-background">
              <img
                key={index}
                className="photo-filter"
                src={photo.src.landscape}
              />
            </div>
          );
        })}
      </section>
    );
  } else {
    return <div></div>;
  }
}
