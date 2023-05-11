import React from "react";
import "../styles/ProfessinPage.css";
import Navbar from "../components/navbar";
import Course from "../pages/coursePage";
import Footer from "../components/Footer";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import {Link} from "react-router-dom"
function ProfessionPage() {
  return (
    <>
      <div className="ProfessionPageNavbarContainer">
        <Navbar />
      </div>
      <div className="ProfessionPageCourseContainer">
        <div className="courseSearchContainer">
            <Link to={"/Mergejil"}>
            <IoIosArrowBack className="cousreSearchIcon" />
            </Link>
         
          <input
            type="text"
            placeholder="Мэргэжил хайх"
            className="courseSearchInput"
          />
          <AiOutlineSearch className="courseSearchSearchIcon" />
        </div>
        <Course />
      </div>
      <div className="ProfessionPageFooterContainer">
        <Footer />
      </div>
    </>
  );
}
export default ProfessionPage;