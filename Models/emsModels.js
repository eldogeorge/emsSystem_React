// s3 to create 
// Models Creatation MCS1 line 56

// import mongoose
const  mongoose  = require("mongoose");


const employeeSchema=new mongoose.Schema({
    fname:{
        type:String,
        // *require
        required:true,
        // to remove white space backend vailation
        trime:true
    },
    lname:{
        type:String,
        required:true,
        trime:true
    },
    email:{
        type:String,
        required:true,
        trime:true,
        // to unique email
        unique:true
    },
    mobile:{
        type:String,
        required:true,
        trime:true,
        unique:true,
        // min length number
        minlength:10,
        // max length number
        maxlength:13
    },
    gender:{
        type: String,
        required:true
        // auto store
    },
    status:{
        type: String,
        required:true
    },
    profile:{
        type: String,
        required:true
    },
    location:{
        type: String,
        required:true,
        trim:true
    }
})

// model connects MCS2
//collectionName same as atlas   collectionName,schemaName
const employees=new mongoose.model('employees',employeeSchema)


// exports model MCS3 goto logic.js

module.exports=employees
