function FibonacciChecker(num) {
	const table =[ 0, 1, 2, 3];
	if (num > 0 && num < 4) {
		return 'yes';
	}
	let currentFib = 3;
	let i = 4;
	while (currentFib <= num) {
		if( currentFib === num) {
			return 'yes';
		}
		currentFib = table[i - 1] + table[i - 2];
		table.push(currentFib);
		i++;
	}
	return 'no'
}

console.log(FibonacciChecker(34));
console.log(FibonacciChecker(54));