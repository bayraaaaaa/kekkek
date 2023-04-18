import React from "react";
import "../styles/overlay.css";
function overlay() {
  return (
    <>
      <div className="overlayContainer">
        <div className="overlay"></div>

        <img
          src="https://play-lh.googleusercontent.com/2EA71-TRMKp1jUxOc6u-v1VUe5kDDznC4BdU6W2OMgxT3d-GQHEPNDshREQMSVIem3I"
          alt=""
          className="image"
        />
      </div>
      <div className="overlayContainer"></div>
    </>
  );
}

export default overlay;
