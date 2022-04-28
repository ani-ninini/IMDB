import React, { useState } from "react";

import "./App.css";
import Axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useNavigate,
} from "react-router-dom";
import Userpage from "./Userpage";
// import { useHistory } from "react-router-dom";

function App() {
  let navigate = useNavigate();
  const userLogin = () => {
    Axios.post("http://localhost:3001/userLogin", {
      userID: userID,
      userPassword: userPassword,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        console.log("reached frontend");
        console.log(response.data);
        navigate("/Userpage");
        //redirect goes here
      }
      console.log(response);
    });
  };

  const adminLogin = () => {
    Axios.post("http://localhost:3001/adminLogin", {
      adminID: adminID,
      adminPassword: adminPassword,
    }).then((response) => {
      console.log(response);
    });
  };

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      userIDSignup: userIDSignup,
      userFirstNameSignup: userFirstNameSignup,
      userLastNameSignup: userLastNameSignup,
      userAgeSignup: userAgeSignup,
      userPasswordSignup: userPasswordSignup,
    }).then((response) => {
      console.log(response.data);
    });
  };

  const [userID, setUserID] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");
  const [userIDSignup, setUserIDSignup] = useState("");
  const [userPasswordSignup, setUserPasswordSignup] = useState("");
  const [userFirstNameSignup, setUserFirstNameSignup] = useState("");
  const [userLastNameSignup, setUserLastNameSignup] = useState("");
  const [userAgeSignup, setUserAgeSignup] = useState("");

  const [adminID, setAdminID] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  return (
    <Router>
      <Route path="/Userpage" component={Userpage} >
        <div className="App">
          <h1>Welcome</h1>
          <table className="loginContainer">
            <tr>
              <td>
                <h2>User login</h2>
              </td>
              <td>
                <h2>Admin login</h2>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="userID"
                  className="loginInputText"
                  onChange={(e) => {
                    setUserID(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="adminID"
                  className="loginInputText"
                  onChange={(e) => {
                    setAdminID(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="password"
                  className="loginInputText"
                  onChange={(e) => {
                    setUserPassword(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="password"
                  className="loginInputText"
                  onChange={(e) => {
                    setAdminPassword(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={userLogin}>Login</button>
              </td>
              <td>
                <button onClick={adminLogin}>Login</button>
              </td>
            </tr>
          </table>
          <table className="signupContainer">
            <tr>
              <h2>User Signup</h2>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="userID"
                  className="loginInputText"
                  onChange={(e) => {
                    setUserIDSignup(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="First Name"
                  className="loginInputText"
                  onChange={(e) => {
                    setUserFirstNameSignup(e.target.value);
                  }}
                ></input>
              </td>
            </tr>

            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="loginInputText"
                  onChange={(e) => {
                    setUserLastNameSignup(e.target.value);
                  }}
                ></input>
              </td>
            </tr>

            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Age"
                  className="loginInputText"
                  onChange={(e) => {
                    setUserAgeSignup(e.target.value);
                  }}
                ></input>
              </td>
            </tr>

            <tr>
              <td>
                <input
                  type="text"
                  placeholder="password"
                  className="loginInputText"
                  onChange={(e) => {
                    setUserPasswordSignup(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={register}>Signup</button>
              </td>
            </tr>
          </table>
          <h1>{loginStatus}</h1>
        </div>
      </Route>
    </Router>
  );
}

export default App;
