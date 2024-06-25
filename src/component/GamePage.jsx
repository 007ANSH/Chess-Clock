import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



function GamePage() {
  let game=useParams();
 
  let arr=game.time.split("+");
  // let arr=game.split("+");
  // console.log(arr)
  // let arr=[1,0]
  let time = parseInt(arr[0]);
  let increment = parseInt(arr[1]);
  const [count, setCount] = useState(0);
  const [timeOne, settimeOne] = useState(time * 60);
  const [timeTwo, settimeTwo] = useState(time * 60);
  const [gameStarted, setgameStarted] = useState(false);
  const [turn, setTurn] = useState(true);
  const [win, setwin] = useState(1);
  const [flag, setflag] = useState(true);
  const decreaseOne = () => {
    settimeOne(timeOne - 1);
    if (timeOne == 0) {
      // setTurn(false);
    }
  };
  const decreaseTwo = () => {
    settimeTwo(timeTwo - 1);
    if (timeTwo == 0) {
      // setTurn(true);
    }
  };

  useEffect(() => {
    if(timeOne==0){
      console.log("Player 2 wins");
      setwin(2);
      setflag(false);
      setgameStarted(false);
    }
    else if(timeTwo==0){
      console.log("Player 1 wins");
      setwin(1) ; 
      setflag(false);
      setgameStarted(false);
    }
    if (gameStarted) {
      const interval = setInterval(() => {
        if (turn) {
          decreaseOne();
        } else {
          decreaseTwo();
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  });
  let changeOne = () => {
    if(gameStarted){
      if(turn)
      settimeOne(timeOne + increment);  
      setTurn(false);
    }

  };
  let changeTwo = () => { 
    if(gameStarted){
      if(!turn)
        settimeTwo(timeTwo + increment);   
        setTurn(true);
    }

  }

  let gameStart = () => {
    setgameStarted(true);
  };

  let convert = (n) => {
    let min = Math.floor(n / 60);
    let sec = n % 60;
    if(sec<10){
      sec=`0${sec}`;
    }

    if(min<10){
      min=`0${min}`;
    }

    return `${min}:${sec}`;
  };

  let resetGame = () => { 
    setflag(true);
    setgameStarted(false);
    settimeOne(time * 60);
    settimeTwo(time * 60);
    
    setTurn(true);
  }

  return (
    <>
      <div className="bg-zinc-700 w-[100%] h-[100vh]">
        <div onClick={changeOne} className="h-[45%]  text-black flex flex-col items-center rotate-180 justify-center text-4xl bg-white">
          <h3 className="my-10">Player 1</h3>
          <div className="text-7xl" >
            {convert(timeOne)}
          </div>
        </div>
        <div className="h-[10%] text-white text-2xl flex item-center justify-evenly">
          <button className="border-2 rounded-md px-4 my-2" onClick={gameStart}>
            {" "}
            start{" "}
          </button>
          <div className="  flex justify-center items-center h-[100%] text-[#04DBAD]" style={{display:(flag)?"none":"flex"}}> <div>PLAYER {win} WON</div> </div>
          <button className="border-2 rounded-md px-4 my-2" onClick={resetGame}> reset </button>
        </div>
        <div onClick={changeTwo} className="h-[45%]  text-white flex flex-col items-center justify-center text-4xl bg-slate-900">
          <h3 className="my-10">Player 2</h3>
          <div className="text-7xl">{convert(timeTwo)}</div>{" "}
        </div>
      </div>
    </>
  );
}

export default GamePage;
