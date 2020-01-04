function StringScramble(str1,str2) {
  let s1Tokens = str1.split("");
  let s2Tokens = str2.split("");
  const str1Map = new Map();
  s1Tokens.forEach( x => {
    if (str1Map.has(x)) {
      let tCount = str1Map.get(x) + 1;
      str1Map.set(x, tCount);
    } else {
      str1Map.set(x, 1);
    }
  });
  let result = true;
  s2Tokens.forEach( x => {
    if(str1Map.has(x)) {
      let tCount = str1Map.get(x) - 1;
      if (!tCount) {
        str1Map.delete(x);
      } else {
        str1Map.set(x, tCount);
      }
    } else {
      return result = false;
    }
  });
  // code goes here
  return result;
}

// keep this function call here
console.log(StringScramble("cdore", "coder"));
console.log(StringScramble("h3llko", "hello"));
console.log(StringScramble("rkqodlw", "world"));
