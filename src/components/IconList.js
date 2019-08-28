import React from "react";
import recycle from "../assets/recylcebin.gif";
import folder from "../assets/documents.png";
import myPC from "../assets/mycomputer.png";
import aim from "../assets/aim-icon.png"
import myst from "../assets/mystIcon.png"
import winamp from "../assets/winamp-icon.png"
import walkTheLine from "../assets/johnny-cash.m4a"

const IconList = ({ projectWindow }) => {

  let winampPlayer = () => {
    var audio = new Audio(walkTheLine);
    audio.play();
  }

  let aimPlayer = () => {
    var audio = new Audio();
    audio.play();
  }

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
        <img onClick={aimPlayer} src={aim} alt="aim" />
        <p>AIM</p>
      </div>
      <div className="icon">
        <img src={myst} alt="myst" />
        <p>Myst</p>
      </div>
      <div onClick={winampPlayer} className="icon">
        <img src={winamp} alt="winamp" />
        <p>Winamp</p>
      </div>
    </div>
  );
};

export default IconList;
