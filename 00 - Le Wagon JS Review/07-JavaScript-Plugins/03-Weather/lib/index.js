// TODO: Write your JS code in here
window.addEventListener('load', (event) => {
  console.log("loaded");
  navigator.geolocation.getCurrentPosition((data) => {
    console.log("anything???");
    console.log(data);

  });
});

const submitButton = document.querySelector(".submitButton");

submitButton.addEventListener("click", (event) => {
  const cityName = document.querySelector(".cityName").value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=daaf9d16ae4a8457c354919da42dd9e2&units=metric`)
    .then(response => response.json())
    .then((data) => {
      // console.log(data.weather[0].icon);
        // console.log("loaded");
      const city = document.querySelector(".city");
      const dayDateTime = document.querySelector(".dayDateTime");
      const description = document.querySelector(".description");
      const tempNow = document.querySelector(".temp");
      const weatherIcon = document.querySelector(".weatherIcon");

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
      let hour = today.getHours();
        if (hour == 12) {
          const today = new Date();
          const dayOfWeek = today.getDay();
          const monthOfYear = today.getMonth();
          const info = Date();
          dayDateTime.innerText = `${weekday[dayOfWeek]}, ${months[monthOfYear]} ${today.getDate()}, ${hour}:${today.getMinutes()}PM`;
      } else if (hour > 12) {
          const today = new Date();
          const dayOfWeek = today.getDay();
          const monthOfYear = today.getMonth();
          const info = Date();
          hour = (hour - 12);
          dayDateTime.innerText = `${weekday[dayOfWeek]}, ${months[monthOfYear]} ${today.getDate()}, ${hour}:${today.getMinutes()}PM`;
      } else {
          const today = new Date();
          const dayOfWeek = today.getDay();
          const monthOfYear = today.getMonth();
          const info = Date();
          hour = (hour - 12);
          dayDateTime.innerText = `${weekday[dayOfWeek]}, ${months[monthOfYear]} ${today.getDate()}, ${hour}:${today.getMinutes()}AM`;
      }

      city.innerText = `Weather in ${data.name}`;    
      description.innerText = `${data.weather[0].description}`;
      tempNow.innerText = `${data.main.temp}\u00B0C`;
      weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  // console.log(hour);
    });
});

