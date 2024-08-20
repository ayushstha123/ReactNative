export const internNepal = async (req, res) => {
    const category = req.query.category ; // Allow dynamic category via query param
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
        const title = jobElement.querySelector('h5')?.innerText.trim();
        const company = jobElement.querySelector('.company h6')?.innerText.trim();
        const location = jobElement.querySelector('.location p')?.innerText.trim();
        const detailsLink = jobElement.querySelector('.view_more_apply_btn a')?.href;

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
};

export const internSathi= async (req, res) => {
    const category = req.query.category ; // Allow dynamic category via query param
    const url = `https://internsathi.com/all-opportunities?q=${category}`;
    
  
    try {
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();
      await page.goto(url);
  
      // Scraping logic
      const jobs = await page.evaluate(() => {
        const jobElements = document.querySelectorAll('div.relative');
        const jobList = [];
  
        jobElements.forEach((jobElement) => {
                const title = jobElement.querySelector('p.text-t-lg') ? element.querySelector('p.text-t-lg').innerText : '';
                const company = jobElement.querySelector('p.text-t-sm.text-brand-red') ? element.querySelector('p.text-t-sm.text-brand-red').innerText : '';
                const detailsLink = jobElement.querySelector('a[href*="/internships/"]') ? element.querySelector('a[href*="/internships/"]').href : '';
          
          jobList.push({
            title,
            company,
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
  };