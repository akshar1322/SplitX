// src/pages/Home.js
import React, { useEffect } from "react";
import addCustomer from "../services/addCustomer";
import fetchCustomer from "../services/fetchCustomer";
import listenToFeedback from "../services/listenToFeedback";

const Home = () => {
  useEffect(() => {
    // Add a temporary customer
    addCustomer(); // This will add a customer with the sample data you provided in addCustomer.js

    // Fetch customer by ID (replace 'SX-WB-0198-1025SXWA' with the actual ID)
    fetchCustomer("SX-WB-0198-1025SXWA"); // Change this to a valid customer ID in your Firestore

    // Listen for feedback updates in real-time
    listenToFeedback(); // This will start listening to any feedback updates

  }, []);

  return (
    <div>
      <h1>Welcome to the Feedback System</h1>
      {/* You can add more UI components here to display customer data */}
    </div>
  );
};

export default Home;
