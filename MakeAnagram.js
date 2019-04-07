function makeAnagram(a, b) {
    const longer = a.length >= b.length ? a.split('') : b.split('');
    const shorter = a.length >= b.length ? b.split('') : a.split('');
    let deletes = 0;
    const countMap = new Map();

    for (const char of shorter) {
        let count = countMap.get(char);
        if (count) {
            countMap.set(char, count + 1);
        } else {
            countMap.set(char, 1);
        }
    } 
    for (const char of longer) {
        const count = countMap.get(char);
        if (count) {
            countMap.set(char, count - 1);
        } else {
            deletes++;
        }
    }
    for (const [key, value] of countMap.entries()) {
        deletes += value;
    }
    console.log(deletes);
}