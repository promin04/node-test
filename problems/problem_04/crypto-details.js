const axios = require('axios');

const cryptoDetails = async (symbols = []) => {
  // put your code here !!
  if (!Array.isArray(symbols)) {
      console.log('Input is not array');
      return;
  }
  
  let all = [];
  for (let i = 0; i < symbols.length; i++) {
    try {
      let promise = await axios.get(`https://coinbin.org/${symbols[i]}`)
      all.push(promise.data);
   }
   catch(e) {
     console.log('there was an error');
     console.log(e);
   }
    
    
    
  }
  console.log('outPut: ',all);
  return all;
};

module.exports = { cryptoDetails };
