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

    const weekday = [];
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    const months = [];
    months[0] = "January";
    months[1] = "February";
    months[2] = "March";
    months[3] = "April";
    months[4] = "May";
    months[5] = "June";
    months[6] = "July";
    months[7] = "August";
    months[8] = "September";
    months[9] = "October";
    months[10] = "November";
    months[11] = "December";

    const today = new Date();
    const dayOfWeek = today.getDay();
    const monthOfYear = today.getMonth();
    const info = Date();

    city.innerText = `Weather in ${data.name}`;    
    dayDateTime.innerText = `${weekday[dayOfWeek]}, ${months[monthOfYear]}`;
    description.innerText = `${data.weather[0].description}`;
    tempNow.innerText = `${data.main.temp}\u00B0C`;






console.log(weekday[dayOfWeek]);

  });
