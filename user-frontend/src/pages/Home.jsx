import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function EmergencyHomePage() {
  const [showForm, setShowForm] = useState(false);
  const [emergencyType, setEmergencyType] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Emergency Type:", emergencyType);
    console.log("Description:", description);
    alert("Emergency reported successfully!");
    setShowForm(false);
    setEmergencyType("");
    setDescription("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="p-6 max-w-lg w-full shadow-xl">
        <CardContent className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4">Disaster Response Hub</h1>
          <p className="text-gray-600 mb-4 text-center">
            Click below if you need emergency assistance.
          </p>
          {!showForm ? (
            <Button onClick={() => setShowForm(true)}>Request Emergency Help</Button>
          ) : (
            <form onSubmit={handleSubmit} className="w-full mt-4">
              <label className="block mb-2 font-semibold">Emergency Type</label>
              <Select value={emergencyType} onChange={(e) => setEmergencyType(e.target.value)}>
                <SelectItem value="fire">Fire</SelectItem>
                <SelectItem value="flood">Flood</SelectItem>
                <SelectItem value="earthquake">Earthquake</SelectItem>
                <SelectItem value="medical">Medical Emergency</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </Select>
              <label className="block mt-4 mb-2 font-semibold">Description (Optional)</label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the emergency..."
              />
              <Button type="submit" className="mt-4 w-full">Submit</Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}