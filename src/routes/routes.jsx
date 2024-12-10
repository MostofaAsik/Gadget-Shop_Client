import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Banner from "../pages/Home/HomePages/Banner/Banner";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Banner />
            }
        ]
    }
])

export default router