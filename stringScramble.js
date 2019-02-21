const StringScramble = (str1, str2) => {
	const str1CharMap = new Map();
	const len1 = str1.length;
	const regex = /[a-zA-Z]/;
	for (let i =0; i < len1; i++) {
		const char = str1[i];
		if (regex.test(char)){
			if(str1CharMap.has(char)){
				let count = str1CharMap.get(char);
				str1CharMap.set(char, count +1);
			} else {
				str1CharMap.set(char, 1);
			}
		}
	}
	const len2 = str2.length;
	let result = true;
	for (let i = 0; i < len2; i++) {
		const char = str2[i];
		if(regex.test(char)){
			if (str1CharMap.has(char)){
				let count = str1CharMap.get(char);
				if(count <= 0) {
					result = false;
				} else {
					str1CharMap.set(char, count - 1);
				}
			} else {
				result = false;
			}
		}
	}
	return result;
} 

console.log(StringScramble('rkqodlw', 'world'));