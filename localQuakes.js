function localQuakes() {
  // Date formatting
  const date = new Date();
  const year = date.getFullYear();
  let monthVal = date.getMonth();
  const monthMap = {
    0: "01",
    1: "02",
    2: "03",
    3: "04",
    4: "05",
    5: "06",
    6: "07",
    7: "08",
    8: "09",
    9: "10",
    10: "11",
    11: "12",
  };
  const month = monthMap[monthVal];
  let day = date.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  const startDate = `${year}-${month}-${day}`;
  const nextMonth = monthMap[monthVal + 1];
  const endDate = `${year}-${nextMonth}-${day}`;

  // HTML5 Browser Location API
  locating.href = "";
  coordinates.textContent = "";
  map.textContent = "";
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    locating.textContent = "";
    locating2.textContent = "";
    map.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    map.target = "_blank";
    map.innerText = "Click to see the map of your location!";
    coordinates.textContent = `Latitude: ${latitude}°, Longitude: ${longitude}°`;

    // USGS Earthquake API
    fetch(
      `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${startDate}&endtime=${endDate}&latitude=${latitude}&longitude=${longitude}&maxradius=15`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const dataArray = data.features;
        const quake = document.getElementById("fetchIt");
        dataArray.map(function (earthquake) {
          const eachQuake = earthquake;
          const utcMilliSeconds = eachQuake.properties.time;
          const seconds = Math.round(utcMilliSeconds / 1000);
          const theTime = new Date(0);
          theTime.setUTCSeconds(seconds);
          const stringTime = theTime.toString();
          const splitStringTime = stringTime.split(" ");
          const newTime = `${splitStringTime[0]} ${splitStringTime[1]} ${splitStringTime[2]} ${splitStringTime[3]} ${splitStringTime[4]}`;
          quake.innerHTML += `
                <div class="terms">
                    <hr></hr>
                        <h4>${eachQuake.properties.title}</h4>
                        📈<h7> ${eachQuake.properties.mag}<h7>
                        <div>🌍 <a href="https://www.openstreetmap.org/#map=10/${eachQuake.geometry.coordinates[1]}/${eachQuake.geometry.coordinates[0]}" target="_blank">${eachQuake.properties.place}</a></div>
                        <div>🕔 ${newTime}</div>
                        <br></br>
                        <a href=${eachQuake.properties.url} target="_blank"> See more detailed information about this earthquake on the USGS website.</a>
                    <br></br>
                </div>
                `;
        });
      });
  }
  function error() {
    locating.textContent =
      'You need to have your location "ON" to proceed further.';
  }
  if (!navigator.geolocation) {
    locating.textContent =
      "For the love of all that is good, please cease use of Internet Explorer!";
  } else {
    locating.textContent = `The satellites are currently triangulating to calculate your exact position on Planet Earth.`;
    locating2.textContent = `If it's taking a while, try refreshing your browser and be sure to click 'Allow' when it asks to use your location.`;
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

getLocation.addEventListener("click", localQuakes);
