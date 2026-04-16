import styles from "./styles.module.css";

export default function Grid({ player, enemy, size }) {
  return (
    <div
      className={styles.grid}
      style={{ gridTemplateColumns: `repeat(${size}, 40px)` }}
    >
      {Array.from({ length: size * size }).map((_, i) => {
        const x = i % size;
        const y = Math.floor(i / size);

        let content = "";
        let className = styles.cell;

        if (player.x === x && player.y === y) {
          content = "6";
          className += ` ${styles.player}`;
        }

        if (enemy.x === x && enemy.y === y) {
          content = "7";
          className += ` ${styles.enemy}`;
        }

        return (
          <div key={i} className={className}>
            {content}
          </div>
        );
      })}
    </div>
  );
}