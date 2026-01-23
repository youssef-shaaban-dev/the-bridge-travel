import React from 'react';
import heroImage from "@/assets/hero/temple.webp";
import logo from "@/assets/logo.png";

// Sub-components
import ContactHero from './ContactHero';
import ContactMain from './ContactMain';
import ContactClosing from './ContactClosing';

const ContactUs = () => {
    return (
        <div className="bg-white">
            <ContactHero image={heroImage} />
            <ContactMain />
            <ContactClosing logo={logo} />
        </div>
    );
};

export default ContactUs;
