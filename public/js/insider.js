$(function () {
    var socket = io();
    $('form').submit(function(e) {
      e.preventDefault();
      socket.emit('click');
      return false;
    });
    socket.on('word', function(msg) {
      if (msg == '') {
          $('.message').text('Ujabb szoert klikk a gombra');
          $('.word').text('');
      }
      else {
          $('.message').text('A szo elrejtesehez klikk a gombra');
          $('.word').text(msg);
      }
    });
});