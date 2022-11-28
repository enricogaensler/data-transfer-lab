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
  const unicorns = await db.getAvailableUnicorns()
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