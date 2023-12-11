import React from "react";

function Xmark({ mark, setMark }) {
  const handleClick = () => {
    setMark(false);
  };
  return (
    <svg
      onClick={handleClick}
      xmlns="http://www.w3.org/2000/svg"
      width="198"
      height="54"
      viewBox="0 0 198 54"
      fill="none"
    >
      <rect
        width="198"
        height="54"
        rx="10"
        fill="#A8BFC9"
        fillOpacity={mark ? "0.05" : "1"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M114.557 16.2897L109.71 11.4431C109.12 10.8523 108.162 10.8523 107.571 11.4431L99 20.014L90.429 11.4431C89.8383 10.8523 88.8805 10.8523 88.2897 11.4431L83.4431 16.2897C82.8523 16.8805 82.8523 17.8383 83.4431 18.429L92.014 27L83.4431 35.571C82.8523 36.1617 82.8523 37.1195 83.4431 37.7103L88.2897 42.5569C88.8805 43.1477 89.8383 43.1477 90.429 42.5569L99 33.986L107.571 42.5569C108.162 43.1477 109.12 43.1477 109.71 42.5569L114.557 37.7103C115.148 37.1195 115.148 36.1617 114.557 35.571L105.986 27L114.557 18.429C115.148 17.8383 115.148 16.8805 114.557 16.2897Z"
        fill={mark ? "#A8BFC9" : "#1A2A33"}
      />
    </svg>
  );
}

export default Xmark;