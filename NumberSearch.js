function NumberSearch(str) {
	const charArray = str.split('');
	const len = charArray.length;
	const intRegex = /[0-9]/g;
	const letterRegex = /[a-zA-Z]/g;
	const ints = str.match(intRegex);
	const letters = str.match(letterRegex);
	const numberLetters = letters.length;
	let sum = 0;
	for (const num of ints) {
		sum += parseInt(num);
	}
	return Math.round(sum / numberLetters);

}

console.log(NumberSearch('Hello6 9World 2, Nic8e D7ay!'));
console.log(NumberSearch('H3ello9-9'));
console.log(NumberSearch('One Number*1*'));