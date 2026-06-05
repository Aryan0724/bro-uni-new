const fs = require('fs');
const html = fs.readFileSync('framer_site.html', 'utf8');
const matches = html.match(/https:\/\/framerusercontent\.com\/images\/[^\"\'\)\s]+/g) || [];
const uniqueMatches = [...new Set(matches)];
console.log(JSON.stringify(uniqueMatches, null, 2));
