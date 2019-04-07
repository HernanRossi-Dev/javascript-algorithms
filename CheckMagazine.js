function CheckMagazine(mag, note) {
	const magHash = new Map();

	const noteWords = note.split(' ');
	const magWords = mag.split(' ');

	for (const word of magWords) {
		const count = magHash.get(word);
		if (count) {
			magHash.set(word, count +1);
		} else {
			magHash.set(word, 1);
		}
	}
	console.log('MagHash: ', magHash);

	for (const word of noteWords) {
		console.log('Note entry: ', word);
		const foundCount = magHash.get(word);
		console.log('found: ', foundCount);
		if (foundCount > 0) {
			magHash.set(word, foundCount -1);
		} else {
			console.log('No');
			return;
		}
	}
	console.log('Yes');
}

const magazine = 'give me one grand today night';
// const magazine = 'two times three is not four';
// const magazine = 'ive got a lovely bunch of coconuts';
// const note = 'ive got some coconuts';
const note = 'give one grand today';
// const note = 'two times two is four';
console.log(CheckMagazine(magazine, note));