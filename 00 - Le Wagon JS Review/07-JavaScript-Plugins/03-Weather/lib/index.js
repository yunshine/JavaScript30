// TODO: Write your JS code in here

//   https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=daaf9d16ae4a8457c354919da42dd9e2&units=metric

//   https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=daaf9d16ae4a8457c354919da42dd9e2&units=metric

fetch("https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=daaf9d16ae4a8457c354919da42dd9e2")
  .then(response => response.json())
  .then((data) => {
    console.log(data);
  });