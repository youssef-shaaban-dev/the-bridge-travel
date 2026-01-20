import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { TourDetails } from "./components/pages/tourDetails";
import { Home } from "./components/pages";
// import NotFound from "@/NotFound";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component:  App ,
        children:[
            {
                path: "/",
                index: true,
                Component: Home,
            },
            {
                path: "/Egypt-tours-package/:tourName",
                Component: TourDetails,
            },
        ]
    },
    
    // {path:"*", Component: <NotFound />},
    
])