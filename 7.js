const fs = require('fs')
fs.readFile('./成绩', 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('读取失败')
    }
    const arrOld = dataStr.split(' ')

    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ':'))
    })
    const newStr = arrNew.join('\r\n')

    fs.writeFile('./成绩2', newStr, 'utf8', function (err, dataStr) {
        if (err) {
            return console.log('写入失败')
        }
        console.log('成功');
    })
})