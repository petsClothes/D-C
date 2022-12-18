const mongoose = require ('mongoose')


const ProductsSchema =new mongoose.Schema({
    type:{
        type:String ,
        enum :['cats','dogs','kittens','puppies']
    },
    productname:{
        type:String,
        require:true,
    },
    categorie:{
        type:String,
        enum:['coats&jackets','sweaters&hoodies','shirts&dresses','accessories'],
       
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