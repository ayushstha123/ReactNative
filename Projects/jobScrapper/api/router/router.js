const express = require('express');
const puppeteer = require('puppeteer'); // Ensure Puppeteer is required
const router = express.Router();

// Route to scrape jobs from internepal.com.np
router.get('/scrape-jobs', async (req, res) => {
    const category = req.query.category; // Allow dynamic category via query param
    const url = `https://internepal.com.np/vacancy-list?type=internship&keyword=${category}`;

    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(url);

        // Scraping logic
        const jobs = await page.evaluate(() => {
            const jobElements = document.querySelectorAll('.single_category_box');
            const jobList = [];

            jobElements.forEach((jobElement) => {
                const title = jobElement.querySelector('h5')?.innerText.trim() || '';
                const company = jobElement.querySelector('.company h6')?.innerText.trim() || '';
                const location = jobElement.querySelector('.location p')?.innerText.trim() || '';
                const detailsLink = jobElement.querySelector('.view_more_apply_btn a')?.href || '';

                jobList.push({
                    title,
                    company,
                    location,
                    detailsLink,
                });
            });

            return jobList;
        });

        await browser.close();

        res.json({ jobs });
    } catch (error) {
        console.error('Error scraping jobs:', error);
        res.status(500).json({ error: 'Failed to scrape jobs' });
    }
});

// Route to scrape jobs from internsathi.com
router.get('/scrape-jobs1', async (req, res) => {
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        const category = req.query.category; // Allow dynamic category via query param

        await page.goto(`https://internsathi.com/all-opportunities?q=${category}`, {
            waitUntil: 'networkidle2'
        });

        // Extract job listings
        const jobListings = await page.evaluate(() => {
            const jobs = [];
            const jobElements = document.querySelectorAll('.relative.cursor-pointer');

            jobElements.forEach(job => {
                const titleElement = job.querySelector('p.text-t-lg.font-medium');
                const companyElement = job.querySelector('p.text-t-sm.text-brand-red');
                const linkElement = job.querySelector('a[href*="/internships/"]');

                const title = titleElement ? titleElement.innerText.trim() : 'No Title';
                const company = companyElement ? companyElement.innerText.trim() : 'No Company';
                const detailsLink = linkElement ? `https://internsathi.com${linkElement.getAttribute('href')}` : 'No Link';

                jobs.push({
                    title,
                    company,
                    detailsLink
                });
            });

            return jobs;
        });

        await browser.close();

        res.json({ jobs: jobListings });
    } catch (error) {
        console.error('Error scraping jobs:', error.message);
        res.status(500).json({ error: 'Failed to scrape jobs', details: error.message });
    }
});

module.exports = router;
