async function GetAllAlerts() {
  response = await fetch("https://api.weather.gov/alerts/active", {
    method: "GET",
    headers: {
      "User-Agent": "EyeOfTheStorm (karsonulerick@gmail.com)",
    },
  });
  if (response.ok) {
    return await response.json();
  } else {
    return "Fail";
  }
}
