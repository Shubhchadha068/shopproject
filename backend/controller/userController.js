require('../model/userModel');
require('../config/passportConfig');
require('../routes/userRoutes')
const mongoose = require('mongoose');
const passport = require('passport');
var User = mongoose.model('user');
var jwt = require('jsonwebtoken');
const _ = require('lodash');



 const Googlestrategy=require("passport-google-oauth").OAuth2Strategy;


 var userprofile;



// module.exports.addUser=(req,res)=>{
//     var newUser=new User({
//         username:req.body.username,
//         email:req.body.email,
//         contact:req.body.contact,
//         password:req.body.password,
//         address:req.body.address
//     });

//     return newUser.save().then((docs)=>{
//         res.status(200).json({
//             success:true,
//             message:'New user Created',
//             user:docs
//         });
//     })
//     .catch((err)=>{
//         res.status(401).json({
//             success:false,
//             message:'Error in creating new User',
//             error:err.message
//         });
//     });
// };

module.exports.addUser=(req,res)=>{
  var newUser=new User({
      name:req.body.name,
      email:req.body.email,
      contact:req.body.contact,
      password:req.body.password
  });

  return newUser.save().then((docs)=>{
      res.status(200).json({
          success:true,
          message:'New user Created',
          user:docs
      });
  })
  .catch((err)=>{
      res.status(401).json({
          success:false,
          message:'Error in creating new User',
          error:err.message
      });
  });
};




module.exports.authenticate=(req,res,next)=>{
    passport.authenticate('local',(err,user,info)=>{
        if(err) return res.status(404).json(err);
        if(user) return res.status(200).json({
            "token":user.generateJWT(),
                data:user
        })
        if(info) return res.status(401).json(info);
    })(req,res,next);
}

module.exports.userProfile=(req,res)=>{
    User.findOne({_id:req._id}).then((user)=>{
        return res.status(200).json({
            success:true,
            message:'user Found',
            data:_.pick(user,['_id','email'])
        })
    }).catch((err)=>{
        res.status(404).json({
            success:false,
            message:'user not found',
            err:err.message
        })
    })
}

module.exports.selectedUser=(req,res)=>{
  return User.findById({_id:req.params.id}).select('name email contact').then((docs)=>{
    res.status(200).json({
      success:true,
      messasge:'User Record Found',
      data:docs
    })
  }).catch((err)=>{
    res.status(401).json({
      success:false,
      message:'User not found',
      err:err.message
    })
  })
}

module.exports.error=(req,res)=>{
  res.send('Error in log in');
}

module.exports.success=(req,res)=>{
  res.send(userprofile);
}

module.exports.passportSuccess=(req,res)=>{
  passport.authenticate('google',{scope:['profile','email']});
}

module.exports.passportError=(req,res)=>{
  passport.authenticate('google',{failureRedirect:'/error'},
  function(req,res){
    res.redirect('/success');
  })
}
