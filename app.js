function initMap() {
        var nashville = {lat: 36.1621615, lng: -86.7831659};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: nashville,
          scrollwheel: false,
          mapTypeControl: false
        });
        var blueMarker = '40.png';
        var marker = new google.maps.Marker({
          position: nashville,
          icon: blueMarker,
          map: map
        });
}

function googleError(){
  alert("At this time we are unable to load Google Maps");
}