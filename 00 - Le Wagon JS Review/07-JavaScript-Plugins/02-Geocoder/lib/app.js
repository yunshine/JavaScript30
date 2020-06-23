import mapboxgl from 'mapbox-gl';

const submit = document.querySelector(".submitButton");
const inputText = document.querySelector(".inputText");

const displayCoordinates = (coordinates) => {
  const latitude = document.querySelector(".latitudeCoordinates");
  const longitude = document.querySelector(".longitudeCoordinates");
  latitude.innerText = `Latitude: ${coordinates.lat}`;
  longitude.innerText = `Longitude: ${coordinates.long}`;
};

submit.addEventListener("click", (event) => {
  // event.preventDefault();
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${inputText.value}.json?access_token=pk.eyJ1IjoieXVuc2hpbmUiLCJhIjoiY2s5bnF1enNiMDU5ZTNvbnczM3k0aGIzaSJ9.KV8UR_F-hmPdVUBO-SWO9w`;

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const mapDisplay = document.querySelector('#map');
      mapboxgl.accessToken = 'pk.eyJ1IjoieXVuc2hpbmUiLCJhIjoiY2s5bnF1enNiMDU5ZTNvbnczM3k0aGIzaSJ9.KV8UR_F-hmPdVUBO-SWO9w';
  
      console.log(data);

      const coordinates = {
        lat: data.features[0].center[1],
        long: data.features[0].center[0],
      };

      displayCoordinates(coordinates);

      // const map = new mapboxgl.Map({
      //   container: 'map',
      //   style: 'mapbox://styles/mapbox/streets-v9',
      //   center: [ data.features[0].center[0], data.features[0].center[1] ],
      //   zoom: 11,
      // });

    });
});

        // new mapboxgl.Marker()
        // .setLngLat([ data.features[0].center[0], data.features[0].center[1] ])
        // .addTo(map);