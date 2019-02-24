'use strict';
const Cell = require('./Cell');

exports.createDPTable = (lengthOne, lengthTwo) => {
	const maxLength = lengthOne > lengthTwo ? lengthOne : lengthTwo; 
	const arrayList = [];
	for (let j = 0; j < maxLength; j++) {
		const rowArray = new Array(maxLength);
		for (let i = 0; i < maxLength; i++) {
			rowArray[i] = new Cell(0, null);
		}
		rowArray[0].cost = j;
		arrayList.push(rowArray);
	}
	const cacheMatrix = new Array(...arrayList);
	for (let j = 0; j < cacheMatrix.length; j++) {
		cacheMatrix[0][j].cost = j;
	}
	
	
	return cacheMatrix;
}

exports.printTable = (table) => {
	const reducer = (acc, curr) => acc + ', ' + curr.cost;
	let printRowDiv = '';
	for (let i = 0; i < table[0].length * 5; i++) {
		printRowDiv += '-';
	}
	for (const row of table) {
		let printRow = '| ';
		for (const cell of row) {
			const cost = cell.cost.toString();
			printRow += cell.cost;
			if(cost.length > 1 ) {
				printRow += ' | ';
			} else {
				printRow += '  | ';
			}
		}
		console.log(printRowDiv);
		console.log(printRow);
	}
	console.log(printRowDiv);
}

exports.match = (charOne, charTwo) => {
	if (charOne === charTwo) {
		return 0;
	}
	return 1;
}

exports.indel = (char) => {
	return 1;
}
