const folderPath = '../image/manylight/';
const fs = require('fs');
const outputArray = [];
fs.readdir(folderPath, (err, files) => {
    console.log(err);
    files.forEach(file => {
        outputArray.push(file);
    });
})
