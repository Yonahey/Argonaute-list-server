const argonaute = require("../models/argonaute");

module.exports = {
	async create(req, res) {
		const {argonauteName} = req.body;

		const alreadyExistingArgo = await argonaute.findOne({name: argonauteName});

		if (alreadyExistingArgo) {
			res.send("cette argonaute existe déjà !");
		} else {
			const creatingArgonaute = new argonaute({
				name: argonauteName,
			});
			creatingArgonaute.save().then(() => {
				res.send(creatingArgonaute);
			});
		}
	},
};
