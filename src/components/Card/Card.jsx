import React from "react";

import "./Card.styles.css";

const Card = ({ monster }) => {
  return (
    <div className="card-container">
      <img
        className="mb"
        src={`https://robohash.org/${monster.id}?set=set5`}
        alt="monsters"
      />
      <h2 className="mb">{monster.name}</h2>
      <h3 className="mb">{monster.website}</h3>
      <p>{monster.email}</p>
    </div>
  );
};

export default Card;
