import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { TourDetails } from "./components/pages/tourDetails";
import { Home, AboutUs, ContactUs, TravelGuide, DayExcursions, NileCruises, EgyptTourPackages } from "./components/pages";
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
                path: "/egypt-tour-packages",
                Component: EgyptTourPackages,
            },
            {
                path: "/Egypt-tours-package/:slug",
                Component: TourDetails,
            },
            {
                path: "/nile-cruises",
                Component: NileCruises,
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
                path: "/travel-guide",
                Component: TravelGuide,
            },
            {
                path: "/day-excursions",
                Component: DayExcursions,
            },
            {
                path: "*",
                Component: NotFound,
            },
        ]
    },
]);