import React from "react";

const Window = () => {
  return (
    <div className="window-container">
      <div className="window">
        <div className="window-title">
          <div>Myst</div>
          <div className="close-button" onClick={() => (false)}>
            X
          </div>
        </div>

        <div className="window-body">
            <iframe
              className="custom-iframe"
              title="project-video"
              src="https://www.youtube.com/embed/D30r0iRH73Q?controls=0&amp;start=96"
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
