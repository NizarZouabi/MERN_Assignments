const Product = require("../models/model.product")

module.exports.findAllProducts = (req, res) => {
  Product.find()
    .then((All_Products) => {
      console.log(All_Products);
      res.json({ All_Products });
    })
    .catch((err) => {
      res.json({ message: "*Something went wrong*" }, err);
    });
};

module.exports.createNewProduct = (req, res) => {
  Product.create(req.body)
    .then(CreateProduct => {
      console.log(CreateProduct)
      res.json({ newProduct: CreateProduct })
    })
    .catch(err => {
      res.json({ message: "*Something went wrong*"}, err)})
};