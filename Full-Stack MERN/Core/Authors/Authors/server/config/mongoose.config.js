const mongoose = require("mongoose");

const db = process.env.DB;

mongoose
  .connect(`mongodb://127.0.0.1:27017/${db}`)
  .then(() => console.log(`Established a connection to the database ${db}`))
  .catch((err) => {
    console.log(
      `Something went wrong when connecting to the database ${db}`,
      err
    );
  });
