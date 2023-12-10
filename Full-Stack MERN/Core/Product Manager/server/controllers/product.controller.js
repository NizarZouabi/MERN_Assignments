const ProductSchema = require("../models/model.product");
const Product = require("../models/model.product");

module.exports.findAllProducts = (req, res) => {
  Product.find()
    .then((All_Products) => {
      console.log(All_Products);
      res.json({ All_Products });
    })
    .catch((err) =>
      res.json({
        message: "Something went wrong.",
        error: err,
      })
    );
};

module.exports.createNewProduct = (req, res) => {
  Product.create(req.body)
    .then((CreateProduct) => {
      console.log(CreateProduct);
      res.json({ CreateProduct });
    })
    .catch((err) =>
      res.json({
        message: "Something went wrong.",
        error: err,
      })
    );
};

module.exports.getOneProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((Product) => {
      console.log(Product);
      res.json({ Product });
    })
    .catch((err) =>
      res.json({
        message: "Something went wrong.",
        error: err,
      })
    );
};