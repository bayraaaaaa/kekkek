import React from "react";
import "../styles/aboutUsHome.css";
import { AiFillPlayCircle } from "react-icons/ai";
function aboutUsHome() {
  return (
    <>
      <div className="aboutUsHomeContainer">
        <div className="aboutUsHome">
          <div className="center">
            <div className="topTextContainer">
              <p className="topText">WELCOME TO STUDYLAB</p>
            </div>
            <div className="secondTopContainer">
              <p className="secondTop">
                We Are StudyLab An Online Learning Center
              </p>
            </div>
            <div className="thirthTopContainer">
              <p className="thirthTopTop">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <p className="thirthTopTop">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
            <div className="bottomCenterContainer">
              <div className="imageContainer">
                <AiFillPlayCircle className="play" />
              </div>
              <div className="imageRightTextContainer">
                <p className="imageRightText">
                  Learn anything from StudyLab, Watch video
                </p>
              </div>
            </div>
          </div>
          <div className="leftCenterContainer">
            <div className="topSection">
              <div className="sectionOne">
                <div className="iconSection">
                  <div className="icon"></div>
                  <div className="titleContainer">
                    <p className="titleText">Top Quality Content</p>
                  </div>
                  <div className="descriptionContainer">
                    <p className="descriptionText">
                      A small river named Duden flows by their place and
                      supplies
                    </p>
                  </div>
                </div>
              </div>
              <div className="sectionOne">
                <div className="iconSection">
                  <div className="icon"></div>
                  <div className="titleContainer">
                    <p className="titleText">Top Quality Content</p>
                  </div>
                  <div className="descriptionContainer">
                    <p className="descriptionText">
                      A small river named Duden flows by their place and
                      supplies
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="topSection">
              <div className="sectionOne">
                <div className="iconSection">
                  <div className="icon"></div>
                  <div className="titleContainer">
                    <p className="titleText">Top Quality Content</p>
                  </div>
                  <div className="descriptionContainer">
                    <p className="descriptionText">
                      A small river named Duden flows by their place and
                      supplies
                    </p>
                  </div>
                </div>
              </div>
              <div className="sectionOne">
                <div className="iconSection">
                  <div className="icon"></div>
                  <div className="titleContainer">
                    <p className="titleText">Top Quality Content</p>
                  </div>
                  <div className="descriptionContainer">
                    <p className="descriptionText">
                      A small river named Duden flows by their place and
                      supplies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default aboutUsHome;
