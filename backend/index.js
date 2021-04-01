require('./config/db');
require('./config/passportConfig');
var express= require('express');
var bodyparser=require('body-parser');
var apiroutes=require('./routes/userRoutes');
var cors = require('cors');


var app = express();



app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());

app.use(session({
  resave:false,
  saveUninitialized:true,
  secret:'Google Auth',
  }));







// app.get('/',(req,res)=>{
//   res.render('C:/Users/hp/shopProject1/backend/views/pages/auth');
// })


//
app.use('/',apiroutes);
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*'),
    res.setHeader('Access-Control-Allow-Credentials', true),
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT,DELETE,OPTIONS'),
    res.setHeader('Access-Control-Allow-Headers','Origin, Content-Type, Accept')
})






const port = process.env.PORT || 3000;

app.listen(port,(err)=>{
  if(err){
    console.log(err);
  }else{
    console.log('Server is running at http://localhost:'+port);}
});






