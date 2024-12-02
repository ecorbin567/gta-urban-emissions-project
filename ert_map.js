var ert_map = L.map(
    "ert_map",
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
L.control.layers(baseMaps).addTo(ert_map);

// Adding the street tile that actually works :))
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Street imagery &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(ert_map);

// we have a dict of dates and the data corresponding to those dates
// do show and hide functions for each date
// search function controls the show and hide!!
var ert_data = [];

fetch("ert_data.php")
        .then((response) => {
            if(!response.ok){ // Before parsing (i.e. decoding) the JSON data,
                              // check for any errors.
                // In case of an error, throw.
                throw new Error("Something went wrong!");
            }
            return response.json(); // Parse the JSON data.
        })
        .then((data) => {
             // This is where you handle what to do with the response.
             ert_data = data;
             // DO STUFF IN HERE (example below):
             //  alert(ert_data[1]["Latitude"]);
        })
        .catch((error) => {
            alert(error);
             // This is where you handle errors.
        });
