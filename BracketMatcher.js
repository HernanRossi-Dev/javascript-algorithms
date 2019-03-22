function BracketMatcher (str) {
	const len = str.length;
	const lb = '(';
	const rb = ')';
	const bracketStack = [];
	for (let i = 0; i < len; i++) {
		const char = str[i];
		if(char === lb) {
			bracketStack.push(lb);
		} else if(char === rb) {
			if (bracketStack.length < 1) {
				return 0;
			}
			bracketStack.pop();
		}
	}
	if (bracketStack.length > 0 ) {
		return 0;
	}
	return 1;
}

console.log(BracketMatcher('(hello (world))'));
console.log(BracketMatcher('((hello (world))'));
console.log(BracketMatcher('(coder)(byte))'));
console.log(BracketMatcher('(c(oder)) b(yte)'));