// TODO: Write your JS code in here
const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieXVuc2hpbmUiLCJhIjoiY2s5bnF1enNiMDU5ZTNvbnczM3k0aGIzaSJ9.KV8UR_F-hmPdVUBO-SWO9w"

fetch(url)
  .then(response => response.json())
  .then((data) => {
    console.log(data);
  });