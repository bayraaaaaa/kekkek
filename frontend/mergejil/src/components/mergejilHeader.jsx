import React from "react";
import "../styles/mergejilHeader.css";
import Navbar from "../components/navbar";
import {Link} from "react-router-dom"
function mergejilHeader() {
  return (
    <>
      <div className="mergejilHeaderContainer">
        <Navbar />
        <div className="mergejilHeaderContentContainer">
          <div className="mergejilHeaderContentTop">
            <p className="mergejilHeaderContentTopText">
              Мэргэжлээ мэргэлцгээе залуусаа
            </p>
          </div>
          <div className="mergejilHeaderContentSecond">
            <p className="mergejilHeaderContentSecondText">
              Мэргэжлээ эртнээс сурж мэдэж танилцана гэдэг амжилттай явах гол
              үндэс суурь болдог.
            </p>
            <Link to={"/profession"}>
            <button className="mergejilHeaderContentSecondButton">
              Мэргэжил мэргэлэх
            </button>
            </Link>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default mergejilHeader;