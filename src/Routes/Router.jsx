import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Home/Home";
import Services from "../Pages/Services";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

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
                path:"/about",
                element:<About></About>,
                
            },
            {
                path:"/contact",
                element:<Contact></Contact>,
                
            }
        ]
    }
])
export default router;