function displayCurrentWeather(city) {
  const currentWeather = document.querySelector('.current-weather');

  fetch(getCurrentWeatherApi(city))
    .then(res => res.json())
    .then(res => {
      console.log(res);
      const { dt, main, weather, wind } = res;
      const { description, icon } = weather[0];

      const realFeel = Math.round(main.feels_like);
      const temp = Math.round(main.temp);

      const hours = getHours(dt);

      const dayOfWeek = getDayOfTheWeek(dt);

      const imgSrc = getImgSrc(icon);

      const windSpeed = Math.round(windToKmPerHour(wind.speed));

      currentWeather.innerHTML = `
        <div class='px-3'>
          <div class='fs-2 fw-bold mb-2'>${city}</div>
          <div class='fs-4'><b>${dayOfWeek}</b>, ${hours}</div>
          <div class='d-flex align-items-center'>
            <strong class='fs-1'>${temp}°C</strong>
            <img src='${imgSrc}' />
          </div>
        </div>
        <div class='px-3'>
          <p class='fs-5'>Real feel: <strong>${realFeel}°C</strong></p>
          <p class='fs-5 text-capitalize'>${description}</p>
          <p class='fs-5'>Vant: <strong>${windSpeed} km/h</strong></p>
        </div>
      `;
    })
    .catch(err => {
      console.log(err);
    });

}
