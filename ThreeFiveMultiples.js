function ThreeFiveMultiples(num) {
	let sum = 0;
	for(let i = 3; i < num; i++) {
		if (i % 3 === 0) {
			sum += i;
		} else if (i % 5 === 0) {
			sum += i;
		}
		console.log(sum, i);
	}
	return sum;
}

console.log(ThreeFiveMultiples(10));
console.log(ThreeFiveMultiples(1));
console.log(ThreeFiveMultiples(6));