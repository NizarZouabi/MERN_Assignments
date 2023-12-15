const PlayerSchema = require("../models/player.model");
const Player = require("../models/player.model");

module.exports.getAllPlayers = (req, res) => {
  PlayerSchema.find()
    .then((AllPlayers) => {
      console.log(AllPlayers);
      res.json({ AllPlayers });
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.addNewPlayer = (req, res) => {
  PlayerSchema.create(req.body)
    .then((addPlayer) => {
      console.log(addPlayer);
      res.json({ addPlayer });
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.getOnePlayer = (req, res) => {
  PlayerSchema.findOne({ _id: req.params.id })
    .then((Player) => {
      console.log(Player);
      res.json({ Player });
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.updatePlayer = (req, res) => {
  PlayerSchema.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((UpdatedPlayer) => {
      res.json({ UpdatedPlayer });
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.deletePlayer = (req, res) => {
  PlayerSchema.deleteOne({ _id: req.params.id })
    .then((Deleted) => {
      res.json({ Deleted });
    })
    .catch((err) => res.status(400).json(err));
};
