const ProductController = require("../controllers/product.controller")

module.exports = (app) => {
    app.get("/api/product", ProductController.findAllProducts);
    app.post("/api/product/add", ProductController.createNewProduct);
};
