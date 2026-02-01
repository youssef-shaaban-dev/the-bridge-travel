import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Star, Users, Globe, Award } from "lucide-react";

const ContactMain = () => {

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      content: "El Nasr Road, Nasr City, Cairo, Egypt",
      link: "https://maps.google.com/?q=El+Nasr+Road,+Nasr+City,+Cairo,+Egypt",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call / WhatsApp",
      content: "+20 122 77 22233 / +20 100 56 47138",
      link: "https://wa.me/201227722233",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "info@thebridgetravel.com",
      link: "mailto:info@thebridgetravel.com",
    },
  ];

  const features = [
    {
      icon: <Star className="h-5 w-5" />,
      title: "Luxury Experience",
      description: "Tailor-Made Luxury Egypt Tour Experiences."
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Expert Team",
      description: "Egyptian Tourism Specialists."
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Global Travellers",
      description: "Trusted by Travelers from the USA, the UK, Australia & More"
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Award Winning",
      description: "Recognized Excellence."
    }
  ];

  return (
    <section className="section-padding bg-[#FCF9F4] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#22455C]/5 -skew-x-12 transform translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Column: Info - نفس التصميم تماماً */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold tracking-widest text-[#BC8B22] uppercase">
              Get In Touch
            </span>
            <h2 className="mt-4 mb-8 text-4xl font-bold text-[#22455C] md:text-5xl leading-tight">
              We are here to guide you every step of the way.
            </h2>
            <p className="mb-12 text-slate-600 leading-relaxed text-lg">
              Whether you are dreaming of a private Nile cruise, a relaxing Red
              Sea holiday, or a tailor-made cultural tour, our experienced
              travel specialists are here to assist you with your travel plans.
            </p>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${info.title}: ${info.content}`}
                  className="flex items-start gap-6 group"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white border border-[#BC8B22]/20 text-[#BC8B22] shadow-sm transition-all duration-300 group-hover:bg-[#BC8B22] group-hover:text-white group-hover:-translate-y-1">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#22455C] tracking-wide uppercase text-sm mb-1">
                      {info.title}
                    </h3>
                    <p className="text-slate-600 font-medium group-hover:text-[#BC8B22] transition-colors">
                      {info.content}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-16 p-8 rounded-[32px] bg-[#22455C] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Clock className="h-24 w-24" />
              </div>
              <h4 className="text-xl font-bold mb-4 font-playfair">
                24/7 Local Support
              </h4>
              <p className="text-white/80 leading-relaxed font-light">
                Feel free to reach out to us anytime - we are always happy to
                hear from you and assist with your luxury travel plans.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Features & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between"
          >
            {/* Features Grid */}
            <div className="bg-white rounded-[40px] p-10 shadow-2xl shadow-slate-200 border border-slate-100 mb-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#22455C] mb-2 font-playfair">
                  Why Choose The Bridge Travel
                </h3>
                <p className="text-slate-500 font-medium">
                  Experience Egypt through our eyes
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-[#FCF9F4] transition-all duration-300 group"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FCF9F4] text-[#BC8B22] transition-all duration-300 group-hover:bg-[#BC8B22] group-hover:text-white">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#22455C] text-lg mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-slate-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-br from-[#BC8B22] to-[#a67c1e] rounded-[40px] p-10 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 font-playfair text-center">
                Our Journey in Numbers
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-sm font-medium text-white/90">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">1975+</div>
                  <div className="text-sm font-medium text-white/90">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-sm font-medium text-white/90">Sightseeing</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-sm font-medium text-white/90">Support</div>
                </div>
              </div>

              {/* Quick Contact CTA */}
              <div className="mt-10 pt-8 border-t border-white/20">
                <h4 className="text-lg font-bold mb-4 text-center">
                  Ready to Start Your Journey?
                </h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/201005647138"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact us on WhatsApp now"
                    className="flex-1 bg-white text-[#22455C] hover:bg-white/90 py-3 px-6 rounded-full font-bold text-center transition-all duration-300 hover:scale-105"
                  >
                    WhatsApp Now
                  </a>
                  <a
                    href="tel:+201227722233"
                    aria-label="Call us directly"
                    className="flex-1 bg-transparent border-2 border-white text-white hover:bg-white/10 py-3 px-6 rounded-full font-bold text-center transition-all duration-300 hover:scale-105"
                  >
                    Call Directly
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center text-slate-600 text-sm">
              <p className="font-medium">
                We look forward to welcoming you to Egypt.
              </p>
              <p className="mt-2">
                The Bridge Travel
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;
