import React from "react";

const AboutWindow = ({ aboutWindow }) => {
  return (
    <div class="window-container">
      <div class="window">
        <div class="window-title">
          <div>About Bill Bain</div>
          <div class="close-button" onClick={() => aboutWindow(false)}>
            X
          </div>
        </div>
        <div class="window-body">
          <img src="https://i.imgur.com/K8WF4FM.jpg" alt="about the author" />
          <h3 className="window-headline">About Me</h3>
          <p>
            &nbsp;&nbsp;&nbsp; I've always had a passion for creativity and
            problem solving. Whether it's composing music, creating digital
            designs or creative writing, I've always put my best work forward
            when a logical challenge relies on originality and innovation. My
            search for a career that would effectively combine both these
            aspects is what led me to web and software development.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp; I teach web development part time at University of Denver's
            Bootcamp and am actively pursuing a full time position. If
            you're interested, please use the links in the Start Menu to reach out!
          </p>
          <div className="window-buttons">
            <div onClick={() => aboutWindow(false)}>OK</div>
            <div onClick={() => aboutWindow(false)}>Cancel</div>
            <div>Help</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWindow;
