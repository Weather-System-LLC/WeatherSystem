const TownName = document.getElementById("TownName");
const Temp = document.getElementById("Temp");
const LoadingText = document.getElementById("Loading");
const WeatherDisplay = document.getElementById("WeatherDisplay");
const AlertList = document.getElementById("AlertsList");
const ForecastDisplay = document.getElementById("Weather");

let StateDict = {
  AL: "Alabama",
  AK: "Alaska",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  FL: "Florida",
  GA: "Georgia",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming",
};

async function DetermineLocation() {
  const URL = window.location.href;
  const LatLon = URL.split("?")[1].split(",");
  if (LatLon.length < 2) {
    LoadingText.innerText = "Please Select a location.";
    return { lat: "bad", long: "bad" };
  }
  return { lat: LatLon[0], long: LatLon[1] };
}

async function GetForecast(lat, long) {
  try {
    const LocationResponse = await fetch(
      `https://api.weather.gov/points/${lat},${long}`,
      {
        headers: {
          "User-Agent": "Weather System Forecasts, weathersystemllc@gmail.com",
        },
      }
    );
    const LocationData = await LocationResponse.json();
    let StateName =
      StateDict[
        LocationData["properties"]["relativeLocation"]["properties"]["state"]
      ];
    TownName.innerText = `${LocationData["properties"]["relativeLocation"]["properties"]["city"]}, ${StateName}`;
    const ForecastLink = LocationData["properties"]["forecast"];
    const ObservationLink = LocationData["properties"]["observationStations"];

    const ObservationLinkResponse = await fetch(ObservationLink, {
      headers: {
        "User-Agent": "Weather System Forecasts, weathersystemllc@gmail.com",
      },
    });

    const ObservationData = await ObservationLinkResponse.json();
    const StationIDURL = ObservationData["features"][0]["id"];

    const RecordingResponse = await fetch(`${StationIDURL}/observations/latest`, {
      headers: {
        "User-Agent": "Weather System Forecasts, weathersystemllc@gmail.com",
      }
    })

    if(RecordingResponse.ok){
      const data = await RecordingResponse.json()
      const TempC = data["properties"]["temperature"]["value"]
      let TempF
      if (TempC) {
        TempF = (TempC*1.8)+32
      }
      Temp.innerText = `${Math.round(TempF)}°`
    }

    const ForecastResponse = await fetch(ForecastLink, {
      headers: {
        "User-Agent": "Weather System Forecasts, weathersystemllc@gmail.com",
      },
    });
    const ForecastData = await ForecastResponse.json();
    const Periods = ForecastData["properties"]["periods"];
    return { today: Periods[0], tonight: Periods[1] };
  } catch (error) {
    console.log(error);
    LoadingText.innerText = `Error Occurred:${error}`;
  }
}

async function GetAlerts(lat, long) {
  try {
    const AlertResponse = await fetch(
      `https://api.weather.gov/alerts/active?point=${lat},${long}`,
      {
        headers: {
          "User-Agent": "Weather System Alerts, weathersystemllc@gmail.com",
        },
      }
    );
    const AlertData = await AlertResponse.json();
    console.log(AlertData["features"]);
    return AlertData["features"];
  } catch {
    console.log(error);
    LoadingText.innerText = `Error Occurred:${error}`;
  }
}

async function GetAlertData(Alert) {
  if (Alert["properties"]["event"] == "Tornado Warning") {
    let TornadoType = "Tornado Warning";
    let TornadoDetection =
      Alert["properties"]["parameters"]["tornadoDetection"][0];
    if (
      Alert["properties"]["parameters"].hasOwnProperty("tornadoDamageThreat")
    ) {
      let TornadoDamageThreat =
        Alert["properties"]["parameters"]["tornadoDamageThreat"][0];
      switch (TornadoDamageThreat) {
        case "catastrophic":
          TornadoType = "Tornado Emergency";
          break;
        case "considerable":
          TornadoType = "PDS Tornado Warning";
          break;
      }
    }
    return {
      Headline: TornadoType,
      Text: `<span style='font-weight: bold;'>${Alert["properties"]["headline"]}</span>\n\n<span style='font-weight: bold;'>Detection</span>\n${TornadoDetection}\n\n<span style='font-weight: bold;'>Severity</span>\n${Alert["properties"]["severity"]}`,
    };
  } else {
    if (Alert["properties"]["parameters"].hasOwnProperty("NWSheadline")) {
      return {
        Headline: Alert["properties"]["event"],
        Text: `<span style='font-weight: bold;'>${Alert["properties"]["headline"]}</span>\n${Alert["properties"]["parameters"]["NWSheadline"]}\n\n<span style='font-weight: bold;'>Severity</span>\n${Alert["properties"]["severity"]}`,
      };
    } else {
      return {
        Headline: Alert["properties"]["event"],
        Text: `<span style='font-weight: bold;'>${Alert["properties"]["headline"]}</span>\n\n<span style='font-weight: bold;'>Severity</span>\n${Alert["properties"]["severity"]}`,
      };
    }
  }
}

async function GetWeather() {
  const { lat, long } = await DetermineLocation();
  if (lat == "bad") {
    return;
  }

  const Forecasts = await GetForecast(lat, long);
  const Alerts = await GetAlerts(lat, long);

  const Today = Forecasts["today"];
  const Tonight = Forecasts["tonight"];
  const WeatherText = `${Today.name}\n${Today.detailedForecast}\n\n${Tonight.name}\n${Tonight.detailedForecast}`;
  ForecastDisplay.innerText = WeatherText;

  if (Alerts.length > 0) {
    for (let index = 0; index < Alerts.length; index++) {
      const Alert = Alerts[index];
      let { Headline, Text } = await GetAlertData(Alert);
      console.log(Text);

      let AlertBox = document.createElement("div");
      AlertBox.className = "AlertBox";

      let AlertHeadlineHeader = document.createElement("h1");
      AlertHeadlineHeader.innerText = Headline;
      AlertHeadlineHeader.style = "text-align: left;font-size: 25px;";

      let AlertTextParagraph = document.createElement("p");
      Text = Text.replaceAll("\n", "<br>");
      AlertTextParagraph.innerHTML = Text;

      AlertBox.appendChild(AlertHeadlineHeader);
      AlertBox.appendChild(AlertTextParagraph);
      AlertList.appendChild(AlertBox);
    }
  } else {
    let AlertBox = document.createElement("div");
    AlertBox.className = "AlertBox";
    let AlertTextParagraph = document.createElement("h1");
    AlertTextParagraph.innerText = "No Active Alerts";

    AlertBox.appendChild(AlertTextParagraph);
    AlertList.appendChild(AlertBox);
  }
  LoadingText.style.display = "none";
  WeatherDisplay.style.display = "block";
}

GetWeather();
