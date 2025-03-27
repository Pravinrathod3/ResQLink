import { useState } from "react";

const VolunteerLogin = () => {
  const [volunteer, setVolunteer] = useState({
    name: "",
    phone: "",
    location: "",
    skills: "",
  });

  const handleChange = (e) => {
    setVolunteer({ ...volunteer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Volunteer Data:", volunteer); // Temporary console log instead of navigation
    alert("Login successful!"); // Replace with actual logic later
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Volunteer Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="skills"
            placeholder="Skills (e.g., First Aid, Driving)"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerLogin;
