import { createBrowserRouter } from "react-router";
import App from "../App";
import Root from "../Components/Root/Root";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: App
            }
        ]
    }
])