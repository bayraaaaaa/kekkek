import "../styles/signUpPage.css";
import { TbGenderFemale, TbGenderMale } from "react-icons/tb";
import { useState } from "react";
import "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
function App() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const { change, setChange } = useState(true);

  const SignUp = async () => {
    try {
      await axios.post("http://localhost:6969/user/createUser", {
        password: password,
        name: name,
        email: email,
        phone: phone,
        age: age,
      });
      alert("Amjilttai burtguullee");
    } catch (error) {
      alert(error.message);
    }
  };
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
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="inputContainer">
                <div className="text">Email</div>
                <input
                  type="text"
                  className="inputt"
                  placeholder="ftanvirhasan@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="inputContainer">
                <div className="text">Phone</div>
                <input
                  type="text"
                  className="inputt"
                  placeholder="8811****"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="inputContainer">
                <div className="text">Password</div>
                <input
                  type="password"
                  className="inputt"
                  placeholder="Fire007008"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="buttonTwo">
                <Button variant="dark">Cancel</Button>
                <Button variant="primary" onClick={() => SignUp()}>
                  Confirm
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
