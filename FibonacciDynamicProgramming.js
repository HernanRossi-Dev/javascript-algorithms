fib_dynamicPro = (n) => {
	const cache = [];
	cache[0] = 0;
	cache[1] = 1;
	console.log(0)
	console.log( 1 );
	for (let i = 2; i <= n; i++) {
		cache[i] = cache[i - 1] + cache[i -2];
		console.log(cache[i]);
	}

	return cache[n];
}
fib_dynamicPro(15);

