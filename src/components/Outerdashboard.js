import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Loginheader from '../sharedComponents/Loginheader';
import Loginfooter from '../sharedComponents/Loginfooter';

function Outerdashboard(props) {
  return (
    <div className="mainContainer">
      <header>
        <Loginheader />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Loginfooter />
      </footer>
    </div>
  );
}

export default Outerdashboard;
