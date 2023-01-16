const weather = document.querySelector('.weather')
const API_KEY = '26a8f813a56d73684d04cdff5a1f7720'

async function getWeather(lat, lon) {
  console.log(lat, lon)

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
}

function success(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude

  const coords = {
    latitude: lat,
    longitude: lon,
  }

  localStorage.setItem('coords', JSON.stringify(coords))
  getWeather(lat, lon)
}

function error() {
  console.log('위치 정보를 허용하지 않았습니다.')
}

function init() {
  navigator.geolocation.getCurrentPosition(success, error)
}

init()
