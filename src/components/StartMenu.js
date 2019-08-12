import React from "react";
import startupSound from "../assets/startupSound.wav"

const StartMenu = ({ menuToggle, aboutWindow, techWindow, projectWindow }) => {

  let startUp = () => {
    var audio = new Audio(startupSound);
    audio.play();
    menuToggle()
  }

  return (
    <div className="start-menu">
      <div className="title-container">
        <div className="title">
          BillBainCodes<span>98</span>
        </div>
      </div>
      <ul>
        <li className="windows-update menu-button" onClick={startUp}>Full Stack Developer</li>
        <hr />
        <li onClick={() => techWindow(true)} className="programs menu-button">
          Tech
        </li>
        <li onClick={() => projectWindow(true)} className="favorites menu-button">Projects</li>
        <a href="https://drive.google.com/file/d/1bsZHZUJWEelWoUfttQz2EosPuKeLXN2r/view?usp=sharing" target="blank">
        <li className="documents menu-button">Resume</li>
        </a>
        <a href="https://github.com/billbaincodes" target="blank">
          <li className="settings menu-button"> GitHub </li>
        </a>
        <a href="https://www.linkedin.com/in/billbaincodes/" target="blank">
          <li className="find menu-button"> LinkedIn </li>
        </a>
        <li onClick={() => aboutWindow(true)} className="help menu-button">
          About
        </li>
        <hr />
        <a href="mailto:billbaincodes@gmail.com">
        <li className="log-off menu-button  ">Email Me</li>
        </a>
        <li className="shut-down menu-button-disabled">Shut Down...</li>
      </ul>
    </div>
  );
};

export default StartMenu;
