let ForecastAreas = {};

let RadarLocations = {
  KBGM: [42.1996899, -75.98472],
  KMVX: [47.52805, -97.32499],
  KHPX: [36.73666, -87.2849899],
  KRGX: [39.75405, -119.46202],
  KFSD: [43.58777, -96.72888],
  KCAE: [33.9486, -81.11861],
  KMKX: [42.96777, -88.55055],
  KDIX: [39.94694, -74.41072],
  PAKC: [58.67944, -156.62942],
  PABC: [60.79194, -161.87637],
  KBOX: [41.95577, -71.13686],
  KGRR: [42.89388, -85.54488],
  KFTG: [39.78663, -104.5458],
  KLCH: [30.1253, -93.21588],
  KYUX: [32.49527, -114.65668],
  KSHV: [32.45083, -93.84124],
  KSRX: [35.29041, -94.36188],
  KICX: [37.59104, -112.86221],
  KMOB: [30.67944, -88.23972],
  KMRX: [36.16833, -83.40194],
  KVBX: [34.83855, -120.3979],
  KJGX: [32.67499, -83.35111],
  KIWA: [33.28916, -111.66999],
  KLOT: [41.6044399, -88.08444],
  KPOE: [31.15527, -92.97583],
  KEAX: [38.81024, -94.26446],
  PAHG: [60.72591, -151.35144],
  TJUA: [18.1156599, -66.07817],
  KDVN: [41.61166, -90.58083],
  KLVX: [37.97527, -85.9438799],
  KHNX: [36.31416, -119.63213],
  KLWX: [38.9761, -77.4875],
  KGWX: [33.89691, -88.32919],
  KDDC: [37.76083, -99.96888],
  KDMX: [41.7311, -93.7228499],
  PHKM: [20.12527, -155.77776],
  KDLH: [46.83694, -92.20971],
  KEVX: [30.56503, -85.92166],
  KMAF: [31.94346, -102.18924],
  KVNX: [36.74083, -98.12749],
  KOTX: [47.6805499, -117.62582],
  KBBX: [39.49611, -121.63165],
  KGRK: [30.72166, -97.3827699],
  KEWX: [29.70405, -98.0286],
  KRAX: [35.66527, -78.49],
  KLNX: [41.95794, -100.57621],
  KLBB: [33.65413, -101.81416],
  KPDT: [45.69055, -118.8529],
  KGSP: [34.8833, -82.21983],
  KEOX: [31.46055, -85.45938],
  KBIS: [46.7708299, -100.76027],
  PAIH: [59.46194, -146.3010899],
  KBYX: [24.59694, -81.7033299],
  KJAX: [30.48463, -81.7019],
  KFDX: [34.63416, -103.61888],
  KESX: [35.70111, -114.89138],
  KDYX: [32.53833, -99.25416],
  KTBW: [27.70527, -82.40194],
  KDFX: [29.2725, -100.28027],
  KMUX: [37.15522, -121.89843],
  KBRO: [25.91555, -97.4186],
  RKJK: [35.9241699, 126.62222],
  KAKQ: [36.98388, -77.0074999],
  KBMX: [33.17194, -86.76972],
  KABR: [45.45583, -98.41305],
  KSFX: [43.10559, -112.68612],
  KSOX: [33.81773, -117.63599],
  KTLH: [30.39749, -84.32889],
  KHGX: [29.47194, -95.07888],
  KAMX: [25.61055, -80.41305],
  KMTX: [41.26277, -112.44777],
  KEPZ: [31.87305, -106.69799],
  KLZK: [34.83638, -92.26194],
  KHTX: [34.9305499, -86.0836099],
  KEYX: [35.09777, -117.56074],
  KSGF: [37.23527, -93.40027],
  KBLX: [45.85377, -108.60679],
  KPUX: [38.45944, -104.18138],
  KHDX: [33.07699, -106.12002],
  KINX: [36.17499, -95.56413],
  KIWX: [41.3586, -85.7],
  KGGW: [48.20635, -106.62468],
  KNQA: [35.34472, -89.87333],
  RODN: [26.3019399, 127.90972],
  KCLX: [32.65552, -81.04219],
  KIND: [39.70749, -86.28027],
  KOKX: [40.8655199, -72.8639199],
  KGLD: [39.36694, -101.70027],
  KVTX: [34.41166, -119.1786],
  KICT: [37.65444, -97.44305],
  KDOX: [38.82555, -75.44],
  KRIW: [43.0661, -108.47729],
  KVAX: [30.89027, -83.0018],
  KABX: [35.14972, -106.82388],
  KNKX: [32.91888, -117.04193],
  PACG: [56.85277, -135.5291499],
  KMSX: [47.0411, -113.9861],
  KGRB: [44.49862, -88.1110999],
  KATX: [48.19461, -122.49568],
  KCRP: [27.78388, -97.51083],
  KSJT: [31.37111, -100.49221],
  KPBZ: [40.53166, -80.21794],
  KPAH: [37.06833, -88.77194],
  KHDC: [30.5196, -90.4074],
  KRTX: [45.71499, -122.96499],
  KFCX: [37.02416, -80.27416],
  KARX: [43.82277, -91.1911],
  KJKL: [37.5908299, -83.31305],
  KGYX: [43.8913, -70.25636],
  KAMA: [35.23333, -101.70927],
  KFSX: [34.57433, -111.19843],
  KMPX: [44.84888, -93.56552],
  KCXX: [44.5111, -73.16639],
  KDGX: [32.27999, -89.98444],
  KLSX: [38.69888, -90.68277],
  KGJX: [39.06222, -108.21375],
  KOAX: [41.32027, -96.3668],
  PHMO: [21.13277, -157.18026],
  KMXX: [32.53664, -85.78975],
  KCBX: [43.49021, -116.23602],
  KRLX: [38.3111, -81.72277],
  KLTX: [33.98916, -78.42916],
  KILX: [40.15049, -89.3367899],
  KDTX: [42.69999, -83.47166],
  KLRX: [40.73972, -116.80277],
  KENX: [42.58655, -74.06408],
  RKSG: [37.2075699, 127.28556],
  KOHX: [36.24722, -86.5625],
  KMAX: [42.08111, -122.71735],
  KFDR: [34.36219, -98.97666],
  KMQT: [46.5311, -87.54833],
  KCBW: [46.03916, -67.80642],
  KBUF: [42.9486, -78.73694],
  KTFX: [47.45972, -111.38527],
  KDAX: [38.50111, -121.67782],
  KTLX: [35.33305, -97.27775],
  KTWX: [38.99694, -96.23249],
  PAEC: [64.51139, -165.29498],
  KEMX: [31.89361, -110.63027],
  PHWA: [19.095, -155.56887],
  KFWS: [32.57277, -97.30313],
  KUDX: [44.12471, -102.82999],
  PHKI: [21.89389, -159.55249],
  KMLB: [28.11305, -80.6544399],
  KCYS: [41.15194, -104.8061],
  KFFC: [33.36333, -84.56583],
  KVWX: [38.26024, -87.72452],
  KAPX: [44.90634, -84.71953],
  KCCX: [40.92305, -78.00389],
  KBHX: [40.49833, -124.29215],
  KILN: [39.42027, -83.82166],
  PGUA: [13.45583, 144.81112],
  KCLE: [41.41305, -81.86],
  KUEX: [40.32083, -98.44194],
  PAPD: [65.03511, -147.5014],
  KMHX: [34.77583, -76.87639],
  KMBX: [48.39249, -100.86443],
  KTYX: [43.75582, -75.68],
  KLGX: [47.11689, -124.10663],
};

