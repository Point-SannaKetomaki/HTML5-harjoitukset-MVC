// oma JQuery JavaScript 

$(document).ready(function () {
    //piilotetaan tekstikappaleet
    $('.content').hide();

    //n�ytt�- ja piilotuskoodi
    //ensin piilotetaan kaikki ja sitten n�ytet��n "yks"
    $('#yks').on('click', function () {
        $('.content').hide();
        $('#one').show('slow').addClass('laatikko');
    });

    //sitten "kaks"
    $('#kaks').on('click', function () {
        $('.content').hide();
        $('#two').show('slow').addClass('laatikko');
    });

    //sitten "kol"
    $('#kol').on('click', function () {
        $('.content').hide();
        $('#three').show('slow').addClass('laatikko');
    });
});