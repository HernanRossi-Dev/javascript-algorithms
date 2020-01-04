function NumberEncoding(str) {
  const strTokens = str.split("");
  const result = [];
  strTokens.forEach(item => {
    let lower = item.toLowerCase();
    console.log(lower);
    const charCode = lower.charCodeAt(0);
    if(charCode <= 122 && charCode >= 97) {
      let printIndex = charCode - 96;
      result.push(printIndex);
    } else {
      result.push(item);
    }
  });
  console.log(result);
  return   result.join('');
}

console.log(NumberEncoding("af5c a#!"));
//"1653 1#!"
