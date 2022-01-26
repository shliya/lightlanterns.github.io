const folderPath = '../image/manylight/';
const fs = require('fs');
const outputArray = [];
fs.readdir(folderPath, (err, files) => {
    console.log(err);
    files.forEach(file => {
        outputArray.push(file);
    });
    // outputArray = outputArray.sort((a,b)=>{
        
    // });
    console.log(outputArray[0].split('_'));
    // fs.writeFile("./test.json", JSON.stringify(outputArray), (err, files) => {
    //     if (err)
    //         console.log(err);
    //     else
    //         console.log('Write operation complete.');
    // })
})
