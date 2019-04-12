import React from "react";

const StartMenu = () => {
  return (
    <div class="start-menu">
      <div class="title-container">
        <div class="title">
          Windows<span>98</span>
        </div>
      </div>
      <ul>
        <li class="windows-update">Windows Update</li>
        <hr />
        <li class="programs">Programs</li>
        <li class="favorites">Favorites</li>
        <li class="documents">Documents</li>
        <li class="settings">Settings</li>
        <li class="find">Find</li>
        <li class="help">Help</li>
        <li class="run">Run...</li>
        <hr />
        <li class="log-off ok">Log Off</li>
        <li class="shut-down ok">Shut Down...</li>
      </ul>
    </div>
  );
};

export default StartMenu;
