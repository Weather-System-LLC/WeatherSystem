const LoadingText = document.getElementById("Loading");
const WeatherDisplay = document.getElementById("WeatherDisplay");

async function DetermineLocation() {
  const URL = window.location.href;
  const LatLon = URL.split("?")[1].split(",");
  return { lat: LatLon[0], long: LatLon[1] };
}

async function GetForecast(lat, long) {
  try {
    const LocationResponse = await fetch(
      `https://api.weather.gov/points/${lat},${long}`
    );
    const LocationData = await LocationResponse.json();
    const ForecastLink = LocationData["properties"]["forecast"];

    const ForecastResponse = await fetch(ForecastLink);
    const ForecastData = await ForecastResponse.json();
    const Periods = ForecastData["properties"]["periods"];
    return { today: Periods[0], tonight: Periods[1] };
  } catch (error) {
    console.log(error);
    location.reload();
  }
}

async function GetWeather() {
  const { lat, long } = await DetermineLocation();

  const Forecasts = await GetForecast(lat, long);
  const Today = Forecasts["today"];
  const Tonight = Forecasts["tonight"];
  const WeatherText = `${Today.name}\n${Today.detailedForecast}\n\n${Tonight.name}\n${Tonight.detailedForecast}`;
  document.getElementById("Weather").innerText = WeatherText;

  LoadingText.style.display = "none";
  WeatherDisplay.style.display = "block";
}

GetWeather();