let map = L.map("map", {
  zoomControl: false,
}).setView([35, -100], 5);

//Set Alert Areas
for (let index = 0; index < 18; index++) {
  map.createPane(String(index));
  map.getPane(String(index)).style.zIndex = 200 + index;
}

Object.keys(RadarLocations).forEach((Radar) => {
  let RadarCircle = L.circle(RadarLocations[Radar], {
    color: "blue",
    fillColor: "blue",
    fillOpacity: 0.5,
    radius: 1000,
  })
    .addTo(map)
    .bindPopup(`<p>${Radar}</p>`, {
      className: "popup",
      maxWidth: 100,
      minWidth: 20,
      closeButton: false,
      autoClose: true,
    });
});

let polygons = {};
let MapPolygons = {};
let Alerts = [];
let DidFirstScan = false;

async function ConvertGeoJsonToPolygon(coordinates) {
  return coordinates[0].map(([lon, lat]) => [lat, lon]);
}

async function SetWidth(currentZoom) {
  const Weight = 0.5555555555555556 * currentZoom;
  Object.values(MapPolygons).forEach(async (Polygon) => {
    await Polygon.setStyle({ weight: Weight });
  });
}

async function PlacePolygon(Alert) {
  let GeoJsonData = Alert.geometry.coordinates;
  let PolygonData = await ConvertGeoJsonToPolygon(GeoJsonData);
  let AlertColor = "black";
  let AlertZIndex = "0";
  let AlertName = Alert.properties.event;
  if (AlertName.toLowerCase().includes("tornado watch")) {
    AlertColor = "#fff400";
  } else if (AlertName.toLowerCase().includes("tornado warning")) {
    if (Alert.properties.parameters.hasOwnProperty("tornadoDamageThreat")) {
      console.log("Test");
      if (
        Alert.properties.parameters.tornadoDamageThreat[0].toLowerCase() ==
        "considerable"
      ) {
        AlertColor = "crimson";
        AlertName = "PDS Tornado Warning";
        AlertZIndex = "16";
      } else if (
        Alert.properties.parameters.tornadoDamageThreat[0].toLowerCase() ==
        "catastrophic"
      ) {
        AlertColor = "#8200ff";
        AlertName = "Tornado Emergency";
        AlertZIndex = "17";
      } else {
        AlertColor = "red";
        AlertZIndex = "15";
      }
    } else {
      AlertColor = "red";
      AlertZIndex = "15";
    }
  } else if (AlertName.toLowerCase().includes("severe thunderstorm warning")) {
    AlertZIndex = "14";
    AlertColor = "#ff8f07";
  } else if (AlertName.toLowerCase().includes("special weather statement")) {
    AlertZIndex = "11";
    AlertColor = "#ff8df5";
  } else if (AlertName.toLowerCase().includes("severe weather statement")) {
    AlertColor = "#00fdff";
  } else if (AlertName.toLowerCase().includes("severe thunderstorm watch")) {
    AlertColor = "#ff1f8f";
  } else if (AlertName.toLowerCase().includes("flash flood warning")) {
    AlertZIndex = "13";
    AlertColor = "#a10000";
  } else if (AlertName.toLowerCase().includes("flash flood watch")) {
    AlertColor = "#00842f";
  } else if (AlertName.toLowerCase().includes("flash flood statement")) {
    AlertZIndex = "13";
    AlertColor = "#a10000";
  } else if (AlertName.toLowerCase().includes("flood warning")) {
    AlertZIndex = "12";
    AlertColor = "#00ff04";
  } else if (AlertName.toLowerCase().includes("flood watch")) {
    AlertColor = "#007202";
  } else if (AlertName.toLowerCase().includes("flood statement")) {
    AlertZIndex = "12";
    AlertColor = "#00ff04";
  } else if (AlertName.toLowerCase().includes("flood advisory")) {
    AlertZIndex = "12";
    AlertColor = "#66e268";
  } else if (AlertName.toLowerCase().includes("hydrologic statement")) {
    AlertColor = "#66e268";
  } else if (AlertName.toLowerCase().includes("hydrologic outlook")) {
    AlertColor = "#3f8c40";
  }

  let polygon = L.polygon(PolygonData, {
    color: AlertColor,
    fillOpacity: 0.07,
    weight: 2.7777777777777777,
    pane: AlertZIndex,
  })
    .addTo(map)
    .bindPopup(
      `<p>${AlertName}</p><p>${Alert.properties.headline}</p><br><p>${Alert.properties.description}</p>`,
      {
        className: "popup",
        maxWidth: 400,
        minWidth: 100,
        closeButton: true,
        autoClose: true,
      }
    )
    .on("mouseover", async () => {
      await polygon.setStyle({
        fillOpacity: 0.6,
      });
    })
    .on("mouseout", () => {
      polygon.setStyle({
        fillOpacity: 0.07,
      });
    })
    .on("contextmenu", async () => {
      const bounds = polygon.getBounds();
      const center = bounds.getCenter();
      const zoomLevel = map.getBoundsZoom(bounds, false);
      await SetWidth(zoomLevel - 2);
      map.flyTo(center, zoomLevel, {
        duration: 1, // Duration in seconds (increase for slower animation)
        animate: true,
      });
    });
  MapPolygons[Alert.id] = polygon;
}

