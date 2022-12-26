const express = require("express");
const {default: mongoose} = require("mongoose");
const server = express();
const cors = require("cors");
const argonauteRoute = require("./routes/argonaute");

const DbUri = "mongodb://localhost:27017/compagnons";
server.use(express.json());

server.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	res.header("Access-Control-Allow-Credentials", true);
	next();
});

server.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	})
);

mongoose.connect(DbUri, {useNewUrlParser: true}).then(() => {
	server.listen(5000, () => {
		console.log("Server has started!");
	});
});

argonauteRoute(server);
