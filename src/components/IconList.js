import React from "react";
import recycle from "../assets/recylcebin.gif";
import folder from "../assets/documents.png";
import myPC from "../assets/mycomputer.png";

const IconList = ({aboutWindow}) => {

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
      <div className="icon">
        <img src={folder} alt="folder" />
        <p>mp3s</p>
      </div>
    </div>
  );
};

export default IconList;
