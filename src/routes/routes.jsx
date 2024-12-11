import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";

import Home from "../pages/Home/Home";
import AboutUs from "../components/AboutUs";
import Products from "../components/Products";
import ContactUs from "../components/ContactUs";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/about',
                element: <AboutUs />
            },
            {
                path: '/contact',
                element: <ContactUs />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/signin',
                element: <SignIn />
            },
        ]
    }
])

export default router