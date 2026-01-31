import HeroSlider from "../home/HeroSlider";
import WhyChooseUs from "../home/WhyChooseUs";
import FeaturedExperiences from "../home/FeaturedExperiences";
import GuestExperiences from "../home/GuestExperiences";
import SEO from "@/components/shared/SEO";

const Home = () => {
    return (
        <>
            <SEO
                title="Luxury Egypt Tours & Nile Cruises"
                description="Luxury Egypt tours, Nile cruises, and Red Sea holidays. Travel Egypt with confidence through Cairo, Luxor & Aswan with The Bridge Travel."
                keywords="Luxury Egypt Tours, Nile Cruises, Red Sea Holidays, Travel Egypt"
            />
            <HeroSlider />
            <WhyChooseUs />
            <FeaturedExperiences />
            <GuestExperiences />
        </>
    );
};
export default Home;
