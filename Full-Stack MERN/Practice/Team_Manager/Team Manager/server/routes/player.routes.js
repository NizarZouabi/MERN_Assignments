const PlayerController = require("../controllers/player.controller");

module.exports = (app) => {
  app.get("/api/players", PlayerController.getAllPlayers);
  app.get("/api/players/:id", PlayerController.getOnePlayer);
  app.post("/api/players/addplayer", PlayerController.addNewPlayer);
  app.patch("/api/players/updateplayer/:id", PlayerController.updatePlayer);
  app.delete("/api/players/removeplayer/:id", PlayerController.deletePlayer);
};
