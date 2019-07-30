const fs = require('fs')
const path = require('path')
const csv=require('csvtojson')

/* Converts csv to JSON format, reading from the input file path and saving to the output file path */

const inputFilePath=path.join(__dirname, '/customer-data.csv')
const outputFilePath=path.join(__dirname, '/customer-data.json')

function saveFile(object) {
    /* Saves the file object as JSON to the jsonFilePath */
    jsonString=JSON.stringify(object,null,2)
    fs.writeFile(outputFilePath, jsonString, function (error) {
	if (error) return console.error(error)
	console.log('Done')
    })
    
}

/* Reads and parses the csv file using 'csvtojson' */
csv().fromFile(inputFilePath).then((jsonObj)=>{
    saveFile(jsonObj)
})




