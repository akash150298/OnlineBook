import { Product } from "../models/product.js";

const getProducts = (req, res, next)=>{
   Product.fetchAll()
   .then(products=>{
      res.render('shop/product-list', {
         prods: products,
         pageTitle: 'All Product',
        path: '/products'
      });
   })
    .catch(err=>{
      console.log(err);
   });
};
const getProduct = (req, res, next) =>{
   const prodId = req.params.productId;
   let prods ={};
   Product.findbyId(prodId)
   .then((product) =>{   
      console.log(product);
      //  console.log(products[0].dataValues);
         res.render('shop/product-detail', 
         {
          product:product,
          pageTitle:product.title,
          path: '/products'});
             })
   .catch(err=>console.log(err));
      }

const getIndex=(req, res, next)=> {
   Product.fetchAll()
   .then(products=>{
      res.render('shop/index', {
         prods: products,
         pageTitle: 'Shop',
         path: '/'
       });
   })
   .catch(err=>{
      console.log(err);
   });
};
const getCart = (req, res, next) => {
   req.user.getCart()
   .then(cart=>{
      // console.log(cart);
      return cart
      .getProducts()
      .then(products => {
         res.render('shop/cart', {
            path:'/cart',
            pageTitle: 'Your Cart',
            products: products
         });     
      }).catch(err=>console.log(err))
   })
   .catch(err => console.log(err))
   // Cart.getCart(cart=>{
   //      Product.fetchAll(products =>{
   //       const cartProducts = [];
   //        for (const product of products){
   //          const cartProductData = cart.products.find(prod => prod.id === product.id)
   //          if(cartProductData){
   //                       cartProducts.push({ productData: product, qty:cartProductData.qty })
   //          }
   //        }
          
   //      });
   // });
}
const postCart = (req, res, next) =>{
const prodId = req.body.productId;
let fetchedCart;
let newQuantity = 1;
req.user
.getCart()
.then(cart =>{
   fetchedCart = cart;
    return cart.getProducts({where: {id: prodId}})
})
.then(products =>{
   let product;
   if(products.length>0)
    product = products[0];
    if(product){
          const oldQuantity = product.cartItem.quantity;
          newQuantity = oldQuantity+1;
          return product;
          }
    })
    return Product.findByPk(prodId)
    .then(product=>{
      return fetchedCart.addProduct(product, {through: { quantity: newQuantity}});
    }) 
.then(()=>{
   res.redirect('/cart');
})
.catch(err => console.log(err))
};

const postCartDelete = (req, res, next) =>{
const prodId = req.body.productId;
console.log(prodId);
Product.findById(prodId, product =>{
   Cart.deleteProduct(prodId, product.price);
   res.redirect('/cart');
})
};

const postOrder = (req, res, next)=>{

}

const getOrders = (req, res, next) => {
   res.render('shop/orders', {
      path:'/orders',
      pageTitle: 'Your Orders'
   });
}
const getCheckout = (req, res, next)=>{
res.render('shop/checkout', {
   path: '/cart',
   pageTitle: 'Your Cart'
});
}
 export {
    getProducts, Product, getIndex, getCheckout,getCart,getOrders,getProduct,postCart,postCartDelete,postOrder
 };

