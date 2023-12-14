const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
    app.get("/api/author", AuthorController.getAllAuthors);
    app.post("/api/author/new", AuthorController.addNewAuthor);
    app.get("/api/author/:id", AuthorController.getOneAuthor);
    app.patch("/api/author/edit/:id", AuthorController.updateAuthor);
    app.delete("/api/author/remove/:id", AuthorController.deleteAuthor);
}