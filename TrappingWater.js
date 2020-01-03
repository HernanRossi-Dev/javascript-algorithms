function TrappingWater(arr) {
  let leftBuilding = arr[0];
  let stack = [];
  let sum = 0;
  let index = 1;
  let leng = arr.length;
  if(leng < 2) {
    return 0;
  }
  while (index < leng) {
    let currentBuilding = arr[index];
    if (currentBuilding >= leftBuilding) {
      stack.push(0);
      leftBuilding = currentBuilding;
    } else {
      stack.push(leftBuilding - currentBuilding);
    }
    index++;
  }
  let maxWater = 0;
  let currentSum = 0;
  while(stack.length > 0) {
    let entry = stack.shift();
    if (entry === 0) {
      if(currentSum > maxWater) {
        maxWater = currentSum;
      }
    } else {
      currentSum += entry;
    }
  }
  return maxWater;

}

// keep this function call here
console.log(TrappingWater([3, 0, 0, 2, 0, 4]));
console.log(TrappingWater([0, 2, 4, 0, 2, 1, 2, 6]));
console.log(TrappingWater([1, 2, 1, 2]));
