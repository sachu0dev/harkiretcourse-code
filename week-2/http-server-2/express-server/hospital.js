const express = require('express');
const app = express();

const users = [{
  name: 'abhi',
  kidneys: [{
    healthy: false
  },
  {
    healthy : true
  }]
}];

app.get('/',  (req, res)=>{
  const userKidneys = users[0].kidneys;
  const numberofKidneys = userKidneys.length;
  let numberofHealthyKidneys = 0;
  for (let i = 0; i<userKidneys.length; i++){
    if(userKidneys[i].healthy){
      numberofHealthyKidneys++;
    }
  }
  const numberofUnhealthyKidneys = numberofKidneys - numberofHealthyKidneys;
  res.send(`<h1>${users[0].name} medical recored</h1>
  <p>the number of kidneys is ${numberofKidneys}</p>
  <p> the numberofHealthyKidneys is ${numberofHealthyKidneys}</p>
  <p> the numberofUnhealthyKidneys is ${numberofUnhealthyKidneys}
  `);
})

app.post("/", (req, res)=>{
  
})

app.listen(3001);