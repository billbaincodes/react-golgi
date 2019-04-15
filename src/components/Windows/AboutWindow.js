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
            &nbsp;&nbsp;&nbsp; I've always had a passion for creativity and problem solving.
            Whether it's composing music, creating digital designs or creative
            writing, I've always put my best work forward when a logical
            challenge relies on originality and innovation. In the past I've
            taken on positions in audio and video production, graphic design and
            email marketing. While some of these roles pushed my creative limits
            and others tested my problem solving skills, none of them were able
            to adequately stimulate both.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;My search for a career that would effectively combine both these
            aspects is what led me to web and software development. The strict
            logic and syntax of coding requires objective, critical thinking.
            However, I've come to see that coding is an extremely creative
            undertaking as well. You need to be able to readily adapt,
            experiment and think about problems in non-traditional or innovative
            ways .
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
