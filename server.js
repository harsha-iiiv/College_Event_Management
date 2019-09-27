const express  = require('express');
const app = express();
const Events = require('./routes/events');
const Event_reg = require('./routes/event_reg');
const Users = require('./routes/auth/auth_user');
const Admin = require('./routes/auth/auth_admin');
const bodyParser = require('body-parser');
const connectDB = require('./config/db_connect.js');
const cors = require('cors');
app.get('/', (req,res, next) =>{
    
     
        res.send('Hello');

    })
 connectDB();   
 app.use(cors());
 app.use(bodyParser.json());
 app.use('/api/events',Events);   
 app.use('/api/events/myevent',Events)
 app.use('/api/user',Users);
 app.use('/api/admin',Admin);
 app.use('/api/event_reg',Event_reg);
// app.get('/', (req,res,err) =>{
// //     if(err)
// //     console.log("unable to access",err);
// //     else
// //     res.send('HEllo');
// // })
app.listen(8000, (err) =>{ 
    console.log(err)
})

