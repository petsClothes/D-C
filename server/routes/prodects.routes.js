const express = require ('express');
const router = express.Router(); 

const {GetAllProducts ,getOneProduct, addProduct , deleteProduct , updateProdect ,FiltercategoProduct,FiltertypeProduct} = require ('../controller/prodects.controller')



router.get('/getAll',GetAllProducts);
router.get('/:name',getOneProduct)
router.post('/addOne',addProduct); 
router.delete('/delete/:id',deleteProduct);
router.put('/update/:id',updateProdect);
router.get('/filter/:type',FiltertypeProduct)
router.get('/filter/:categorie',FiltercategoProduct)

module.exports = router


