const path = require('path');
const express = require('express');
const db = require('./db')
const bodyParser = require('body-parser');
const fs = require('fs')
  
const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './dist/')));

app.get('/api/dogs', async (req, res) => {
  console.log('request obtained')
  //const dogs = await db.getAvailableDogs()
  
  const dogs = [
    {
      "name": "Fido",
      "nickname": "Golden Swiss",
      "info": "Meet Fido, the office dog who is always living it up during the night like it's the weekend! Fido is a real party animal and loves nothing more than hitting up the local dog bars and clubs until the wee hours of the morning. Unfortunately, Fido's love for the nightlife means that he often comes into the office a little worse for wear. You might find him snoring away under his desk or trying to sneak in a nap during an important meeting.",
      "image": "1",
    },
    {
      "name": "Rufus",
      "nickname": "Brown Jersey",
      "info": "Oh no, the beloved office dog, Rufus, is sick and can't come into work! His coworkers are feeling the loss of their furry friend and are starting to realize just how much they relied on his presence to brighten up their day.",
      "image": "2",
    },
    {
      "name": "Einstein",
      "nickname": "Baby Flying Yellowback",
      "info": "Meet Einstein, the super smart and super fluffy office dog! Einstein is not your average pooch - he's a true scholar and spends most of his time studying everything from quantum mechanics to the art of treat-catching. Despite his intense focus on academics, Einstein still manages to keep up with his grooming routine.",
      "image": "3",
    },
  ]
  console.log(dogs)
  res.json(dogs);
});

app.get('/api/dogs/image', async (req, res) => {
  const imageId = req.query.id
  console.log('fetching image with key ' + imageId)
  const image = await db.getImageOfDog(imageId)
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