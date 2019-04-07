function MinSwaps(arr) {
	let pointer = 0;
	let value;
	let swaps = 0;
	while (pointer < arr.length) {
		value = arr[pointer];
		if (value === pointer + 1) {
			pointer++;
		} else {
			const swap = arr[value -1];
			arr[value -1] = value;
			arr[pointer] = swap;
			swaps++;
		}
	}
	return swaps;
}

console.log(MinSwaps([1, 3, 5, 2, 4, 6, 7]));