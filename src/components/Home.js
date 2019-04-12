import React from "react";
import StartMenu from "../components/StartMenu";
import recycle from "../assets/recylcebin.gif";
import folder from "../assets/documents.png";
import myPC from "../assets/mycomputer.png";

const Home = () => {
  let state = {
    menuToggle: false
  };

  return (
    <div>
      <div className="icon-list">
        <div className="icon">
          <img src={myPC} alt="recycling bin" />
          <p>My Computer</p>
        </div>
        <div className="icon">
          <img src={recycle} alt="recycling bin" />
          <p>Recycle Bin</p>
        </div>
        <div className="icon">
          <img src={folder} alt="recycling bin" />
          <p>Projects</p>
        </div>
      </div>

      {state.menuToggle && <StartMenu />}
    </div>
  );
};

export default Home;
