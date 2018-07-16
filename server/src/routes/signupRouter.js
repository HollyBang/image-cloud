const express = require('express');
const userRouter = express.Router();
const User = require('../models/user');


userRouter.post('/signup', (req, res, next) => {
      const { body } = req;
      let { password, email } = body;

      if (!email) {
        return res.send({
          success: false,
          message: 'Error: Email cannot be blank.'
        });
      }
      if (!password) {
        return res.send({
          success: false,
          message: 'Error: Password cannot be blank.'
        });
      }
      email = email.toLowerCase();
      email = email.trim();

      User.find({
        email: email
      }, (err, previousUsers) => {
        if (err) {
          return res.send({
            success: false,
            message: 'Error: Server error'
          });
        } else if (previousUsers.length > 0) {
          return res.send({
            success: false,
            message: 'Error: Account already exist.'
          });
        }
        req.session.user = email;
        const newUser = new User();
        newUser.email = email;
        newUser.password = newUser.generateHash(password);
        newUser.save((err, user) => {
          if (err) {
            return res.send({
              success: false,
              message: 'Error: Server error'
            });
          }
          return res.send({
            success: true,
            message: 'Signed up'
          });
        });
      });
    }); 

    module.exports = userRouter;