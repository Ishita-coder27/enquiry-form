let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let enquirySchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    phone:{
        type:String,
        required:true,
        match:/^\d{10}$/,
        unique:true
    },
    message:{
        type:String,
        required:true,
        minlength:10,
        maxlength:500,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});
let Enquiry=mongoose.model('Enquiry',enquirySchema);
module.exports=Enquiry;