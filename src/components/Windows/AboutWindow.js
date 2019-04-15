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
            Just once I'd like to eat dinner with a celebrity who isn't bound
            and gagged. Belligerent and numerous. Look, everyone wants to be
            like Germany, but do we really have the pure strength of 'will'?
            Would you censor the Venus de Venus just because you can see her
            spewers? No! Don't jump! Bender, we're trying our best. Son, as your
          </p>
          <p>
            Just once I'd like to eat dinner with a celebrity who isn't bound
            and gagged. Belligerent and numerous. Look, everyone wants to be
            like Germany, but do we really have the pure strength of 'will'?
            Would you censor the Venus de Venus just because you can see her
            spewers? No! Don't jump! Bender, we're trying our best. Son, as your
            lawyer, I declare y'all are in a 12-piece bucket o' trouble. But I
            done struck you a deal: Five hours of community service cleanin' up
            that ol' mess you caused.
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
