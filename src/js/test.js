let folderPath = "../image/manylight/";
let fs = require("fs");
let outputArray = [];
fs.readdir(folderPath, (err, files) => {
  console.log(err);
  files.forEach((file) => {
    outputArray.push(Number(file.split(".")[0]));
  });
  outputArray = outputArray.sort((a, b) => {
    return a - b;
  });
  outputArray = outputArray.map((e)=>{
    return `${e}.png`
  })
  console.log(outputArray);
  fs.writeFile("test2.json", JSON.stringify(outputArray), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
    }
  });
});
