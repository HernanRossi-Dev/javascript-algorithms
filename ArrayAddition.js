function ArrayAddition(arr) {
	arr.sort((a, b) => a > b);
	const value = arr.pop();	
	let lower = 0;
	let k = 0;
	while (arr[k] < 0) {
		lower += arr[k];
		k++;
	}
	const upper = value + (-1 * lower);
	const memTable = new Array(arr.length);
	for (let i = 0; i < memTable.length; i++) {
		memTable[i] = new Array(upper);
	}
	for (let i = 0; i < memTable.length; i++) {
		for ( let j = 0; j <= upper; j++) {
			memTable[i][j] = false;
		}
	}
	for (let i = 0; i < memTable.length; i++) {
		const currentEl = arr[i];
		for ( let j = 0; j <= value - lower ; j++) {
			let k = j + lower;
			let caseOne, caseTwo, caseThree;
			if ( i > 0 ) {
				caseOne = memTable[i -1][j] || false;
				caseTwo = (memTable[i - 1][j - currentEl]) || false;
			}
			caseThree = (k === currentEl);
			memTable[i][j] = caseOne || caseTwo || caseThree;
		}
	}
	// console.log(memTable[arr.length-1], upper);
	return memTable[arr.length - 1][upper];
}

console.log(ArrayAddition([ 3, 5, -1, 8, 12]));
console.log(ArrayAddition([5,7,16,1,2]));
console.log(ArrayAddition([4, 6, 23, 10, 1, 3] ));