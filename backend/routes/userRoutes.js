var express = require('express');
var session= require('express-session');

var userCtrl = require('../controller/userController');
var jwthelper=require('../config/jwtHelper');

var routes=express.Router();





routes.get('/error',userCtrl.error);
routes.get('/success',userCtrl.success);
routes.get('/auth/google',userCtrl.passportSuccess);
routes.get('/auth/google/callback',userCtrl.passportError);

routes.post('/newUser',userCtrl.addUser);
routes.post('/auth',userCtrl.authenticate);
routes.get('/profile',jwthelper.verifytoken,userCtrl.userProfile);
routes.get('/SelectUser/:id',userCtrl.selectedUser);

module.exports = routes;



