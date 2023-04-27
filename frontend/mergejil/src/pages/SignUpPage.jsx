import "../styles/signUpPage.css";
import { TbGenderFemale, TbGenderMale } from "react-icons/tb";
import { useState } from "react";
import "react-bootstrap";
import Button from "react-bootstrap/Button";

function App() {
  const { change, setChange } = useState(true);

  const handleClick = () => {
    setChange(!change);
  };

  return (
    <div className="bigContainer">
      <div className="container">
        <div className="imageContainer">
          <img
            src="https://www.hillel.org/wp-content/uploads/college-images/Stanford_University.png"
            alt=""
          />
        </div>
        <div className="registration">
          <div className="bigText">Registration</div>
          <div className="registrationContainer">
            <div className="input">
              <div className="inputContainer">
                <div className="text">Name</div>
                <input
                  type="text"
                  className="inputt"
                  placeholder="Tanvir Hassan"
                />
              </div>
              <div className="inputContainer">
                <div className="text">Email</div>
                <input
                  type="text"
                  className="inputt"
                  placeholder="ftanvirhasan@gmail.com"
                />
              </div>
              <div className="inputContainer">
                <div className="text">Gender</div>
                <div className="gender">
                  <div className="genderTwo">
                    <TbGenderMale className="icon" /> Male
                  </div>
                  <div className="genderTwo">
                    <TbGenderFemale className="icon" /> Female
                  </div>
                </div>
              </div>
              <div className="inputContainer">
                <div className="text">Age</div>
                <input
                  type="date"
                  className="inputt"
                  placeholder="May 25, 1977"
                />
              </div>
              <div className="inputContainer">
                <div className="text">Phone</div>
                <input type="text" className="inputt" placeholder="8811****" />
              </div>
              <div className="inputContainer">
                <div className="text">Password</div>
                <input
                  type="password"
                  className="inputt"
                  placeholder="Fire007008"
                />
              </div>
              <div className="buttonTwo">
                <Button variant="dark">Cancel</Button>
                <Button variant="primary">Confirm</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
