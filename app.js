const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");

mongoose.connect(keys.mongoURI);

require("./services/passport");
const app = express();

//app.use(express.static("public"));
//app.set("view engine", "ejs");
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server has started, visit " + PORT));
