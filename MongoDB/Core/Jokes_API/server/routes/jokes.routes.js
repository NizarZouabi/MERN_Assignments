const JokeController = require("../controllers/jokes.controller")

module.exports = (app) => {
    app.get("/api/joke", JokeController.getAllJokes);
    app.post("/api/joke/new", JokeController.addNewJoke);
    app.get("/api/joke/:id", JokeController.getOneJoke);
    app.patch("/api/joke/:id", JokeController.updateJoke);
    app.delete("/api/joke/:id", JokeController.removeJoke);
}
