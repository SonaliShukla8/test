const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    name:String,
    rating:Number,
    review:String,
})
const Fruit=mongoose.model('FRUITS',schema);
module.exports=Fruit;