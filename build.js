const path = require('path');
const builder = require('electron-builder');

builder.build({

    projectDir: path.resolve(__dirname), 

    win: ['nsis', 'portable'],  
    config: {
        "appId": "lightlanterns",
        "productName": "lightlanterns",
        "directories": {
            "output": "build/win"
        },
        "win": {
            "icon": path.resolve(__dirname, 'lightlanterns.png'),
        }
    },
})
    .then(
        data => console.log(data),
        err => console.error(err)
    );