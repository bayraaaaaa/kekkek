import React from "react";
import Navbar from "./components/navbar";
import Instructor from "./pages/InstracturPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Section from "./components/section";
import SignUp from "./pages/SignUpPage";

function App() {
  return (
    <>
      {/* <div style={{ backgroundColor: "gray", width: "100%", height: "100vh" }}>
        <Navbar />
      </div>  */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}></Route>
          <Route path="/Instructor" element={<Instructor />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Navbar />
      <Section /> */}
    </>
  );
}

export default App;
