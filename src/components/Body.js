import React from 'react'
import Login from './Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/home",
            element: <Home />
        }
    ])
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body;
