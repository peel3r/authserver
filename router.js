const Authentication = require('./controllers/authentification');

module.exports = function(app) {
    app.post('./signup', Authentication.signup)

}