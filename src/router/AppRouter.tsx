import React, {lazy} from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../pages/Layout";
import UserRoutes from "./UserRoutes";

const AppRouter = () => {
    const NotFoundPage = lazy(() => import('../pages/notFoundPage/NotFoundPage'))

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