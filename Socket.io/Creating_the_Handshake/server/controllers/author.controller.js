const { Author } = require('../models/author.model');
module.exports.getAllAuthors = (request, response) => {
    Author.find({})
    .then(authors => response.json(authors))
    .catch(err => response.json(err))
}

module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    Author.create({
        name
    })
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err));
}
module.exports.getAuhtor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err))
}
//.then(allProducts => res.json({ products: allProducts }))

module.exports.updateAuhtor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedAuhtor => response.json(updatedAuhtor))
        .catch(err => response.json(err))
}
module.exports.deleteAuhtor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

