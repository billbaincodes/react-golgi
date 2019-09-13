import React from "react";

const Window = ({title, video, videoWindow}) => {
  return (
    <div className="window-container">
      <div className="window">
        <div className="window-title">
          <div>{title}</div>
          <div className="close-button" onClick={() => videoWindow(false)}>
            X
          </div>
        </div>

        <div className="custom-window-body">
            <iframe
              className="custom-iframe"
              title="project-video"
              src={video}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              fullscreen="true"
            />
        </div>
        {/* <div className="window-buttons">
          <div onClick={() => (false)}>OK</div>
          <div onClick={() => (false)}>Cancel</div>
          <div>Help</div>
        </div> */}
      </div>
    </div>
  );
};

export default Window;
