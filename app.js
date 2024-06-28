const mongoose = require('mongoose');
const url_db = 'mongodb://localhost:27017/empresa';
mongoose.connect(url_db)

.then(() =>{
    console.log("furula")
})
.catch((err)=>{
    console.log("no jala")
})
const schema_company =new mongoose.Schema({
    name:{
        type:String
    },
    branch:{
        type:String
    },
    fundator:{
        type:String
    },
    type:{
        type:String
    },
    creation_year:{
        type:Date
    },
    rating:{
        type:Number
    },
    city:{
        type:String
    }
})
const model_company =new mongoose.model('general_data', schema_company)
model_company.create({
    name:"Guardian INC",
    btanch: "Warden",
    fundator:"Carlos Daniel Gutierrez Novoa",
    type: "videogames",
    creation_year: new Date ("05/01/2024"),
    rating:7,
    city:"Aguascalientes"

})



