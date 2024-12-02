"use client";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer/footer";
import ScrollProgress from "../components/ui/ScrollProgress";
import Navigationbar from "../components/ui/Navigationbar";
import Headerimage from "../components/ui/Share/Headerimage";


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    consent: false,
    whatsappAvailable: "no",
    whatsappNumber: "",
    currentWebsite: "",
    interest: "",
    foundUs: "",
    message: "",
    beverage: "",
  });

  const [status, setStatus] = useState<string | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    document.title = 'Enquiry | SPLIXTECH';
    // Check localStorage to determine if the thank-you message should be shown
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully");
        setFormData({
          name: "",
          phone: "",
          email: "",
          consent: false,
          whatsappAvailable: "no",
          whatsappNumber: "",
          currentWebsite: "",
          interest: "",
          foundUs: "",
          message: "",
          beverage: "",
        });

        // Show thank-you message and set localStorage flag
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
        backgroundImageUrl="https://images.unsplash.com/photo-1646337426453-d6d57937fc3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        text="Make Enquiry"  />

        <div className="relative h-full">
          <div
            className="absolute inset-0 bg-cover w-full h-full p-4 bg-black bg-center"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1649864735550-ba62b65226a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", 
              backgroundAttachment: "fixed",
            }}
           />
          <div className="relative z-10 flex items-center justify-center h-full bg-transparent bg-opacity-60 backdrop-blur-lg">
            <div className="w-full max-w-4xl p-8 bg-transparent rounded-lg">
              <h1 className="text-4xl text-white font-PoppinsBold text-center mb-6">
                Thank You for Reaching Out!
              </h1>
              <p className="text-lg text-lime-500 text-center">
                Your message has been received. Our team will get back to you shortly. Have a wonderful day!
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-transparent font-PoppinsRegular">
      <Navigationbar />
      <ScrollProgress />
      <div className="relative h-full">
        <div
          className="absolute inset-0 bg-cover bg-black bg-center"
          style={{
            backgroundImage: "url(../Image/Image-hero/Underground mato LED Display.jpg)",
            backgroundAttachment: "fixed",
          }}
        />
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
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
