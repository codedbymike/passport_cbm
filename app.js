const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./services/passport");
require("./models/users");

mongoose.connect(keys.mongoURI);

const app = express();

//app.use(express.static("public"));
//app.set("view engine", "ejs");
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server has started, visit " + PORT));
