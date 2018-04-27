const port = process.env.PORT || 4200;
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const fileModel = require('./models/filemodel');



mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://holly:fethebest@ds159459.mlab.com:59459/filecloud')
  .then(() => {
    console.log('Start');
  })
  .catch(err => {
    console.error('App starting error:', err.stack);
    process.exit(1);
  });

const upload = multer();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));




app.post('/upload', upload.single('selectedFile'), (req, res) => {
  console.log('req.file', req.file);
  console.log('req.body', req.body);
  let file = new fileModel;
  file.img.data = req.file.buffer;
  file.img.contentType = req.file.mimetype;

  file.save((err, a) => {
    if (err) throw err;

    console.error('saved img to mongo');
  });
  
});

app.listen(port, () => console.log(`Server listening on port ${port}`));