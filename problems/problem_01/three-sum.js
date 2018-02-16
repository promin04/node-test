const threeSum = (nums, target) => {
  // put your code here !!
  let outPut = []

  for (let i = 0; i < nums.length; i++) {
    let first = nums[i];

    for (let k = i+1; k < nums.length; k++) {
      let second = nums[k];

      for (let j = k+1; j < nums.length; j++) {
        let third = nums[j];
        let result = first + second + third;
        if (result === target) {
          outPut.push([i,k,j]);
        }
      }

    }

  }
  console.log('outPut: ',outPut);
  return outPut;
};

module.exports = { threeSum };
