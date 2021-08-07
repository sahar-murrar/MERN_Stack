const PlayersController = require('../controllers/players.controller');
module.exports = function(app){
    app.get('/api/players/list', PlayersController.getAllPlayers);
    app.post('/api/players/addplayer', PlayersController.createPlayer);
    app.get('/api/players/:id', PlayersController.getPlayer);
    app.put('/api/players/:id', PlayersController.updatePlayer);
    app.delete('/api/players/:id', PlayersController.deletePlayer);

}