const argonauteController = require("../controllers/argonaute");

module.exports = (server) => {
	server.post("/createArgonaute", (req, res) => {
		argonauteController.create(req, res);
	});
};
