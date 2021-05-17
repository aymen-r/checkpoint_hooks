import React from "react";

export const SearchTitle = ({ handlesearch }) => {
  return (
    <div>
      <input
        placeholder=" search "
        type="text"
        onChange={(e) => handlesearch(e.target.value)}
      />
    </div>
  );
};

export const SearchRating = ({ rating, setRating }) => {
  const stars = (a) => {
    let arrayOfStars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= a) {
        arrayOfStars.push(
          <span
            key={i}
            style={{ color: "#ffc107", fontSize: "35px" }}
            onClick={() => setRating(i)}
          >
            {" "}
            ★{" "}
          </span>
        );
      } else {
        arrayOfStars.push(
          <span
            key={i}
            style={{ color: "white", fontSize: "35px" }}
            onClick={() => setRating(i)}
          >
            {" "}
            ★{" "}
          </span>
        );
      }
    }
    return arrayOfStars;
  };
  return <div>{stars(rating)}</div>;
};
