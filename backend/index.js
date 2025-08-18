// 1️⃣ Load environment variables
import "dotenv/config"; // automatically loads .env
import fs from "fs";
import express from "express";
import cors from "cors";
import OpenAI from "openai";

// 2️⃣ Debug: check if API key loaded
console.log(
  "OPENAI_API_KEY:",
  process.env.OPENAI_API_KEY ? "loaded ✅" : "missing ❌"
);

// 3️⃣ Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 4️⃣ Initialize app
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 5️⃣ Token usage tracking
const usageFile = "./usage.json";
let totalTokensUsed = 0;

function loadUsage() {
  try {
    const data = fs.readFileSync(usageFile, "utf-8");
    totalTokensUsed = JSON.parse(data).totalTokensUsed;
  } catch (err) {
    console.log("No usage file found, starting at 0 tokens.");
    totalTokensUsed = 0;
  }
}

function saveUsage() {
  fs.writeFileSync(usageFile, JSON.stringify({ totalTokensUsed }));
}

// Initialize usage
loadUsage();

const TOKEN_BUDGET = 20000000; // ~£5 budget

// 6️⃣ Routes
app.post("/api/generate", async (req, res) => {
  const { prompt } = req.body;
  console.log("✅ /api/generate called with prompt:", prompt);

  if (!prompt || !prompt.trim()) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const promptTokens = Math.ceil(prompt.split(" ").length * 1.33);

    if (totalTokensUsed + promptTokens > TOKEN_BUDGET) {
      return res
        .status(403)
        .json({ error: "Token budget exceeded. Add more credit to continue." });
    }

    // 🔥 Call OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    // Debug log full OpenAI response
    console.log("🔎 OpenAI raw response:", JSON.stringify(completion, null, 2));

    const responseTokens = completion.usage?.total_tokens || 0;
    totalTokensUsed += responseTokens;
    saveUsage();

    const result = completion.choices?.[0]?.message?.content || "";

    res.json({ result });
  } catch (error) {
    console.error("❌ Error in /api/generate:", error);
    res.status(500).json({ error: error.message || "Something went wrong" });
  }
});

// 7️⃣ Token usage endpoint
app.get("/api/usage", (req, res) => {
  const remainingTokens = TOKEN_BUDGET - totalTokensUsed;
  res.json({
    totalTokensUsed,
    remainingTokens,
    message: `You have ${remainingTokens} tokens remaining out of your budget.`,
  });
});

// 8️⃣ Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});