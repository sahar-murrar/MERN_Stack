const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: { type: String ,
        required: [true, "Name cannot be emtpy"],
	    minlength: [3, "author name must be at least 3 charachters"]
}
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);
