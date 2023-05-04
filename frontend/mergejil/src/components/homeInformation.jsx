import React from "react";
import "../styles/homeInformation.css";
function homeInformation() {
  return (
    <>
      <div className="homeINFORMATIONcontainer">
        <div className="homeINFORMATIONfirstHalfContainer">
          <div className="homeINFORMATIONimageContainer">
            <div className="homeINFORMATIONimageFirst">
              <div className="homeINFORMATIONimageFirstImage"></div>
            </div>
            <div className="homeINFORMATIONimageSecond">
              <div className="homeINFORMATIONimageSecondImage"></div>
            </div>
          </div>
        </div>
        <div className="homeINFORMATIONsecondHalfContainer">
          <div className="homeINFORMATIONsecondHalfContentContainer">
            <div className="homeINFORMATIONsecondHalfContentTop">
              <p style={{ color: "#4986fc", fontSize: "16px" }}>
                ENHANCED YOUR SKILLS
              </p>
            </div>
            <div className="homeINFORMATIONsecondHalfContentSecond">
              <p style={{ color: "black", fontSize: "35px" }}>
                Learn Anything You Want Today
              </p>
            </div>
            <div className="homeINFORMATIONsecondHalfContentDescription">
              <p style={{ color: "darkgray", fontSize: "19px" }}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean. A small river named Duden flows by their
                place and supplies it with the necessary regelialia.
              </p>
            </div>
            <div className="homeINFORMATIONsecondHalfContentButton">
              <button className="homeINFORMATIONsecondHalfContentButtonL">
                Get in touch with us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default homeInformation;
