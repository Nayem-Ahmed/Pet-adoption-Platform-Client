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
import Privetroute from "../Routes/Privateroute";
import ListingDetails from "../Pages/ListingDetails";

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
                path:"/listing/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/petlisting/${params.id}`),
                element:  <ListingDetails></ListingDetails>,
                
            },
            {
                path:"/contact",
                element:<Contact></Contact>,
                
            },
            {
                path:"/donation",
                element: <Privetroute><Donation></Donation></Privetroute>,
                
            },
            {
                path:"/signin",
                element: <Signin></Signin>,
                
            },
            {
                path:"/signup",
                element: <SignUp></SignUp>,
                
            }
        ]
    }
])
export default router;