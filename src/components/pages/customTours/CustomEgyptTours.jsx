import React, { useState } from "react";
// motion used in JSX below
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Globe,
  Plus,
  Minus,
  MessageSquare,
  Check,
  Sparkles,
  Send,
  Loader2,
} from "lucide-react";
import { sendEmail } from "@/lib/emailJS";
import { showSuccess, showError, showAlert } from "@/lib/alerts";
import ReCAPTCHA from "react-google-recaptcha";
import SEO from "@/components/shared/SEO";
import { Button } from "@/components/ui/button";
const heroImage = "/images/Egyptian-Museum-01.webp";
import logo from "@/assets/logo.png";
import AboutClosing from "../aboutUs/AboutClosing";

const InputField = ({
  icon: Icon,
  placeholder,
  type = "text",
  value,
  onChange,
  name,
}) => (
  <div className="relative group">
    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#BC8B22] transition-colors">
      {Icon && <Icon size={20} />}
    </div>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-label={placeholder}
      className="w-full h-14 pl-14 pr-6 rounded-2xl bg-[#F8FAFC] border border-slate-100 focus:border-[#BC8B22]/30 focus:bg-white focus:ring-4 focus:ring-[#BC8B22]/5 text-[#22455C] font-semibold placeholder:text-slate-400 transition-all outline-none"
      required
    />
  </div>
);

