import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { adminRoutes, } from './admin.js';
import { getProducts,getIndex, getCheckout, getCart, getOrders,getProduct, postCart, postCartDelete,postOrder} from '../controllers/shop.js';
const router = express.Router();
router.get('/', getIndex );
router.get('/products', getProducts);
router.get('/products/:productId', getProduct);
router.get('/cart', getCart);
router.post('/cart', postCart);
router.post('/cart-delete-item', postCartDelete);
router.post('/create-order',postOrder);
router.get('/orders', getOrders);

export { router as shopRoutes};