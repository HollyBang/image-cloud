const port = process.env.PORT || 4200;
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');

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
app.use(cors({
  origin:['http://localhost:3000'],
  methods:['GET','POST'],
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cookieParser());
app.use(session({
  secret: 'myololosecret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));
app.use('/image', imagesRouter);
app.use('/account', signupRouter);

// app.use('/static/:id', function (req, res, next) {
//   console.log('Request Id:', req.params.id);
//   next();
// });

app.listen(port, () => console.log(`Server listening on port ${port}`));