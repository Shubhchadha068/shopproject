var session = require('express-session');
var bodyparser=require('body-parser');
var cors = require('cors');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());

app.use(session({
  resave:false,
  saveUninitialized:true,
  secret:'Google Auth',
}));
const Googlestrategy=require("passport-google-oauth").OAuth2Strategy;
const client_id="820008368022-g4bn6u1i96aq789hdlphkc83n89gm5t4.apps.googleusercontent.com"
const client_secret="oD3Dr8F5a7UbxhM7azMNr0aq"
