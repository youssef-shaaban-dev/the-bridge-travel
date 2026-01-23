import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { TourDetails } from "./components/pages/tourDetails";
import { Home, AboutUs, ContactUs } from "./components/pages";
import NotFound from "./components/shared/NotFound";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "/",
                index: true,
                Component: Home,
            },
            {
                path: "/Egypt-tours-package/:slug",
                Component: TourDetails,
            },
            {
                path: "/about-us",
                Component: AboutUs,
            },
            {
                path: "/contact-us",
                Component: ContactUs,
            },
            {
                path: "*",
                Component: NotFound,
            },
        ]
    },
]);