import React from "react";

const Window = ({title, video, windowToggles}) => {
  return (
    <div className="window-container">
      <div className="window">
        <div className="window-title">
          <div>{title}</div>
          <div className="close-button" onClick={() => windowToggles('video')}>
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
      </div>
    </div>
  );
};

export default Window;
