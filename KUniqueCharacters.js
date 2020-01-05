function KUniqueCharacters(str) {

  const kValue = str.charAt(0);
  str = str.slice(1);
  const length = str.length;
  const charMap = new Map();
  const stringWindow = [];
  let result = [];
  for (let i = 0; i < length; i++) {
    let curChar = str.charAt(i);
    if (charMap.has(curChar)) {
      let charCount = charMap.get(curChar) + 1;
      charMap.set(curChar, charCount);
    } else {
      while (charMap.size >= kValue) {
        let removeChar = stringWindow.shift();
        let rCharCount = charMap.get(removeChar) - 1;
        if (!rCharCount) {
          charMap.delete(removeChar);
        } else {
          charMap.set(removeChar, rCharCount);
        }
      }
      charMap.set(curChar, 1);
    }
    stringWindow.push(curChar);
    if (stringWindow.length > result.length) {
      result = [...stringWindow];
    }
  }
  return result.join('');
}
console.log(KUniqueCharacters("3aabacbebebe"));
