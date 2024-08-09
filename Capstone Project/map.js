let map;

async function initMap() {
 
    const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 38.79390, lng: -84.56015 },
    zoom: 13,
  });

};

initMap();



