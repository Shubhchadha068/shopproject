var passport = require('passport');
var express= require('express');
var localPassport = require('passport-local').Strategy;
require('../model/userModel');
const Googlestrategy=require('passport-google-oauth').OAuth2Strategy;
const client_id="820008368022-g4bn6u1i96aq789hdlphkc83n89gm5t4.apps.googleusercontent.com"
 const client_secret="oD3Dr8F5a7UbxhM7azMNr0aq"

app=express();

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user,cb){
  cb(null,user);
})
passport.deserializeUser(function(obj,cb){
  cb(null,obj);
})


const mongoose = require('mongoose');

var User = mongoose.model('user');

passport.use(new Googlestrategy({
    clientID:client_id,
    clientSecret:client_secret,
    callbackURL:"http://localhost:3000/auth/google/callback"},
    function(accessToken,refreshToken,profile,done){
      userprofile=profile;
      return done(null,userprofile);
    }
  ));

passport.use(
    new localPassport({usernameField:'email'},
    (username,password,done)=>{
        User.findOne({email:username},
            (err,user)=>{
                if(err)
                return done(err);
                else if(!user)
                return done(null,false,{message:'username is not registered'});
                else if(!user.verifyPassword(password))
                return done(null,false,{message:'wrong password'})
                else
                return done(null,user);
            });
    })
);


app.get('/',(req,res)=>{
  res.render('C:/Users/hp/shopProject1/backend/views/pages/auth');
})


passport.use(new Googlestrategy({
  clientID:client_id,
  clientSecret:client_secret,
  callbackURL:"http://localhost:3000/auth/google/callback"},
  function(accessToken,refreshToken,profile,done){
    userprofile=profile;
    return done(null,userprofile);
  }
));
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*'),
    res.setHeader('Access-Control-Allow-Credentials', true),
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT,DELETE,OPTIONS'),
    res.setHeader('Access-Control-Allow-Headers','Origin, Content-Type, Accept')
})



