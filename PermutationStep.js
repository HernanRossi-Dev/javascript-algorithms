function PermutationStep (num) {
	const stringDigits = num.toString(10).split('');
	const digits = stringDigits.map((dig) => parseInt(dig));
	const len = digits.length;
	const rightList =[];
	let leftList ;
	let result;
	for (let i = len -1; i >= 0; i--) {
		if(i === 0) {
			return -1;
		}
		let currentDigit = digits[i];
		let compare = digits[i-1];
		if (currentDigit > compare) {
			digits[i-1] = currentDigit;
			leftList = digits.slice(0, i);
			rightList.push(compare);
			i = -1;
		} else {
			rightList.push(currentDigit);
		}
	}
	rightList.sort();
	result = [...leftList, ...rightList];
	result = result.join('');
	return result;
}
console.log('ANSWER TO 11121');

console.log(PermutationStep(11121));
console.log('ANSWER TO 41352');

console.log(PermutationStep(41352));
console.log('ANSWER TO 12453');

console.log(PermutationStep(12453));