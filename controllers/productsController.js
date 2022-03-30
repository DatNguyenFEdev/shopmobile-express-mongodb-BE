const Product = require("../models/productModel");

module.exports = productController = {
  getProducts: function (req, res) {
    Product.find(function (err, product) {
      if (err) {
        return next(err);
      }
      res.json({
        product: product,
        message: "get list products success",
      });
    });
  },
  getProduct: function (req, res) {
    const id = req.params.id;
    Product.findById(id).exec(function (err, product) {
      if (err) {
        return next(err);
      }
      res.json({
        product,
        message: "get product success"
      });
    });
  },
  deleteProduct: function (req, res) {
    Product.findByIdAndRemove(req.body.id).exec(function (err, product) {
      if (err) {
        return next(err);
      }
      return res.json({
        message: "delete product success "
      })
    });
  },
  updateProduct: function (req, res) {
    Product.findByIdAndUpdate(req.body.id, req.body.product).exec(function (err, product) {
      if (err) {
        return res.send(err);
      }
      res.send({
        product,
        message:"update product success"
      });
    });
  },
  createProduct: function (req, res) {
    let products = new Product({
      name: req.body.name,
      price: req.body.price,
    });
    products.save(products);
    return res.json({
      product: products,
      message: "create product success"
    });
  },
};
