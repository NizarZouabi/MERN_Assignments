const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("dotenv").config();
require("./config/mongoose.config");

const port = process.env.PORT;
const Routes = require("./routes/author.routes");
Routes(app);

app.listen(port, () => {
  console.log(`>>> Server is fired on Port: ${port}`);
});