import { useEffect, useState } from "react";
import Game from "./components/Game/Game";

export default function App() {
 
  return (
    <div style={{ padding: 20 }}>
      <h1>6 vs 7 Game</h1>
      <Game />
    </div>
  );
}