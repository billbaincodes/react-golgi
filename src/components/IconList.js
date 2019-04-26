import React from "react";
import recycle from "../assets/recylcebin.gif";
import folder from "../assets/documents.png";
import myPC from "../assets/mycomputer.png";

const IconList = ({ projectWindow }) => {

  let foo = () => {
    console.log('f00')
  }

  return (
    <div className="icon-list">
      <div onClick={foo} className="icon">
        <img src={myPC} alt="my computer" />
        <p>Bill's PC</p>
      </div>
      <div  className="icon">
        <img src={recycle} alt="recycling bin" />
        <p>Recycle Bin</p>
      </div>
      <div onClick={() => projectWindow(true)} className="icon">
        <img src={folder} alt="folder" />
        <p>flô</p>
      </div>
      <div onClick={() => projectWindow(true)} className="icon">
        <img src={folder} alt="folder" />
        <p>The Joy of Hiking</p>
      </div>
      <div onClick={() => projectWindow(true)} className="icon">
        <img src={folder} alt="folder" />
        <p>Twin Peaks Gazette</p>
      </div>
      <div onClick={() => projectWindow(true)} className="icon">
        <img src={folder} alt="folder" />
        <p>Mind Reader</p>
      </div>
    </div>
  );
};

export default IconList;
