const path = require('path');
const express = require('express');
const db = require('./db')
const bodyParser = require('body-parser');
const fs = require('fs')
  
const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './dist/')));

app.get('/api/unicorns', async (req, res) => {
  console.log('request obtained')
  //const unicorns = await db.getAvailableUnicorns()
  
  const unicorns = [
    {
      "name": "Bucephalus",
      "nickname": "Golden Swiss",
      "info": "Bucephalus joined Wild Rydes in February 2016 and has been giving rydes almost daily. He says he most enjoys getting to know each of his ryders, which makes the job more interesting for him. In his spare time, Bucephalus enjoys watching sunsets and playing Pokemon Go.",
      "image": "one",
    },
    {
      "name": "Shadowfox",
      "nickname": "Brown Jersey",
      "info": "Shadowfox joined Wild Rydes after completing a distinguished career in the military, where he toured the world in many critical missions. Shadowfox enjoys impressing his ryders with magic tricks that he learned from his previous owner.",
      "image": "two",
    },
    {
      "name": "Rocinante",
      "nickname": "Baby Flying Yellowback",
      "info": "Rocinante recently joined the Wild Rydes team in Madrid, Spain. She was instrumental in forming Wild Rydes’ Spanish operations after a long, distinguished acting career in windmill shadow-jousting.",
      "image": "three",
    },
  ]
  console.log(unicorns)
  res.json(unicorns);
});

app.get('/api/unicorns/image', async (req, res) => {
  const imageId = req.query.id
  console.log('fetching image with key ' + imageId)
  const image = await db.getImageOfUnicorn(imageId)
  res.contentType('image/png');
  res.send(Buffer.from(image, 'binary'));
});

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

var callback = (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
}