let Testlist = [];

async function CheckAlerts(AlertData) {
  await AlertData.features.forEach(async (Alert) => {
    let AlertIndex = Alerts.findIndex(
      (existingAlert) => existingAlert.id === Alert.id
    );

    if (AlertIndex !== -1) {
      let existingAlert = Alerts[AlertIndex];
      if (JSON.stringify(existingAlert) !== JSON.stringify(Alert)) {
        Alerts[AlertIndex] = Alert;
        if (Alerts[AlertIndex]["geometry"] != null) {
          if (Alerts[AlertIndex]["geometry"]["type"] == "Polygon") {
            MapPolygons[Alerts[AlertIndex]["id"]].remove();
            delete MapPolygons[Alerts[AlertIndex]["id"]];
            await PlacePolygon(Alerts[AlertIndex]);
            polygons[Alerts[AlertIndex]["id"]] =
              Alerts[AlertIndex]["geometry"]["coordinates"];
          }
        }
      }
    } else {
      Alerts.push(Alert);
      if (Alert["geometry"] != null) {
        if (Alert["geometry"]["type"] == "Polygon") {
          await PlacePolygon(Alert);
          polygons[Alert.id] = Alert;
        }
      }
      console.log(DidFirstScan);
      if (DidFirstScan) {
        await IssueAlert(Alert);
      }
    }
  });

  for (let AlertIndex = 0; AlertIndex < Alerts.length; AlertIndex++) {
    let value = AlertData.features.some(
      (NewAlert) => NewAlert.id === Alerts[AlertIndex].id
    );
    if (value == false) {
      if (Alerts[AlertIndex]["geometry"] != null) {
        if (Alerts[AlertIndex]["geometry"]["type"] == "Polygon") {
          MapPolygons[Alerts[AlertIndex]["id"]].remove();
          delete MapPolygons[Alerts[AlertIndex]["id"]];
          delete polygons[Alerts[AlertIndex]["id"]];
        }
      }
      Alerts.splice(AlertIndex, 1);
      console.log("Alert Expired");
    }
  }
}

async function StartAlertScan() {
  let WeatherData = await GetAllAlerts();
  if (WeatherData != "Fail") {
    await CheckAlerts(WeatherData);
    if (!DidFirstScan) {
      DidFirstScan = true;
    }
  }
  setTimeout(StartAlertScan, 1000);
}

//Handles Map Interactions
map.on("zoomend", function () {
  const currentZoom = map.getZoom();
  const Weight = 0.5555555555555556 * currentZoom;
  Object.values(MapPolygons).forEach(async (Polygon) => {
    await Polygon.setStyle({ weight: Weight });
  });
});

map.on("dragstart", function () {
  map.closePopup();
});

StartAlertScan();
