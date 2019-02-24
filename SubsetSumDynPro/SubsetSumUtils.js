exports.createTable = (value, array) => {
	const tableRows = [];
	for (let i = 0; i <= array.length; i++){
		const row = new Array(value+1).fill(null);
		row[0] = false;
		tableRows.push(row);
	}
	const resultTable = [...tableRows];
	for (let i = 0; i < value; i++){
		resultTable[0][i] = false;
	}

	return resultTable;
}

exports.printTable = (table) => {
	let printRowDiv = '';
	for (let i = 0; i < table[0].length * 5; i++) {
		printRowDiv += '-';
	}
	for (const row of table) {
		let printRow = '| ';
		for (const cell of row) {
			printRow += cell;
			printRow += ' | ';
		}
		console.log(printRowDiv);
		console.log(printRow);
	}
	console.log(printRowDiv);
}