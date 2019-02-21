function Division(num1, num2) {
	//create list of primes using seive
	const max = num1 > num2 ? Math.ceil(Math.sqrt(num1)) : Math.ceil(Math.sqrt(num2));
	const primeArray = [0, 1];
	const isPrime = [false];
	for (let i = 1; i < max; i++){
		isPrime[i] = true;
	}
	for( let i = 2; i <= max; i++) {
		if(isPrime[i]) {
			primeArray.push(i);
			let m = i * i;
			while (m <=max){
				isPrime[m] = false;
				m += i;
			}
		}
	}
	isPrime.shift();
	const mapOne = [];

	const lenOfPrimes = primeArray.length;
	for (let i = 0; i < lenOfPrimes; i++){
		const prime = primeArray[i];
		if(num2 % prime === 0){
			mapOne.push(prime);
		}
	}
	let gcf = 1;
	for(let i = 0; i < mapOne.length; i++) {
		if (num2 % mapOne[i] !== 0) {
			mapOne.slice(i, 1);
		}
	}
	console.log('mapOne; ', mapOne);
	const factorMap = new Map();
	for (let i = 0; i < mapOne.length; i++) {
		factorMap.set((num2 / mapOne[i]),(num2 / mapOne[i]));
	}

	gcf = 1; 
	for (let i = 0; i < mapOne.length; i++) {
		if(factorMap.has( num1 / mapOne[i])){
			gcf = num1 / mapOne[i];
			break;
		}
	}
	console.log('factorMap; ', factorMap);
	console.log('gcf: ', gcf);
	return gcf;
}

function Division2(num1,num2) { 
    const largest = num1 > num2 ? num1: num2; 
    const smaller = num1 > num2 ? num2 : num1;
    
    let gcf = 1;
    console.log('smaller, larger: ', largest, smaller);
    for ( let i = smaller; i > 0; i--) {
    console.log('i: ', i);

        if (largest % i === 0 && smaller % i === 0){
        	console.log('check : ', i);
            gcf = i;
            break;
        }
    }
    console.log('GCF: ', gcf);
    return gcf;
}
   

Division2(28, 108)