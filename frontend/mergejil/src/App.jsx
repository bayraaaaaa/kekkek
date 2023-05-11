import React, { useState } from "react";
import Navbar from "./components/navbar";
import Instructor from "./pages/InstracturPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InformationSidebar from "./components/InformationSidebar";
import HomeInformation from "./components/homeInformation";
import Home from "./pages/home";
import SignupPage from "./pages/SignUpPage";
import AboutUsPage from "./pages/aboutUsPage";
import ContactPage from "./pages/contactPage";
import CoursePage from "./pages/coursePage"
import ProfessionPage from "./pages/ProfessionPage";
import MergejilHeader from "./components/mergejilHeader"
function App() {
  const [isLoggedIn, setIsLoggedin] = useState(true);
  const handleLogin = () => {
    isLoggedIn(true);
  };
  return (
    <>
      {/* {isLoggedIn ? ( */}
        {/* <> */}
          {/* <button onClick={isLoggedIn(true)}>login</button>
          <button onClick={isLoggedIn(false)}>logout</button>
          <div>you are logged in</div> */}
        {/* </> */}
      {/* // ) : ( */}
        {/* // <> */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/Instructor" element={<Instructor />}></Route>
              <Route path="/About" element={< AboutUsPage/>}></Route>
              <Route path="/SignupPage" element={< SignupPage/>}></Route>
              <Route path="/Contact" element={< ContactPage/>}></Route>
              <Route path="/Course" element={< CoursePage/>}></Route>
              <Route path="/Mergejil" element={< MergejilHeader/>}></Route>
              <Route path="/Profession" element={< ProfessionPage/>}></Route>
            </Routes>
          </BrowserRouter>
        {/* </>
      )} */}
    </>
  );
}

export default App;
