import React from "react";
import Navbar from "./components/navbar";
import Instructor from "./pages/InstracturPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InformationSidebar from "./components/InformationSidebar";
import HomeInformation from "./components/homeInformation";
import Home from "./pages/home"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Instructor" element={<Instructor />}></Route>
          <Route path="/footer" element={<InformationSidebar />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
