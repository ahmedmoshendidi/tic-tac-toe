import React from "react";

function Button({ content, className, onClick, name }) {
  return (
    <button className={`${className}`} onClick={onClick} name={name}>
      {content}
    </button>
  );
}

export default Button;
