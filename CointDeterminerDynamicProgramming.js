function CointDeterminer(num) {
	const coins = [ 1, 5, 7, 9, 11];	
	const table = new Array(5+ 1);
	for (let i = 0; i < table.length; i++) {
		table[i] = new Array(num +1);
	}
	table[0][0] = 0;
	table[1][0] = 1;
	table[2][0] = 5;
	table[3][0] = 7;
	table[4][0] = 9;
	table[5][0] = 11;

	for (let i = 0; i < table.length; i++) {
		for (let j = 1; j <= num ; j++) {
			if (i === 0) {
				table[i][j] = j;
			} else {
				table[i][j] = 0;
			}
		}
	}

	let row = 1, col = 1;
	//set value to the less of table[i-1][j] (table[i][j-coins[i-1]] + 1)  (j / coins[i-1] if  % coins[i-1] ===  0)
	for (let i = 1; i < table.length; i++) {
		const coin = coins[i-1];
		for (let j = 1; j <= num ; j++) {
			const prevBest = table[i-1][j] || Number.MAX_SAFE_INTEGER;
			const prevBestPlusCurrent = table[i -1][j- coin] + 1 || Number.MAX_SAFE_INTEGER;
			let evenDiv = Number.MAX_SAFE_INTEGER;;
			if (j % coin === 0) {
				evenDiv = j / coin;
			}
			const best = Math.min(prevBest, prevBestPlusCurrent, evenDiv);
			table[i][j] = best;
		}
	}
	// console.log(table);
	return table[5][num];
}

console.log(CointDeterminer(6));
console.log(CointDeterminer(25));
console.log(CointDeterminer(16));