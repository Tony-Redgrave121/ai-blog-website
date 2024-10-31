import React from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import TCA from "../components/main/tca/TCA";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet />
            <TCA />
            <Footer/>
        </>
    );
};

export default Layout;