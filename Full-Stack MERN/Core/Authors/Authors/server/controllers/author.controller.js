const AuthorSchema = require("../models/author.model");
const Author = require("../models/author.model");

module.exports.getAllAuthors = (req, res) => {
  Author.find()
    .then((AllAuthors) => {
      console.log(AllAuthors);
      res.json({ AllAuthors });
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.addNewAuthor = (req, res) => {
  Author.create(req.body)
    .then((addAuthor) => {
      console.log(addAuthor);
      res.json({ addAuthor });
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.getOneAuthor = (req, res) => {
  Author.findOne({ _id: req.params.id })
    .then((Author) => {
      console.log(Author);
      res.json({ Author });
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.updateAuthor = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((UpdatedAuthor) => {
      res.json({ UpdatedAuthor });
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.deleteAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then((Deleted) => {
      res.json({ Deleted });
    })
    .catch((err) => res.status(400).json(err));
};
