import React, {lazy, Suspense} from 'react'
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import {Outlet} from "react-router-dom"
import Loader from "../components/main/generalComponents/spinner/Loader";
const Popup = lazy(() => import("../components/main/generalComponents/popup/Popup"))
const TCA = lazy(() => import("../components/main/tca/TCA"))

const Layout = () => {
    return (
        <>
            <Header/>
            <Suspense fallback={<Loader />}>
                <Outlet />
                <Popup />
                <TCA />
            </Suspense>
            <Footer/>
        </>
    )
}

export default Layout