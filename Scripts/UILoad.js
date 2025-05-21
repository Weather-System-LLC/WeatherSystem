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
    console.log(Text);
    Text.style.fontSize = FontSize;
  });
}

async function LoadNavBar() {
  try {
    document.getElementById(
      "NavBar"
    ).innerHTML = `<a style="padding: 0; margin: 0; margin-top: 5px; margin-left: 10px; margin-right: 40px;"href="index.html"><img style="padding: 0; margin: 0;" width="80px" src="Images/Logo.webp" alt="Logo"></a><a class="NavButton" href="weathertools.html" style="margin-right: 10px;">Weather</a><a class="NavButton" href="EOTS/index.html">EOTS</a><a style="margin-left:auto; margin-right:10px;" id="SigninButton" class="NavButton" href="signin.html">Sign In</a><a style="margin-right:20px;" id="SignupButton" class="NavButton" href="signup.html">Sign Up</a><a style="margin-left:auto; margin-right:20px; display: none;" id="AccountButton" class="NavButton" href="account.html">Account</a><a style="margin-right:20px; display: none;" id="ServiceButton" class="NavButton" href="services.html">Services</a>`;
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
    ).innerHTML = `<p style="margin-left: 10px; margin-bottom: 0; width: 100vw">All data is provided by the <a href="https://weather.gov">National Weather Service</a></p><p style="margin-left:10px; margin-top:5px; width:100vw;"><a href="https://github.com/Weather-System-LLC/WeatherSystem">Weather System</a> is brought to you by <a href="https://github.com/Weather-System-LLC">Weather System LLC</a></p><div style="flex-basis: 100%; display: flex; align-content: center"><a style="margin-right: 10px; margin-left: 10px" href="https://github.com/Programer-Turtle?tab=repositories"><img src="Images/Github.svg" alt="GitHub Logo" width="40px" height="40px" /></a><a style="margin-right: 10px" href="https://www.facebook.com/WeatherSystemMain/"><img src="Images/Facebook.ico" alt="Facebook Logo" width="40px" height="40px" /></a></div>`;
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
