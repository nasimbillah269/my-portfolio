import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Sheard/Footer/Footer';
import Navber from '../Pages/Home/Sheard/Navber/Navber';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;