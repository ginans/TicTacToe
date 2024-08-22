import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const TicTacToeContext = createContext();

const TicTacToeProvider = ({ children }) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const calculateWinner = (squares) => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    };

    const newWinner = calculateWinner(squares);
    if (newWinner) {
      setWinner(newWinner);
    } else {
      setWinner(null);
    }
  }, [squares]);

  const handleClick = (i) => {
    if (squares[i] || winner) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  return (
    <TicTacToeContext.Provider value={{ squares, xIsNext, winner, handleClick, resetGame }}>
      {children}
    </TicTacToeContext.Provider>
  );
};

TicTacToeProvider.propTypes= {
  children: PropTypes.node.isRequired,
}

export { TicTacToeProvider, TicTacToeContext };