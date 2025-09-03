import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

// Supabase client (service role key bypasses RLS)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

// Log endpoint
app.post("/log", async (req, res) => {
  const event = req.body;
  console.log("📩 Received event:", event);

  try {
    // Insert event into Supabase
    const { data, error } = await supabase
      .from("heatmap_events")
      .insert([{
        section_id: event.section_id,
        session_id: event.session_id || "test-session",
        event_type: event.event_type || "mousemove",
        x: event.x || 100,
        y: event.y || 150,
        time_spent: event.time_spent || 0,
        cta_id: event.cta_id || null
      }])
      .select("id, section_id, session_id, event_type, x, y, time_spent, cta_id, created_at");

    if (error) {
      console.error("❌ Insert failed:", error);
      return res.status(500).json({ success: false, error });
    }

    console.log("✅ Insert succeeded:", data);
    res.status(200).json({ success: true, data });

  } catch (err) {
    console.error("💥 Unexpected error:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get("/", (req, res) => {
  res.send("Backend is live!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});