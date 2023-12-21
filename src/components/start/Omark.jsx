import React from "react";

function Omark({ mark, setMark }) {
  const handleClick = () => {
    setMark(true);
  };
  return (
    <svg
      className="omark"
      onClick={handleClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 198 54"
      fill="none"
    >
      <rect
        width="198"
        height="54"
        rx="10"
        fill="#A8BFC9"
        fillOpacity={!mark ? "0.05" : "1"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M114.741 26.8706C114.741 18.1055 107.636 11 98.8706 11C90.1055 11 83 18.1055 83 26.8706C83 35.6357 90.1055 42.7412 98.8706 42.7412C107.636 42.7412 114.741 35.6357 114.741 26.8706ZM92.4048 26.8706C92.4048 23.2996 95.2996 20.4048 98.8706 20.4048C102.442 20.4048 105.336 23.2996 105.336 26.8706C105.336 30.4416 102.442 33.3364 98.8706 33.3364C95.2996 33.3364 92.4048 30.4416 92.4048 26.8706Z"
        fill={mark ? "#1A2A33" : "#A8BFC9"}
      />
    </svg>
  );
}

export default Omark;
