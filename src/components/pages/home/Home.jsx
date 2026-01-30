import HeroSlider from "../home/HeroSlider";
import WhyChooseUs from "../home/WhyChooseUs";
import FeaturedExperiences from "../home/FeaturedExperiences";
import GuestExperiences from "../home/GuestExperiences";
import SEO from "@/components/shared/SEO";

const Home = () => {
    return (
        <>
            <SEO
                title="Home"
                description="Experience the ultimate luxury with The Bridge Travel. Custom Egypt tours, Nile cruises, and exclusive cultural experiences tailored just for you."
                keywords="Luxury Egypt Tours, Private Egypt Travel, Nile Cruises, Tailor-made Egypt Holidays"
            />
            <HeroSlider />
            <WhyChooseUs />
            <FeaturedExperiences />
            <GuestExperiences />
        </>
    );
};
export default Home;