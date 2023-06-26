import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import AdminLayout from "./components/AdminLayout";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Trade from "./pages/Trade";
import Logistics from "./pages/Logistics";



const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: '/home',
                element: <Navigate to="/" />
            },
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about-us",
                element: <About />,
            },
            {
                path: "/contact-us",
                element: <Contact />,
            },
            {
                path: "/trade",
                element: <Trade />,
            },
            {
                path: "/logistics",
                element: <Logistics />,
            },
        ]
    },
    {
        path: '/',
        element: <AdminLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
        ]
    },
]);


export default router;