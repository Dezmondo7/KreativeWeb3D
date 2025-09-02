// index.js (backend)
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import heatmapAPI from './heatmapAPI.js'

dotenv.config();

app.use(bodyParser.json()); //heatmap


// Middleware
app.use(cors());
app.use(express.json()); // <<<< THIS IS THE MISSING PIECE

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: [/^http:\/\/localhost:\d+$/],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json()); // heatmap

app.use("/log", heatmapAPI)

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${PORT}`);
}); 

// OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// API route
app.post("/api/generate", async (req, res) => {
  try {
    console.log("✅ /api/generate called with prompt:", req.body.prompt);

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // cheap + fast
      messages: [{ role: "user", content: req.body.prompt }],
    });

    const content = response.choices[0].message.content;
    console.log("🤖 OpenAI response:", content);

    res.json({ result: content });
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ error: "Failed to generate response" });
  }
});

app.get("/", (req, res) => {
  res.send("Backend is live! ");
});

app.listen(PORT, () =>
  console.log(`🚀 Server running on ${PORT}`)
);

// Below is the request from the heatmapAPI.js

app.post("/log", async (req, res) => {
  try {
    const event = req.body; // event from frontend
    const result = await logHeatmapEvent(event);
    res.status(200).json({ success: true, result });
  } catch (err) {
    console.error("Error logging event:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});