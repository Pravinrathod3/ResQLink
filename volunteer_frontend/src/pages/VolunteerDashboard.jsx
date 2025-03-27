import { useState } from "react";

const VolunteerDashboard = () => {
  const [isOnline, setIsOnline] = useState(true);

  const toggleAvailability = () => {
    setIsOnline(!isOnline);
  };

  const requests = [
    { name: "Rahul Sharma", problem: "Medical Emergency", description: "Needs urgent first aid" },
    { name: "Priya Mehta", problem: "Food Shortage", description: "Family requires immediate supplies" },
  ];

  const pastWork = [
    { name: "Amit Kumar", problem: "Shelter Needed", status: "Resolved" },
    { name: "Sneha Patel", problem: "Transport Assistance", status: "Completed" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Volunteer Dashboard</h2>
          <button
            onClick={toggleAvailability}
            className={`px-4 py-2 rounded-lg text-white ${
              isOnline ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {isOnline ? "Onboard" : "Offboard"}
          </button>
        </div>

        <h3 className="text-lg font-semibold mt-4">Active Requests</h3>
        <div className="space-y-3">
          {requests.map((req, index) => (
            <div key={index} className="p-3 border rounded-md shadow-sm bg-gray-50">
              <h4 className="font-semibold">{req.name}</h4>
              <p className="text-sm text-gray-700">
                <strong>Problem:</strong> {req.problem}
              </p>
              <p className="text-sm text-gray-600">{req.description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold mt-6">Past Work</h3>
        <div className="space-y-3">
          {pastWork.map((work, index) => (
            <div key={index} className="p-3 border rounded-md shadow-sm bg-gray-50">
              <h4 className="font-semibold">{work.name}</h4>
              <p className="text-sm text-gray-700">
                <strong>Problem:</strong> {work.problem}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Status:</strong> {work.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;
