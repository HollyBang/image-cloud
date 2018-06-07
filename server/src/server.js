const port = process.env.PORT || 4200;
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const imagesRouter = require('./routes/imagesRouter');
const signupRouter = require('./routes/signupRouter');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://holly:fethebest@ds159459.mlab.com:59459/filecloud')
  .then(() => {
    console.log('Start');
  })
  .catch(err => {
    console.error('App starting error:', err.stack);
    process.exit(1);
  });


const app = express();

// app.use(express.static('images'));
app.use('/static', express.static('images'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/image', imagesRouter);
app.use('/account', signupRouter);

// app.use('/static/:id', function (req, res, next) {
//   console.log('Request Id:', req.params.id);
//   next();
// });

app.listen(port, () => console.log(`Server listening on port ${port}`));