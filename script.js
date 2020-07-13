function initInvioMessaggio() {
  function clickInvio() {
    var valoreInput = $('.chat-fixed input').val();
    var cloneMsg = $('.template .messaggio').clone().text(valoreInput).addClass('green');
    $('#target').append(cloneMsg);
    $('.chat-fixed input').val('');
    if (valoreInput == '') {
      cloneMsg.hide();
    }
    console.log($('#target'));
  }

  function invioMessaggio() {
    var iconaInvio = $('.chat-fixed .invio');
    iconaInvio.click(clickInvio);
  }

  invioMessaggio();

  $(document).keydown(function() {
    console.log(event.which);
    if (event.which == 13) {
      clickInvio();
    }
  });

  // al click dell'input apparirà l'icona per inviare il mex
  $('.chat-fixed input').click(function() {
    $('.chat-fixed .mic').hide();
    $('.chat-fixed .invio').show();
  });

}










$(document).ready(function() {
  initInvioMessaggio();
});
