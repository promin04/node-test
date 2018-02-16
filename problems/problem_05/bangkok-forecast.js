const axios = require('axios');
const moment = require('moment');

const bangkokForecast = async () => {
  // put your code here !!
  let result;
  let outPut = [];
  
  try {
    result = await axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=bangkok&units=metric&cnt=7&APPID=e5446373eef6128679c7fa8a1951d788`);
 }
 catch(e) {
   console.log('there was an error');
   console.log(e);
 }

 if (result.data && result.data.list) {
   let list = result.data.list;
   for (let i = 0; i < list.length; i++) {
     
     outPut.push({
       date: moment.unix(list[i].dt).format('YYYY-MM-DD'),
       minTemp: list[i].temp.min, 
       maxTemp: list[i].temp.max
     })
   }
 }
 
 console.log('outPut: ',outPut);
 return outPut
 
};

module.exports = { bangkokForecast };
