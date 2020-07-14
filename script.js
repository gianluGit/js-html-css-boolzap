function initInvioMessaggio() {
  function clickInvio() {
    var valoreInput = $('.chat-fixed input').val();
    $('.template .messaggio > .txt').text(valoreInput);
    $('.template .messaggio > .time').text(generaOraAttuale);
    var cloneMsg = $('.template .messaggio').clone().addClass('green');
    $('#target').append(cloneMsg);
    $('.chat-fixed input').val('');
    if (valoreInput == '') {
      cloneMsg.hide();
    } else if (valoreInput != '') {
      setTimeout(rispostaInt, 1000);
    }
    console.log($('#target'));

  }

  // funzione per generare l'ora attuale
  function generaOraAttuale() {
    var date = new Date();
    return date.getHours() + ':' + date.getMinutes();
  }

  // funzione per avere la risposta dell'interlocutore dopo 1 secondo
  function rispostaInt() {
    $('.template .messaggio .txt').text('Ok');
    $('.template .messaggio .time').text(generaOraAttuale);
    var cloneInt = $('.template .messaggio').clone().addClass('white');
    $('#target').append(cloneInt);
  }

  function invioMessaggio() {
    var iconaInvio = $('.chat-fixed .invio');
    iconaInvio.click(clickInvio);
  }

  invioMessaggio();

  $(document).keydown(function() {
    // console.log(event.which);
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

// function initCancellaMessaggio() {
//   var messaggio = $('#target .messaggio');
//   messaggio.on('click', function() {
//     $(this).children('.dropdown-delete').addClass('active');
//     console.log(this);
//   });
// }

// funzione per intercettare l'input di sinistra e cercare i contatti
function cercaContatti() {
  var inputContatti = $('.cerca-contatti input');
  inputContatti.on('keyup', function() {
    var inputVal = $(this).val().toLowerCase();
    $('.contatto-rubrica').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(inputVal) > -1);
    });
    console.log(inputVal);
  });

}






$(document).ready(function() {
  initInvioMessaggio();
  // initCancellaMessaggio();
  cercaContatti();
});
