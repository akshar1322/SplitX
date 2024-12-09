"use client";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer/footer";
import ScrollProgress from "../components/ui/ScrollProgress";
import Navigationbar from "../components/ui/Navigationbar";
import Headerimage from "../components/ui/Share/Headerimage";
import DeviceCheck from "../components/DeviceCheck";
import AnimatedSVG from "../components/ui/Share/AnimatedSVG";

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
          text="Make Enquiry"
        />
      <AnimatedSVG/>
        <div className="relative h-screen">
          <div
            className="absolute rounded-3xl inset-0 bg-cover bg-center opacity-55 bg-black/70"
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
                className="block mx-auto mt-6 px-8 py-4 text-lg font-semibold bg-lime-500 text-white rounded-full hover:bg-lime-600 transition-all duration-300"
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
          backgroundImageUrl="https://images.unsplash.com/photo-1646337426453-d6d57937fc3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          text="Make Enquiry"
        />
        <ScrollProgress />
        {/* Form content */}
        <Footer />
      </main>
    </DeviceCheck>
  );
};

export default Contact;
