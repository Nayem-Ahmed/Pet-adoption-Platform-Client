import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Home/Home";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";
import Listing from "../Pages/Listing";
import Donation from "../Pages/Donation";
import Signin from "../Components/Signin";
import SignUp from "../Components/SignUp";

const router= createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                
            },
            {
                path:"/services",
                element:<Services></Services>,
                
            },
            {
                path:"/listing",
                element: <Listing></Listing>,
                
            },
            {
                path:"/contact",
                element:<Contact></Contact>,
                
            },
            {
                path:"/donation",
                element: <Donation></Donation>,
                
            },
            {
                path:"/signin",
                element:  <Signin></Signin>,
                
            },
            {
                path:"/signup",
                element: <SignUp></SignUp>,
                
            }
        ]
    }
])
export default router;