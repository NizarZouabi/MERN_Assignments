const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("dotenv").config();
require("./config/mongoose.config");

const port = process.env.PORT;
const Routes = require("./routes/jokes.routes");
Routes(app);

app.listen(port, () => {
  console.log(`>>> The server is all fired up on Port: ${port}`);
});
