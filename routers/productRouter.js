const express  =require("express")

const productController = require('../controllers/productsController')
const router = express.Router();



router.post("/products", productController.getProducts);

router.get("/product/:id", productController.getProduct);

router.post("/products/add", productController.createProduct);

router.post("/product/delete", productController.deleteProduct);

router.post("/product/update/", productController.updateProduct);





module.exports = router;


