let TrafficData;

fetch("JSONData/StreetCameras.json")
  .then((response) => response.json())
  .then((data) => {
    TrafficData = data;
  })
  .catch((error) => {
    console.error("Error loading JSON:", error);
  });
