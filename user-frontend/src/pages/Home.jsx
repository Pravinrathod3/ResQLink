
import React from "react";
import { useNavigate } from "react-router-dom";


const EmergencyHomePage = () => {
  const steps = [
    { step: "1️⃣", title: "Submit Your Request", desc: "Provide details and your location." },
    { step: "2️⃣", title: "Get Matched", desc: "Our system connects you to available support." },
    { step: "3️⃣", title: "Receive Assistance", desc: "Track updates and get real-time help." },
  ];

  const resources = [
    { title: "🏥 Nearby Hospitals", desc: "Find emergency medical assistance near you." },
    { title: "🏠 Relief Shelters", desc: "Locate shelters providing food & safety." },
    { title: "📞 Helpline Numbers", desc: "Connect with emergency support services." },
  ];

  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center p-10 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Get Help When You Need It Most</h1>
        <p className="text-lg mb-6">
          Request assistance, track support, and find emergency resources in real-time.
        </p>
        <div className="flex gap-4">
          <button onClick={() => navigate("/reguest-help")} className="bg-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-red-600">
            🆘 Request Help
          </button>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
            🔍 Track My Request
          </button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {steps.map(({ step, title, desc }, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">{step}</h3>
              <h4 className="text-xl font-semibold mt-2">{title}</h4>
              <p className="text-gray-600 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Resources Section */}
      <section className="p-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Emergency Resources</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {resources.map(({ title, desc }, index) => (
            <div key={index} className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-700 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EmergencyHomePage;
