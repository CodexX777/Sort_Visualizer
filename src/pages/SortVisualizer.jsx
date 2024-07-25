import React, { useState } from "react";
import { DropDown } from "../components/DropDown";

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

export const SortVisualizer = () => {
  const [technique, setTechnique] = useState("Bubble Sort");
  console.log(technique);
  return (
    <div className="h-24 bg-red-500 flex flex-row items-center px-16">
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
      
    </div>
  );
};
