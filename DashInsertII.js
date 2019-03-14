function DashInsertII(num) {
	const str = num.toString();
	const chars = str.split('');
	let prev, cur, result = '';
	for(const char of chars) {
		const cur = parseInt(char);
		if(!prev) {
			prev = cur;
			result += cur;
			continue;
		}
		if (cur === 0 || prev === 0) {
			prev = cur;
			result += cur;
			continue;
		}
		const prevParity = (prev % 2 === 0) ? 'even' : 'odd';
		const curParity = (cur % 2 === 0) ? 'even' : 'odd';
		if(prevParity === 'even' && curParity === 'even') {
			result += '*';
		} else if (prevParity === 'odd' && curParity === 'odd') {
			result += '-';
		}
		prev = cur;
		result += cur;
	}
	return result;
}

console.log(DashInsertII(4546793));
console.log(DashInsertII(99946));
console.log(DashInsertII(56647304));