import fetch from "node-fetch"; // make sure to install with: npm install node-fetch

const URL = "http://localhost:5000/api/generate"; // or your Render URL once deployed

async function testGenerate() {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: "Write a short creative story about a flying cat." }),
    });

    const data = await response.json();
    console.log("Response from /api/generate:", data);
  } catch (err) {
    console.error("Error testing /api/generate:", err);
  }
}

testGenerate();