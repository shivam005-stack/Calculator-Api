const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const calcRoutes = require("./calc.routes");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here
app.use(morgan("dev"));

app.use("/", calcRoutes);

// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
// 	res.render(`../src/views/view.ejs`);
// });

// app.use("*", (__, res) => {
// 	res.render(`../src/views/pageNotFound.ejs`);
// });

app.get("/", (__, res) => {
	res.status(200).send("Hello world!");
});

// here

app.listen(port, () =>
	console.log(`Kanishk Calculator-api listening on port ${port}!`)
);

module.exports = app;
