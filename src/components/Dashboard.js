import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Header from '../sharedComponents/Header';
import Footer from '../sharedComponents/Footer';
import { connect, useSelector, useDispatch } from 'react-redux';
import { userFetch } from '../redux/Actions';

function Dashboard(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userFetch());
  }, [])

  return (
    <div className="mainContainer">
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Dashboard;
