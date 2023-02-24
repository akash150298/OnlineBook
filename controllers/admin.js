import  { Product} from "../models/product.js";
const getAddProduct=(req, res, next)=>{
    res.render('admin/edit-product',
     {pageTitle: 'Add Product',
      path: '/add-product',
      editing: false
    });
 }
 const postAddProduct =(req, res) =>{
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, price, description, imageUrl);
  product.save() 
  .then(result=>{
    console.log('Created product');
    res.redirect('/products')
   })
   .catch(err=>{
    console.log(err);
   });
}


// const getProducts = (req, res,) =>{
//     req.user
//     .getProducts()
//     .then(products=>{
//       res.render('admin/productsad',{
//         prods:products,
//         pageTitle:'Admin Products',
//         path: '/products'
//       });
//     })
//     .catch(err=>console.log(console.error()))
// }
// const getEditProduct=(req, res, next)=>{
// const editMode = req.query.edit;
// if(!editMode){//  
// return res.redirect('/')
// }
// const prodId  = req.params.productId;
// req.user
// .getProducts({where: {id: prodId}})
// .then(products =>{
//   const product = products[0];
//   if(!product){
//     return res.redirect('/');
//   }
//     res.render('admin/edit-product',{
//     pageTitle: 'Add Product',
//     path: '/admin/edit-product',
//     editing: editMode,
//     product:product
// });
// })
// .catch(err=>console.lof(err))
// }
// const postEditProduct = (req, res, next) => {
//      const prodId = req.body.productId;
//      const updatedTitle = req.body.title;
//      const updatedPrice = req.body.price;
//      const updatedImageUrl = req.body.imageUrl;
//      const updatedDesc = req.body.description;
//      Product.findByPk(prodId)
//      .then(product=>{
//       product.title = updatedTitle;
//       product.price = updatedPrice;
//       product.description =updatedDesc; 
//       product.imageUrl=updatedImageUrl;
//      return product.save();
//      })
//      .then(result=>{
//       console.log('Updated Product')
//      res.redirect('/products')})
//      .catch(err=>console.log(err)) 
     
// };
// const postDeleteProduct =(req, res, next)=>{
//       const prodId = req.body.productId;
//       Product.findByPk(prodId)
//       .then(product=>{
//          return product.destroy()
//       })
//       .then(result =>{
//         console.log('Destroyed Product');
//         res.redirect('/products');
//       })
//       .catch(err=>(console.log(err)))
// }
export{ getAddProduct, 
    postAddProduct
};