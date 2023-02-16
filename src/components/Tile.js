import React from "react";

function Tile(props) {
  const [clicked, setClicked] = React.useState(false);
  const [value, setValue] = React.useState("");

  const handleClick = () => {
    if (props.hasWinner) return;
    if (clicked) return;

    setClicked(true);
    // console.log('props.turn',props.turn);
    const turnValue = props.turn === "x" ? "o" : "x";
    setValue(turnValue);

    if (props.handleClick) {
      props.handleClick(turnValue);
    }
  };

  return (
    <button className="tile" style={{width:`calc(1 / ${props.dimension} * 100%)`,height:`calc(1 / ${props.dimension} * 100%)`}} onClick={handleClick}>
      {value}
    </button>
  );
}

export default Tile;
