const ProductSchema = require("../models/model.product");
const Product = require("../models/model.product");

module.exports.findAllProducts = (req, res) => {
  Product.find()
    .then((AllProducts) => {
      console.log(AllProducts);
      res.json({ AllProducts });
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
    .then((CreatedProduct) => {
      console.log(CreatedProduct);
      res.json({ CreatedProduct });
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

module.exports.updateProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((UpdatedProduct) => {
      res.json({ UpdatedProduct });
    })
    .catch((err) =>
      res.json({
        message: "Something went wrong.",
        error: err,
      })
    );
};

module.exports.removeProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((Deleted) => {
      res.json({ Deleted });
    })
    .catch((err) =>
      res.json({
        message: "Something went wrong.",
        error: err,
      })
    );
};
