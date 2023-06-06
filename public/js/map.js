function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(18.46633, -66.10572),
    zoom: 8,
    mapTypeId: 'satellite',
    scrollwheel: false,
  });

  var kmlLayer = new google.maps.KmlLayer({ url: './aquaman-map.kml' });

  kmlLayer.setMap(map);
}
