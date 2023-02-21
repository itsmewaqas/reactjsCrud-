import React, { useState, useEffect } from 'react';
import {
    useNavigate,
    Link
} from "react-router-dom";
import { IMAGE_URL } from '../redux/constants';
import { connect, useSelector, useDispatch } from 'react-redux';
import { logout, userFetch } from '../redux/Actions';

function Header(props) {

    let navigate = useNavigate();

    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state
    });

    const loginDetails = useSelector(({ loginData }) => loginData.loginDetails);

    var userPicture = data?.userFetchReducer?.userFetchList?.filter((x) => x.ID === loginDetails.ID)[0].profilepic;
    var userName = data?.userFetchReducer?.userFetchList?.filter((x) => x.ID === loginDetails.ID)[0].name;

    const Logout = () => {
        dispatch(logout());
        navigate('/');
    }

    useEffect(() => {
    }, [])

    return (
        <div className='header'>
            <a className="logo"><h1>react crud app</h1></a>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Profile">Profile</Link></li>
                <li><Link to="/Users">Users</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><a onClick={() => Logout()}>Logout</a></li>
            </ul>
            <p>Welcome <span>{userName}</span>
                <img src={IMAGE_URL + userPicture} alt="" />
            </p>
        </div>
    );
}

export default Header;