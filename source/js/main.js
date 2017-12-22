$(function() {
  var uluru = { lat: 51.417759, lng: -0.52804 };
  var mapElement = document.getElementById("map");

  var map = new google.maps.Map(mapElement, {
    center: uluru,
    position: uluru,
    zoom: 11,
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
});
