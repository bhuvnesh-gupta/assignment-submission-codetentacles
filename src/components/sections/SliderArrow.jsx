// src/components/CustomArrow.jsx
import React from "react";

const SliderArrow = ({ className, onClick, direction }) => (
  <div
    className={`${className} absolute top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full cursor-pointer hover:bg-gray-700 z-10 ${
      direction === "right" ? "right-0" : "left-0"
    }`}
    onClick={onClick}>
    <svg
      className="w-6 h-6 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"></svg>
  </div>
);

export default SliderArrow;
