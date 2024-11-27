import React, {Suspense} from 'react'
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import TCA from "../components/main/tca/TCA"
import {Outlet} from "react-router-dom"
import Loader from "../components/main/generalComponents/spinner/Loader";
import Popup from "../components/main/generalComponents/popup/Popup";

const Layout = () => {
    return (
        <>
            <Header/>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
            <TCA />
            <Footer/>
            <Popup />
        </>
    )
}

export default Layout