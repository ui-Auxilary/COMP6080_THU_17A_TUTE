import { useEffect, useState } from "react";
import Grid from "../Grid/Grid";
import styles from "./styles.module.css";

const GRID_SIZE = 10;

export default function Game() {
  const [player, setPlayer] = useState({ x: 5, y: 5 }); // 6
  const [enemy, setEnemy] = useState({ x: 0, y: 0 });   // 7
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameOver) return;

      setPlayer((prev) => {
        switch (e.key) {
          case "ArrowUp": return { ...prev, y: prev.y - 1 };
          case "ArrowDown": return { ...prev, y: prev.y + 1 };
          case "ArrowLeft": return { ...prev, x: prev.x - 1 };
          case "ArrowRight": return { ...prev, x: prev.x + 1 };
          default: return prev;
        }
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameOver]);


  // 7 movement
  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setEnemy((prev) => {
        let newX = prev.x;
        let newY = prev.y;

        if (player.x > prev.x) newX++;
        if (player.x < prev.x) newX--;

        if (player.y > prev.y) newY++;
        if (player.y < prev.y) newY--;

        return { x: newX, y: newY };
      });
    }, 500);

    return () => clearInterval(interval);
  }, [player, gameOver]);

  // Collision
  useEffect(() => {
    if (player.x === enemy.x && player.y === enemy.y) {
      setGameOver(true);
    }
  }, [player, enemy]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Run away from 7 !!!</h2>

      {gameOver && <p className={styles.gameOver}>Game Over</p>}

      <Grid player={player} enemy={enemy} size={GRID_SIZE} />
    </div>
  );
}