'use strict';

////////////////////////////////////////////////
/// Middleware installation and router injection
////////////////////////////////////////////////

// var bodyParser = require('body-parser');
// var json = require('../../keys.json');

module.exports = function(app, express){

app.use(express.static(__dirname + '/../../app'));

};

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// app.use('/keys', function(req, res) {
//  res.json(json);
// });


// var eventsRouter = express.Router();

// app.use('/api/results', eventsRouter);

// require('../events/eventsRoutes.js')(eventsRouter);

