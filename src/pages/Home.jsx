import React, { useEffect, useState } from "react";
import GameCard from '../components/GameCard';

function Home() {
    const [games, setGames] = useState([]);
  
    useEffect(() => {
      fetch("https://api.rawg.io/api/games?key=2543a163222740e2a24f59aabf7f20c0")
        .then((response) => response.json())
        .then((data) => setGames(data.results))
        .catch((error) => console.error("Error fetching games:", error));
    }, []);

    return (
    <div className="home">
      
      <br/>
      <br/>
      <br/>
      <br/>

      <div className="game-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
export default Home;
//key : 2543a163222740e2a24f59aabf7f20c0