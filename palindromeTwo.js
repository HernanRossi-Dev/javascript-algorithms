function PalindromeTwo(str) { 
    let len =  str.length;
    const regex = /[a-zA-Z]/;
    const charArray = [];
    for (let i =0; i < len; i++) {
        if (regex.test(str[i])){
            charArray.push(str[i]);
        }
    }
    len = charArray.length;
    const iters = Math.floor(len / 2);
    let isPalindrome = true;
    for( let i = 0; i < iters; i++) {
        const check = charArray[i].toLowerCase() !== charArray[len-i -1].toLowerCase() 
        if (check ){
            isPalindrome = false;
            break;
        }
    }
  // code goes here  
  return isPalindrome; 
         
}
console.log('Start program');
// keep this function call here 
console.log('Is palindrom? ', PalindromeTwo("Noel - sehes Leon"));   