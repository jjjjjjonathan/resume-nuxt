const fs = require('fs');
const cheerio = require('cheerio');

const $ = cheerio.load(fs.readFileSync('.output/public/index.html'));

const nuxtDir = fs.readdirSync('.output/public/_nuxt');
const fileWeNeed = nuxtDir.filter((file) => file.startsWith('entry') && file.endsWith('.css'));

const css = fs.readFileSync(`.output/public/_nuxt/${fileWeNeed[0]}`);

$('head').append(`<style>${css}</style>`);

fs.writeFileSync('.output/public/index.html', $.html());