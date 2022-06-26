'use strict';

var data = {
    "apple": "alim",
    "banana": "banana",
    "pen": "uzeg",
    "pencil": "harandaa",
    "book": "nom",
    "love": "hair",
    "water": "us",
    "laptop": "laptop"
}

exports.list_all_words = function(req, res) {
    res.json(data)
};
