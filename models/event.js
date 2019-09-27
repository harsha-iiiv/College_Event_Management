const mongoose = require('mongoose');


const Eventschema = new mongoose.Schema({
    name : { type: String, required: true},
    date : { type: Date, required: true},
    time: { type: String, required: true},
    venue: { type: String, required: true},
    Description :{ type: String, required: true},
    type: { type: String, required: true},
    image: { type: String, required: true},
    logo: { type: String},
    organiserName: { type: String, required: true},
    role: { type: String, required: true},
    email: { type: String, required: true},
    ticketrequired: { type: Boolean, required: true},
    ticketname: { type:String, default: ''},
    isPaid: { type: Boolean, default: false},
    ticketprice: { type:Number, default: 0},
},
{
    timestamps: true
});

module.exports = mongoose.model('Events', Eventschema);