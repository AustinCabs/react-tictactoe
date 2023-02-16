import React from "react";
import Tile from "./Tile";

function Board(props) {
  const handleBoardClick = (idx,idx2) => (v) => {
    if (props.onClickHandler) {
      props.onClickHandler(idx,idx2, v);
      // console.log('idx',idx);
      // console.log('v',v);
    }
  };

  function renderTile() {
    // return props.board.map((board,idx) => {
    //   return (
    //     <Tile
    //       key={idx}
    //       dimension={props.dimension}
    //       hasWinner={props.hasWinner}
    //       turn={props.turn}
    //       handleClick={handleBoardClick(idx)}
    //     />
    //   );
    // console.log(`Board # `,idx);
    // });
    const tile = [];
    const arr = props.testboard;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        tile.push([i, j]);
      }
    }
    return tile.map((board, idx) => {
      return (
        <Tile
          key={idx}
          dimension={props.dimension}
          hasWinner={props.hasWinner}
          turn={props.turn}
          handleClick={handleBoardClick(board[0],board[1])}
        />
      );
    });
  }

  return <div className="game-board">{renderTile()}</div>;
}

export default Board;
