import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const Home = lazy(() => import("./components/pages").then(m => ({ default: m.Home })));
const AboutUs = lazy(() => import("./components/pages").then(m => ({ default: m.AboutUs })));
const ContactUs = lazy(() => import("./components/pages").then(m => ({ default: m.ContactUs })));
const TravelGuide = lazy(() => import("./components/pages").then(m => ({ default: m.TravelGuide })));
const DayExcursions = lazy(() => import("./components/pages").then(m => ({ default: m.DayExcursions })));
const NileCruises = lazy(() => import("./components/pages").then(m => ({ default: m.NileCruises })));
const EgyptTourPackages = lazy(() => import("./components/pages").then(m => ({ default: m.EgyptTourPackages })));
const CustomEgyptTours = lazy(() => import("./components/pages").then(m => ({ default: m.CustomEgyptTours })));
const TermsAndConditions = lazy(() => import("./components/pages").then(m => ({ default: m.TermsAndConditions })));
const PrivacyPolicy = lazy(() => import("./components/pages/privacyPolicy").then(m => ({ default: m.PrivacyPolicy })));
const TourDetails = lazy(() => import("./components/pages/tourDetails").then(m => ({ default: m.TourDetails })));
const NotFound = lazy(() => import("./components/shared/NotFound"));

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
                path: "/Egypt-tour-package/:slug",
                Component: TourDetails,
            },
            {
                path: "/day-excursion/:slug",
                Component: TourDetails,
            },
            {
                path: "/nile-cruises/:slug",
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