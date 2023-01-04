const argonaute = require("../models/argonaute");

module.exports = {
	async create(req, res) {
		const {argonauteName} = req.body;
		console.log(argonauteName);

		const alreadyExistingArgo = await argonaute.findOne({name: argonauteName});

		if (alreadyExistingArgo) {
			res.send("cette argonaute existe déjà !");
		} else {
			const creatingArgonaute = new argonaute({
				name: argonauteName,
			});
			creatingArgonaute.save().then(() => {
				res.send("created new Argonaute !");
			});
		}
	},

	async getArgonautes(req, res) {
		try {
			argonaute.find().then((argonautes) => {
				res.send(argonautes);
			});
		} catch (error) {
			console.log(error);
		}
	},

	async deleteArgonautes(req, res) {
		const {argonauteId} = req.body;
		try {
			existingArgonaute = argonaute.findOne({_id: argonauteId});

			if (existingArgonaute) {
				argonaute.deleteOne({_id: existingArgonaute._id}).then(() => {
					res.send("argonaute Supprimé!");
				});
			}
		} catch (error) {
			console.log(error);
		}
	},
};
