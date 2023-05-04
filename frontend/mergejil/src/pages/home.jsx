import React from 'react'
import "../styles/home.css"
import Navbar from "../components/navbar"
import Login from "../components/Login"
import Category from "../components/section"
import Information from "../components/homeInformation"
import Testimonial from "../components/testimonial"
import HomeAboutUs from "../components/homeAboutUs"
import HomeInformation from '../components/homeInformation'
import RecentPost from "../components/recentPost"
import Footer from "../components/Footer"
import NavbarBackground from "../components/navbarBackground"
function home() {
  return (
    <>
    <div className="headNavbar">
        <div className='overlayyyyyy'></div>
            <Navbar/>
            <Login/>
    </div>
    <div className='categoryContainerrrr'>
        <Category/>
    </div>
    <div className='courseHomeContainerrrrr'>

    </div>
    <div className='overlayHomeContainerrrr'>

    </div>
    <div className='homeINFORMATION'>
        {/* <Information/> */}
    </div>
    <div className='homeInformationnnnn'>
        <HomeInformation/>
    </div>
    <div className='testimonialaaaContainer'>
        <Testimonial/>
    </div>
    <div className='homeAboutUsContainer'>
        <HomeAboutUs/>
    </div>
    <div className='homeRecentPost'>
        <RecentPost/>
    </div>
    <Footer/>
    </>
  )
}

export default home