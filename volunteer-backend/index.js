require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const Volunteer = require("./schema/volunteerSchema");

const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb+srv://asterik:ZpAGmN9zZ74wLNl3@cluster0.jeuklyx.mongodb.net/');

// Initialize Gemini AI with API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/request-help', async (req, res) => {
    try {
        const { lat, lng, helpType } = req.body;

        if (!lat || !lng || !helpType) {
            return res.status(400).json({ error: 'Latitude, longitude, and helpType are required' });
        }

        // ✅ Wait for volunteer data before proceeding
        let volunteers = await Volunteer.find();

        if (volunteers.length === 0) {
            return res.status(404).json({ error: 'No volunteers available' });
        }

        const volunteerList = volunteers.map(v => ({
            name: v.name,
            latitude: v.location?.latitude, // ✅ Correct way to access nested latitude
            longitude: v.location?.longitude, // ✅ Correct way to access nested longitude
            skills: v.skills,
        }));
        

        let prompt = `A user is at latitude ${lat}, longitude ${lng} and needs help with ${helpType}. 
        Here is a list of volunteers with their locations:
        ${JSON.stringify(volunteerList, null, 2)}
        Based on proximity and skill match, select the best volunteer. 
        Respond with only the volunteer's name and location.`; 

        // ✅ Call Gemini AI **after** ensuring prompt has data
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
        const result = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: prompt }] }],
        });

        const aiResponse = result.response.text();

        res.json({ closestVolunteer: aiResponse });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
