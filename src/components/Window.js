import React from "react";

const Window = () => {
  return (
    <div class="window-container">
      <div class="window">
        <div class="window-title">
          Shut Down Windows
          <div class="btn-close close">X</div>
        </div>
        <div class="window-body">
          <p>What do you want the computer to do?</p>
          <div>
            <input id="option1" type="radio" name="field" value="option" />
            <label for="option1">
              <span>
                <span />
              </span>
              Stand By
            </label>
            <br />
            <input
              id="option2"
              type="radio"
              name="field"
              value="option"
              checked
            />
            <label for="option2">
              <span>
                <span />
              </span>
              Shut Down
            </label>
            <br />
            <input id="option3" type="radio" name="field" value="option" />
            <label for="option3">
              <span>
                <span />
              </span>
              Restart
            </label>
            <br />
            <input id="option4" type="radio" name="field" value="option" />
            <label for="option4">
              <span>
                <span />
              </span>
              Restart in MS-DOS mode
            </label>
            <br />
          </div>
        </div>
        <div class="window-button-row" />
        <a class="btn primary ok" href="">
          OK
        </a>
        <a class="btn cancel" href="">
          Cancel
        </a>
        <a class="btn" href="">
          Help
        </a>
      </div>
    </div>
  );
};

export default Window;
