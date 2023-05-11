import React from "react";
import "../styles/PageHeaderNavbars.css";
import NavbarComponent from "../components/navbar";
function PageHeadersNavbar() {
  return (
    <>
      <div className="PageHeadersNavbarContainer">
        <div className="PageHeadersNavbarHeader">
          <NavbarComponent />
        </div>
        <div className="PageHeadersNavbarMain">
          <div className="PageHeadersNavbarText">
            <p
              style={{
                fontFamily:
                  "Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
                fontSize: "16px",
                color: "white",
              }}
            >
              Home-Contact us-
            </p>{" "}
          </div>
          <div className="PageHeadersNavbarTitle">
            <p className="contactTitleText">Contact Us</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageHeadersNavbar;