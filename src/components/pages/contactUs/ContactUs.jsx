import React from 'react';
import heroImage from "@/assets/images/Jordan-02.webp";
import logo from "@/assets/logo.png";

// Sub-components
import ContactHero from './ContactHero';
import ContactMain from './ContactMain';
import ContactClosing from './ContactClosing';
import SEO from '@/components/shared/SEO';

const ContactUs = () => {
    return (
        <div className="bg-white">
            <SEO
                title="Contact Egypt Tour Experts"
                description="Get in touch with The Bridge Travel for luxury Egypt tours, Nile cruises, Red Sea holidays, and custom itineraries via Egypt tour experts"
            />
            <ContactHero image={heroImage} />
            <ContactMain />
            <ContactClosing logo={logo} />
        </div>
    );
};

export default ContactUs;
