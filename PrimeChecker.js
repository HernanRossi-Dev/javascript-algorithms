function PrimeChecker(num) {
	const digits = num.toString().split('').map((x) => parseInt(x));
	const permutations = getPerms(digits);
	let allPerms = permutations.map((x) => parseInt(x.join('')));
	const reversSort = digits.sort((x, y) => x < y);
	const max = parseInt(reversSort.join(''));
	const primes = [1];
	let table = new Array(max +1).fill(true);
	for(let i = 2; i <= max; i++) {
		if(!table[i]) {
			continue;
		}

		primes.push(i);
		let cur = i*2;
		while(cur <= max) {
			table[cur] = false;
			cur += i;
		}
	}
	let result = 0;
	for (const perm of allPerms) {
		if (table[perm]) {

			result = 1;
		}
	}
	return result;
}

function getPerms(inputArray) {
	const results =[];

	function permutes(array, memo = []) {
		let cur;
		for(let i =0; i < array.length; i++) {
			cur = array.splice(i,1);
			if (array.length === 0) {
				results.push(memo.concat(cur));
			}
			permutes(array, memo.concat(cur));
			array.splice(i, 0, cur[0]);
		}
		return results;
	}
	return permutes(inputArray);
}

// console.log(PrimeChecker(910));
// console.log(PrimeChecker(98));
// console.log(PrimeChecker(598));
console.log(PrimeChecker(11));
// console.log(PrimeChecker(100));