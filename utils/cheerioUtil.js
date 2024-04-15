const axios = require('axios')
const cheerio = require('cheerio')

async function fetchHTML(url) {
    const { data } = await axios.get(url);
    return data;
}

module.exports = {

    scrapeRecepie: async (url) => {
        try {
            const html = await fetchHTML(url);
            const $ = cheerio.load(html);
            const jsonElement = $('.yoast-schema-graph').text();
            const jsonData = JSON.parse(jsonElement);
            const recipeData = jsonData['@graph'].filter(obj => obj['@type'] === 'Recipe');
            return recipeData[0];
        } catch (error) {
            console.error('Error in scraping:', error);
        }
    },

};