'use strict';

require('pure');
require('../styles/app.css');
require('baconjs');

var cards = require('./cards.ls');

$(document).ready(function() {

    var $body = $('body');

    render('header');
    render('body');
    render('cards', {cards: cards});

    $body.asEventStream('click', '#randomize')
        .map(randomize, cards)
        .map(function(result) { return {result: result}; })
        .assign(render, 'result');
});

function render(el, data) {
    $('#' + el).html((require('../templates/' + el + '.hbs'))(data));
}

function randomize(xs) {
    return _(xs).shuffle().first(10).value();
}
