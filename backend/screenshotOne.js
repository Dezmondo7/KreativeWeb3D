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