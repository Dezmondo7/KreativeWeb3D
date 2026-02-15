// index.js (backend)
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";


dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // <<<< THIS IS THE MISSING PIECE


// OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// API route
app.post("/api/generate", async (req, res) => {
  // Prompt Injection Input Sanitization | Validation must come first
    const { prompt } = req.body;
    if (!prompt || typeof prompt !== 'string' || prompt.length > 1000) {
      return res.status(400).json({ error: "Invalid or overly long prompt." });
    }
    
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
  res.send({ success: true, data });
});

app.listen(PORT, () =>
  console.log(`🚀 Server running on ${PORT}`)
);

