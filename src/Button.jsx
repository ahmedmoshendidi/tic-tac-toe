import React from "react";

function Button({ content, className, onClick }) {
  return (
    <button className={`${className}`} onClick={onClick}>
      {content}
    </button>
  );
}

export default Button;
