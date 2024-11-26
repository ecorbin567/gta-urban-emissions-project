// map/location picker
// Get element references
var confirmBtn = document.getElementById('confirmPosition');
var onClickPositionView = document.getElementById('onClickPositionView');
var onIdlePositionView = document.getElementById('onIdlePositionView');
var location_confirmed = false;
var latitude = 0;
var longitude = 0;

// Initialize locationPicker plugin
var lp = new locationPicker('googlemap', {
    lat: 43.664474805343026,
    lng: -79.392403396353,
    setCurrentPosition: true // You can omit this, defaults to true
}, {
    zoom: 13 // You can set any google map options here, zoom defaults to 15
});

// Listen to button onclick event
confirmBtn.onclick = function () {
    // Get current location and show it in HTML
    location_confirmed = true;
    var location = lp.getMarkerPosition();
    onClickPositionView.innerHTML = location.lat + ',' + location.lng;
    latitude = location.lat;
    longitude = location.lng;
};

// form submission
var submitBtn = document.getElementById('submit');

submitBtn.onclick = function() {
    if (validateForm() == true) {
        alert("Submitted, thank you!")
        lat = latitude;
        lng = longitude;
        date = document.forms["emissionsReport"]["date-observed"].value;
        time = document.forms["emissionsReport"]["time-observed"].value;
        smell = document.forms["emissionsReport"]["smell-severity"].value;
        sendData();
    }
}

// form validation
function validateForm() {
    if (location_confirmed == false) {
        alert("Please confirm the location of the enhancement");
        return false;
    }
    let date = document.forms["emissionsReport"]["date-observed"].value;
    if (date == "") {
      alert("Please enter the date you observed the enhancement");
      return false;
    }
    let time = document.forms["emissionsReport"]["time-observed"].value;
    if (time == "") {
      alert("Please enter the approximate time you observed the enhancement");
      return false;
    }
    let smell = document.forms["emissionsReport"]["smell-severity"].value;
    if (smell == "") {
      alert("Please enter the severity of the smell associated with the enhancement");
      return false;
    }
    return true;
}

var lat = latitude;
var lng = longitude;
var date = document.forms["emissionsReport"]["date-observed"].value;
var time = document.forms["emissionsReport"]["time-observed"].value;
var smell = document.forms["emissionsReport"]["smell-severity"].value;

function sendData() {
    var data = {
        lat: lat,
        lng: lng,
        date: date,
        time: time,
        smell: smell
    };

    var xhr = new XMLHttpRequest();

    // set the PHP page you want to send data to
    xhr.open("POST", "proces.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    // what to do when you receive a response
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.responseText);
        }
    };

    // send the data
    xhr.send(JSON.stringify(data));
}