const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const app = express(); // do not export anywhere else. Just index/app. Logic/functionality goes here.
const port = 3000;
const routes = require("./routes")

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(port, () => {
    console.log(`server running on port ${port}`)
});
