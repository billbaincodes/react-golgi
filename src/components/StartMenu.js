import React from "react";

const StartMenu = ({ aboutWindow, techWindow }) => {
  return (
    <div class="start-menu">
      <div class="title-container">
        <div class="title">
          BillBainCodes<span>98</span>
        </div>
      </div>
      <ul>
        <li class="windows-update">Full Stack Developer</li>
        <hr />
        <li onClick={() => techWindow(true)} class="programs menu-button">
          Tech
        </li>
        <li class="favorites menu-button">Skills</li>
        <li class="documents menu-button">Resume</li>
        <a href="https://github.com/billbaincodes" target="blank">
          <li class="settings menu-button"> GitHub </li>
        </a>
        <a href="https://www.linkedin.com/in/billbaincodes/" target="blank">
          <li class="find menu-button"> LinkedIn </li>
        </a>
        <li onClick={() => aboutWindow(true)} class="help menu-button">
          About
        </li>
        <hr />
        <li class="log-off ok">Log Off</li>
        <li class="shut-down ok">Shut Down...</li>
      </ul>
    </div>
  );
};

export default StartMenu;
