const argonauteController = require("../controllers/argonaute");

module.exports = (server) => {
	server.post("/createArgonaute", (req, res) => {
		argonauteController.create(req, res);
	});

	server.get("/getArgonautesList", (req, res) => {
		argonauteController.getArgonautes(req, res);
	});

	server.delete("/deleteArgonaute/:argonauteId", (req, res) => {
		argonauteController.deleteArgonautes(req, res);
	});
};
