import express from 'express' ;
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

import { getAddProduct, postAddProduct } from '../controllers/admin.js';
const router = express.Router();

router.get('/add-product', getAddProduct);


router.post('/add-product', postAddProduct);

// router.get('/productsad',getProducts);

// router.get('/edit-product/:productId', getEditProduct);

// router.post('/edit-product' , postEditProduct);

// router.post('/delete-product', postDeleteProduct);

export {  
    router as adminRoutes , 
        };