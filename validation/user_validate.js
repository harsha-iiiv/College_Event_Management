const Joi = require('@hapi/joi');
const registrationValidate = (data)=>{
const schema = Joi.object({
name : Joi.string()
         .min(6)
         .required(),
email : Joi.string()
           .min(6)
           .required()
           .email(),  
password : Joi.string()
              .min(6)
              .required()       

});
   
 return schema.validate(data);

};
const loginValidate = (data)=>{
const schema =Joi.object( {
 
email : Joi.string()
           .min(6)
           .required()
           .email(),  
password : Joi.string()
              .min(6)
              .required()       

});
   
 return schema.validate(data);

};
const loginValidate_admin = (data)=>{
const schema =Joi.object( {
 
name : Joi.string()
           .min(5)
           .required(),  
password : Joi.string()
              .min(6)
              .required()       

});
   
 return schema.validate(data);

};
const eventValidate = (data) =>{

    const schema = Joi.object({
      name: string()
        .min(5)
        .required(),
      date: Joi.date().required(),
      time: Joi.string().required(),
      venue: Joi.string()
        .min(5)
        .required(),
      Description: Joi.string()
        .min(5)
        .required(),
      type: Joi.boolean().required(),
      image: Joi.string().required(),
      logo: Joi.string(),
      organiserName: Joi.string()
        .min(3)
        .required(),
      role: Joi.string()
        .min(5)
        .required(),
      email: Joi.string()
        .min(5)
        .required()
        .email(),
      ticketrequired: Joi.boolean(),
      ticketname: Joi.string(),
      isPaid: Joi.boolean(),
      ticketprice: Joi.number()
    });
}

module.exports.registrationValidate = registrationValidate;
module.exports.loginValidate = loginValidate;
module.exports.loginValidate_admin = loginValidate_admin;