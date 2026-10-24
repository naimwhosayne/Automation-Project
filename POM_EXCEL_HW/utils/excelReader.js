const XLSX = require('xlsx');
const path = require('path');

function readExcel() {
    const file = path.join(__dirname, '../data/loginData.xlsx');

    const workbook = XLSX.readFile(file);

    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    const users = XLSX.utils.sheet_to_json(sheet);

    return users;
}

module.exports = { readExcel };