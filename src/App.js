import React, { useState } from "react";
import "./App.css";

import { Header } from "./components/Header";

function App() {
  const [timeIn, setTimeIn] = useState(null);
  const [timeOut, setTimeOut] = useState(null);
  const [timeDiff, setTimeDiff] = useState(null);

  const getTime = () => {
    const now = new Date();
    return now.getTime(); // Return the timestamp in milliseconds
  };

  const handleTimeIn = () => {
    setTimeIn(getTime());
  };

  const handleTimeOut = () => {
    setTimeOut(getTime());
  };
  const handleTimeDiff = () => {
    if (timeIn && timeOut) {
      const diffMs = timeOut - timeIn;
      setTimeDiff(formatTimeFromMs(diffMs));
      console.log(diffMs);
    }
  };
  const formatTimeFromMs = (ms) => {
    const hours = Math.floor(ms / 3600000); // 1 hour = 3600000 ms
    const minutes = Math.floor((ms % 3600000) / 60000); // 1 minute = 60000 ms
    const seconds = Math.floor((ms % 60000) / 1000); // 1 second = 1000 ms

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className=" h-screen bg-[#2F4F4F] overflow-auto">
      <div className="sm:text-center text-white ">
        <Header />
      </div>
      <div className="mx-auto h-auto w-auto flex-center bg-[#708090] relative p-[10px]">
        <div>
          <h1 className="sm:text-center text-black text-5xl my-4">
            Current Time: {new Date().toLocaleTimeString()}
          </h1>
        </div>
        <div className="sm:text-center my-4">
          <button
            className="bg-yellow-600 hover:bg-yellow-300 text-white text-2xl tracking-widest font-bold py-2 px-4 rounded-lg my-2 mx-4"
            onClick={handleTimeIn}
          >
            Time In
          </button>
          <div className="underline text-xl my-2 tracking-wider">
            {timeIn && <p>Time In: {new Date(timeIn).toLocaleString()}</p>}
          </div>
        </div>
        <div className="sm:text-center my-4">
          <button
            className="bg-red-600 hover:bg-red-300 text-white  text-2xl tracking-widest font-bold py-2 px-4 rounded-lg my-2 mx-4"
            onClick={handleTimeOut}
          >
            Time Out
          </button>
          <div className="underline text-xl my-2 tracking-wider">
            {timeOut && <p>Time Out: {new Date(timeOut).toLocaleString()}</p>}
          </div>
        </div>
        <div className="sm:text-center my-4">
          <button
            className="bg-green-600 hover:bg-green-300 text-white   text-2xl tracking-widest font-bold py-2 px-4 rounded-lg my-2 mx-4"
            onClick={handleTimeDiff}
          >
            Time Difference
          </button>
          <div className="underline text-xl my-2 text-green-500 tracking-wider">
            {timeDiff && (
              <p> <strong>Time Difference: </strong>{timeDiff}  </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
