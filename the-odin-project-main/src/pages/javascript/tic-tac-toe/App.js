import o from "assets/tic-tac-toe-art/o.png";
import x from "assets/tic-tac-toe-art/x.png";
import tie from "assets/tic-tac-toe-art/xo.png";
import React, { useEffect, useState } from "react";

export default function App() {
  const [plays, setPlays] = useState(new Array(9).fill(null));
  const [turn, setTurn] = useState("x");
  const [winner, setWinner] = useState("");
  const [canPlay, setCanPlay] = useState(true);

  useEffect(() => {
    checkWinner();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plays]);

  useEffect(() => {
    if (winner !== "") {
      setCanPlay(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winner]);

  function checkWinner() {
    let winner = "";
    //x
    if (plays[0] === turn && plays[4] === turn && plays[8] === turn) {
      winner = turn;
    }
    //x inverse
    if (plays[2] === turn && plays[4] === turn && plays[6] === turn) {
      winner = turn;
    }
    //row

    for (let i = 0; i < 3; i++) {
      let j = i * 3;
      if (plays[j] === turn && plays[j + 1] === turn && plays[j + 2] === turn) {
        winner = turn;
      }
    }

    //col
    for (let i = 0; i < 3; i++) {
      if (plays[i] === turn && plays[i + 3] === turn && plays[i + 6] === turn) {
        winner = turn;
      }
    }
    let hasMovements = plays.some((play) => {
      if (play === null) {
        return true;
      }
      return false;
    });
    if (!hasMovements) {
      winner = "tie";
    }
    setWinner(winner);
    if (winner === "") {
      setTurn(turn === "x" ? "o" : "x");
    }
  }

  function doPlay(index) {
    if (!canPlay) return;
    const newPlays = [...plays];
    if (newPlays[index] === null) {
      newPlays[index] = turn;
      setPlays(newPlays);
    }
  }

  return (
    <div className="w-screen bg-gray-50">
      <h1 className="text-6xl text-center tracking-tight mb-3">Tic Tac Toe</h1>
      <div
        className={`fixed w-48 text-center left-1/2 transition-all duration-500 ${
          winner === "" ? "-top-1/2" : "top-1/4"
        } mx-auto flex flex-col transform -translate-x-1/2 p-3 border-4 border-blue-600 bg-blue-300 rounded-xl`}
      >
        <h2 className="text-xl text-red-600">
          {winner === ""
            ? " "
            : winner === "tie"
            ? "It's a tie"
            : `The winner is ${winner}`}
        </h2>
        <div className="h-28 w-28 object-fill justify-center m-auto">
          {selectImage(winner)}
        </div>
        <button
          className="rounded-lg bg-red-500 text-gray-300 hover:bg-red-400 py-1 px-2"
          onClick={() => {
            newGame(true);
          }}
        >
          New Game
        </button>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <div className="grid grid-cols-3 grid-row-3 gap-1 container bg-gray-800 m-auto justify-center content-center max-w-max rounded-md border-4 border-black">
            {plays.map((play, i) => {
              return (
                <div
                  key={i}
                  className={`w-24 h-24 object-fill bg-gray-200 te`}
                  draggable={false}
                  onClick={() => {
                    doPlay(i);
                  }}
                >
                  {selectImage(play)}
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/3 mx-6">
          <div className=" mx-auto mt-4 border-2 border-gray-800 max-w-max p-4 mb-3 rounded-xl">
            {canPlay ? (
              <div className="flex mx-auto">
                <div className="my-auto">
                  <h2 className="text-xl font-medium tracking-wide ">Turn:</h2>
                </div>
                <div className="w-24 h-24 object-fill">{selectImage(turn)}</div>
              </div>
            ) : (
              <h2 className="h-24 w-36">Press play button</h2>
            )}
          </div>
          <div className="flex px-3 mx-auto justify-center gap-2">
            <button
              className="rounded-lg bg-blue-500 text-gray-300 hover:bg-blue-400 py-1 px-2"
              onClick={() => {
                setCanPlay(true);
              }}
              disabled={winner !== "" ? true : false}
            >
              Start
            </button>
            <button
              className="rounded-lg bg-red-500 text-gray-300 hover:bg-red-400 py-1 px-2"
              onClick={() => {
                newGame(false);
              }}
            >
              Restart
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  function newGame(continuePlaying = false) {
    const emptyPlays = [...plays];
    emptyPlays.fill(null);
    setPlays(emptyPlays);
    setWinner("");
    setCanPlay(continuePlaying);
  }

  function selectImage(image) {
    const src =
      image === "x" ? x : image === "o" ? o : image === "tie" ? tie : "";
    return <img className="m-auto" src={src} alt="" draggable="false" />;
  }
}
