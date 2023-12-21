import React from "react";

function Popup({ btnOne, btnTwo, heading, message }) {
  return (
    <div className="popupwidget">
      <div className="popupwidget__container">
        <div className="popup__header">
          <p className="text-sm-bold-silver-center-wide">{message}</p>
          <div className="popup__heading">{heading}</div>
        </div>
        <div className="popup__buttons">
          {btnOne}
          {btnTwo}
        </div>
      </div>
    </div>
  );
}

export default Popup;
