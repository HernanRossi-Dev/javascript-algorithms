const ArithGeoII = (arr) => {
	const diff = arr[1] - arr[0];
	const div = arr[1] / arr[0];
	let isArith = true;
	let isGeo = true;
	const len = arr.length;
	if (arr[2] - arr[1] === diff) {
		//check all for arithmetic pattern
		for(let i = 3; i< len; i++){
			if (arr[i] - arr[i-1] !== diff) {
				isArith = false;
				break;
			}
		}
	} else {
		isArith = false;
	}
	if (arr[2] / arr[1] === div) {
		for(let i = 3; i< len; i++){
			if (arr[i] / arr[i-1] !== div) {
				isGeo = false;
				break;
			}
		}
	} else {
		isGeo = false;
	}

	let result;
	if (isArith) {
		result = 'Arithmetic';
	} else if(isGeo) {
		result = 'Geometric';
	} else {
		result = -1;
	}
	return result;
}

console.log(ArithGeoII([2, 6, 18, 54]));