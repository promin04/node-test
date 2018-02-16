const minStep = input => {
  // put your code here !!
  if(input === 1) {
    return 0;
  } else if( (input % 2) === 0){
    return minStep(input / 2) + 1;
  } else {
    let min = Math.min(minStep(input + 1),minStep(input - 1))
    return min + 1;
  }
};

module.exports = { minStep };
