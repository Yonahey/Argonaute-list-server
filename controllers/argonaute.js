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
				res.send("nouvel argonaute crée !");
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
		console.log(req.params);
		const {argonauteId} = req.params;
		try {
			existingArgonaute = argonaute.findOne({_id: argonauteId});

			if (existingArgonaute) {
				existingArgonaute.deleteOne().then(() => {
					res.send("argonaute Supprimé!");
				});
			}
		} catch (error) {
			console.log(error);
		}
	},
};
