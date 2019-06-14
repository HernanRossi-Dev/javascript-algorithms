function WordSplit(strArr) {

    const word = strArr[0].toLowerCase();
    const splitWords = strArr[1].split(',');
    const wordValues = new Map();
    const alphabet = { a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10, k:11, l:12, m:13, n:14, o:15, p:16, q:17, r:18, s:19, t:20, u:21 , v:22, w:23, x:24, y:25, z:26};
    let wordHash = 0;
    word.split('').forEach(entry => {
      wordHash += entry.charCodeAt(0) * alphabet[entry] * 997;
    })
    splitWords.forEach((entry) => {
        let codeSum = 0;
        entry = entry.toLowerCase();
        for (let i = 0; i < entry.length; i++) {
            codeSum += entry.charCodeAt(i) * alphabet[entry[i]] * 997;
        }
        wordValues.set(codeSum, entry);
    });
    const keys = wordValues.keys();
    for (const key of keys) {
      const wordValue = wordValues.get(key);
      const diff = wordHash - key;
      if (wordValues.has(diff)) {
        const partnerWord = wordValues.get(diff);
        if (wordValue + partnerWord === word) {
          return wordValue + "," + partnerWord;
        }
      }
    }
  return 'not possible';
}
const testOne = ["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"];

console.log(WordSplit(testOne));
