async function AdjustNavText() {
  let BodySize = document.body.clientWidth;
  let FontSize = null;
  if (BodySize <= 445) {
    FontSize = "15px";
  } else if (BodySize <= 500) {
    FontSize = "25px";
  } else {
    FontSize = "30px";
  }
  document.querySelectorAll("a.NavButton").forEach((Text) => {
    Text.style.fontSize = FontSize;
  });
}

async function LoadNavBar() {
  try {
    document.getElementById(
      "NavBar"
    ).innerHTML = `<a style="padding: 0; margin: 0; margin-top: 5px; margin-left: 10px; margin-right: 40px;"href="index.html"><img style="padding: 0; margin: 0;" width="80px" src="Images/Logo.webp" alt="Logo"></a><a class="NavButton" href="weathertools.html" style="margin-right: 15px;">Weather</a><a class="NavButton" href="Outlooks/index.html">Outlooks</a>`;
    await AdjustNavText();
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function LoadFooter() {
  try {
    document.getElementById(
      "footer"
    ).innerHTML = `<p style="margin-left: 10px; margin-bottom: 0; width: 100vw">All data is provided by the <a href="https://weather.gov">National Weather Service</a></p><p style="margin-left:10px; margin-top:5px; width:100vw;"><a href="https://github.com/Weather-System-LLC/WeatherSystem">Weather System</a> is brought to you by <a href="https://github.com/Weather-System-LLC">Weather System LLC</a></p><p style="margin-top:5px;"><a style="margin-left:10px;" href="privacy.html">Privacy</a><a style="margin-left:10px;" href="contact.html">Contact</a></p><div style="flex-basis: 100%; display: flex; align-content: center"><a style="margin-right: 10px; margin-left: 10px" href="https://github.com/Weather-System-LLC"><img src="Images/Github.svg" alt="GitHub Logo" width="40px" height="40px" /></a><a style="margin-right: 10px" href="https://www.facebook.com/WeatherSystemMain/"><img src="Images/Facebook.ico" alt="Facebook Logo" width="40px" height="40px" /></a></div>`;
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function LoadUI() {
  StatusChecks = [];
  StatusChecks.push(await LoadNavBar());
  StatusChecks.push(await LoadFooter());
  if (!StatusChecks.includes(false)) {
    console.log("No errors occured when loading UI.");
  } else {
    console.log("Errors occured when loading UI.");
  }
}

LoadUI();

window.addEventListener("resize", async () => await AdjustNavText());
