import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { XFollowCard } from "./XFollowCard.jsx";

const users = [
  {
    userName: "yeinwillie",
    name: "Yein España",
    isFollowing: true,
  },
  {
    userName: "lourdesNay",
    name: "Lourdes Celis",
    isFollowing: false,
  },
  {
    userName: "matiasEspana",
    name: "Matias España",
    isFollowing: true,
  },
];

function App() {
  return (
    <section className="App">
      {/* componente ya hechos con el nombre */}
      {/* <XFollowCard  userName='yeinwillie' initiaIsfollowing={true}> Yein España </XFollowCard>
        <XFollowCard  userName='lourdesNay'> Lourdes Celis </XFollowCard>
        <XFollowCard  userName='matiasEspana'> Matias España </XFollowCard> */}

      {users.map(({ userName, name, isFollowing }) => (
        <XFollowCard
          key={userName} // se usa username porque es el de X y no se debe repetir / se usa el id de DB / no usar aleatorios
          userName={userName}
          initiaIsfollowing={isFollowing}
        >
          {name}
        </XFollowCard>
      ))}
    </section>
  );
}

export default App;
