import React, { useState, useEffect } from 'react';
import {
    useNavigate,
    Link
} from "react-router-dom";

function Loginheader(props) {

    let navigate = useNavigate();

    useEffect(() => {
    }, [])

    return (
        <div className='header'>
            <a className="logo"><h1>react crud app</h1></a>
            <ul>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/Signup">Signup</Link></li>
                <li><Link to="/Forgetpassword">Forgetpassword</Link></li>
            </ul>
        </div>
    );
}

export default Loginheader;