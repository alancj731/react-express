import React, { useEffect, useState } from 'react'
import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import InfoPage from "../layout/InfoPage";
import FeedBackPage from '../layout/FeedBack';
import NothingPage from '../layout/NothingPage';
import { InfoItemData } from '../models/InfoItemData';
import FetchCourseInfo from '../api/FetchCourseInfo';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'information', element: <InfoPage />},  
            { path: 'feedback', element: <FeedBackPage />},
            { path:'*', element: <NothingPage />},  
        ]
    }
]

export const router = createBrowserRouter(routes);