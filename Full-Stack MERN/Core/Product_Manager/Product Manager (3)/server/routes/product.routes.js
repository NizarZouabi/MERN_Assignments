const ProductController = require("../controllers/product.controller")

module.exports = (app) => {
    app.get("/api/product", ProductController.findAllProducts);
    app.post("/api/product", ProductController.createNewProduct);
    app.get("/api/product/:id", ProductController.getOneProduct);
    app.patch("/api/product/edit/:id", ProductController.updateProduct);
    app.delete("/api/product/remove/:id", ProductController.removeProduct);
};
