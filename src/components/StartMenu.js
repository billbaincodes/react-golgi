import React from "react";
import recycle from "../assets/recylcebin.gif";

const StartMenu = ({ aboutWindow }) => {
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
        <li class="programs"> Tech</li>
        <li class="favorites">Skills</li>
        <li class="documents">Resume</li>
        <a href="https://github.com/billbaincodes" target="blank">
          <li class="settings"> GitHub </li>
        </a>
        <a href="https://www.linkedin.com/in/billbaincodes/" target="blank">
          <li class="find"> LinkedIn </li>
        </a>
        <li onClick={() => aboutWindow(true)} class="help">
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
