import React from "react";
import Navbar from "./components/navbar";
import Instructor from "./pages/InstracturPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeAboutUs from "./components/homeAboutUs";
function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}></Route>
          <Route path="/Instructor" element={<Instructor />}></Route>
        </Routes>
      </BrowserRouter> */}
      <HomeAboutUs />
    </>
  );
}

export default App;
