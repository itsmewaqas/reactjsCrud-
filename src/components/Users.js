import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, Link } from "react-router-dom";
import loader from '../assets/img/loader.gif';
import { IMAGE_URL } from '../redux/constants';
import { connect, useSelector, useDispatch } from 'react-redux';
import { userAdd, userFetch, userDelete, userUpdate } from '../redux/Actions/index';

function Users(props) {

  let navigate = useNavigate();
  const imgRef = useRef();

  const dispatch = useDispatch();
  const userDetails = useSelector(({ userAddReducer }) => userAddReducer);

  const data = useSelector((state) => {
    return state
  });

  const [userId, setUserId] = useState(null);
  const [name, Setname] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [cell, Setcell] = useState("");
  const [gender, Setgender] = useState("");
  const [createddate, Setcreateddate] = useState("");
  const [qualification, Setqualification] = useState([]);
  const [usertype, Setusertype] = useState("");
  const [profilepic, Setprofilepic] = useState("");
  const [status, Setstatus] = useState("");
  const [houseno, Sethouseno] = useState("");
  const [city, Setcity] = useState("");
  const [state, Setstate] = useState("");
  const [country, Setcountry] = useState("");


  const [nameErr, SetnameErr] = useState("");
  const [emailErr, SetemailErr] = useState("");
  const [passwordErr, SetpasswordErr] = useState("");
  const [cellErr, SetcellErr] = useState("");
  const [genderErr, SetgenderErr] = useState("");
  const [createddateErr, SetcreateddateErr] = useState("");
  const [qualificationErr, SetqualificationErr] = useState([]);
  const [usertypeErr, SetusertypeErr] = useState("");
  const [profilepicErr, SetprofilepicErr] = useState("");
  const [statusErr, SetstatusErr] = useState("");
  const [housenoErr, SethousenoErr] = useState("");
  const [cityErr, SetcityErr] = useState("");
  const [stateErr, SetstateErr] = useState("");
  const [countryErr, SetcountryErr] = useState("");

  const [showformPanel, SetshowformPanel] = useState(false);

  const [addedView, SetaddedView] = useState(false);
  const [editView, SeteditView] = useState(false);

  // const showPanel = () => {
  //   SetshowformPanel(!showformPanel);
  // }

  // checkbox ctrl start
  const eduList = ["matric", "intermediate", "graduation", "masters"];
  const eduHandle = e => {
    const { checked, value } = e.currentTarget;
    Setqualification(
      prev => checked
        ? [...prev, value]
        : prev.filter(val => val !== value)
    );
  };
  // checkbox ctrl end

  const profilePicHandle = (e) => {
    Setprofilepic(e.target.files[0]);
  }

  function clearSubmission() {
    SetnameErr("");
    SetemailErr("");
    SetpasswordErr("");
    SetcellErr("");
    SetgenderErr("");
    SetcreateddateErr("");
    SetqualificationErr([]);
    SetusertypeErr("");
    SetprofilepicErr("");
    SetstatusErr("");
    SethousenoErr("");
    SetcityErr("");
    SetstateErr("");
    SetcountryErr("");
  }

  function clearForm() {
    Setname("");
    Setemail("");
    Setpassword("");
    Setcell("");
    Setgender("");
    Setcreateddate("");
    Setqualification([]);
    Setusertype("");
    Setprofilepic("");
    Setstatus("");
    Sethouseno("");
    Setcity("");
    Setstate("");
    Setcountry("");
  }

  const userSignup = () => {
    clearSubmission();
    if (name == undefined || name == "" || name.length <= 5) {
      SetnameErr("enter name above 5 character");
    }
    var emailRgx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email == undefined || email == "" || !emailRgx.test(email)) {
      SetemailErr("enter your valid email address");
    }
    if (password == undefined || password == "" || password.length <= 5) {
      SetpasswordErr("enter password above 5 character");
    }
    var cellRgx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (cell == undefined || cell == "" || (cellRgx.test(cell) == false)) {
      SetcellErr("enter your valid cell number");
    }
    if (gender == undefined || gender == "") {
      SetgenderErr("select your gender");
    }
    if (createddate == undefined || createddate == "") {
      SetcreateddateErr("select date");
    }
    if (qualification == "" || qualification == undefined || qualification.length == 0) {
      SetqualificationErr("select your qualification");
    }
    if (usertype == undefined || usertype == "") {
      SetusertypeErr("select your usertype");
    }
    if (profilepic == undefined || profilepic == "") {
      SetprofilepicErr("select your profilepic");
    }
    if (status == undefined || status == "") {
      SetstatusErr("enter your status");
    }
    if (houseno == undefined || houseno == "") {
      SethousenoErr("enter your houseno");
    }
    if (city == undefined || city == "") {
      SetcityErr("select your city");
    }
    if (state == undefined || state == "") {
      SetstateErr("select your state");
    }
    if (country == undefined || country == "") {
      SetcountryErr("select your country");
    }
    if (name != '' &&
      email != '' &&
      password != '' &&
      cell != '' &&
      gender != '' &&
      createddate != '' &&
      qualification != '' &&
      usertype != '' &&
      profilepic != '' &&
      status != '' &&
      houseno != '' &&
      city != '' &&
      state != '' &&
      country != '') {
      dispatch(userAdd(
        name,
        email,
        password,
        cell,
        gender,
        createddate,
        qualification,
        usertype,
        profilepic,
        status,
        houseno,
        city,
        state,
        country
      ))
      setTimeout(() => {
        Setname('');
        Setemail('');
        Setpassword('');
        Setcell('');
        Setgender('');
        Setcreateddate('');
        Setqualification(['']);
        Setusertype('');
        Setprofilepic(imgRef.current.value = null);
        Setstatus('');
        Sethouseno('');
        Setcity('');
        Setstate('');
        Setcountry('');
        dispatch(userFetch());
        SetshowformPanel(false);
        SetaddedView(false);
        SeteditView(false);
      }, 1000);
    }
    else {
      return false
    }
  }

  const editUser = (item) => {
    console.log('update user', item.ID);
    setUserId(item.ID);
    Setname(item.name);
    Setemail(item.email);
    Setcell(item.cell);
    Setgender(item.gender);
    Setcreateddate(item.createddate);
    Setqualification(item.qualification);
    Setusertype(item.usertype);
    Setstatus(item.status);
    Sethouseno(item.objLocation.houseno);
    Setcity(item.objLocation.city);
    Setstate(item.objLocation.state);
    Setcountry(item.objLocation.country);
    SetshowformPanel(true);
    SetaddedView(false);
    SeteditView(true);
    console.log(item);
  }

  const updateUser = () => {
    setUserId(userId);
    dispatch(userUpdate(
      userId,
      name,
      email,
      cell,
      gender,
      createddate,
      qualification,
      usertype,
      status,
      houseno,
      city,
      state,
      country
    ))
    SetshowformPanel(false);
    SetaddedView(false);
    SeteditView(false);
    setTimeout(() => {
      dispatch(userFetch());
    }, 1000);
  }

  const viewUser = (item) => {
    console.log('view user', item.ID);
    navigate('/Usersdetails', { state: { item } })
  }

  const deleteUser = (item) => {
    dispatch(userDelete(item.ID));
    console.log('delete user', item.ID);
    setTimeout(() => {
      dispatch(userFetch());
    }, 1000);
  }

  const showForm = () => {
    clearForm();
    clearSubmission();
    SetshowformPanel(!showformPanel);
    if (showformPanel == true) {
      SetaddedView(false);
      SeteditView(false);
    }
    else {
      SetaddedView(true);
      SeteditView(false);
    }
  }

  useCallback(() => {
    dispatch(userFetch());
  }, [])

  return (
    <div>
      <div className='loaderContainer'>
        <div className='loader'>{userDetails?.loading && <img src={loader} />}</div>
        <div className='loader'>{data.userFetchReducer?.loading && <img src={loader} />}</div>
      </div>

      <button className='btn1' onClick={() => showForm()}>
        {showformPanel == false ? 'AddUser' : 'X'}
      </button>
      <div className='clearfix'></div>
      <div className='container'>
        {showformPanel &&
          <div>
            <div className='inputFieldBox'>
              <label>Name</label>
              <input type="text" value={name} onChange={(e) => Setname(e.target.value)} />
              <p className='error'>{nameErr}</p>
            </div>
            <div className='inputFieldBox'>
              <label>Email</label>
              <input type="email" value={email} onChange={(e) => Setemail(e.target.value)} />
              <p className='error'>{emailErr}</p>
            </div>
            {editView == true ? null :
              <div className='inputFieldBox'>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => Setpassword(e.target.value)} />
                <p className='error'>{passwordErr}</p>
              </div>}
            <div className='inputFieldBox'>
              <label>Cell</label>
              <input type="text" value={cell} onChange={(e) => Setcell(e.target.value)} />
              <p className='error'>{cellErr}</p>
            </div>
            <div className='inputFieldBox'>
              <label>Status</label>
              <input type="text" value={status} onChange={(e) => Setstatus(e.target.value)} />
              <p className='error'>{statusErr}</p>
            </div>
            <div className='inputFieldBox'>
              <label>Created Date</label>
              <input type="date" value={createddate} onChange={(e) => Setcreateddate(e.target.value)} />
              <p className='error'>{createddateErr}</p>
            </div>
            <div className='inputFieldBox'>
              <label>User Type</label>
              <select value={usertype} onChange={(e) => { Setusertype(e.target.value) }}>
                <option value="">All</option>
                <option value="Admin">Admin</option>
                <option value="Employee">Employee</option>
              </select>
              <p className='error'>{usertypeErr}</p>
            </div>
            {editView == true ? null :
              <div className='inputFileBox'>
                <label>Profile Pic</label>
                <input type="file" ref={imgRef} onChange={profilePicHandle} />
                {profilepic ?
                  <img src={profilepic ? URL.createObjectURL(profilepic) : null} alt='' />
                  : null}
                <p className='error'>{profilepicErr}</p>
              </div>
            }
            <div className='inputRadioCheckBox'>
              <label>Gender</label>
              <div>
                <label><input type="radio" checked={gender === 'Male'} value="Male" onChange={() => Setgender('Male')} /> Male </label>
              </div>
              <div>
                <label><input type="radio" checked={gender === 'Female'} value="Female" onChange={() => Setgender('Female')} /> Female </label>
              </div>
              <div>
                <label><input type="radio" checked={gender === 'Other'} value="Other" onChange={() => Setgender('Other')} /> Other  </label>
              </div>
              <p className='error'>{genderErr}</p>
            </div>
            <div className='inputRadioCheckBox'>
              <label>Qualification</label>
              {eduList.map(item => (
                <div>
                  <label>
                    <input
                      key={item.toString()}
                      value={item}
                      type="checkbox"
                      checked={qualification.some(val => val === item)}
                      onChange={eduHandle}
                    />
                    {item}
                  </label>
                </div>
              ))}
              <p className='error'>{qualificationErr}</p>
            </div>
            <div className='inputFieldBox'>
              <label>House No</label>
              <input type="text" value={houseno} onChange={(e) => Sethouseno(e.target.value)} />
              <p className='error'>{housenoErr}</p>
            </div>
            <div className='inputFieldBox'>
              <label>City</label>
              <select value={city} onChange={(e) => { Setcity(e.target.value) }}>
                <option value="">All</option>
                <option value="Karachi">Karachi</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Peshawar">Peshawar</option>
                <option value="Quetta">Quetta</option>
              </select>
              <p className='error'>{cityErr}</p>
            </div>
            <div className='inputFieldBox'>
              <label>State</label>
              <select value={state} onChange={(e) => { Setstate(e.target.value) }}>
                <option value="">All</option>
                <option value="Sindh">Sindh</option>
                <option value="Balochistan">Balochistan</option>
                <option value="Punjab">Punjab</option>
                <option value="KPK">KPK</option>
              </select>
              <p className='error'>{stateErr}</p>
            </div>
            <div className='inputFieldBox'>
              <label>Country</label>
              <select value={country} onChange={(e) => { Setcountry(e.target.value) }}>
                <option value="">All</option>
                <option value="Pakistan">Pakistan</option>
                <option value="India">India</option>
                <option value="Srilanka">Srilanka</option>
                <option value="Bangladesh">Bangladesh</option>
              </select>
              <p className='error'>{countryErr}</p>
            </div>
          </div>}
        <div>
          {addedView == true ? <button className='btn1' onClick={() => userSignup()}>Signup</button> : null}
          {editView == true ? <button className='btn1' onClick={() => updateUser()}>Update</button> : null}
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>profilepic</th>
            <th>name</th>
            <th>email</th>
            <th>cell</th>
            <th>gender</th>
            {/* <th>created date</th>
            <th>qualification</th>
            <th>user type</th>
            <th>status</th>
            <th>user location</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        {data.userFetchReducer?.userFetchList == null || data.userFetchReducer?.userFetchList.length == 0 ?
          <p>data not found</p> :
          <tbody>
            {data.userFetchReducer?.userFetchList.map((item, index) => {
              return (
                <tr key={index.toString()}>
                  <td>
                    <img style={{ width: '50px', height: '50px' }} src={IMAGE_URL + item.profilepic} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.cell}</td>
                  <td>{item.gender}</td>
                  {/* <td>{item.createddate}</td>
                  <td>{item.qualification.join(', ')}</td>
                  <td>{item.usertype}</td>
                  <td>{item.status}</td>
                  <td>
                    <p>{item.objLocation.houseno},
                      {item.objLocation.city},
                      {item.objLocation.state},
                      {item.objLocation.country}</p>
                  </td> */}
                  <td>
                    <button onClick={() => editUser(item)} className='tableActionBtn'>
                      <img src={require('../assets/img/edit.png')} alt="" />
                    </button>
                    <button onClick={() => viewUser(item)} className='tableActionBtn'>
                      <img src={require('../assets/img/view.png')} alt="" />
                    </button>
                    <button onClick={() => deleteUser(item)} className='tableActionBtn'>
                      <img src={require('../assets/img/delete.png')} alt="" />
                    </button>
                  </td>
                </tr>
              )
            })
            }
          </tbody>
        }
      </table>
    </div>
  );
}

export default Users;
