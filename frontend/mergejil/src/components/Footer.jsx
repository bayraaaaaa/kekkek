import React from "react";
import "../styles/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { TbSend } from "react-icons/tb";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerMainContainer">
        <div className="footerAC">
          <div className="footerAbout">
            <div className="titleContainer">
              <p className="footerTitle">About</p>
            </div>
            <div className="aboutDescription">
              <p className="aboutText">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div className="aboutIconContainer">
            <div className="aboutIcon">
              <AiOutlineTwitter className="footerIcon1" />
            </div>
            <div className="aboutIcon">
              <RiFacebookFill className="footerIcon1" />
            </div>
            <div className="aboutIcon">
              <FaInstagram className="footerIcon1" />
            </div>
          </div>
        </div>
        <div className="footerAC">
          <div className="footerDesk">
            {" "}
            <div className="titleContainer2">
              <p className="footerTitle">Help Desk</p>
            </div>
            <div className="deskMain">
              <p className="aboutText">Services</p>
            </div>
            <div className="deskMain">
              <p className="aboutText">Legal Help</p>
            </div>
            <div className="deskMain">
              <p className="aboutText">Computer Technician</p>
            </div>
            <div className="deskMain">
              <p className="aboutText">Web Developer</p>
            </div>
          </div>
        </div>
        <div className="footerAC">
          <div className="footerRecent">
            <div className="titleContainer3">
              <p className="footerTitle">Recent Cource</p>
            </div>{" "}
            <div className="deskMain">
              <p className="aboutText">Web Design</p>
            </div>
            <div className="deskMain">
              <p className="aboutText">Business Studies</p>
            </div>
            <div className="deskMain">
              <p className="aboutText">Civil Engineering</p>
            </div>
            <div className="deskMain">
              <p className="aboutText">Refund Policy</p>
            </div>
            <div className="deskMain">
              <p className="aboutText">Call Us</p>
            </div>
          </div>
        </div>
        <div className="footerAC">
          {" "}
          <div className="footerHave">
            <div className="titleContainer2">
              <p className="footerTitle">Have a Questions?</p>
            </div>
            <div className="footerHaveMain">
              <div className="haveMain">
                <div className="footerHaveIcon">
                  <MdOutlineLocationOn className="footerIcon2" />
                </div>
                <div className="footerHaveTextContainer">
                  <p className="aboutText">
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </p>
                </div>
              </div>
              <div className="haveMain2">
                <div className="footerHaveIcon2">
                  <IoIosCall className="footerIcon2" />
                </div>
                <div className="footerHaveTextContainer">
                  <p className="aboutText">+976 69696969</p>
                </div>
              </div>
              <div className="haveMain2">
                <div className="footerHaveIcon2">
                  <TbSend className="footerIcon2" />
                </div>
                <div className="footerHaveTextContainer">
                  <p className="aboutText"> info@yourdomain.com </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
