const express  = require('express');
const app = express();
const Events = require('./routes/events');
const Event_reg = require('./routes/event_reg');
const Users = require('./routes/auth/auth_user');
const ForgotPassword = require('./routes/auth/forgotPassword');
const Resetpass = require('./routes/auth/resetpass');
const Admin = require('./routes/auth/auth_admin');
const bodyParser = require('body-parser');
const connectDB = require('./config/db_connect.js');
const cors = require('cors');
var CubejsServerCore = require('@cubejs-backend/server-core');
// const CubejsServer = require("@cubejs-backend/server");
const path = require("path");


 connectDB();
 app.use(cors());
 app.use(bodyParser.json());

const serverCore = CubejsServerCore.create();
serverCore.initApp(app);

 app.use('/api/events',Events);
 app.use('/api/user',Users);
 app.use('/api/user/event_reg',Event_reg);
 app.use('/api/admin',Admin);
 app.use('/api/user', ForgotPassword);
 app.use('/api/user/reset', Resetpass);


 require("dotenv").config();

//  app.use('/api/event_reg',Event_reg);
// app.get('/', (req,res,err) =>{
// //     if(err)
// //     console.log("unable to access",err);
// //     else
// //     res.send('HEllo');
// // })



app.listen(8000, (err) =>{
  if(err)
    console.log(err)
    console.log(`🚀 Cube.js server  is listening on 8000`)
})