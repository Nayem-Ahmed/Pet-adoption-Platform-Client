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
import Dashboard from "../LayOut/Dashboard";
import MyAddedPet from "../Pages/Dashboard/MyAddedPet";
import AddPet from "../Pages/Dashboard/AddPet";
import CreateDonationCampaign from "../Pages/Dashboard/CreateDonationCampaign";
import Privateroute from "../Routes/Privateroute";

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
                loader: ({ params }) => fetch(`https://pet-adoption-server-three.vercel.app/petlisting/${params.id}`),
                element: <Privateroute> <ListingDetails></ListingDetails></Privateroute>,
                
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
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'/dashboard/addpet',
                element:<AddPet></AddPet>,
            },
            {
                path:'/dashboard/myaddedpets',
                element:<MyAddedPet></MyAddedPet>,
            },
            {
                path:'/dashboard/createdonationcampaign',
                element:<CreateDonationCampaign></CreateDonationCampaign>,
            },
        ]
    }

])
export default router;