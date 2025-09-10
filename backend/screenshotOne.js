import * as fs from "fs";
import * as screenshotone from "screenshotone-api-sdk";
import 'dotenv/config';

const ACCESS_KEY = process.env.ACCESS_KEY
const SECRET_KEY = process.env.SECRET_KEY

// create API client
const client = new screenshotone.Client(process.env.ACCESS_KEY, process.env.SECRET_KEY);

// set up options
const options = screenshotone.TakeOptions.url("https://reaktwebdesign.co.uk/")
    .delay(3)
    .blockAds(true);

// generate URL
const url = client.generateTakeURL(options); // or generateSignedTakeURL(options) for signed URLs
console.log(url);
// expected output: https://api.screenshotone.com/take?url=https%3A%2F%2Fexample.com&delay=3&block_ads=true&access_key=%3Caccess+key%3E

// or download the screenshot
const imageBlob = await client.take(options);
const buffer = Buffer.from(await imageBlob.arrayBuffer());
fs.writeFileSync("example.png", buffer);

//writing an endpoint for the front-end to fetch
// server.js (Node/Express example) // working locally for now as front end unable to send correct cors as not live
import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

const FRONTEND_URL = process.env.FRONTEND_URL || "https://localhost:5000";
app.use(cors({ origin: FRONTEND_URL }));

// Endpoint to serve the screenshot
app.get("/screenshot", (req, res) => {
  const filePath = path.join(__dirname, "example.png"); // path to your saved screenshot

  if (!fs.existsSync(filePath)) {
    return res.status(404).send("File not found");
  }

  const fileBuffer = fs.readFileSync(filePath);
  res.setHeader("Content-Type", "image/png");
  res.send(fileBuffer);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});