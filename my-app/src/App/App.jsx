import { TicTacToeProvider } from "../App/context/TicTacToeContext";
import Board from "./components/Board";
import styles from "../App/styles/tictac.module.scss";
const App = () => {
  return (
    <TicTacToeProvider>
      <h1 className={styles.title}>Tic Tac Toe</h1>
      <div className={styles.game}>
        <Board />
      </div>
    </TicTacToeProvider>
  );
};

export default App;