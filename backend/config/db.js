const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/projectDB",{useNewUrlParser:true})
.then(()=>{
    console.log("Database connected succesfully");
})
.catch((err)=>{
    console.log("Error in connecting database " +err);
})
