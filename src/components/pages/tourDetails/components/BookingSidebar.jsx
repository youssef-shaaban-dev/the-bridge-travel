import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone, Globe, Plus, Minus, Check, Loader2 } from "lucide-react";
import { sendEmail } from "@/lib/emailJS";
import { showSuccess, showError, showAlert } from "@/lib/alerts";
import ReCAPTCHA from "react-google-recaptcha";

const InputField = ({
  icon: Icon,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}) => (
  <div className="relative group">
    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#BC8B22] transition-colors">
      <Icon size={20} />
    </div>
    <input
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className="w-full h-14 pl-14 pr-6 rounded-2xl bg-[#F8FAFC] border border-slate-100 focus:border-[#BC8B22]/30 focus:bg-white focus:ring-4 focus:ring-[#BC8B22]/5 text-[#22455C] font-semibold placeholder:text-slate-400 transition-all outline-none"
      required
    />
    {/* Force usage of Icon if linter misses JSX */}
    <span className="hidden">{Icon ? "" : ""}</span>
  </div>
);

const BookingSidebar = ({
  rates = [],
  selectedRateIndex = 0,
  onRateSelect,
  title
}) => {
  const [travellers, setTravellers] = useState(1);
  const [captchaToken, setCaptchaToken] = useState(null);
  const currentRate = rates[selectedRateIndex] || { price: 0 };
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    nationality: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const calculateTotal = () => {
    return currentRate.price * travellers;
  };

  const handleSendEmail = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.nationality
    ) {
      showAlert({
        title: "Missing Info",
        text: "Please fill all fields.",
        icon: "warning",
      });
      return;
    }

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
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      nationality: formData.nationality,
      travellers,
      experience: currentRate.grade,
      price: `$${calculateTotal().toFixed(0)}`,
      "g-recaptcha-response": captchaToken,
    };

    try {
      await sendEmail(templateParams);
      showSuccess("Success!", "Booking details sent successfully ✅");
      setCaptchaToken(null);
        setFormData({
        name: "",
        email: "",
        phone: "",
        nationality: "",
      });
      setTravellers(1);
    } catch {
      showError("Oops...", "Failed to send booking ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-[40px] border border-[#BC8B22] p-8 pt-0 shadow-2xl shadow-slate-200/50 sticky top-28 overflow-hidden">
      {/* Header with Background */}
      <div className="mx-[-2rem] px-8 py-8 bg-[#22455C] mb-8 text-white relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl opacity-20"></div>
        <div className="relative text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-white/60 text-xs font-bold uppercase tracking-[0.2em]">
              {currentRate.grade}
            </span>
          </div>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-4xl font-black tracking-tight text-[#BC8B22] drop-shadow-sm">
              ${currentRate.price.toFixed(0)}
            </span>
            <span className="text-white/60 text-sm font-medium italic">
              / per person
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-7">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-[#BC8B22]"></div>
          <h3 className="text-lg font-black text-[#22455C] tracking-tight">
            Book This Tour
          </h3>
        </div>

        <div className="space-y-4">
          <InputField
            icon={User}
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <InputField
            icon={Mail}
            placeholder="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            icon={Phone}
            placeholder="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <InputField
            icon={Globe}
            placeholder="Nationality"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
          />
        </div>

        {/* Custom Travellers Stepper */}
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
              onClick={() => setTravellers(Math.max(1, travellers - 1))}
              className="h-12 w-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#22455C] hover:bg-[#BC8B22] hover:text-white hover:border-[#BC8B22] transition-all shadow-sm active:scale-95"
            >
              <Minus size={20} />
            </button>
            <div className="flex-1 text-center text-lg font-black text-[#22455C]">
              {travellers}
            </div>
            <button
              onClick={() => setTravellers(travellers + 1)}
              className="h-12 w-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#22455C] hover:bg-[#BC8B22] hover:text-white hover:border-[#BC8B22] transition-all shadow-sm active:scale-95"
            >
              <Plus size={20} />
            </button>
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-slate-50">
          <label className="text-xs font-black text-[#22455C]/60 uppercase tracking-widest">
            Select Experience Level
          </label>

          <div className="grid grid-cols-1 gap-3">
            {rates.map((rate, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer group ${
                  selectedRateIndex === idx
                    ? "bg-[#BC8B22]/5 border-[#BC8B22] translate-x-1"
                    : "bg-white border-slate-100 hover:border-[#BC8B22]/30"
                }`}
                onClick={() => onRateSelect(idx)}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`h-6 w-6 rounded-lg border-2 transition-all flex items-center justify-center ${
                      selectedRateIndex === idx
                        ? "bg-[#BC8B22] border-[#BC8B22]"
                        : "bg-white border-slate-200 group-hover:border-[#BC8B22]"
                    }`}
                  >
                    {selectedRateIndex === idx && (
                      <Check size={14} className="text-white stroke-[3px]" />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span
                      className={`text-[10px] font-black uppercase tracking-widest leading-none mb-1 ${selectedRateIndex === idx ? "text-[#BC8B22]" : "text-slate-400"}`}
                    >
                      {rate.description}
                    </span>
                    <span
                      className={`text-sm font-bold transition-colors ${selectedRateIndex === idx ? "text-[#22455C]" : "text-slate-500"}`}
                    >
                      {rate.grade}
                    </span>
                  </div>
                </div>
                <span
                  className={`text-sm font-black ${selectedRateIndex === idx ? "text-[#BC8B22]" : "text-[#22455C]"}`}
                >
                  ${rate.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100">
          <div className="bg-[#22455C] rounded-3xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12 blur-2xl opacity-20"></div>
            <div className="relative flex items-center justify-between mb-4">
              <span className="text-white/60 text-sm font-bold uppercase tracking-wider">
                Total Amount
              </span>
              <div className="h-px flex-1 bg-white/10 mx-4"></div>
            </div>
            <div className="relative flex items-end justify-between">
              <span className="text-4xl font-black text-[#BC8B22] tracking-tighter">
                ${calculateTotal().toFixed(0)}
              </span>
              <div className="text-right">
                <p className="text-white/40 text-[10px] uppercase font-black tracking-widest leading-none mb-1">
                  Tax Included
                </p>
                <p className="text-white/80 text-[10px] font-bold">
                  Secure Booking
                </p>
              </div>
            </div>
          </div>

          {import.meta.env.VITE_RECAPTCHA_SITE_KEY ? (
            <div className="mt-6 flex justify-center scale-90 origin-center">
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                onChange={(token) => setCaptchaToken(token)}
              />
            </div>
          ) : (
            <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium text-center">
              reCAPTCHA configuration missing (VITE_RECAPTCHA_SITE_KEY)
            </div>
          )}

          <Button
            isdisabled={isSubmitting}
            onClick={handleSendEmail}
            className="w-full h-16 mt-6 rounded-[20px] bg-[#BC8B22] hover:bg-[#A67A1D] text-white font-black text-xl transition-all shadow-2xl shadow-[#BC8B22]/30 hover:shadow-[#BC8B22]/40 hover:-translate-y-1 active:translate-y-0 uppercase tracking-widest"
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin mx-auto" size={24} />
            ) : (
              "Enquire Now"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingSidebar;
