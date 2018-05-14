const port = process.env.PORT || 4200;
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const fileModel = require('./models/filemodel');

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './images')
  },
  filename: (req, file, cb) => {
    // console.log(file);
    const newFilename = file.originalname;
    cb(null, newFilename);
   },
})

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://holly:fethebest@ds159459.mlab.com:59459/filecloud')
  .then(() => {
    console.log('Start');
  })
  .catch(err => {
    console.error('App starting error:', err.stack);
    process.exit(1);
  });

const upload = multer({ storage });
const app = express();

// app.use(express.static('images'));
app.use('/static', express.static('images'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// app.use('/static/:id', function (req, res, next) {
//   console.log('Request Id:', req.params.id);
//   next();
// });


app.post('/upload', upload.single('selectedFile'), (req, res) => {
  // console.log('req.file', req.file);
  // console.log('req.body', req.body);
  let file = new fileModel;
  file.img.imgName = req.body.filename;
  file.img.contentType = req.file.mimetype;

  file.save((err, a) => {
    if (err) throw err;
    console.error('saved img to mongo');
  });
});

app.get('/getimages', function (req, res, next) {
  let file = new fileModel;
  fileModel.find({}, function (err, docs) {
    if (err) return next(err);
    let imgList = docs.map((item)=>{
      return {link: `http://localhost:4200/static/${item.img.imgName}`}
    })
    res.contentType('image/jpeg');
    res.send(imgList);
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));