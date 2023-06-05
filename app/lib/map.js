export function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(18.2208, 66.5901),
    zoom: 2,
    mapTypeId: 'satellite',
    scrollwheel: false,
  });

  var kmlLayer = new google.maps.KmlLayer('/aquaman-map.kml', { map: map });
}
