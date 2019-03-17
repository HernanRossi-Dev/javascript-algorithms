function SwapII (str) {
	const chars = str.split('');
	const uppcaseBotRange = 65;
	const uppcaseTopRange = 90;
	const lowcaseBotRange = 97;
	const lowcaseTopRange = 122;
	const spaceCharCode = 32;
	const lowerIntRange = 48;
	const upperIntRange = 57;
	const codeArray = [];
	let cur, lastIntVal, lastIntPos;
	const len = str.length;
	for (let i = 0; i < len; i++) {
		cur = str.charCodeAt(i);
		if(cur >= uppcaseBotRange && cur <= uppcaseTopRange ) {
			// conver to lower case
			cur += 32;
		} else if( cur >= lowcaseBotRange && cur <= lowcaseTopRange  ) {
			cur -= 32;
		} else if (cur === spaceCharCode) {
			lastIntVal = null;
			lastIntPos = null;
		} else if (cur >= lowerIntRange && cur <= upperIntRange ){
			if (lastIntVal) {

				lastIntVal = codeArray[lastIntPos];
				codeArray[lastIntPos] = cur;
				lastIntPos = i;
				cur = lastIntVal;
			} else {
				lastIntVal = cur;
				lastIntPos = i;
			}
		} 
		codeArray.push(cur);
	}
	let result = '';
	for (const code of codeArray) {
		result += String.fromCharCode(code);
	}
	return result;
}

console.log(SwapII('6Hello4 -8World, 7 yes3'));
console.log(SwapII('2S 6 du5d4e'));