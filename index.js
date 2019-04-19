const readXlsxFile = require('read-excel-file/node')


readXlsxFile('./files/list2.xlsx',{ getSheets: true })
.then( sheets => {
    console.log(sheets)
})