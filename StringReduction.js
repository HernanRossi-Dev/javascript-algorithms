const aChar = 'a', bChar ='b', cChar ='c';
const aValue = aChar.charCodeAt(0);
const bValue = bChar.charCodeAt(0);
const cValue = cChar.charCodeAt(0);
function StringReduction(str) {
	const len = str.length;
	let result = str.length;
	const swapMap =  new Map();
	swapMap.set(bValue + cValue, 'a');
	swapMap.set(aValue + cValue, 'b');
	swapMap.set(aValue + bValue, 'c');
	// console.log(swapMap);
	let compressed = [];
	let compPointer = 0;
	let prev, cur;
	for (let i = 0; i < len; i++) {
		cur = str.charCodeAt(i);
		prev = compressed[compPointer];
		if(!prev) {
			compressed[compPointer] = String.fromCharCode(cur);
			prev = cur;
			continue;
		}
		prev = prev.charCodeAt(0);
		// console.log('current char: ', String.fromCharCode(cur), 'prev: ', String.fromCharCode(prev));
		if (cur !== prev) {
			const swap = swapMap.get(cur + prev);
			// console.log(`swap ${String.fromCharCode(cur)} and ${String.fromCharCode(prev)} with ${swap} at ${compPointer}`);
			compressed[compPointer] = swap;
			let backtrackCur = swap.charCodeAt(0);
			let backtrackPrev = compressed[--compPointer];
			// console.log('BackTrack', compPointer, String.fromCharCode(backtrackCur), String.fromCharCode(backtrackPrev), backtrackPrev);
			while (compPointer >= 0 && backtrackCur !== backtrackPrev) {
				backtrackPrev = backtrackPrev.charCodeAt(0)
				const swapBacktrack = swapMap.get(backtrackCur + backtrackPrev );
				compressed[compPointer] = swapBacktrack;
				backtrackCur = swapBacktrack.charCodeAt(0);
				backtrackPrev = [--compPointer];
				compressed = compressed.slice(0, compPointer);
			}
			compPointer++;
		} else {
		 compressed[++compPointer] = String.fromCharCode(cur);
		}
		// console.log('compressed list at end of iteration: ', compressed);
	}
	return compressed.length;
}

console.log(StringReduction('abcabc'));
console.log(StringReduction('cccc'));
console.log(StringReduction('cab'));
console.log(StringReduction('bcab'));