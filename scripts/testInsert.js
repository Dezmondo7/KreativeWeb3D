import { createClient } from "@supabase/supabase-js";
import "dotenv/config"; // allows use of process.env

// Supabase client setup
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testInsert() {
  // Replace with a valid section UUID from your sections table
  const sectionUUID = "40ff4b33-9da8-4c29-a405-195c8bd1f58f";

  // Unique identifier for this test session
  const sessionId = "test-session-001";

  // Attempt to insert a single heatmap event
  const { data, error } = await supabase.from("heatmap_events").insert([
    {
      section_id: sectionUUID, // links this event to a specific page section
      session_id: sessionId,   // tracks which session generated this event
      event_type: "mousemove", // type of event (mousemove, click, time_spent, clickCTA)
      x: 100,                  // relative X position in the section (pixels)
      y: 150,                  // relative Y position in the section (pixels)
      time_spent: 0,           // time spent in the section (milliseconds); 0 for a mousemove
      cta_id: null             // optional: tracks CTA clicks; null here
    }
  ])
   .select(); 

  // Log the result to the console for debugging
  if (error) console.error("Insert failed:", error);
  else console.log("Insert succeeded:", data);
}

// Run the test
testInsert();