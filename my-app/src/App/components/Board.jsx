import { useContext } from "react";
import { TicTacToeContext } from "../context/TicTacToeContext";
import Square from "./Square";
import styles from "../styles/tictac.module.scss";

const Board = () => {
  const { xIsNext, winner, resetGame } = useContext(TicTacToeContext);

  let status;
  if (winner) {
    status = "¡ Ganaste " + winner + " !";
  } else {
    status = "Siguiente jugador: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className={styles.status}>{status}</div>
      <div className={styles.boardRow}>
        <Square index={0} />
        <Square index={1} />
        <Square index={2} />
      </div>
      <div className={styles.boardRow}>
        <Square index={3} />
        <Square index={4} />
        <Square index={5} />
      </div>
      <div className={styles.boardRow}>
        <Square index={6} />
        <Square index={7} />
        <Square index={8} />
      </div>
      <div className={styles.buttonBox}>
        <button className={styles.resetButton} onClick={resetGame}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Board;
