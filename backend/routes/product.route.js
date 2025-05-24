import express from  "express"; 
import { getProducts } from "../controllers/product.controller.js";
import { createProduct } from "../controllers/product.controller.js";
import { updateProduct } from "../controllers/product.controller.js";
import { deleteProduct } from "../controllers/product.controller.js";


const router=express.Router();

// for get all products
router.get("/",getProducts);

// for add new products
router.post("/",createProduct);

// for update product
router.put("/:id",updateProduct);

// for delete product
router.delete("/:id",deleteProduct );

export default router;