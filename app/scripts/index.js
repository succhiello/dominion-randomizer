'use strict';

require('baconjs');

var cards = require('./cards.ls');

$(document).ready(function() {

    var $body = $('body');

    render('header');
    render('body');
    render('cards', {cards: _.groupBy(cards, 'cost')});

    $body.asEventStream('click', '#randomize')
        .map(cards)
        .map(__.shuffle)
        .map(__.take, 10)
        .map(function(result) { return {result: result}; })
        .assign(render, 'result');
});

function render(el, data) {
    $('#' + el).html((require('../templates/' + el + '.hbs'))(data));
}

function randomize(xs) {
    return _(xs).shuffle().take(10).value();
}
