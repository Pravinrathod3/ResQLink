import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TrackRequest = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Simulating API fetch (Replace with actual API call)
    const mockRequests = [
      {
        id: 1,
        status: "Help Dispatched",
        volunteer: "Rahul Sharma",
        estimatedTime: "15 mins",
        requestedItems: ["Food Packets", "Medical Kit"],
      },
      {
        id: 2,
        status: "Pending",
        volunteer: "Not Assigned Yet",
        estimatedTime: "N/A",
        requestedItems: ["Water Bottles", "Blankets"],
      },
    ];

    setRequests(mockRequests);
  }, []);

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h2 className="text-3xl font-bold mb-4 text-center">📌 Your Help Requests</h2>
      <p className="text-gray-600 text-center mb-6">Track the status of your requests below.</p>

      <div className="space-y-6">
        {requests.length === 0 ? (
          <p className="text-center text-gray-500">No active help requests found.</p>
        ) : (
          requests.map((request, index) => (
            <Card key={index} className="border border-gray-300 shadow-md">
              <CardHeader>
                <CardTitle>Request #{request.id}</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Status:</strong> <span className="text-blue-600">{request.status}</span></p>
                <p><strong>Volunteer:</strong> {request.volunteer}</p>
                <p><strong>Estimated Arrival:</strong> {request.estimatedTime}</p>
                <p><strong>Requested Help:</strong> {request.requestedItems.join(", ")}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default TrackRequest;
