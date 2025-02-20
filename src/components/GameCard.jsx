import React, { useEffect, useState } from "react";

const GameCard = ({ game }) => {
  return (
    <div
      className="game-card"
      onClick={() => window.open(`https://rawg.io/games/${game.slug}`, "_blank")}
    >
      <img src={game.background_image} alt={game.name} className="game-image" />
      <div className="game-details">
        <h3 className="game-name">{game.name}</h3>
      </div>
    </div>
  );
};

export default GameCard;