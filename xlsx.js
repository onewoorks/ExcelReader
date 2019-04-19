XLSX = require('xlsx');
var workbook = XLSX.readFile('./files/list2.xlsx');

// console.log(workbook.Props)
var sheet = workbook.Sheets.PERAK
let tasks = []

const header = {

}



Object.keys(sheet).forEach((key,value) => {
    if(key != '!margins' && key != '!ref'){
        console.log( key + " : " + sheet[key].v)
        // console.log(value)
    }

})

// console.log(sheet)
console.log(Object.keys(sheet)[1].replace(/[^0-9.]/g, ''))
var o = Object.keys(sheet)[0]
console.log(sheet[o])

// console.log(sheet)


