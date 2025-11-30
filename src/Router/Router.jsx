import { createBrowserRouter } from "react-router";
import App from "../App";
import Root from "../Components/Root/Root";
import Login from "../Components/Login/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: App
            }, 
            {
                path: 'login',
                Component: Login
            }
        ]
    }
])