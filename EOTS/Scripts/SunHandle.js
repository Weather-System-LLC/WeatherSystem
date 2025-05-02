let SuntimeAPIURL = "";

async function SetDay() {
  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CartoDB</a>',
    detectRetina: true,
  }).addTo(map);
}

async function SetNight() {
  L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CartoDB</a>',
    detectRetina: true,
  }).addTo(map);
}

async function GetLocation() {
  response = await fetch("https://get.geojs.io/v1/ip/geo.json", {
    method: "GET",
  });
  if (response.ok) {
    let Data = await response.json();
    return [Data["latitude"], Data["longitude"]];
  } else {
    return "Fail";
  }
}

async function CallAPI() {
  response = await fetch(SuntimeAPIURL, {
    method: "GET",
  });
  if (response.ok) {
    return await response.json();
  } else {
    return "Fail";
  }
}

async function CheckSun() {
  if (SuntimeAPIURL != "") {
    Data = await CallAPI();
    if (Data != "Fail") {
      let sunrise = new Date(Data["results"]["sunrise"] + " UTC").getTime();
      let sunset = new Date(Data["results"]["sunset"] + " UTC").getTime();
      let currentTime = new Date().getTime(); // Convert current time to UTC

      if (currentTime >= sunrise && currentTime <= sunset) {
        await SetDay();
      } else {
        await SetNight();
      }
    }
  }
  setTimeout(CheckSun, 30000);
}

async function URLHandler() {
  let ClosestLocation = await GetLocation();
  SuntimeAPIURL = `https://api.sunrise-sunset.org/json?lat=${ClosestLocation[0]}&lng=${ClosestLocation[1]}&formatted=0`;

  setTimeout(URLHandler, 300000);
}

async function ShowMap() {
  await URLHandler();
  await CheckSun();
}

ShowMap();
