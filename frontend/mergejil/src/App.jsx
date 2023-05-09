import React, { useState } from "react";
import Navbar from "./components/navbar";
import Instructor from "./pages/InstracturPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InformationSidebar from "./components/InformationSidebar";
import HomeInformation from "./components/homeInformation";
import Home from "./pages/home";
import SignupPage from "./pages/SignUpPage";
import AboutUsPage from "./pages/aboutUsPage";

function App() {
  const [isLoggedIn, setIsLoggedin] = useState(true);
  const handleLogin = () => {
    isLoggedIn(true);
  };
  return (
    <>
      {isLoggedIn ? (
        <>
          {/* <button onClick={isLoggedIn(true)}>login</button>
          <button onClick={isLoggedIn(false)}>logout</button>
          <div>you are logged in</div> */}
        </>
      ) : (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AboutUsPage />}></Route>
              <Route path="/Instructor" element={<Instructor />}></Route>
              <Route path="/footer" element={<InformationSidebar />}></Route>
            </Routes>
          </BrowserRouter>
        </>
      )}
    </>
  );
}

export default App;
