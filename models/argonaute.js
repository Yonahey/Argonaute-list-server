const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const argonauteSchema = new Schema({
	name: String,
});

const argonaute = mongoose.model("argonaute", argonauteSchema);

module.exports = argonaute;
