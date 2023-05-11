import React from "react";
import "../styles/contactPage.css";
import PageHeadersNavbar from "../components/PageHeadersNavbar";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { GiEarthAfricaEurope } from "react-icons/gi";
function ContactPage() {
  return (
    <>
      {" "}
      <div className="contactPageContainer">
        <div className="contactPageHeader">
          <PageHeadersNavbar />
        </div>
        <div className="contactPageMainContainer">
          <div className="contactPageMain">
            <div className="contactSectionOne">
              <div className="contactSectionOneRight">
                <div className="contactSectionOneRightHeader">
                  <p className="contactPageTitle">let's get in touch</p>
                </div>
                <div className="contactSectionOneRightSecondHeader">
                  <p className="contactPageText">
                    We're open for any suggestion or just to have a chat
                  </p>
                </div>
                <div className="contactSectionOneRightLocation">
                  <div className="contactIcon">
                    <MdOutlineLocationOn className="CSORIcon" />
                  </div>
                  <div className="CSORText">
                    <p className="whiteText">Address:</p>
                  </div>
                </div>
                <div className="contactSectionOneRightCall">
                  <div className="contactIcon">
                    <BsTelephone className="CSORIcon" />
                  </div>
                  <div className="CSORText">
                    <p className="whiteText">Phone:</p>
                  </div>
                </div>
                <div className="contactSectionOneRightEmail">
                  <div className="contactIcon">
                    <FiSend className="CSORIcon" />
                  </div>
                  <div className="CSORText">
                    <p className="whiteText">Email:</p>
                  </div>
                </div>
                <div className="contactSectionOneRightWeb">
                  <div className="contactIcon">
                    <GiEarthAfricaEurope className="CSORIcon" />
                  </div>
                  <div className="CSORText">
                    <p className="whiteText">Website:</p>
                  </div>
                </div>
              </div>
              <div className="contactSectionOneleft">
                <div className="contactSectionOneleftHeader">
                  <p className="contactPageTitle">Get in touch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;