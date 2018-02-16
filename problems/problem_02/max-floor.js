const maxFloor = input => {
  // put your code here !!
  let floor = 0;
  const calc = ( i , start ) => {
    let result = i - start;
    if (result === 0) {
      console.log('floor',floor);
      return floor + 1;
    }else if (result < 0) {
      console.log('floor',floor);
      return floor;
    }else if (result > 0) {
      floor++;
      return calc(result , start+1)
    }
  }
  return calc(input , 1)
};

module.exports = { maxFloor };
