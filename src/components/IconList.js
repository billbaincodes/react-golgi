import React from "react";
import recycle from "../assets/recylcebin.gif";
import folder from "../assets/documents.png";
import myPC from "../assets/mycomputer.png";
import aim from "../assets/aim-icon.png"
import myst from "../assets/mystIcon.png"

const IconList = ({ projectWindow }) => {

  return (
    <div className="icon-list">
      <div className="icon">
        <img src={myPC} alt="my computer" />
        <p>Bill's PC</p>
      </div>
      <div className="icon">
        <img src={recycle} alt="recycling bin" />
        <p>Recycle Bin</p>
      </div>
      <div onClick={() => projectWindow(true)} className="icon">
        <img src={folder} alt="folder" />
        <p>flô</p>
      </div>
      <div className="icon">
        <img src={aim} alt="aim" />
        <p>AIM</p>
      </div>
      <a target="blank" href="https://www.youtube.com/watch?v=D30r0iRH73Q">
      <div className="icon">
        <img src={myst} alt="myst" />
        <p>Myst</p>
      </div>
      </a>
    </div>
  );
};

export default IconList;
