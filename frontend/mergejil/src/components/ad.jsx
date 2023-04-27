import React from "react";
import "../styles/Ad.css";
function ad() {
  return (
    <>
      <div className="adContainerC">
        <div className="adContainer">
          <div className="ad"></div>
          <div className="secondAd">
            <div className="firstTextContainer">
              <p className="firstText">
                WE ARE STUDYLAB AN ONLINE LEARNING CENTER
              </p>
            </div>
            <div className="secondTextContainer">
              <p className="secondText">
                We can mange your dream building A small river named Duden flows
                by their place
              </p>
            </div>
            <div className="thirthTextContainer">
              <button className="buttonThirth">Enroll Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ad;
