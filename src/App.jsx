import { Suspense } from "react";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import SocialFloatingButton from "./components/shared/SocialFloatingButton";
import "./App.css";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/shared/ScrollToTop";
import ScrollToTopButton from "./components/shared/ScrollToTopButton";
import SiteIntro from "./components/shared/SiteIntro";
import PageView from "./gtm/PageView";
import Loader from "./components/shared/Loader";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <PageView />

      <SiteIntro />
      <ScrollToTop />
      <ScrollToTopButton />
      <Navbar />
      <SocialFloatingButton />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
