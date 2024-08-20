const express = require('express');
const puppeteer = require('puppeteer');
const cors=require('cors')
const app = express();
const router=require('./router/router.js')
const PORT = 3000;

app.use(cors())

app.use('/api',router)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
