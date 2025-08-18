// 1️⃣ Load environment variables first
import 'dotenv/config'; // automatically loads .env from the same folder
import fs from 'fs';
import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';

// 2️⃣ Debug: check if API key loaded
console.log(
  "OPENAI_API_KEY:",
  process.env.OPENAI_API_KEY ? "loaded ✅" : "missing ❌"
);

// 3️⃣ Initialize app
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 4️⃣ Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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
  try {
    const { prompt } = req.body;

    const promptTokens = Math.ceil(prompt.split(" ").length * 1.33);

    if (totalTokensUsed + promptTokens > TOKEN_BUDGET) {
      return res
        .status(403)
        .json({ error: "Token budget exceeded. Add more credit to continue." });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const responseTokens = completion.usage?.total_tokens || 0;
    totalTokensUsed += responseTokens;

    saveUsage();

    res.json({ result: completion.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.get("/api/usage", (req, res) => {
  const remainingTokens = TOKEN_BUDGET - totalTokensUsed;
  res.json({
    totalTokensUsed,
    remainingTokens,
    message: `You have ${remainingTokens} tokens remaining out of your budget.`,
  });
});

// 7️⃣ Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});