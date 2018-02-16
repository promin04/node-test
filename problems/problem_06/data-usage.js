const { readFileSync } = require('fs');

const logFilePath = __dirname + '/data-usage.log';

const raw = readFileSync(logFilePath, 'utf8');

const dataUsage = () => {
  // put your code here !!
  let allUser = {};
  let rawData = raw.split(`\r\n`);
  let outPut = [];
  
  for (let i = 0; i < rawData.length; i++) {
    
    let ary = rawData[i].split(`,`);
    let user;
    let data;
    let day;
    
    for (let k = 0; k < ary.length; k++) {
      
      //date
      if (k===0) {
        day = ary[k];
      }
      
      if (ary[k].startsWith("user")) {
        user = ary[k].split('=')[1];
        if (!allUser[user]) {
          allUser[user] = {
                            username: user ,
                            total:0,
                            day:1,
                            lastDay:day
                          }
        }
        continue;
      }
      
      if (ary[k].startsWith("data")) {
        data = ary[k].split('=')[1];
        allUser[user]["total"] = allUser[user]["total"] + Number(data); 
        if (allUser[user]["lastDay"] !== day) {
          allUser[user]["lastDay"] = day;
          allUser[user]['day']++;
          allUser[user]["average"] = allUser[user]["total"] / allUser[user]['day'];
        }
        continue;
      }
      
    }
    
    
  }
  

  for (let user in allUser) {
    delete allUser[user]["day"];
    delete allUser[user]["lastDay"];
    outPut.push(allUser[user]);
  }
  
  console.log('outPut: ',outPut);
  
  return outPut;
};

module.exports = { dataUsage };
