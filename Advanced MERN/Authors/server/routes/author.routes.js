const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.get('/api/allAuthors', AuthorController.getAllAuthors);
    app.post('/api/createAuhtor', AuthorController.createAuthor);
    app.get('/api/author/:id', AuthorController.getAuhtor);
    app.put('/api/author/:id/edit', AuthorController.updateAuhtor);
    app.delete('/api/author/:id', AuthorController.deleteAuhtor);

}