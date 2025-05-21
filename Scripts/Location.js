const MessageBox = document.getElementById("message");

function GetLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (LocationData) => {
        console.log(LocationData);
        const lat = LocationData.coords.latitude;
        const long = LocationData.coords.longitude;
        MessageBox.innerText = "Location Found Redirecting Now";
        window.location = `localweather.html?${lat},${long}`;
      },
      () => {
        MessageBox.innerText = "Error Occured";
      },
      {
        enableHighAccuracy: true,
      }
    );
  }
}

GetLocation();
