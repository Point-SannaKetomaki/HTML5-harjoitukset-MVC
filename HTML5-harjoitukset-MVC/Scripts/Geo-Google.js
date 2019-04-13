//aloitetaan, kun koko sivu lataantunut
$('document').ready(function () {
    $('#geo').click(findLocation);
});

function findLocation() {
    navigator.geolocation.getCurrentPosition(showLocation);
}

function showLocation(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    // Google Maps jutut alkaa tästä


    /* function myMap() {
     var mapProp= {
         center: new google.maps.LatLng(51.508742,-0.120850),
     zoom:5,
   };
   var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
   } */

    var options = {
        zoom: 14,
        mapTypeId: google.maps.mapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map'), options);
    var myLocation = new google.maps.LatLng(lat, lon);
    var marker = new google.maps.Marker({
        position: myLocation,
        map: map,
        title: "Olen tässä"
    });
    map.setCenter(myLocation);
}
