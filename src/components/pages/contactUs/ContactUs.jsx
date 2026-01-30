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
                title="Contact Us"
                description="Get in touch with The Bridge Travel. We are here to help you plan your perfect luxury Egypt tour. Reach out for any inquiries or custom travel requests."
            />
            <ContactHero image={heroImage} />
            <ContactMain />
            <ContactClosing logo={logo} />
        </div>
    );
};

export default ContactUs;
