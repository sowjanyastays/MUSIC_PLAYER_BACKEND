const mongoose = require('mongoose')

const musicSchema = new mongoose.Schema(
    {
        originalname:{
            type:String,
            required:true,
            unique:true,
            index:true
        },
        mimetype:{
            type:String,
            required:true
        },
        destination:{
            type:String,
            required:true
        },
        size:{
            type:Number,
            required:true
        },
        filePath:{
            type:String,
            required:true,
            unique: true,
            index:true
        },
        filename: {
            type:String,
            required:true,
            unique:true,
            index:true
        },
    },
    {
        collection:'files'
    }
)

module.exports = mongoose.model('files',musicSchema)    