import mapboxgl from 'mapbox-gl';

const addMarkerToMap = (map) => {
  const mapElement = document.getElementById('map');

  // Take the marker from the view in `app/views/restaurants/show.html.erb`
  const marker = JSON.parse(mapElement.dataset.marker);

  new mapboxgl.Marker()
    .setLngLat([ marker.lng, marker.lat ])
    .addTo(map);

}


const initMapbox = () => {
  const mapElement = document.getElementById('map');

  // This if here is to ensure that we will only run the code
  // IF we find this map element (which will be only in the Restaurants#Show)
  if (mapElement) {
    // This is setting the access token as the one coming from app/views/restaurants/show.html.erb (line 11)
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10'
    });

    addMarkerToMap(map)
  }
};

export { initMapbox };
