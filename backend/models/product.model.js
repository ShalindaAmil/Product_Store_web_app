import mongoose, { trusted } from 'mongoose';

const productSchema =new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
},{
    timestamp:true //cretedAt, updatedAt
}
);

const Product=mongoose.model("Product",productSchema);

export default Product;