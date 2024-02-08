import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Dashboard from "../DashboardLayout/Dashboard/Dashboard";
import DashboardHome from "../DashboardLayout/DashboardHome/DashboardHome";
import TaskFrom from "../DashboardLayout/TaskForm/TaskFrom";
import Contact from "../Pages/Contact/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element:<Register></Register>
        },
        {
            path: '/contact',
            element:<Contact></Contact>
        }
    ]
  },
  {
    path:'dashboard',
    element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
    children: [
        {
           path:'',
           element: <DashboardHome></DashboardHome>
        },
        {
            path: 'taskForm',
            element: <TaskFrom></TaskFrom>
        }
    ]
}
]);

export default router;
