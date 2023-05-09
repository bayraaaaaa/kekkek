import React from "react";
import "../styles/aboutUsPage.css";
import Navbar from "../components/navbar";
import HomeInformation from "../components/homeInformation";
import Testimonial from "../components/testimonial";
import HomeAboutUs from "../components/homeAboutUs";
import Footer from "../components/Footer";
function aboutUsPage() {
  return (
    <>
      <div className="aboutUsPageHeaderContainer">
        <Navbar />
        <div className="overlayAboutUsPageHeader"></div>
        <div className="aboutUsPageHeaderContent">
          <div className="aboutUsPageHeaderContentTop">
            <p className="aboutUsPageHeaderContentTopText">
              Home 〉 About us 〉
            </p>
          </div>
          <div className="aboutUsPageHeaderContentBottom">
            <p className="aboutUsPageHeaderContentBottomText">About Us</p>
          </div>
        </div>
      </div>
      <div className="HomeInformationAboutUsPage">
        <HomeInformation />
      </div>
      <div className="TestimonialsAboutUsPage">
        <Testimonial />
      </div>
      <div className="homeAboutUsAboutUsPage">
        <HomeAboutUs />
      </div>
      <Footer />
    </>
  );
}

export default aboutUsPage;
