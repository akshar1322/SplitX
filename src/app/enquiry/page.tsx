"use client";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer/footer";
import ScrollProgress from "../components/ui/ScrollProgress";
import Navigationbar from "../components/ui/Navigationbar";
import Headerimage from "../components/ui/Share/Headerimage";
import DeviceCheck from "../components/DeviceCheck";
import AnimatedSVG from "../components/ui/Share/AnimatedSVG";
import useDisableInspect from "../hooks/disableInspect";
import useDisableRightClick from "../hooks/useDisableRightClick";

const Contact: React.FC = () => {
  useDisableInspect()
  useDisableRightClick()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    currentWebsite: "",
    interest: "",
    foundUs: "",
    beverage: "",
    whatsappAvailable: "no",
    whatsappNumber: "",
    message: "",
    consent: false,
  });

  const [status, setStatus] = useState<string | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    document.title = 'Enquiry | SPLIX';
    const isSubmitted = localStorage.getItem("formSubmitted");
    if (isSubmitted === "true") {
      setShowThankYou(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLElement>) => {
    const { name, value, type } = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    const newValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      access_key: "b7bb07a7-b027-47c3-8bea-be0f419ba1fd",
      ...formData,
      consent: formData.consent ? "Yes" : "No",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully");
        setShowThankYou(true);
        localStorage.setItem("formSubmitted", "true");
      } else {
        setStatus(result.message || "Failed to send message");
      }
    } catch (error) {
      setStatus("An unexpected error occurred");
    }
  };

  if (showThankYou) {
    return (
      <main className="bg-transparent font-PoppinsRegular">
        <Navigationbar />
        <ScrollProgress />
        <Headerimage
          backgroundImageUrl="https://images.unsplash.com/photo-1646337426453-d6d57937fc3f?q=80&w=2070&auto=format&fit=crop"
          text="Make Enquiry"
        />
        <AnimatedSVG />
        <div className="relative h-screen">
          <div
            className="absolute inset-0 bg-cover rounded-3xl bg-center bg-black/70"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1649864735550-ba62b65226a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              backgroundAttachment: "fixed",
            }}
          />
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="w-full max-w-4xl p-10 bg-black/70 rounded-3xl shadow-lg">
              <h1 className="text-6xl text-white font-PoppinsBold text-center mb-8">
                Thank You for Reaching Out!
              </h1>
              <p className="text-2xl text-lime-500 text-center mb-8">
                Your message has been received. Our team will get back to you shortly. Have a wonderful day!
              </p>
              <button
                className="block mx-auto mt-6 px-8 py-4 text-lg font-semibold bg-lime-500 text-black rounded-full hover:bg-lime-700 transition-all hover:text-cyan-50 duration-300"
                onClick={() => window.location.href = '/'}
              >
                Go Back to Homepage
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <DeviceCheck>
      <main className="bg-transparent font-PoppinsRegular">
        <Navigationbar />
        <Headerimage
          backgroundImageUrl="https://images.unsplash.com/photo-1646337426453-d6d57937fc3f?q=80&w=2070&auto=format&fit=crop"
          text="Make Enquiry"
        />
        <ScrollProgress />
        <AnimatedSVG />
        <div className="relative z-10 flex items-center justify-center h-full bg-transparent bg-opacity-60 backdrop-blur-lg">
          <div className="w-full max-w-5xl p-8 bg-transparent rounded-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-lime-500">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-orange-500 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-lime-500">Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-orange-500 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-lime-500">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-orange-500 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-lime-500">Current Website</label>
                <input
                  type="text"
                  name="currentWebsite"
                  placeholder="Current Website"
                  value={formData.currentWebsite}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-orange-500 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-lime-500">What is your interest?</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-orange-500 text-gray-900"
                >
                  <option value="">Select</option>
                  <option value="ecommerce">Ecommerce</option>
                  <option value="website-development">Website Development</option>
                  <option value="app-development">App Development</option>
                  <option value="domains-hosting">Domains and Hosting</option>
                  <option value="just-meet">Just Meet</option>
                  <option value="works-with-splix">Works with Splix</option>
                </select>
              </div>
              <div>
                <label className="block text-lime-500">Where did you find us?</label>
                <select
                  name="foundUs"
                  value={formData.foundUs}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-orange-500 text-gray-900"
                >
                  <option value="">Select</option>
                  <option value="google">Via Google</option>
                  <option value="friend">Via Friend</option>
                  <option value="ads">Via Ads</option>
                  <option value="recently-met">We have met recently</option>
                  <option value="suggestions">Via Suggestions</option>
                </select>
              </div>
              <div>
                <label className="block text-lime-500">Choose Your Beverage</label>
                <select
                  name="beverage"
                  value={formData.beverage}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-orange-500 text-gray-900"
                >
                  <option value="">Select</option>
                  <option value="masala-chai">Masala Chai</option>
                  <option value="kulhad-chai">Kulhad Chai</option>
                  <option value="coffee">Coffee</option>
                  <option value="bournvita">Bournvita</option>
                </select>
              </div>
              <div>
                <label className="block text-lime-500">WhatsApp Available?</label>
                <select
                  name="whatsappAvailable"
                  value={formData.whatsappAvailable}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-orange-500 text-gray-900"
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              {formData.whatsappAvailable === "yes" && (
                <div>
                  <input
                    type="text"
                    name="whatsappNumber"
                    placeholder="Add your WhatsApp number"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-orange-500 text-gray-900"
                  />
                </div>
              )}
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 text-gray-900"
                />
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  type="submit"
                  className="relative px-8 py-2 rounded-full text-white font-semibold bg-lime-500"
                >
                  Submit
                </button>
              </div>
              {status && <p className="text-center text-lg mt-6">{status}</p>}
            </form>
          </div>
        </div>
        <Footer />
      </main>
    </DeviceCheck>
  );
};

export default Contact;
