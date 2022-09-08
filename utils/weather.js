function getImgSrc(iconId, size = 2) {
  const imgSize = size === 1 ? '' : '@2x';
  return `${IMG_URL}/${iconId}${imgSize}.png`;
}

/**
  * @param {speed}: wind speed in m/s
  * @return wind speed in km/h
  */
function windToKmPerHour(speed) {
  return speed * 3.6;
}
