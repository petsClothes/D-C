const mongoose = require ('mongoose')


const ProductsSchema =new mongoose.Schema({
    productname:{
        type:String,
        require:true,
    },
    categorie:{
        type:String,
        // enum:['coats&jackets','sweaters&hoodies','shirts&dresses','accessories']
        require:true,
    },
    imageUrl:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    desciption:{
        type:String ,
        require:true,
    },
  });
  module.exports=mongoose.model('Product',ProductsSchema)