// backend/routes/heatmap.js
import express from 'express';
import supabase from './supabaseClient';

const router = express.Router();

router.post("/", async (req, res) => {
    console.log("recieved log request", req.body)
  const { sectionId, x, y, eventType, sessionId, timeSpent, ctaId } = req.body;

  const { data, error } = await supabase
    .from("heatmap_events")
    .insert([
      { section_id: sectionId, x, y, event_type: eventType, session_id: sessionId, time_spent: timeSpent, cta_id: ctaId }
    ]);

  if (error) return res.status(500).json({ error });
  res.status(200).json({ data });
});

export default router;