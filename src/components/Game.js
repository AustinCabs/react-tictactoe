import React from "react";

import Board from "./Board";

class Game extends React.Component {
  state = {
    turn: "o",
    // board: Array(9).fill(""),
    board: [],
    testB: [],
    dimension: 0,
    winningPatterns: {
      // rowValues: [],
      // columnValues: [],
      // diagonalLeft: [],
      // diagonalRight: []
    },
    row: [],
    column: [],
    diagonalLeft: [],
    diagonalRight: [],
    positionX: "",
    positionY: "",
    winner: null, // x or o
  };

  //  4x4 , 5x5, 3x3

  //dynamic check (r,c)
  // row  r==r
  // coulmn  c==c
  // diagonal start left r===c
  // diagonal start right  r+c = size - 1

  initializeBoard(boardSize) {
    let board = [];
    for (let row = 0; row < boardSize; row++) {
      let boardRow = [];
      for (let column = 0; column < boardSize; column++) {
        boardRow.push("-");
      }
      board.push(boardRow);
    }
    this.setState({ testB: board });
    // console.table(`init board`,board);
  }

  componentDidMount() {
    const dimension = window.prompt("Enter Tictactoe Board size");
    // console.log(dimension);
    this.initializeBoard(dimension);
    this.setState({ board: Array(dimension * dimension).fill(""), dimension });
    //  this.setState({board:Array(9).fill("") })
  }

  componentDidUpdate(prevProps, prevState) {
    const { winner,turn } = this.state;

    //  if (winner) {
    //       if (window.confirm(`Congtulations ${turn} want to paly again?`)) {
    //         window.location.reload()
    //       }
    //  }

  }

  checkIfWinning(posX, posY) {

    const { testB, dimension, rowValues } = this.state;
    // console.table(testB);
    // //check if row
    const container = {
      row: [],
      column: [],
      diagonalLeft: [],
      diagonalRight: [],
    };
    for (let i = 0; i < dimension; i++) {
      console.log("rows checkIfWinning ", testB[posX][i]);
      container.row.push(testB[posX][i]);
      container.column.push(testB[i][posY]);
      container.diagonalLeft.push(testB[i][i]);
      container.diagonalRight.push(testB[i][dimension - i - 1]);
    }
    const { row, column, diagonalLeft, diagonalRight } = container;
    this.setState({ row, column, diagonalLeft, diagonalRight });

    const  checkRowIsX = row.every((val) => val === 'x')
    const  checkRowIsO = row.every((val) => val === 'o')
    console.log('row',checkRowIsX,checkRowIsO);
    const  checkCoulmnIsX = column.every((val) => val === 'x')
    const  checkCoulmnIsO = column.every((val) => val === 'o')
    console.log('coulmn',checkCoulmnIsX,checkCoulmnIsO);
    const  checkDiagonalLeftIsX = diagonalLeft.every((val) => val === 'x')
    const  checkDiagonalLeftIsO = diagonalLeft.every((val) => val === 'o')
    console.log('DiagonalLeft',checkDiagonalLeftIsX,checkDiagonalLeftIsO);
    const  checkDiagonalRightIsX = diagonalRight.every((val) => val === 'x')
    const  checkDiagonalRightIsO = diagonalRight.every((val) => val === 'o')
    console.log('DiagonalRight',checkDiagonalRightIsX,checkDiagonalRightIsO);
    
    const isWinning = (checkRowIsX||checkRowIsO) || (checkCoulmnIsX||checkRowIsO) ||
    (checkDiagonalLeftIsX||checkDiagonalLeftIsO) || (checkDiagonalRightIsX||checkDiagonalRightIsO)
 
    this.setState({ winner: isWinning });

    console.log('Winner !!', isWinning);
    
    console.log("container", container);
    console.log("posX", posX, "posY", posY);
  }

  handleClick = (idx, idx2, turn) => {
    this.setState(
      (prevState) => {
        const newBoard = [...prevState.testB];
        newBoard[idx][idx2] = turn; //this sets testB

        console.log("turn", turn);
        console.log("idx", idx, idx2);
        // console.log('i);

        return {
          turn,
          board: newBoard, //  sets board
          positionX: idx,
          positionY: idx2,
        };
      },
      () => {
        this.checkIfWinning(idx, idx2);
        // if (this.checkIfWinning(turn)) {
        //   this.setState({
        //     winner: turn,
        //   });
        // }
      }
    );
  };

  render() {
    const { turn, winner } = this.state;
    return (
      <div className="game">
        {winner && <h3>Winner is {turn}</h3>}
        <Board
          board={this.state.board}
          testboard={this.state.testB}
          dimension={this.state.dimension}
          hasWinner={Boolean(winner)}
          turn={turn}
          onClickHandler={this.handleClick}
        />
      </div>
    );
  }
}

export default Game;
