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

$(document).ready(function() {
  var status = false;
  $(".show-button.btn-unstyle").click(function() {
    $(".sidebar").toggleClass("active");
    $(".show-button.btn-unstyle").toggleClass("active");

    if(!status) {
      $(".show-button.btn-unstyle").text("close sidebar");
      status = true;
    } else {
      $(".show-button.btn-unstyle").text("show sidebar");
      status = false;
    }
  });
});
