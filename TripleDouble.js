function TripleDouble(num1, num2) {
	const str1 = num1.toString();
	const str2 = num2.toString();
	const tripleTable = Array(10).fill(false);
	const doubleTable = Array(10).fill(false);
	let prev, count = 1;
	for (let i = 0; i <= str1.length; i++) {
		const cur = str1[i];
		if (cur === prev) {
			count += 1;
		} else if (count >= 3){
			tripleTable[parseInt(prev)] = true;
			count = 1;
		} else {
			count = 1;
		}
		prev = cur;
	}
	count = 1;
	prev = null;
	for (let i = 0; i <= str2.length; i++) {
		const cur = str2[i];
		if (cur === prev) {
			count += 1;
		} else if (count >= 2){
			doubleTable[parseInt(prev)] = true;
			count = 1;
		} else {
			count = 1;
		}
		prev = cur;
	}

	for(let i = 0; i < 10; i++) {
		if (tripleTable[i] && doubleTable[i]) {
			return 1;
		}
	}
	return 0;
}

console.log(TripleDouble(451999277, 41177722899));
console.log(TripleDouble(465555, 5579));
console.log(TripleDouble(67844, 66237));