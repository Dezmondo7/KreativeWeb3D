const express = require('express');
const router = express.Router();
const { captureFullPage } = require('../services/screenshotService');

router.get('/api/screenshot', async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).send('URL is required');

  try {
    const buffer = await captureFullPage(url);
    res.set('Content-Type', 'image/png');
    res.send(buffer);
  } catch (err) {
    console.error('❌ Screenshot failed:', err);
    res.status(500).send('Screenshot failed');
  }
});

module.exports = router;