const Joke = require("../models/model.jokes");

module.exports.addNewJoke = (req, res) => {
  Joke.create(req.body)
    .then((NewJoke) => {
      console.log(NewJoke);
      res.json({joke: NewJoke });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong, Please Try Again.", error: err });
    });
};

module.exports.getAllJokes = (req, res) => {
  Joke.find()
    .then((All_Jokes) => {
      res.json({ All_Jokes });
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong, Please Try Again.",
        error: err,
      });
    });
};

module.exports.getOneJoke = (req, res) => {
  Joke.findOne({_id: req.params.id})
    .then((joke) => {
      console.log(joke);
      res.json({ joke });
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong, Please Try Again.",
        error: err,
      });
    });
};

module.exports.updateJoke = (req, res) => {
  Joke.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, runValidators: true }
  )
    .then(updatedJoke => {
      res.json({ updatedJoke })
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong, Please Try Again.",
        error: err,
      });
    });
};

module.exports.removeJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then((deleted) => {
      res.json({ deleted });
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong, Please Try Again.",
        error: err,
      });
    });
};
