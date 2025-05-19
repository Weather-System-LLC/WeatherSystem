const speech = new SpeechSynthesisUtterance();
speech.lang = "en-US"; // You can set the language here
speech.volume = 1; // Volume (0 to 1)
speech.rate = 1; // Speed (0.1 to 10)
speech.pitch = 2; // Pitch (0 to 2)

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

let timezones = {
  HST: "Hawaii-Aleutian Standard Time",
  HDT: "Hawaii-Aleutian Daylight Time",
  AKST: "Alaska Standard Time",
  AKDT: "Alaska Daylight Time",
  PST: "Pacific Standard Time",
  PDT: "Pacific Daylight Time",
  MST: "Mountain Standard Time",
  MDT: "Mountain Daylight Time",
  CST: "Central Standard Time",
  CDT: "Central Daylight Time",
  EST: "Eastern Standard Time",
  EDT: "Eastern Daylight Time",
  AST: "Atlantic Standard Time",
  ADT: "Atlantic Daylight Time",
  NST: "Newfoundland Standard Time",
  NDT: "Newfoundland Daylight Time",
};

async function GetAlertType(Alert) {
  let AlertName = Alert.properties.event;
  if (AlertName.toLowerCase().includes("tornado warning")) {
    if (Alert.properties.parameters.hasOwnProperty("tornadoDamageThreat")) {
      console.log(Alert.properties.parameters.tornadoDamageThreat);
      if (
        Alert.properties.parameters.tornadoDamageThreat.toLowerCase() ==
        "considerable"
      ) {
        AlertName = "PDS Tornado Warning";
      } else if (
        Alert.properties.parameters.tornadoDamageThreat.toLowerCase() ==
        "catastrophic"
      ) {
        AlertName = "Tornado Emergency";
      } else {
        AlertName = "Tornado Warning";
      }
    } else {
      AlertName = "Tornado Warning";
    }
  }
  return AlertName;
}

async function IssueAlert(Alert) {
  let AlertType = await GetAlertType(Alert);
  let AlertText = `The National Weather Service has issued a ${AlertType}. ${Alert.properties.headline.replace(
    "NWS",
    "the National Weather Service in "
  )}`;

  for (const [key, value] of Object.entries(StateDict)) {
    const regex = new RegExp(`\\b${key}\\b`, "g");
    AlertText = AlertText.replace(regex, value);
  }
  for (const [key, value] of Object.entries(timezones)) {
    const regex = new RegExp(`\\b${key}\\b`, "g");
    AlertText = AlertText.replace(regex, value);
  }
  speech.text = AlertText;
  if (AlertType != "Test Message") {
    window.speechSynthesis.speak(speech);
  }
}
