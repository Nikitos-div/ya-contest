var fs = require('fs');

var fileWithNumbers = fs.readFileSync('input.txt', 'utf-8');

var arrNumbers = fileWithNumbers.split(' ');

fs.writeFileSync('output.txt', (Number(arrNumbers[0]) + Number(arrNumbers[1])).toString());