const CustomEgyptTours = () => {
  const [travellers, setTravellers] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    nationality: "",
    message: "",
  });

  const VITE_EMAILJS_TEMPLATE_ID_2 = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_2;

  const [captchaToken, setCaptchaToken] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      showAlert({
        title: "Verification Required",
        text: "Please complete the reCAPTCHA to proceed.",
        icon: "warning",
      });
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      title: "Custom Egypt Tour Enquiry",
      ...formData,
      travellers,
      type: "Custom Egypt Tour Enquiry",
      "g-recaptcha-response": captchaToken,
    };

    try {
      await sendEmail(templateParams, VITE_EMAILJS_TEMPLATE_ID_2);
      showSuccess("Success!", "Enquiry sent successfully ✅");
      setFormData({
        name: "",
        email: "",
        phone: "",
        nationality: "",
        message: "",
      });
      setTravellers(1);
      setCaptchaToken(null);
    } catch {
      showError("Oops...", "Failed to send enquiry ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Custom Egypt Tours"
        description="Create your perfect custom Egypt tour with The Bridge Travel - Luxury Egypt tours, Nile cruises, Red Sea holidays, and personalized experiences in Cairo, Luxor & Aswan."
      />
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] w-full overflow-hidden bg-[#22455C]">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Custom Egypt Tours - Luxury Private Travel"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
            loading="eager"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container-custom relative flex h-full items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-4 text-5xl font-bold text-white md:text-7xl font-playfair">
              Custom Egypt Tours
            </h1>
            <div className="mx-auto h-1 w-24 bg-[#BC8B22]" />
            <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto italic">
              The Bridge to Your Dream Journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Custom Form Section */}
      <section className="py-24 -mt-20 relative z-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-[40px] border border-[#BC8B22]/20 shadow-[0_32px_64px_-16px_rgba(34,69,92,0.1)] overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Left Side: Info */}
                <div className="lg:col-span-2 bg-[#22455C] p-10 text-white relative flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#BC8B22]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                  <div className="relative">
                    <div className="h-12 w-12 rounded-2xl bg-[#BC8B22] flex items-center justify-center mb-8 shadow-xl shadow-[#BC8B22]/20">
                      <Sparkles className="text-white" size={24} />
                    </div>
                    <h2 className="text-3xl font-black mb-6 font-playfair leading-tight">
                      Why a Custom Tour?
                    </h2>
                    <ul className="space-y-6">
                      {[
                        "Personalized Itinerary",
                        "Flexible Travel Dates",
                        "Choice of Accommodations",
                        "Private Transportation",
                        "Expert Personal Guides",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-4 text-white/80 font-medium"
                        >
                          <div className="h-5 w-5 rounded-full bg-[#BC8B22]/20 border border-[#BC8B22]/30 flex items-center justify-center shrink-0">
                            <Check size={12} className="text-[#BC8B22]" />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative mt-12 pt-8 border-t border-white/10">
                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      "Our experts will respond with a preliminary plan within
                      24 hours."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-[#BC8B22]/20 border border-[#BC8B22]/30 flex items-center justify-center">
                        <Send size={16} className="text-[#BC8B22]" />
                      </div>
                      <span className="font-bold text-[#BC8B22]">
                        Get a Free Quote
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Form */}
                <div className="lg:col-span-3 p-10">
                  <div className="flex items-center gap-3 mb-10">
                    <div className="h-2 w-2 rounded-full bg-[#BC8B22]"></div>
                    <h3 className="text-xl font-black text-[#22455C] tracking-tight uppercase">
                      Plan Your Custom Egypt Tour
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col  gap-6">
                      <InputField
                        icon={User}
                        placeholder="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      <InputField
                        icon={Mail}
                        placeholder="Email Address"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="flex flex-col flex-wrap gap-6">
                      <InputField
                        icon={Phone}
                        placeholder="Phone Number"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                      <InputField
                        icon={Globe}
                        placeholder="Nationality"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* Travellers Stepper */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-black text-[#22455C]/60 uppercase tracking-widest">
                          No. of Travellers
                        </label>
                        <span className="text-sm font-bold text-[#BC8B22]">
                          {travellers} {travellers === 1 ? "Person" : "People"}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 bg-[#F8FAFC] p-2 rounded-2xl border border-slate-100">
                        <button
                          type="button"
                          onClick={() =>
                            setTravellers(Math.max(1, travellers - 1))
                          }
                          aria-label="Decrease number of travellers"
                          className="h-12 w-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#22455C] hover:bg-[#BC8B22] hover:text-white transition-all active:scale-95"
                        >
                          <Minus size={20} aria-hidden="true" />
                        </button>
                        <div className="flex-1 text-center text-lg font-black text-[#22455C]">
                          {travellers}
                        </div>
                        <button
                          type="button"
                          onClick={() => setTravellers(travellers + 1)}
                          aria-label="Increase number of travellers"
                          className="h-12 w-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#22455C] hover:bg-[#BC8B22] hover:text-white transition-all active:scale-95"
                        >
                          <Plus size={20} aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="space-y-3">
                      <label className="text-xs font-black text-[#22455C]/60 uppercase tracking-widest">
                        Tell us about your requirements
                      </label>
                      <div className="relative group">
                        <div className="absolute left-5 top-5 text-slate-400 group-focus-within:text-[#BC8B22] transition-colors">
                          <MessageSquare size={20} />
                        </div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          aria-label="Your requirements"
                          placeholder="e.g. 10 days in March, looking for luxury hotels, private guide, interested in ancient history..."
                          className="w-full h-40 pl-14 pr-6 pt-5 rounded-2xl bg-[#F8FAFC] border border-slate-100 focus:border-[#BC8B22]/30 focus:bg-white focus:ring-4 focus:ring-[#BC8B22]/5 text-[#22455C] font-semibold placeholder:text-slate-400 transition-all outline-none resize-none"
                        />
                      </div>
                    </div>

                    {import.meta.env.VITE_RECAPTCHA_SITE_KEY ? (
                      <div className="flex justify-center py-2">
                        <ReCAPTCHA
                          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                          onChange={(token) => setCaptchaToken(token)}
                        />
                      </div>
                    ) : (
                      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium text-center mb-4">
                        reCAPTCHA site key missing
                      </div>
                    )}

                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full h-16 rounded-2xl bg-[#BC8B22] hover:bg-[#A67A1D] text-white font-black text-xl transition-all shadow-xl shadow-[#BC8B22]/20 hover:-translate-y-1 active:translate-y-0 uppercase tracking-widest mt-4"
                    >
                      {isSubmitting ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        "Enquire Now"
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AboutClosing logo={logo} />
    </div>
  );
};

export default CustomEgyptTours;
