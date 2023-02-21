import React, { useState, useEffect } from 'react';
import {
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";
import '../src/assets/css/App.css';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Outerdashboard from "./components/Outerdashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Forgetpassword from "./components/Forgetpassword";

import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Users from "./components/Users";
import Usersdetails from "./components/Usersdetails";
import Contact from "./components/Contact";

import Nomatch from './sharedComponents/Nomatch';
import { connect, useSelector, useDispatch } from 'react-redux';

function App(props) {

  // const [auth, Setauth] = useState(true);

  const loginDetails = useSelector(({ loginData }) => loginData.loginDetails);

  useEffect(() => {
  }, [])


  return (
    <div>
      <ToastContainer autoClose={2000} />
      <Routes>
        <React.Fragment>
          {loginDetails == null || loginDetails == undefined || loginDetails.length == 0 ?
            <Route path="/" element={<Outerdashboard />}>
              <Route exact path="/" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Forgetpassword" element={<Forgetpassword />} />
            </Route>
            :
            <Route path="/" element={<Dashboard />}>
              <Route exact path="/" element={<Home />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Users" element={<Users />} />
              <Route path="/Usersdetails" element={<Usersdetails />} />
              <Route path="/Contact" element={<Contact />} />
            </Route>
          }
          <Route path="*" element={<Nomatch />} />
        </React.Fragment>
      </Routes>
    </div>
  );
}

export default App;



// https://react-bootstrap.github.io/