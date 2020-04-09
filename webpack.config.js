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
            mode: 'production',
        };
    });

files.push({
        entry: './js/app.js',
        output: {
            path: path.resolve(__dirname, OUT),
            filename: 'app.js',
        },
        mode: 'production',
    });


module.exports = files;
