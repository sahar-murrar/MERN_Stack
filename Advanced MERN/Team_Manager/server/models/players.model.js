const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: { 
        type: String ,
        required: [true, "Name cannot be emtpy"],
	    minlength: [2, "author name must be at least 2 charachters"]
    },
    position: {
        type: String
        
    },
    game1: {
        type: String
    },
    game2: {
        type: String
    },
    game3: {
        type: String
    }
   
}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);
