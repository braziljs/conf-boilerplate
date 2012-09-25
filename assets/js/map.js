var geocoder;
var map;

function initialize() {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(0, 0);
  var myOptions = {
    zoom: 15,
    center: latlng,
    mapTypeControl: false,
    labels: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
  map.setCenter(latlng);
}

$(document).ready ( function() {

  $("#map-canvas").each(function() {

    geocoder = new google.maps.Geocoder();

    address = $(this).attr('data-address');

    initialize();

    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {

        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });

      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });

  });

});