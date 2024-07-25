import React, { useEffect, useState } from "react";
import { DropDown } from "../components/DropDown";
import { Timer } from "../components/Timer";
import { Range } from "../components/Range";

let list = [
  "Bubble Sort",
  "Selection Sort",
  "Insertion Sort",
  "Merge Sort",
  "Quick Sort",
  "Heap Sort",
  "Radix Sort",
  "Counting Sort",
  "Bucket Sort",
];

const generateArray = (number) => {
  //random order of numbers 1- number
  let arr = [];
  for (let i = 1; i <= number; i++) {
    arr.push(i);
  }
  arr.sort(() => Math.random() - 0.5);
  console.log(arr);
  return arr;
};

export const SortVisualizer = () => {
  const [array, setArray] = useState([]);
  const [technique, setTechnique] = useState("Bubble Sort");
  const [timerState, setTimerState] = useState(false);

  const createArray = (number) => {
    setArray(generateArray(number));
  };

  console.log(technique);
  return (
    <div className="h-24 bg-red-500 flex flex-row justify-between px-16">
      <div className="w-[80%] flex flex-row items-center gap-x-14">
        <div className="w-[20%]">
          <h4 className="text-white font-thin">Algorithm</h4>
          <DropDown
            defaultValue={technique}
            handleChange={(value) => {
              // console.log(value);
              setTechnique(value);
            }}
            list={list}
          />
        </div>
        <div className="">
          <h4 className="text-white font-thin">Execution Time</h4>
          <Timer isActive={timerState} />
        </div>

        <div>
          <button
            className="bg-transparent text-white text-sm hover:underline underline-offset-2 transition-all ease-in-out duration-800"
            onClick={() => {
              setTimerState(false);
            }}
          >
            Reset
          </button>
        </div>
        <div>
          <Range createArray={createArray} timerState={timerState} />
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded-[1px] hover:bg-white hover:text-black transition-all ease-in-out duration-500"
          onClick={() => {
            setTimerState(!timerState);
          }}
        >
          {timerState ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
};
