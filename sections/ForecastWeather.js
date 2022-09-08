function displayForecastWeather(city) {
  const forecastWeather = document.querySelector('.weather-forecast');

  fetch(getForecastWeatherApi(city))
    .then(res => res.json())
    .then(res => {
      console.log(res);
      const { list } = res;

      const mapDays = {};

      list.forEach(item => {
        const dayOfWeek = getDayOfTheWeek(item.dt);

        if (mapDays[dayOfWeek]) {
          mapDays[dayOfWeek].push(item);
        } else {
          mapDays[dayOfWeek] = [item];
        }
      });

      console.log(mapDays);

      Object.entries(mapDays).forEach(([day, items]) => {

        forecastWeather.innerHTML += `<h3 class='text-primary'>${day}</h3>`;

        items.forEach(item => {
          const { dt, main, weather } = item;
          const { icon, description } = weather[0];

          const hours = getHours(dt);

          const imgSrc = getImgSrc(icon);

          const temp = Math.round(main.temp);

          const feelsLike = Math.round(main.feels_like);

          forecastWeather.innerHTML += `<div class='weather-forecast-box d-flex align-items-center justify-content-between border rounded mb-3 p-3'>
            <div>${hours}</div>
            <div>
              <img src='${imgSrc}' alt='Icon' />
            </div>
            <div class='fs-3'>
              <strong>${temp}°C</strong>
            </div>
            <div>${description}</div>
            <div>
              Real feel: <strong>${feelsLike}°C</strong>
            </div>
          </div>
          `;
        });
      });

    })
    .catch(err => {
      console.log(err);
    });

}
