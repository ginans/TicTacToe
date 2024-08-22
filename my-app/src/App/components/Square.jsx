import { useContext } from "react";
import { TicTacToeContext } from "../context/TicTacToeContext";
import styles from "../styles/tictac.module.scss";
import PropTypes from "prop-types";

const Square = ({ index }) => {
  const { squares, handleClick } = useContext(TicTacToeContext);

  return (
    <button className={styles.square} onClick={() => handleClick(index)}>
      {squares[index]}
    </button>
  );
};

Square.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Square;