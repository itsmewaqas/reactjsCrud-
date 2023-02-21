import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IMAGE_URL } from '../redux/constants';
import loader from '../assets/img/loader.gif';
import { connect, useSelector, useDispatch } from 'react-redux';
import { userProfileUpdate, userFetch } from '../redux/Actions/index';

function Usersdetails(props) {

  const location = useLocation();
  const { state } = location;
  const getID = state.item.ID;
  const imgRef = useRef();

  const data = useSelector((state) => {
    return state
  });

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [newprofilepic, Setnewprofilepic] = useState("");
  const [newprofilepicErr, SetnewprofilepicErr] = useState("");
  var currentPic = data.userFetchReducer.userFetchList.filter((x) => x.ID === getID)[0].profilepic;

  const profilePicHandle = (e) => {
    Setnewprofilepic(e.target.files[0]);
  }

  const updateProfile = () => {
    let ID = state.item.ID;
    let oldProfilePic = currentPic;
    if (newprofilepic == undefined || newprofilepic == "") {
      SetnewprofilepicErr("select your profilepic");
    }
    if (newprofilepic != '') {
      dispatch(userProfileUpdate(
        ID,
        newprofilepic,
        oldProfilePic
      ))
      setTimeout(() => {
        Setnewprofilepic(imgRef.current.value = null);
        SetnewprofilepicErr("");
        dispatch(userFetch());
        // navigate('/Users');
      }, 1000);
    }
    else {
      return false
    }
  }

  useEffect(() => { 
  }, [])

  return (
    <div className='container'>
      Usersdetails

      <div className='loaderContainer'>
      <div className='loader'>{data.userFetchReducer?.loading && <img src={loader} />}</div>
      </div>

      <div className='inputFileBox'>
        <label>Profile Pic</label>
        <input type="file" ref={imgRef} onChange={profilePicHandle} />
        {newprofilepic ?
          <img src={newprofilepic ? URL.createObjectURL(newprofilepic) : null} alt='' />
          : null}
        <p className='error'>{newprofilepicErr}</p>
        <button onClick={() => updateProfile()}>Update Profile</button>
      </div>
      {data.userFetchReducer?.userFetchList == null ?
        <p>data not found</p>
        :
        <div>
          <p><img style={{ width: '100px', height: '100px' }} src={IMAGE_URL + currentPic} alt="" /></p>
          <p>{data.userFetchReducer.userFetchList.filter((x) => x.ID === getID)[0].name}</p>
          <p>{data.userFetchReducer.userFetchList.filter((x) => x.ID === getID)[0].email}</p>
          <p>{data.userFetchReducer.userFetchList.filter((x) => x.ID === getID)[0].cell}</p>
          <p>{data.userFetchReducer.userFetchList.filter((x) => x.ID === getID)[0].gender}</p>
          <p>{data.userFetchReducer.userFetchList.filter((x) => x.ID === getID)[0].createddate}</p>
          <p>{data.userFetchReducer.userFetchList.filter((x) => x.ID === getID)[0].qualification.join(', ')}</p>
          <p>{data.userFetchReducer.userFetchList.filter((x) => x.ID === getID)[0].usertype}</p>
          <p>{data.userFetchReducer.userFetchList.filter((x) => x.ID === getID)[0].status}</p>
          <p>{data.userFetchReducer.userFetchList.filter((x) => x.ID === getID)[0].objLocation.houseno}</p>
          <p>{data.userFetchReducer.userFetchList.filter((x) => x.ID === getID)[0].objLocation.city}</p>
          <p>{data.userFetchReducer.userFetchList.filter((x) => x.ID === getID)[0].objLocation.state}</p>
          <p>{data.userFetchReducer.userFetchList.filter((x) => x.ID === getID)[0].objLocation.country}</p>
        </div>
      }
    </div>
  );
}

export default Usersdetails;
