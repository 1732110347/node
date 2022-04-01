const fs = require('fs')
fs.writeFile('./c', 'asa2', 'utf8', function (er, dataStr) {
    console.log(er);
    console.log('-------');
    console.log(dataStr);
})