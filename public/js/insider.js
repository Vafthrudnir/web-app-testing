$(function () {
    var socket = io();

    $('.new_word').click(function(e) {
      e.preventDefault();
      socket.emit('get_word');
      return false;
    });

    $('.hide_show_word').click(function(e) {
      e.preventDefault();
      if ($('.word').is(':visible')) {
        $('.word').hide();
        $('.hide_show_word').text('Mutasd');
      }
      else {
        $('.word').show();
        $('.hide_show_word').text('Rejtsd el');
      }
      $('.new_word').show();
      return false;
    });

    socket.on('new_word_sent', function(msg) {
      $('.word').text(msg);
      $('.word').show();
      $('.new_word').hide();
      $('.hide_show_word').text('Szó elrejtése');
    });
});