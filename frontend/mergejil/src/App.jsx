import React from "react";
import Navbar from "./components/navbar";
import Container from "react-bootstrap/Container";
function App() {
  return (
    <>
      <div style={{ backgroundColor: "gray", width: "100%", height: "100vh" }}>
        <Navbar />
      </div>
    </>
  );
}

export default App;
