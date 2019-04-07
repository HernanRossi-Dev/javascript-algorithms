function TwoStrings(s1, s2) {
    const mapOne = new Map();
    const charArray = s1.split('');
    for (const char of charArray) {
    	const charCode = char.charCodeAt(0);
    	if (charCode < 97 || charCode > 122) {
    		continue;
    	}
    	mapOne.set(char, 0);
    }

    const charArrayTwo = s2.split('');
    for (const char of charArrayTwo) {
    	if (charCode < 97 || charCode > 122) {
    		continue;
    	}
    	const findChar = mapOne.get(char);
    	if (findChar) {
    		console.log('Yes');
    		return;
    	}
    }
    console.log('No');
}
