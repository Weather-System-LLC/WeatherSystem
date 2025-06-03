const MessageBox = document.getElementById("message");
MessageBox.innerText = "Please Allow Location Services.";

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
        MessageBox.innerText = "You Blocked Locaion Services.";
      },
      {
        enableHighAccuracy: true,
      }
    );
  }
}

GetLocation();
