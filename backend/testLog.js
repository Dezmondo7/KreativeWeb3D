import fetch from "node-fetch"; // only if Node <18, otherwise fetch is global

const Event = {
  section_id: "40ff4b33-9da8-4c29-a405-195c8bd1f58f", // must exist in sections table
  session_id: "test-session-001",
  event_type: "mousemove",
  x: 120,
  y: 200,
  time_spent: 0,
  cta_id: null
};

async function testLog() {
  try {
    const res = await fetch("http://localhost:5001/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Event)
    });

    const data = await res.json();
    console.log("Response from /log:", data);
  } catch (err) {
    console.error("Error posting test event:", err);
  }
}

testLog();