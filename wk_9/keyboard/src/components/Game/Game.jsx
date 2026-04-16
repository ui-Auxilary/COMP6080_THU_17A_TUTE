import { useEffect, useState } from "react";
import Grid from "../Grid/Grid";
import styles from "./styles.module.css";

const GRID_SIZE = 10;

export default function Game() {
  const [player, setPlayer] = useState({ x: 5, y: 5 }); // 6
  const [enemy, setEnemy] = useState({ x: 0, y: 0 });   // 7
  const [gameOver, setGameOver] = useState(false);

  // Player
  useEffect(() => {

  }, []);


  // 7 movement
  useEffect(() => {

  }, [player, gameOver]);

  // Collision
  useEffect(() => {

  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Run away from 7 !!!</h2>

      {gameOver && <p className={styles.gameOver}>Game Over</p>}

      <Grid player={player} enemy={enemy} size={GRID_SIZE} />
    </div>
  );
}