function Consectutive(arr) {
	console.log(arr);

	arr.sort((a, b) => a-b);
	console.log(arr);
	let curr, prev;
	prev = arr[0];
	let needToAdd = 0;
	let min = 0;
	for (const entry of arr) {
		if (entry < min) {
			min = entry;
		}
	}
	console.log('min is : ', min);
	min *= -1;
	const mapped = arr.map((x) => x + min);
	for(let i = 1; i < arr.length; i++) {
		curr = arr[i];
		needToAdd += curr - prev - 1;
		console.log(curr, prev, curr - prev -1);
		console.log(needToAdd);

		prev = curr;
	}	
	return needToAdd;
}

const result = Consectutive([-2, 10, 4]);
console.log('result ', result);