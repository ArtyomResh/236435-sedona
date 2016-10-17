var mapContainer = document.querySelector(".hotel-search__map");

mapContainer.classList.remove("hotel-search__map--nojs");
mapContainer.classList.add("hotel-search__map--js");

function initMap() {
  var myLatLng = {lat: 34.8543734, lng: -111.8301581};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 8,
    disableDefaultUI: true
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon : "../img/icon-map-marker.svg"
  });
}
