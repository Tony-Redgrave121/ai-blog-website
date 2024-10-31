import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../builds/desktop/pages/Layout";
import UserRoutes from "./UserRoutes";
import NotFoundPage from "../builds/desktop/pages/not_found_page/NotFoundPage"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                {UserRoutes.map(({path, Component}) => <Route key={path} path={path} element={<Component/>}/>)}
            </Route>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    );
};

export default AppRouter;