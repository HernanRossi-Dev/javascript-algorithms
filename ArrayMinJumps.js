function ArrayMinJumps(arr) {
  const len = arr.length;
  if(len === 1) {
    return 0;
  }
  const boolArray = new Array(len);
  for (let i = 0; i < len; i++) {
    const row = new Array(len).fill(false);
    const entry = arr[i];
    if (i === 0) {
      row.fill(true, 0, entry +1);
    } else {
      for(let j = i; j < len; j++ ) {
        row[j] = (boolArray[i - 1][j] || j-i <= entry );
      }
    }
    boolArray[i] = row;
  }
//  boolArray.forEach(x => console.log(x));
  let indexY = 0;
  let indexX = len -1;
  while(!boolArray[indexY][indexX]) {
    indexY++;
  }
  if (indexY === indexX) {
    return -1;
  }
  let jumps = 0;
  while (indexY > 0) {
    indexX = indexY;
    let row = boolArray[indexY]
    while ( indexY >= 0 && row[indexX]){
      indexY = indexY - 1;
      row = boolArray[indexY]
    }
    indexY++;
    jumps++;
  }
  jumps++;
  return jumps;
}
// console.log(ArrayMinJumps([1, 3, 6, 8, 2, 7, 1, 2, 1, 2, 6, 1, 2, 1, 2]));
// console.log(ArrayMinJumps([1, 3, 6, 1, 0, 9]));
// console.log(ArrayMinJumps([1, 0, 0, 2]));
console.log(ArrayMinJumps([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
