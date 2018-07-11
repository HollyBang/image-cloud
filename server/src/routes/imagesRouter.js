const express = require('express');
const imagesRouter = express.Router();
const multer = require('multer');
const fileModel = require('../models/filemodel');
var fs = require('fs');

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

const upload = multer({ storage });

imagesRouter.post('/upload', upload.single('selectedFile'), (req, res) => {
    // console.log('req.file', req.file);
    // console.log('req.body', req.body);
    let file = new fileModel;
    file.img.imgName = req.body.filename;
    file.img.contentType = req.file.mimetype;
  
    file.save((err, a) => {
      if (err) {
        res.status = 503;
        throw err;
      }
      res.status = 200;
      res.send();
      console.error('saved img to mongo');
    });
  });
  
  imagesRouter.get('/getimages', function (req, res, next) {
    let file = new fileModel;

    let serverFiles = fs.readdirSync('images');
    console.log('server files ',serverFiles);
 
    fileModel.find({}, function (err, docs) {
      if (err) return next(err);
      let filteredImg = docs.filter((item)=>{
       return serverFiles.includes(item.img.imgName)
      }).map((item)=>{
        return {link: `http://localhost:4200/static/${item.img.imgName}`}
      })
      console.log('filteredImg ',filteredImg);
     
      res.contentType('image/jpeg');
      res.send(filteredImg);
    });
  });
  module.exports = imagesRouter;

