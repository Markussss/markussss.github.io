const path = require('path');
const fs = require('fs');

const DIR = 'bookmarklets';
const OUT = 'build';

const files = fs.readdirSync(DIR)
    .map(file => {
        return {
            entry: `./${DIR}/${file}`,
            output: {
                path: path.resolve(__dirname, OUT),
                filename: file,
            },
            mode: process.env.NODE_ENV,
        };
    });

files.push({
        entry: './js/app.js',
        output: {
            path: path.resolve(__dirname, OUT),
            filename: 'app.js',
        },
        mode: process.env.NODE_ENV,
    });


module.exports = files;
