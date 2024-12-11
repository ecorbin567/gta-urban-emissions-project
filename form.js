// map/location picker
// Get element references
var confirmBtn = document.getElementById('confirmPosition');
var onClickPositionView = document.getElementById('onClickPositionView');
var location_confirmed = false;
var latitude = 0;
var longitude = 0;

var report_map = L.map(
    "report_map",
    {
        center: [43.656997372, -79.390331772],
        crs: L.CRS.EPSG3857,
        zoom: 12,
        zoomControl: true,
        preferCanvas: false,
    }
);

//Call the map tile to be used. This is from 'mapbox'. Note: the street imagery does not work on this tile, so we use the OpenStreetMap tile instead (below).
var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Satellite imagery © <a href="http://mapbox.com">Mapbox</a>',
    mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZWNvcmIiLCJhIjoiY20zbnk3NGlyMWlqbDJrb28zODNqMGdjbSJ9.6CgLunTKPU_ozomb_I0RRA';

var streets = L.tileLayer(mbUrl, { id: 'mapbox.streets', attribution: mbAttr }),
    satellite = L.tileLayer(mbUrl, { id: "mapbox.satellite", attribution: mbAttr });


// Dictionary of base maps
var baseMaps = {
    "Streets": streets,
    "Satellite": satellite
};

// Allowing the user to control layers
L.control.layers(baseMaps).addTo(report_map);

// Adding the street tile that actually works :))
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Street imagery &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(report_map);

var marker = new L.marker([43.656997372, -79.390331772],{
    draggable: true,
    autoPan: true
}).addTo(report_map);

var icon = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon" }
);
marker.setIcon(icon);

// Listen to button onclick event
confirmBtn.onclick = function () {
    // Get current location and show it in HTML
    location_confirmed = true;
    var location = marker.getLatLng();
    onClickPositionView.innerHTML = location.lat + ',' + location.lng;
    latitude = location.lat;
    longitude = location.lng;
};

// form submission
var submitBtn = document.getElementById('submit');

submitBtn.onclick = function () {
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

    // send the data
    xhr.send(JSON.stringify(data));
}