// your code

$('document').ready(function () {
    $('#geo').click(findLocation);
});

function findLocation() {
    if (Modernizr.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation);
    }
    else {
        //jos geolokaatio ei ole tuettu
        alert('Sorry, ei onnaa');
    }
}

function showLocation(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    var posinfo = 'Sijaintitietosi: <ul>';
    posinfo = posinfo + '<li>latitude: ' + lat + '</li>';
    posinfo = posinfo + '<li>longitude: ' + lon + '</li>';
    posinfo = posinfo + '</ul>';

    $('#loc').empty().append(posinfo);
    $('#geo').css('display', 'none');

}