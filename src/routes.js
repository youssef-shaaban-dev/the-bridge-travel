import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { TourDetails } from "./components/pages/tourDetails";
import { Home, AboutUs, ContactUs, TravelGuide, DayExcursions, NileCruises, EgyptTourPackages, CustomEgyptTours, TermsAndConditions } from "./components/pages";
import NotFound from "./components/shared/NotFound";
import { PrivacyPolicy } from "./components/pages/privacyPolicy";

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
                path: "/day-excursion/:slug",
                Component: TourDetails,
            },
            {
                path: "/nile-cruise/:slug",
                Component: TourDetails,
            },
            {
                path: "/custom-egypt-tours",
                Component: CustomEgyptTours,
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
                path: "/terms-and-conditions",
                Component: TermsAndConditions,
            },
            {
                path: "/privacy-policy",
                Component: PrivacyPolicy,
            },
            {
                path: "*",
                Component: NotFound,
            },
        ]
    },
]);