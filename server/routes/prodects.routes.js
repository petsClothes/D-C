const express = require ('express');
const router = express.Router(); 

const {GetAllProducts , addProduct , deleteProduct , updateProdect } = require ('../controller/prodects.controller')



router.get('/getAll',GetAllProducts);
router.post('/addOne',addProduct); 
router.delete('/delete/:id',deleteProduct);
router.put('/update/:id',updateProdect);


module.exports = router


