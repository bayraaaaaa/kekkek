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
import PrefessionDetail from "./pages/ProfessionDetail"
import MicroDetail from "./pages/microDetail";
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
              <Route path="instructor" element={<Instructor />}></Route>
              <Route path="about" element={< AboutUsPage/>}></Route>
              <Route path="signup-page" element={< SignupPage/>}></Route>
              <Route path="contact" element={< ContactPage/>}></Route>
              <Route path="course" element={< CoursePage/>}></Route>
              <Route path="mergejil" element={< MergejilHeader/>}></Route>
              <Route path="profession" element={< ProfessionPage/>}></Route>
              <Route path="profession/:professionId" element={< PrefessionDetail/>}> </Route>
              <Route path="profession/:professionId/:microId" element={< MicroDetail/>}> </Route>
           
            </Routes>
          </BrowserRouter>
        {/* </>
      )} */}
    </>
  );
}

export default App;
