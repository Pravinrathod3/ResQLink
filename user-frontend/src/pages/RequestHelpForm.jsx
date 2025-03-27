import React, { useState } from "react";

const RequestHelpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    latitude: "",
    longitude: "",
    helpType: "",
    description: "",
  });

  const helpOptions = [
    "Medical Assistance",
    "Food & Water",
    "Rescue & Evacuation",
    "Shelter",
    "Other",
  ];

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Get User's Location (Latitude & Longitude)
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData({
            ...formData,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            location: `Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`,
          });
        },
        (error) => {
          alert("Location access denied! Please enable location services.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Help Request Submitted:", formData);
    alert("Your request has been submitted successfully!");
    setFormData({
      name: "",
      phone: "",
      location: "",
      latitude: "",
      longitude: "",
      helpType: "",
      description: "",
    });
  };

  return (
    <section className="p-8 max-w-lg mx-auto bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">🆘 Request Help</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded"
        />

        {/* Location Input + Get Location Button */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={getLocation}
            className="bg-blue-500 text-white px-3 rounded-lg font-semibold hover:bg-blue-600"
          >
            📍 Get My Location
          </button>
        </div>

        {/* Help Type Selection */}
        <select
          name="helpType"
          value={formData.helpType}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded"
        >
          <option value="">Select Help Type</option>
          {helpOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* Description Input */}
        <textarea
          name="description"
          placeholder="Describe your situation..."
          value={formData.description}
          onChange={handleChange}
          rows="3"
          required
          className="p-3 border border-gray-300 rounded"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600"
        >
          Submit Request
        </button>
      </form>
    </section>
  );
};

export default RequestHelpForm;
