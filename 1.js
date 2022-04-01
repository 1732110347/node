const fs = require('fs')
fs.readFile('./node', 'utf8', function (er, dataStr) {
    console.log(er);
    console.log('-------');
    console.log(dataStr);
})