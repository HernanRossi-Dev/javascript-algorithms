BinonialCoeffDynamicP = (n, k) => {
	const cache = Array(25);
	for (let i =0; i < 25; i++) {
		cache[i] = Array(i+1).fill(0);
		cache[i][0] = 1;
		cache[i][i] = 1;
	}
	for (let i =1; i <= n; i++) {
		for (let j = 1; j < i; j++) {
			cache[i][j] = cache[i-1][j-1] + cache[i-1][j];
		}
	}
	return cache[n][k];
}

const nChooseK = BinonialCoeffDynamicP(15, 7);
console.log('N choose K = ', nChooseK)