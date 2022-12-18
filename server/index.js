const express = require("express");
const app=express()
const cookieParser=require('cookie-parser')
const cors = require("cors");
const productRouter = require ('./routes/prodects.routes')
const userRouter = require ('./routes/user.router')
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }));
app.use("/product",productRouter)
app.use('/user',userRouter)
const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
const db ="mongodb+srv://Ahmedhenchiri:UvZZCyLXCJU7in18@cluster0.yzf24ly.mongodb.net/shop?retryWrites=true&w=majority"
 mongoose.connect(db,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((res) => console.log("data connected"))
    .catch((err) => console.log(err))



const PORT = 5000;

app.listen(PORT, function () {
  console.log("server run http://localhost/:" + PORT);
});