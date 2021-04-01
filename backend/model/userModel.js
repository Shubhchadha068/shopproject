const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



var userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
      type:String,
      required:true,
    },
    saltString:String
});

userSchema.pre('save',function(next){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(this.password,salt,(err,hash)=>{
            this.password=hash;
            this.saltString=salt;
            next();
        })
    })
})

userSchema.methods.verifyPassword = function(password){
    return bcrypt.compareSync(password,this.password);
}

userSchema.methods.generateJWT  =  function(){
    return jwt.sign({
        _id:this._id
    },"ABC1111",{
        expiresIn:"3600m"
    })
}


mongoose.model('user',userSchema);
