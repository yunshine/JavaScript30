// TODO: Write your JS code in here

//   https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=daaf9d16ae4a8457c354919da42dd9e2&units=metric

//   https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=daaf9d16ae4a8457c354919da42dd9e2&units=metric

fetch("https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=daaf9d16ae4a8457c354919da42dd9e2&units=metric")
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    const city = document.querySelector(".city");
    const dayDateTime = document.querySelector(".dayDateTime");
    const description = document.querySelector(".description");
    const tempNow = document.querySelector(".temp");
    const now = new Date();   
    console.log(now);

    city.innerText = `Weather in ${data.name}`;
    description.innerText = `${data.weather[0].description}`;
    tempNow.innerText = `${data.main.temp}\u00B0C`;

  });