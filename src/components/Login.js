import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { connect, useSelector, useDispatch } from 'react-redux';
import { userLogin } from '../redux/Actions';

function Login(props) {

  let navigate = useNavigate();

  const dispatch = useDispatch();
  const loginDetails = useSelector(({ loginData }) => loginData);

  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [emailErr, SetemailErr] = useState("");
  const [passErr, SetpasswordErr] = useState("");

  function clearSubmission() {
    SetemailErr("");
    SetpasswordErr("");
  }

  function signIn() {
    clearSubmission();
    if (email == undefined || email == "") {
      SetemailErr("email Is required");
    }
    if (password == undefined || password == "") {
      SetpasswordErr("password Is required");
    }
    else {
      if (email != '' && password != '') {
        dispatch(userLogin(
          email,
          password,
        ))
      }
      else {
        alert("please enter valid credential :( ");
      }
    }
  }

  useEffect((props) => {
  }, [])


  return (
    <div className='container'>
      <div className='loaderContainer'>
        <div className='loader'>
          {loginDetails?.loading && <div className="spinner-border"></div>}
        </div>
      </div>
      <h1>Login</h1>
      <label>Email</label>
      <input type="email" value={email} onChange={(e) => Setemail(e.target.value)} />
      <p className="error">{emailErr}</p>
      <label>Password</label>
      <input type="password" value={password} onChange={(e) => Setpassword(e.target.value)} />
      <p className="error">{passErr}</p>
      <button className='mt-2' onClick={() => signIn()}>Login</button>
    </div>
  );
}

export default Login;
