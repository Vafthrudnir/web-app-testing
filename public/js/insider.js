$(function () {
    var socket = io();
    var word_shown = false;
    $('form').submit(function(e) {
      e.preventDefault();
      if (word_shown) {
        $('.new_word').text('Új szó');
        $('.word').text('');
        word_shown = false;
      }
      else {
        socket.emit('get_word');
      }
      return false;
    });
    socket.on('new_word', function(msg) {
      $('.new_word').text('Szó elrejtése');
      $('.word').text(msg);
      word_shown = true;
    });
});