function initInvioMessaggio() {
  function clickInvio() {
    var valoreInput = $('.chat-fixed input').val();
    var cloneMsg = $('.template .messaggio').clone();
    cloneMsg.find('.txt').text(valoreInput);
    cloneMsg.find('.time').text(generaOraAttuale);
    cloneMsg.addClass('green');
    $('.balloons').append(cloneMsg);
    $('.chat-fixed input').val('');
    if (valoreInput == '') {
      cloneMsg.hide();
    } else if (valoreInput != '') {
      setTimeout(rispostaInt, 1000);
    }

  }

  // funzione per generare l'ora attuale
  function generaOraAttuale() {
    var date = new Date();
    return date.getHours() + ':' + date.getMinutes();
  }

  // funzione per avere la risposta dell'interlocutore dopo 1 secondo
  function rispostaInt() {
    var cloneInt = $('.template .messaggio').clone();
    cloneInt.find('.txt').text('Ok');
    cloneInt.find('.time').text(generaOraAttuale);
    cloneInt.addClass('white');
    $('.balloons').append(cloneInt);
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

// funzione per cancellare il messaggio
function initCancellaMessaggio() {
  $(document).on('click', '.messaggio', function() {
    $(this).children('.dropdown-delete').addClass('active');
  });

  $(document).on('click', '#delete', function() {
    $(this).parents('.messaggio').remove();
  });

  $('.balloons').click(function() {
    var checkActive = $('.dropdown-delete').hasClass('active');
    if (checkActive == true) {
      $('.dropdown-delete').removeClass('active');
    }
  });
}

// funzione per intercettare l'input di sinistra e cercare i contatti
function cercaContatti() {
  // var inputContatti = $('.cerca-contatti input');
  // inputContatti.on('keyup', function() {
  //   var inputVal = $(this).val().toLowerCase();
  //   $('.contatto-rubrica').filter(function() {
  //     $(this).toggle($(this).text().toLowerCase().indexOf(inputVal) > -1);
  //   });
  //   console.log(inputVal);
  // });

  var inputContatti = $('.cerca-contatti input');
  inputContatti.on('keyup', function() {
    var inputVal = $(this).val().toLowerCase();
    var contact = $('.contatto-rubrica');
    console.log(name);
    contact.each(function() {
      var name = $(this).find('h4').text();
      console.log(name);
      if (name.toLowerCase().includes(inputVal)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

}

// funzione per iniziare una nuova conversazione cliccando sul contatto
function initNewChat() {
  var selezionaContatto = $('.contatto-rubrica');
  selezionaContatto.click(function() {
    // cambio il nome in base al contatto selezionato
    var nomeContatto = $(this).find('h4').text();
    $('.friend-name h4').text(nomeContatto);
    console.log(nomeContatto);
    var profileImg = $(this).find('.profile-img img').clone();
    $('.friend-info-left img').remove();
    $('.friend-info-left .profile-img').append(profileImg);
    console.log(profileImg);

    selezionaContatto.removeClass('active');
    $(this).addClass('active');


    var contactData = $(this).data('id');
    console.log(contactData);

    var containerConv = $('.balloons');
    var selectConv = $('.balloons[data-id=' + contactData + ']');

    containerConv.hide();
    selectConv.show();

  });


}






$(document).ready(function() {
  initInvioMessaggio();
  initCancellaMessaggio();
  cercaContatti();
  initNewChat();
});
