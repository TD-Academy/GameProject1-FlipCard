
'use strict';
module.exports = function(app) {
    var userList = require('./controller');

    // Routes
    app.route('/words')
    .get(userList.list_all_words)
}