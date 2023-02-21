import React, { useState, useEffect, useCallback } from 'react';
import loader from '../assets/img/loader.gif';
import { connect, useSelector, useDispatch } from 'react-redux';
import { IMAGE_URL } from '../redux/constants';
import { userFetch, myProfileUpdate } from '../redux/Actions/index';

function Profile(props) {

  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state
  });

  const loginDetails = useSelector(({ loginData }) => loginData.loginDetails);

  const [ID, SetID] = useState(null);
  const [name, Setname] = useState('');
  const [email, Setemail] = useState('');
  const [cell, Setcell] = useState('');
  const [gender, Setgender] = useState('');
  const [createddate, Setcreateddate] = useState('');
  const [qualification, Setqualification] = useState([]);
  const [usertype, Setusertype] = useState('');
  const [profilepic, Setprofilepic] = useState('');
  const [status, Setstatus] = useState('');
  const [houseno, Sethouseno] = useState('');
  const [city, Setcity] = useState('');
  const [state, Setstate] = useState('');
  const [country, Setcountry] = useState('');

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

  //var getName = data?.userFetchReducer?.userFetchList?.filter((x) => x.ID === loginDetails.ID)[0].name;

  const getProfile = () => {
    SetID(loginDetails.ID);
    Setname(loginDetails.name);
    Setemail(loginDetails.email);
    Setcell(loginDetails.cell);
    Setgender(loginDetails.gender);
    Setcreateddate(loginDetails.createddate);
    const getQF = loginDetails.qualification.toString().split(',');
    Setqualification(getQF);
    Setusertype(loginDetails.usertype);
    Setprofilepic(data?.userFetchReducer?.userFetchList?.filter((x) => x.ID === loginDetails.ID)[0].profilepic);
    Setstatus(loginDetails.status);
    Sethouseno(loginDetails.houseno);
    Setcity(loginDetails.city);
    Setstate(loginDetails.state);
    Setcountry(loginDetails.country);
  }


  const updateUserInfo = () => {
    if (name != '' &&
      email != '' &&
      cell != '' &&
      gender != '' &&
      createddate != '' &&
      qualification != '' &&
      usertype != '' &&
      status != '' &&
      houseno != '' &&
      city != '' &&
      state != '' &&
      country != '') {
      dispatch(myProfileUpdate(
        ID,
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
      setTimeout(() => {
        dispatch(userFetch());
      }, 1000);
    }
    else {
    }
  }

  useEffect(() => {
    getProfile();
  }, [])

  // useCallback(() => {
  //   dispatch(userFetch());
  // }, [])

  return (
    <div className='container'>
      <div className='loaderCtrl'>
        <div className='loader'>{data.loginData?.loading && <img src={loader} />}</div>
      </div>
      <div className="inputFieldBox">
        <label>Profile</label>
        <br />
        <img src={IMAGE_URL + profilepic} alt="" />
      </div>
      <div className="inputFieldBox">
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => Setname(e.target.value)} />
      </div>
      <div className="inputFieldBox">
        <label>Email</label>
        <input type="text" value={email} onChange={(e) => Setemail(e.target.value)} />
      </div>
      <div className="inputFieldBox">
        <label>Cell</label>
        <input type="text" value={cell} onChange={(e) => Setcell(e.target.value)} />
      </div>
      <div className="inputFieldBox">
        <label>Created Date</label>
        <input type="date" value={createddate} onChange={(e) => Setcreateddate(e.target.value)} />
      </div>
      <div className="inputFieldBox">
        <label>Status</label>
        <select value={status} onChange={(e) => { Setstatus(e.target.value) }}>
          <option value="">All</option>
          <option value="Active">Active</option>
          <option value="Deactive">Deactive</option>
          <option value="Block">Block</option>
        </select>
      </div>
      <div className="inputFieldBox">
        <label>User Type</label>
        <select size="sm" value={usertype} onChange={(e) => { Setusertype(e.target.value) }}>
          <option value="">All</option>
          <option value="Admin">Admin</option>
          <option value="Employee">Employee</option>
        </select>
      </div>
      <div className="inputFieldBox">
        <label>Gender</label>
        <p>
          Male<input type="radio" checked={gender === 'Male'} value="Male" onChange={() => Setgender('Male')} />
          Female<input type="radio" checked={gender === 'Female'} value="Female" onChange={() => Setgender('Female')} />
          Other<input type="radio" checked={gender === 'Other'} value="Other" onChange={() => Setgender('Other')} />
        </p>
      </div>
      <div className="inputFieldBox">
        <label>Qualification</label>
        <br />
        {eduList.map(item => (
          <div className="chkCtrl2">
            <input
              key={item.toString()}
              value={item}
              type="checkbox"
              checked={qualification.some(val => val === item)}
              onChange={eduHandle}
            />  <label>{item}</label>
          </div>
        ))}
      </div>
      <div className="inputFieldBox">
        <label>House No</label>
        <input type="text" value={houseno} onChange={(e) => Sethouseno(e.target.value)} />
      </div>
      <div className="inputFieldBox">
        <label>City</label>
        <select size="sm" value={city} onChange={(e) => { Setcity(e.target.value) }}>
          <option value="">All</option>
          <option value="Karachi">Karachi</option>
          <option value="Lahore">Lahore</option>
          <option value="Islamabad">Islamabad</option>
          <option value="Peshawar">Peshawar</option>
          <option value="Quetta">Quetta</option>
        </select>
      </div>
      <div className="inputFieldBox">
        <label>State</label>
        <select size="sm" value={state} onChange={(e) => { Setstate(e.target.value) }}>
          <option value="">All</option>
          <option value="Sindh">Sindh</option>
          <option value="Balochistan">Balochistan</option>
          <option value="Punjab">Punjab</option>
          <option value="KPK">KPK</option>
        </select>
      </div>
      <div className="inputFieldBox">
        <label>Country</label>
        <select size="sm" value={country} onChange={(e) => { Setcountry(e.target.value) }}>
          <option value="">All</option>
          <option value="Pakistan">Pakistan</option>
          <option value="India">India</option>
          <option value="Srilanka">Srilanka</option>
          <option value="Bangladesh">Bangladesh</option>
        </select>
      </div>
      <div className="inputFieldBox">
        <button type="button" onClick={() => updateUserInfo()}>Update</button>
      </div>
    </div>
  );
}

export default Profile;
