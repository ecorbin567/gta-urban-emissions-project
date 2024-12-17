// JS code that displays the past measurements map

// Initialize map
var past_measurements_map = L.map(
    "past_measurements_map",
    {
        center: [43.656997372, -79.390331772],
        crs: L.CRS.EPSG3857,
        zoom: 12,
        zoomControl: true,
        preferCanvas: false,
    }
);

// Call the map tile to be used. This is from 'mapbox'. Note: the street imagery does not work on this tile, so we use the OpenStreetMap tile instead (below).
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
L.control.layers(baseMaps).addTo(past_measurements_map);

// Adding the street tile that actually works :))
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: mbAttr
}).addTo(past_measurements_map);

// adding markers with all the known emitters to a layer group where we can toggle their visibility
// -----------------------BEGIN KNOWN EMITTERS---------------------------
var emitters = L.layerGroup();

var marker_a105190ea1b936998cdc0c55d4281fe9 = L.marker(
    [43.658941999999996, -79.317386],
    {}
).addTo(emitters);


var icon_7bd4b7ab6d4cfd1415190083787ffc9c = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_a105190ea1b936998cdc0c55d4281fe9.setIcon(icon_7bd4b7ab6d4cfd1415190083787ffc9c);

var popup_26d621d6e3bd81bba71f71b5c3b1427e = L.popup({ "maxWidth": "100%" });



var html_075c4672846e71c051d0f3c88ab65462 = $(`<div id="html_075c4672846e71c051d0f3c88ab65462" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Ashbridges Bay <br> Type: Wastewater </div>`)[0];
popup_26d621d6e3bd81bba71f71b5c3b1427e.setContent(html_075c4672846e71c051d0f3c88ab65462);



marker_a105190ea1b936998cdc0c55d4281fe9.bindPopup(popup_26d621d6e3bd81bba71f71b5c3b1427e)
    ;




var marker_d125e1ed520a180d3a7a566f69eb8907 = L.marker(
    [43.633507, -79.479454],
    {}
).addTo(emitters);


var icon_67d44ece1e6835a40911d944afdb80a6 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_d125e1ed520a180d3a7a566f69eb8907.setIcon(icon_67d44ece1e6835a40911d944afdb80a6);


var popup_875f4fe048d431cf80d05df56d3b6397 = L.popup({ "width": "200%" });



var html_24c7f55c5c24c3b8bf91aee1a01912ef = $(`<div id="html_24c7f55c5c24c3b8bf91aee1a01912ef" style="width: 100.0%; height: 100.0%; padding: 0.25vw;">Known Emitter <br> Name: Humber Bay <br> Type: Wastewater</div>`)[0];
popup_875f4fe048d431cf80d05df56d3b6397.setContent(html_24c7f55c5c24c3b8bf91aee1a01912ef);



marker_d125e1ed520a180d3a7a566f69eb8907.bindPopup(popup_875f4fe048d431cf80d05df56d3b6397)
    ;




var marker_670d57d116df3478cd22befb149cb017 = L.marker(
    [43.49581, -79.620343],
    {}
).addTo(emitters);


var icon_15a67c391d8b42eb515b90d5c4a2d1f6 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_670d57d116df3478cd22befb149cb017.setIcon(icon_15a67c391d8b42eb515b90d5c4a2d1f6);


var popup_762888a9b388bd3ed63e9e7122bf7fd6 = L.popup({ "maxWidth": "100%" });



var html_e1897af1c51a2956dbec53d2a5544026 = $(`<div id="html_e1897af1c51a2956dbec53d2a5544026" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Clarkson <br> Type: Wastewater </div>`)[0];
popup_762888a9b388bd3ed63e9e7122bf7fd6.setContent(html_e1897af1c51a2956dbec53d2a5544026);



marker_670d57d116df3478cd22befb149cb017.bindPopup(popup_762888a9b388bd3ed63e9e7122bf7fd6)
    ;




var marker_e556e7b10495d991f716734ea0f1bf26 = L.marker(
    [43.766362, -79.15100100000001],
    {}
).addTo(emitters);


var icon_1ff85af1e64315fa4f616f6f94e905d9 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_e556e7b10495d991f716734ea0f1bf26.setIcon(icon_1ff85af1e64315fa4f616f6f94e905d9);


var popup_20db857f0a736266bb2705ed80a6949f = L.popup({ "maxWidth": "100%" });



var html_3fdecfac51c5d6a03b2d95afa0d7da4e = $(`<div id="html_3fdecfac51c5d6a03b2d95afa0d7da4e" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Highland Creek <br> Type: Wastewater </div>`)[0];
popup_20db857f0a736266bb2705ed80a6949f.setContent(html_3fdecfac51c5d6a03b2d95afa0d7da4e);



marker_e556e7b10495d991f716734ea0f1bf26.bindPopup(popup_20db857f0a736266bb2705ed80a6949f)
    ;




var marker_03b13d149f780397bdae1a77e778deb0 = L.marker(
    [43.577868, -79.546584],
    {}
).addTo(emitters);


var icon_4fff60a8034d8b63000f1c9e6e3f8279 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_03b13d149f780397bdae1a77e778deb0.setIcon(icon_4fff60a8034d8b63000f1c9e6e3f8279);


var popup_83eba7fb2b4f34a1ee983173fd521cff = L.popup({ "maxWidth": "100%" });



var html_2d60e2411d4dcdcb26a7c5fd4ca37b1b = $(`<div id="html_2d60e2411d4dcdcb26a7c5fd4ca37b1b" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: GE Booth <br> Type: Wastewater </div>`)[0];
popup_83eba7fb2b4f34a1ee983173fd521cff.setContent(html_2d60e2411d4dcdcb26a7c5fd4ca37b1b);



marker_03b13d149f780397bdae1a77e778deb0.bindPopup(popup_83eba7fb2b4f34a1ee983173fd521cff)
    ;




var marker_9f6cebad337dbd5c3cae5a24e1ba48fd = L.marker(
    [43.307828, -79.800675],
    {}
).addTo(emitters);


var icon_19a60256d592e47022c4e2fb6b0d77cf = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_9f6cebad337dbd5c3cae5a24e1ba48fd.setIcon(icon_19a60256d592e47022c4e2fb6b0d77cf);


var popup_4b21b03cc3f329e5fba4ebdd4b4fa6ed = L.popup({ "maxWidth": "100%" });



var html_6025837fcb3d0c2ee1361ca1f338e02b = $(`<div id="html_6025837fcb3d0c2ee1361ca1f338e02b" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Burlington Skyway <br> Type: Wastewater </div>`)[0];
popup_4b21b03cc3f329e5fba4ebdd4b4fa6ed.setContent(html_6025837fcb3d0c2ee1361ca1f338e02b);



marker_9f6cebad337dbd5c3cae5a24e1ba48fd.bindPopup(popup_4b21b03cc3f329e5fba4ebdd4b4fa6ed)
    ;




var marker_90191773ae52212daf712702ad9466ac = L.marker(
    [43.871124, -78.75285500000001],
    {}
).addTo(emitters);


var icon_3d53de056acd8d45d0d0037e5b633dd0 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_90191773ae52212daf712702ad9466ac.setIcon(icon_3d53de056acd8d45d0d0037e5b633dd0);


var popup_2671779b532a2c3c49729fda21a4ad04 = L.popup({ "maxWidth": "100%" });



var html_cc2b04570d2ce13dce650d3be729a5c3 = $(`<div id="html_cc2b04570d2ce13dce650d3be729a5c3" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Courtice <br> Type: Wastewater </div>`)[0];
popup_2671779b532a2c3c49729fda21a4ad04.setContent(html_cc2b04570d2ce13dce650d3be729a5c3);



marker_90191773ae52212daf712702ad9466ac.bindPopup(popup_2671779b532a2c3c49729fda21a4ad04)
    ;




var marker_0c7fec7fca6d3514039351c2b123d583 = L.marker(
    [43.420801000000004, -79.733362],
    {}
).addTo(emitters);


var icon_c3fe4d0b23bcc02a2f11ffded8975d31 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_0c7fec7fca6d3514039351c2b123d583.setIcon(icon_c3fe4d0b23bcc02a2f11ffded8975d31);


var popup_9bd260ec881cc175ebb88cc70a5011be = L.popup({ "maxWidth": "100%" });



var html_48f07dbd9aa2264678a6df7b109fff2a = $(`<div id="html_48f07dbd9aa2264678a6df7b109fff2a" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Oakville Mid Halton <br> Type: Wastewater </div>`)[0];
popup_9bd260ec881cc175ebb88cc70a5011be.setContent(html_48f07dbd9aa2264678a6df7b109fff2a);



marker_0c7fec7fca6d3514039351c2b123d583.bindPopup(popup_9bd260ec881cc175ebb88cc70a5011be)
    ;




var marker_315acbf16fc8d7cb5e761244783974e2 = L.marker(
    [43.820821, -79.049019],
    {}
).addTo(emitters);


var icon_0005561ddc960c5a993d4424000eef0b = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_315acbf16fc8d7cb5e761244783974e2.setIcon(icon_0005561ddc960c5a993d4424000eef0b);


var popup_cf3219d95a625a60d1252d3f58fdbee2 = L.popup({ "maxWidth": "100%" });



var html_8ade6e91285816b3636572503a0e5bf9 = $(`<div id="html_8ade6e91285816b3636572503a0e5bf9" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Duffin Creek <br> Type: Wastewater </div>`)[0];
popup_cf3219d95a625a60d1252d3f58fdbee2.setContent(html_8ade6e91285816b3636572503a0e5bf9);



marker_315acbf16fc8d7cb5e761244783974e2.bindPopup(popup_cf3219d95a625a60d1252d3f58fdbee2)
    ;




var marker_e935b6700c865a6c9abd216f14b39dc1 = L.marker(
    [43.878836, -78.824087],
    {}
).addTo(emitters);


var icon_3e395b39addb62fb031f95e73676a0a5 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_e935b6700c865a6c9abd216f14b39dc1.setIcon(icon_3e395b39addb62fb031f95e73676a0a5);


var popup_2c17911358eba1f7ab7075a06e170c5e = L.popup({ "maxWidth": "100%" });



var html_643a904d6fa84dd9d8f3ca3cfe087ad4 = $(`<div id="html_643a904d6fa84dd9d8f3ca3cfe087ad4" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Harmony Creek <br> Type: Wastewater </div>`)[0];
popup_2c17911358eba1f7ab7075a06e170c5e.setContent(html_643a904d6fa84dd9d8f3ca3cfe087ad4);



marker_e935b6700c865a6c9abd216f14b39dc1.bindPopup(popup_2c17911358eba1f7ab7075a06e170c5e)
    ;




var marker_1bb4f6dbe4410b2b5372acf51906cf9e = L.marker(
    [43.856466999999995, -78.89164699999999],
    {}
).addTo(emitters);


var icon_3fab6fe15114b990c188b56798f66ff3 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_1bb4f6dbe4410b2b5372acf51906cf9e.setIcon(icon_3fab6fe15114b990c188b56798f66ff3);


var popup_5ad84d168542d5554a96334478048e6f = L.popup({ "maxWidth": "100%" });



var html_3cddd8b2467e8c40f64114376f18c50b = $(`<div id="html_3cddd8b2467e8c40f64114376f18c50b" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Corbett <br> Type: Wastewater </div>`)[0];
popup_5ad84d168542d5554a96334478048e6f.setContent(html_3cddd8b2467e8c40f64114376f18c50b);



marker_1bb4f6dbe4410b2b5372acf51906cf9e.bindPopup(popup_5ad84d168542d5554a96334478048e6f)
    ;




var marker_ade143d7b8c61f6087773168214d2f3b = L.marker(
    [44.357098, -79.028521],
    {}
).addTo(emitters);


var icon_b32513b385bf990d49d017bce1d99d33 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_ade143d7b8c61f6087773168214d2f3b.setIcon(icon_b32513b385bf990d49d017bce1d99d33);


var popup_49e4f06b2a701c47b8fdf2ca38f5740d = L.popup({ "maxWidth": "100%" });



var html_be486b8870ee388ca6a978590867a2fc = $(`<div id="html_be486b8870ee388ca6a978590867a2fc" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Cannington <br> Type: Wastewater </div>`)[0];
popup_49e4f06b2a701c47b8fdf2ca38f5740d.setContent(html_be486b8870ee388ca6a978590867a2fc);



marker_ade143d7b8c61f6087773168214d2f3b.bindPopup(popup_49e4f06b2a701c47b8fdf2ca38f5740d)
    ;




var marker_22ba02f6716400d74f51820eb64d4706 = L.marker(
    [43.798577, -79.931262],
    {}
).addTo(emitters);


var icon_592807468386e26fb75d0d10681d83bc = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_22ba02f6716400d74f51820eb64d4706.setIcon(icon_592807468386e26fb75d0d10681d83bc);


var popup_73cf22e05f89a159b7fc4e371de771bf = L.popup({ "maxWidth": "100%" });



var html_8b96ae49867daabe678287fd0406a4e8 = $(`<div id="html_8b96ae49867daabe678287fd0406a4e8" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Inglewood <br> Type: Wastewater </div>`)[0];
popup_73cf22e05f89a159b7fc4e371de771bf.setContent(html_8b96ae49867daabe678287fd0406a4e8);



marker_22ba02f6716400d74f51820eb64d4706.bindPopup(popup_73cf22e05f89a159b7fc4e371de771bf)
    ;




var marker_44e5f426f814afa630f7364169083ba1 = L.marker(
    [43.413101, -79.693301],
    {}
).addTo(emitters);


var icon_d63fbfb171661dd3c0f1314b7342399b = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_44e5f426f814afa630f7364169083ba1.setIcon(icon_d63fbfb171661dd3c0f1314b7342399b);


var popup_ecc2966c57cfbcf7d692a0b0c3e906ec = L.popup({ "maxWidth": "100%" });



var html_acf967f68de0c31eac42dfde2c6f0d76 = $(`<div id="html_acf967f68de0c31eac42dfde2c6f0d76" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Oakville South West <br> Type: Wastewater </div>`)[0];
popup_ecc2966c57cfbcf7d692a0b0c3e906ec.setContent(html_acf967f68de0c31eac42dfde2c6f0d76);



marker_44e5f426f814afa630f7364169083ba1.bindPopup(popup_ecc2966c57cfbcf7d692a0b0c3e906ec)
    ;




var marker_6c6a3174abccffa0b632151df9af3399 = L.marker(
    [43.639975, -79.879365],
    {}
).addTo(emitters);


var icon_7fa3267d30f0bc1126b12679a03a457b = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_6c6a3174abccffa0b632151df9af3399.setIcon(icon_7fa3267d30f0bc1126b12679a03a457b);


var popup_8874020574241db3b38a36351d7dc807 = L.popup({ "maxWidth": "100%" });



var html_727e1a86aefc72a5d38339d7000b45db = $(`<div id="html_727e1a86aefc72a5d38339d7000b45db" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Georgetown <br> Type: Wastewater </div>`)[0];
popup_8874020574241db3b38a36351d7dc807.setContent(html_727e1a86aefc72a5d38339d7000b45db);



marker_6c6a3174abccffa0b632151df9af3399.bindPopup(popup_8874020574241db3b38a36351d7dc807)
    ;




var marker_697ca2080f8d0c59d902ffd191e5cbdc = L.marker(
    [43.48229, -79.631582],
    {}
).addTo(emitters);


var icon_d336f22fba948ea692df91ffa85cc889 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_697ca2080f8d0c59d902ffd191e5cbdc.setIcon(icon_d336f22fba948ea692df91ffa85cc889);


var popup_f3e176ff96dea46f9116e27984682fc5 = L.popup({ "maxWidth": "100%" });



var html_51c83d5380e4071d740935cf60258ae1 = $(`<div id="html_51c83d5380e4071d740935cf60258ae1" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Oakville South East <br> Type: Wastewater </div>`)[0];
popup_f3e176ff96dea46f9116e27984682fc5.setContent(html_51c83d5380e4071d740935cf60258ae1);



marker_697ca2080f8d0c59d902ffd191e5cbdc.bindPopup(popup_f3e176ff96dea46f9116e27984682fc5)
    ;




var marker_37e647333bd5cb97445b07dcd812edf5 = L.marker(
    [44.274868, -79.05804599999999],
    {}
).addTo(emitters);


var icon_a3440428c7f032a14e79ac10ff7d1195 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_37e647333bd5cb97445b07dcd812edf5.setIcon(icon_a3440428c7f032a14e79ac10ff7d1195);


var popup_79ed2b760782f7e9746d14aaf15f8728 = L.popup({ "maxWidth": "100%" });



var html_35c0db469e0de6047f4e882eab6d17c4 = $(`<div id="html_35c0db469e0de6047f4e882eab6d17c4" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Sunderland <br> Type: Wastewater </div>`)[0];
popup_79ed2b760782f7e9746d14aaf15f8728.setContent(html_35c0db469e0de6047f4e882eab6d17c4);



marker_37e647333bd5cb97445b07dcd812edf5.bindPopup(popup_79ed2b760782f7e9746d14aaf15f8728)
    ;




var marker_49d7bfa806b1f3ad4678f8c673ad9ac2 = L.marker(
    [43.631228, -80.019542],
    {}
).addTo(emitters);


var icon_a827eef5706b56abfabdd55983bbc1d9 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_49d7bfa806b1f3ad4678f8c673ad9ac2.setIcon(icon_a827eef5706b56abfabdd55983bbc1d9);


var popup_391bbf3571a979c64c346a15e6d858c7 = L.popup({ "maxWidth": "100%" });



var html_61e21a7a90ed35242a2fbb36e543f587 = $(`<div id="html_61e21a7a90ed35242a2fbb36e543f587" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Acton <br> Type: Wastewater </div>`)[0];
popup_391bbf3571a979c64c346a15e6d858c7.setContent(html_61e21a7a90ed35242a2fbb36e543f587);



marker_49d7bfa806b1f3ad4678f8c673ad9ac2.bindPopup(popup_391bbf3571a979c64c346a15e6d858c7)
    ;




var marker_bf47f6d467b3beecb2d337bd8a3f0e3c = L.marker(
    [43.893177, -78.662583],
    {}
).addTo(emitters);


var icon_d11e15b41c0240529a5b8a9efe5f5110 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_bf47f6d467b3beecb2d337bd8a3f0e3c.setIcon(icon_d11e15b41c0240529a5b8a9efe5f5110);


var popup_e9c53026d13815e240dc0786a0ef9d64 = L.popup({ "maxWidth": "100%" });



var html_19c6711ef14f716cf2e97d56baff92fa = $(`<div id="html_19c6711ef14f716cf2e97d56baff92fa" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Port Darlingtion <br> Type: Wastewater </div>`)[0];
popup_e9c53026d13815e240dc0786a0ef9d64.setContent(html_19c6711ef14f716cf2e97d56baff92fa);



marker_bf47f6d467b3beecb2d337bd8a3f0e3c.bindPopup(popup_e9c53026d13815e240dc0786a0ef9d64)
    ;




var marker_5563805400318b5bc234eeb44553bfc7 = L.marker(
    [44.118546, -79.48197900000001],
    {}
).addTo(emitters);


var icon_747c49e5183981f831acd78d8d39cb4d = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_5563805400318b5bc234eeb44553bfc7.setIcon(icon_747c49e5183981f831acd78d8d39cb4d);


var popup_5a52ad065c6b839b8a3d97dd6c64ed8f = L.popup({ "maxWidth": "100%" });



var html_892562f6cb46c582aeaa9c701440fc93 = $(`<div id="html_892562f6cb46c582aeaa9c701440fc93" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Holland Landing Lagoons <br> Type: Wastewater </div>`)[0];
popup_5a52ad065c6b839b8a3d97dd6c64ed8f.setContent(html_892562f6cb46c582aeaa9c701440fc93);



marker_5563805400318b5bc234eeb44553bfc7.bindPopup(popup_5a52ad065c6b839b8a3d97dd6c64ed8f)
    ;




var marker_983843ef63ec22c247f15f2ec8192172 = L.marker(
    [43.511931, -79.875646],
    {}
).addTo(emitters);


var icon_dcf231893e0f81d35c201bdf69c31c1a = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_983843ef63ec22c247f15f2ec8192172.setIcon(icon_dcf231893e0f81d35c201bdf69c31c1a);


var popup_fdda7e24b96c49b86b5ca72a5075f86d = L.popup({ "maxWidth": "100%" });



var html_f6c8a73b474899dd223758e3384062e7 = $(`<div id="html_f6c8a73b474899dd223758e3384062e7" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Milton <br> Type: Wastewater </div>`)[0];
popup_fdda7e24b96c49b86b5ca72a5075f86d.setContent(html_f6c8a73b474899dd223758e3384062e7);



marker_983843ef63ec22c247f15f2ec8192172.bindPopup(popup_fdda7e24b96c49b86b5ca72a5075f86d)
    ;




var marker_daa7c5e79ff74f0091af8057ec993e1e = L.marker(
    [43.82505, -79.16188000000001],
    {}
).addTo(emitters);


var icon_cac58cc1ce9acc0cee1e54e2e0f16a32 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_daa7c5e79ff74f0091af8057ec993e1e.setIcon(icon_cac58cc1ce9acc0cee1e54e2e0f16a32);


var popup_5a942e6862430844d5d60962fe53269c = L.popup({ "maxWidth": "100%" });



var html_d2d0bb90350833c649be4d1c41dde1f9 = $(`<div id="html_d2d0bb90350833c649be4d1c41dde1f9" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Beare Road <br> Type: solid waste</div>`)[0];
popup_5a942e6862430844d5d60962fe53269c.setContent(html_d2d0bb90350833c649be4d1c41dde1f9);



marker_daa7c5e79ff74f0091af8057ec993e1e.bindPopup(popup_5a942e6862430844d5d60962fe53269c)
    ;




var marker_687fac006401e78e4a8788ae7b794f6e = L.marker(
    [43.761298, -79.47474799999999],
    {}
).addTo(emitters);


var icon_13ef18de726b02920103dbeaa8ac3cd5 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_687fac006401e78e4a8788ae7b794f6e.setIcon(icon_13ef18de726b02920103dbeaa8ac3cd5);


var popup_c18c17b63e8c174341bb84807755e5df = L.popup({ "maxWidth": "100%" });



var html_e539df83086e05ff3e8c4c6cf455a844 = $(`<div id="html_e539df83086e05ff3e8c4c6cf455a844" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Dufferin Organics Processing <br> Type: solid waste</div>`)[0];
popup_c18c17b63e8c174341bb84807755e5df.setContent(html_e539df83086e05ff3e8c4c6cf455a844);



marker_687fac006401e78e4a8788ae7b794f6e.bindPopup(popup_c18c17b63e8c174341bb84807755e5df)
    ;




var marker_3992ff5b58e6eb8889caa3caa8828e97 = L.marker(
    [43.700538, -79.602644],
    {}
).addTo(emitters);


var icon_a849114d77df076e55f5fc27b31a0ece = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_3992ff5b58e6eb8889caa3caa8828e97.setIcon(icon_a849114d77df076e55f5fc27b31a0ece);


var popup_507a35d831c14ed6b54c824bcea86459 = L.popup({ "maxWidth": "100%" });



var html_282a61977e3e77d89c20191aed92c3c7 = $(`<div id="html_282a61977e3e77d89c20191aed92c3c7" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Disco Road Organics Processing <br> Type: solid waste</div>`)[0];
popup_507a35d831c14ed6b54c824bcea86459.setContent(html_282a61977e3e77d89c20191aed92c3c7);



marker_3992ff5b58e6eb8889caa3caa8828e97.bindPopup(popup_507a35d831c14ed6b54c824bcea86459)
    ;




var marker_9e83cdaf7e8f51b02f7205fc1f512840 = L.marker(
    [43.766764, -79.15066800000001],
    {}
).addTo(emitters);


var icon_2ceb5fc4c8d36bfdbcde3a001d40de11 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_9e83cdaf7e8f51b02f7205fc1f512840.setIcon(icon_2ceb5fc4c8d36bfdbcde3a001d40de11);


var popup_6b50c8563108f5de88b88f41b5ba5c34 = L.popup({ "maxWidth": "100%" });



var html_0d7365538a20bb737fc746a09a2f0541 = $(`<div id="html_0d7365538a20bb737fc746a09a2f0541" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Highland Creek <br> Type: solid waste</div>`)[0];
popup_6b50c8563108f5de88b88f41b5ba5c34.setContent(html_0d7365538a20bb737fc746a09a2f0541);



marker_9e83cdaf7e8f51b02f7205fc1f512840.bindPopup(popup_6b50c8563108f5de88b88f41b5ba5c34)
    ;




var marker_3ebba67633dd7f0bed0847eeee60834b = L.marker(
    [43.863803000000004, -79.501375],
    {}
).addTo(emitters);


var icon_751adc500a2684c0426f371482433718 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_3ebba67633dd7f0bed0847eeee60834b.setIcon(icon_751adc500a2684c0426f371482433718);


var popup_25770ebcc1ff75d8082ba8bda838f225 = L.popup({ "maxWidth": "100%" });



var html_94dc5aa060b7ba669e9cd533e9e47fa0 = $(`<div id="html_94dc5aa060b7ba669e9cd533e9e47fa0" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Keele Valley <br> Type: solid waste</div>`)[0];
popup_25770ebcc1ff75d8082ba8bda838f225.setContent(html_94dc5aa060b7ba669e9cd533e9e47fa0);



marker_3ebba67633dd7f0bed0847eeee60834b.bindPopup(popup_25770ebcc1ff75d8082ba8bda838f225)
    ;




var marker_3a7df0817837f66f1bd3ab27e5e885c4 = L.marker(
    [43.762572999999996, -79.585515],
    {}
).addTo(emitters);


var icon_1daff854e9b254c867c4d73238a6ae2f = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_3a7df0817837f66f1bd3ab27e5e885c4.setIcon(icon_1daff854e9b254c867c4d73238a6ae2f);


var popup_a817cb43bc5d237e6251d2c9c7ae95c9 = L.popup({ "maxWidth": "100%" });



var html_558bc3925bd939cc1d644a5fc7b97baa = $(`<div id="html_558bc3925bd939cc1d644a5fc7b97baa" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Thackeray <br> Type: solid waste</div>`)[0];
popup_a817cb43bc5d237e6251d2c9c7ae95c9.setContent(html_558bc3925bd939cc1d644a5fc7b97baa);



marker_3a7df0817837f66f1bd3ab27e5e885c4.bindPopup(popup_a817cb43bc5d237e6251d2c9c7ae95c9)
    ;




var marker_8fff0ff3fbb8eac4216e6352bcdca94b = L.marker(
    [43.971458, -79.414527],
    {}
).addTo(emitters);


var icon_b82cafcaec9c4d85380a182539325c41 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_8fff0ff3fbb8eac4216e6352bcdca94b.setIcon(icon_b82cafcaec9c4d85380a182539325c41);


var popup_2f30dee32557af5879f98aec7f09d539 = L.popup({ "maxWidth": "100%" });



var html_84bfc2d492e68f257bafc443b3304669 = $(`<div id="html_84bfc2d492e68f257bafc443b3304669" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Richmond Hill Compost Facility <br> Type: solid waste</div>`)[0];
popup_2f30dee32557af5879f98aec7f09d539.setContent(html_84bfc2d492e68f257bafc443b3304669);



marker_8fff0ff3fbb8eac4216e6352bcdca94b.bindPopup(popup_2f30dee32557af5879f98aec7f09d539)
    ;




var marker_85068135ddf3097a72ed3310583ed8de = L.marker(
    [43.475722, -79.81988199999999],
    {}
).addTo(emitters);


var icon_21775de2a962c5c00df829660d65de57 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_85068135ddf3097a72ed3310583ed8de.setIcon(icon_21775de2a962c5c00df829660d65de57);


var popup_ac55bdd4ec14425045d3d2dbc9415932 = L.popup({ "maxWidth": "100%" });



var html_78780a5dacdb96fd4937b44f9ca2df8b = $(`<div id="html_78780a5dacdb96fd4937b44f9ca2df8b" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Halton Regional Landfill - Milton <br> Type: solid waste</div>`)[0];
popup_ac55bdd4ec14425045d3d2dbc9415932.setContent(html_78780a5dacdb96fd4937b44f9ca2df8b);



marker_85068135ddf3097a72ed3310583ed8de.bindPopup(popup_ac55bdd4ec14425045d3d2dbc9415932)
    ;




var marker_54f03a3bff3ea3306d0806d709f35aca = L.marker(
    [43.820821, -79.049019],
    {}
).addTo(emitters);


var icon_08b5e277ecd35eafc0a9bf99d4e30685 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_54f03a3bff3ea3306d0806d709f35aca.setIcon(icon_08b5e277ecd35eafc0a9bf99d4e30685);


var popup_81427717f6a413648909a96172cdc0fc = L.popup({ "maxWidth": "100%" });



var html_0203c7ccb4c9a50627a800f2ea19fc45 = $(`<div id="html_0203c7ccb4c9a50627a800f2ea19fc45" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Duffin Creek <br> Type: solid waste</div>`)[0];
popup_81427717f6a413648909a96172cdc0fc.setContent(html_0203c7ccb4c9a50627a800f2ea19fc45);



marker_54f03a3bff3ea3306d0806d709f35aca.bindPopup(popup_81427717f6a413648909a96172cdc0fc)
    ;




var marker_3d2c427def9147c811ef787abf894271 = L.marker(
    [44.06100000000001, -79.2417],
    {}
).addTo(emitters);


var icon_8d0156b9a3508eb5be93337ac2356b99 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_3d2c427def9147c811ef787abf894271.setIcon(icon_8d0156b9a3508eb5be93337ac2356b99);


var popup_868f62760abd8f12420727a2023b89a3 = L.popup({ "maxWidth": "100%" });



var html_ca027ffa6d93762f48852e5e83ea27d4 = $(`<div id="html_ca027ffa6d93762f48852e5e83ea27d4" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Scott <br> Type: solid waste</div>`)[0];
popup_868f62760abd8f12420727a2023b89a3.setContent(html_ca027ffa6d93762f48852e5e83ea27d4);



marker_3d2c427def9147c811ef787abf894271.bindPopup(popup_868f62760abd8f12420727a2023b89a3)
    ;




var marker_0454dcff8ea7b3907fbbc1ed9c424f46 = L.marker(
    [43.925278000000006, -78.835278],
    {}
).addTo(emitters);


var icon_c5f4e20193eb0a434e1b9027f52c05af = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_0454dcff8ea7b3907fbbc1ed9c424f46.setIcon(icon_c5f4e20193eb0a434e1b9027f52c05af);


var popup_c3bc3dab528ded4462b7ada6912606f7 = L.popup({ "maxWidth": "100%" });



var html_620ad787ea61414c9e5ee92d5d8a1c94 = $(`<div id="html_620ad787ea61414c9e5ee92d5d8a1c94" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Oshawa <br> Type: solid waste</div>`)[0];
popup_c3bc3dab528ded4462b7ada6912606f7.setContent(html_620ad787ea61414c9e5ee92d5d8a1c94);



marker_0454dcff8ea7b3907fbbc1ed9c424f46.bindPopup(popup_c3bc3dab528ded4462b7ada6912606f7)
    ;




var marker_0ea5504a283d6060d35db2bb3f897b85 = L.marker(
    [44.340303000000006, -79.034356],
    {}
).addTo(emitters);


var icon_6812db7a8ed1d04527540bfee4e3fc5e = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_0ea5504a283d6060d35db2bb3f897b85.setIcon(icon_6812db7a8ed1d04527540bfee4e3fc5e);


var popup_92fada13380bc111b29f517ad29712d3 = L.popup({ "maxWidth": "100%" });



var html_bb91eb23500ce48067f2834ab6068ab1 = $(`<div id="html_bb91eb23500ce48067f2834ab6068ab1" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Brock <br> Type: solid waste</div>`)[0];
popup_92fada13380bc111b29f517ad29712d3.setContent(html_bb91eb23500ce48067f2834ab6068ab1);



marker_0ea5504a283d6060d35db2bb3f897b85.bindPopup(popup_92fada13380bc111b29f517ad29712d3)
    ;




var marker_fe0bff9cb34466c3b740972bce53e9b5 = L.marker(
    [43.9145, -78.6942],
    {}
).addTo(emitters);


var icon_937b1ed276d752d883c6819f4d0b6d36 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_fe0bff9cb34466c3b740972bce53e9b5.setIcon(icon_937b1ed276d752d883c6819f4d0b6d36);


var popup_e4d190c30f938135bd7410efff0eb0f1 = L.popup({ "maxWidth": "100%" });



var html_6e16c0106af122ddd856f9ac4d842537 = $(`<div id="html_6e16c0106af122ddd856f9ac4d842537" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Darlington <br> Type: solid waste</div>`)[0];
popup_e4d190c30f938135bd7410efff0eb0f1.setContent(html_6e16c0106af122ddd856f9ac4d842537);



marker_fe0bff9cb34466c3b740972bce53e9b5.bindPopup(popup_e4d190c30f938135bd7410efff0eb0f1)
    ;




var marker_cd28306140acb74b743feb38a48b0d91 = L.marker(
    [44.1131, -78.8174],
    {}
).addTo(emitters);


var icon_28a084010728313192f1caf1ecff52a9 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_cd28306140acb74b743feb38a48b0d91.setIcon(icon_28a084010728313192f1caf1ecff52a9);


var popup_a28735ef53eac4fdcca5872ebb7acfdc = L.popup({ "maxWidth": "100%" });



var html_cdacd6428d0ff924c742efcacb7c699b = $(`<div id="html_cdacd6428d0ff924c742efcacb7c699b" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Scugog <br> Type: solid waste</div>`)[0];
popup_a28735ef53eac4fdcca5872ebb7acfdc.setContent(html_cdacd6428d0ff924c742efcacb7c699b);



marker_cd28306140acb74b743feb38a48b0d91.bindPopup(popup_a28735ef53eac4fdcca5872ebb7acfdc)
    ;




var marker_1c558b15425aee69c92f16a51f217d8d = L.marker(
    [44.1119, -78.8174],
    {}
).addTo(emitters);


var icon_6c447cb45b38fffb23b54cac8c2f1f2d = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_1c558b15425aee69c92f16a51f217d8d.setIcon(icon_6c447cb45b38fffb23b54cac8c2f1f2d);


var popup_8a398d6201ebcd4569e367bd5f591a95 = L.popup({ "maxWidth": "100%" });



var html_2576c378578817f760af1ad3906a01f0 = $(`<div id="html_2576c378578817f760af1ad3906a01f0" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Blackstock <br> Type: solid waste</div>`)[0];
popup_8a398d6201ebcd4569e367bd5f591a95.setContent(html_2576c378578817f760af1ad3906a01f0);



marker_1c558b15425aee69c92f16a51f217d8d.bindPopup(popup_8a398d6201ebcd4569e367bd5f591a95)
    ;




var marker_24f5937b4403de7228913c391521af6b = L.marker(
    [43.8289, -79.056],
    {}
).addTo(emitters);


var icon_7b620a766fe078cc523395ef47751fe9 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_24f5937b4403de7228913c391521af6b.setIcon(icon_7b620a766fe078cc523395ef47751fe9);


var popup_eed84687c9eda216cfbf24d5bb29676e = L.popup({ "maxWidth": "100%" });



var html_022f63d513657783ab64430d743f8c6d = $(`<div id="html_022f63d513657783ab64430d743f8c6d" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Miller Waste Pickering <br> Type: solid waste</div>`)[0];
popup_eed84687c9eda216cfbf24d5bb29676e.setContent(html_022f63d513657783ab64430d743f8c6d);



marker_24f5937b4403de7228913c391521af6b.bindPopup(popup_eed84687c9eda216cfbf24d5bb29676e)
    ;




var marker_d7f00792d86d52ea459977451ebb9b12 = L.marker(
    [43.88394470000001, -78.75490570000001],
    {}
).addTo(emitters);


var icon_70da1f2bbd03aa54cf6926fa7ef599cb = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_d7f00792d86d52ea459977451ebb9b12.setIcon(icon_70da1f2bbd03aa54cf6926fa7ef599cb);


var popup_0dcb3afa9d0191dc95c7aec3611fbf63 = L.popup({ "maxWidth": "100%" });



var html_a054d9ea6a65b5d5523aa6b86f2ada34 = $(`<div id="html_a054d9ea6a65b5d5523aa6b86f2ada34" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Miller Waste Clarington <br> Type: solid waste</div>`)[0];
popup_0dcb3afa9d0191dc95c7aec3611fbf63.setContent(html_a054d9ea6a65b5d5523aa6b86f2ada34);



marker_d7f00792d86d52ea459977451ebb9b12.bindPopup(popup_0dcb3afa9d0191dc95c7aec3611fbf63)
    ;




var marker_5c8b74cfffcbc5cf36e8f8a59d7576c9 = L.marker(
    [43.868496, -79.100544],
    {}
).addTo(emitters);


var icon_279993dec580b6da3828f204d79e0690 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_5c8b74cfffcbc5cf36e8f8a59d7576c9.setIcon(icon_279993dec580b6da3828f204d79e0690);


var popup_53a5e904d55a31e67ef8be4db52118b5 = L.popup({ "maxWidth": "100%" });



var html_4681ef4d1bd963719cbdc5a411097a0a = $(`<div id="html_4681ef4d1bd963719cbdc5a411097a0a" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Brock West <br> Type: solid waste</div>`)[0];
popup_53a5e904d55a31e67ef8be4db52118b5.setContent(html_4681ef4d1bd963719cbdc5a411097a0a);



marker_5c8b74cfffcbc5cf36e8f8a59d7576c9.bindPopup(popup_53a5e904d55a31e67ef8be4db52118b5)
    ;




var marker_49a8a0e587d2fa644e02d0ba3641713f = L.marker(
    [44.110654, -78.964577],
    {}
).addTo(emitters);


var icon_9605b06a272022500590513336d07d0b = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_49a8a0e587d2fa644e02d0ba3641713f.setIcon(icon_9605b06a272022500590513336d07d0b);


var popup_ba005da4fb909f69a7a5173d6e2b64de = L.popup({ "maxWidth": "100%" });



var html_01103b7c906cc56ef4ddcb527bdf4374 = $(`<div id="html_01103b7c906cc56ef4ddcb527bdf4374" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Port Perry <br> Type: solid waste</div>`)[0];
popup_ba005da4fb909f69a7a5173d6e2b64de.setContent(html_01103b7c906cc56ef4ddcb527bdf4374);



marker_49a8a0e587d2fa644e02d0ba3641713f.bindPopup(popup_ba005da4fb909f69a7a5173d6e2b64de)
    ;




var marker_0edbee082b4fb76fc3997dfbbe69fea4 = L.marker(
    [43.9513, -79.8138],
    {}
).addTo(emitters);


var icon_152d0ff2eaf703d00035cf85720ab42d = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_0edbee082b4fb76fc3997dfbbe69fea4.setIcon(icon_152d0ff2eaf703d00035cf85720ab42d);


var popup_805dd10f9b83ec1232511ca92df27251 = L.popup({ "maxWidth": "100%" });



var html_46a4016703e9e739a9d3cabcd6863790 = $(`<div id="html_46a4016703e9e739a9d3cabcd6863790" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Palgrave Landfill Site <br> Type: solid waste</div>`)[0];
popup_805dd10f9b83ec1232511ca92df27251.setContent(html_46a4016703e9e739a9d3cabcd6863790);



marker_0edbee082b4fb76fc3997dfbbe69fea4.bindPopup(popup_805dd10f9b83ec1232511ca92df27251)
    ;




var marker_d717d9a1169db1e41b5da1d347dc92da = L.marker(
    [43.551214, -79.587735],
    {}
).addTo(emitters);


var icon_90deee77d3de0dc56061713b031e742f = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_d717d9a1169db1e41b5da1d347dc92da.setIcon(icon_90deee77d3de0dc56061713b031e742f);


var popup_ee5677d9da9ce41d331978bbe9b257af = L.popup({ "maxWidth": "100%" });



var html_502fbf3c6baf2e57a5d290aed0793dba = $(`<div id="html_502fbf3c6baf2e57a5d290aed0793dba" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Port Credit Memorial Park <br> Type: solid waste</div>`)[0];
popup_ee5677d9da9ce41d331978bbe9b257af.setContent(html_502fbf3c6baf2e57a5d290aed0793dba);



marker_d717d9a1169db1e41b5da1d347dc92da.bindPopup(popup_ee5677d9da9ce41d331978bbe9b257af)
    ;




var marker_415f7d6425bea3159a003a8a3e838814 = L.marker(
    [43.686003, -79.75052],
    {}
).addTo(emitters);


var icon_4fbc02b1ba286cc4cd98d906f4f68471 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_415f7d6425bea3159a003a8a3e838814.setIcon(icon_4fbc02b1ba286cc4cd98d906f4f68471);


var popup_114ef71c9bf4c220bdb324f0e38bcfdb = L.popup({ "maxWidth": "100%" });



var html_fb65f10af5b325fbcebbf0991df65355 = $(`<div id="html_fb65f10af5b325fbcebbf0991df65355" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Centennial Park <br> Type: solid waste</div>`)[0];
popup_114ef71c9bf4c220bdb324f0e38bcfdb.setContent(html_fb65f10af5b325fbcebbf0991df65355);



marker_415f7d6425bea3159a003a8a3e838814.bindPopup(popup_114ef71c9bf4c220bdb324f0e38bcfdb)
    ;




var marker_1efa75f836630f35c55940ace923d9ef = L.marker(
    [43.743873, -79.737976],
    {}
).addTo(emitters);


var icon_0d5c3ab98a162aa240ea67bf82fd232c = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_1efa75f836630f35c55940ace923d9ef.setIcon(icon_0d5c3ab98a162aa240ea67bf82fd232c);


var popup_19a9df54970f1ab970d185b2d96003c1 = L.popup({ "maxWidth": "100%" });



var html_1ed8149ea3b6125c00dfc8aecf6c50af = $(`<div id="html_1ed8149ea3b6125c00dfc8aecf6c50af" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Professor's Lake Park <br> Type: solid waste</div>`)[0];
popup_19a9df54970f1ab970d185b2d96003c1.setContent(html_1ed8149ea3b6125c00dfc8aecf6c50af);



marker_1efa75f836630f35c55940ace923d9ef.bindPopup(popup_19a9df54970f1ab970d185b2d96003c1)
    ;




var marker_373babbedf223ee89bf5f87918083a61 = L.marker(
    [43.610523, -79.57198000000001],
    {}
).addTo(emitters);


var icon_6c7c55d186a3e9c5764cb10b987c7593 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_373babbedf223ee89bf5f87918083a61.setIcon(icon_6c7c55d186a3e9c5764cb10b987c7593);


var popup_d9c2a91b14e7a2599865b16cda0cd8ad = L.popup({ "maxWidth": "100%" });



var html_a4d1de942765e667a682015849f7a31b = $(`<div id="html_a4d1de942765e667a682015849f7a31b" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Centre Street <br> Type: solid waste</div>`)[0];
popup_d9c2a91b14e7a2599865b16cda0cd8ad.setContent(html_a4d1de942765e667a682015849f7a31b);



marker_373babbedf223ee89bf5f87918083a61.bindPopup(popup_d9c2a91b14e7a2599865b16cda0cd8ad)
    ;




var marker_ec6aa329f39143b6c7ce6f0125893164 = L.marker(
    [43.8841, -79.7321],
    {}
).addTo(emitters);


var icon_33e1635d505d30fc95f3c602b4a6a7d0 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_ec6aa329f39143b6c7ce6f0125893164.setIcon(icon_33e1635d505d30fc95f3c602b4a6a7d0);


var popup_9b4e3d5b687b3c308d302d4dc79b6826 = L.popup({ "maxWidth": "100%" });



var html_17ac936820d63d7af62d0b9c1fbd40d4 = $(`<div id="html_17ac936820d63d7af62d0b9c1fbd40d4" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Bolton Landfill Site <br> Type: solid waste</div>`)[0];
popup_9b4e3d5b687b3c308d302d4dc79b6826.setContent(html_17ac936820d63d7af62d0b9c1fbd40d4);



marker_ec6aa329f39143b6c7ce6f0125893164.bindPopup(popup_9b4e3d5b687b3c308d302d4dc79b6826)
    ;




var marker_7ed643a34fad6bd42f6f054c9004c71a = L.marker(
    [43.5843, -79.7177],
    {}
).addTo(emitters);


var icon_565bb582c0137138a2b790cf626fdb02 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_7ed643a34fad6bd42f6f054c9004c71a.setIcon(icon_565bb582c0137138a2b790cf626fdb02);


var popup_572a85a531983906995f2e39286f99a2 = L.popup({ "maxWidth": "100%" });



var html_7fa739b297db287c92ffe6f8fdf028df = $(`<div id="html_7fa739b297db287c92ffe6f8fdf028df" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Streetsville <br> Type: solid waste</div>`)[0];
popup_572a85a531983906995f2e39286f99a2.setContent(html_7fa739b297db287c92ffe6f8fdf028df);



marker_7ed643a34fad6bd42f6f054c9004c71a.bindPopup(popup_572a85a531983906995f2e39286f99a2)
    ;




var marker_3f5da4f0be44878ebd222aaf1a8c9ed9 = L.marker(
    [43.5455, -79.6547],
    {}
).addTo(emitters);


var icon_82758329a05df15bcd65da151270d6df = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_3f5da4f0be44878ebd222aaf1a8c9ed9.setIcon(icon_82758329a05df15bcd65da151270d6df);


var popup_c27d0afdc7d565f2ace3d0c9ba97db51 = L.popup({ "maxWidth": "100%" });



var html_348dca050d0b8301f762cca6e4999d33 = $(`<div id="html_348dca050d0b8301f762cca6e4999d33" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Mavis Road <br> Type: solid waste</div>`)[0];
popup_c27d0afdc7d565f2ace3d0c9ba97db51.setContent(html_348dca050d0b8301f762cca6e4999d33);



marker_3f5da4f0be44878ebd222aaf1a8c9ed9.bindPopup(popup_c27d0afdc7d565f2ace3d0c9ba97db51)
    ;




var marker_cdaa7e4b43ce3938cf074eef0f2a779d = L.marker(
    [43.5334, -79.6397],
    {}
).addTo(emitters);


var icon_1a28fc28e89f4ea475f60035433f84f5 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_cdaa7e4b43ce3938cf074eef0f2a779d.setIcon(icon_1a28fc28e89f4ea475f60035433f84f5);


var popup_24aff34e00833c1559c3639e7f6fcf45 = L.popup({ "maxWidth": "100%" });



var html_cd100f46e0d175da3d322ad93e1115c4 = $(`<div id="html_cd100f46e0d175da3d322ad93e1115c4" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Newman Landfill Site <br> Type: solid waste</div>`)[0];
popup_24aff34e00833c1559c3639e7f6fcf45.setContent(html_cd100f46e0d175da3d322ad93e1115c4);



marker_cdaa7e4b43ce3938cf074eef0f2a779d.bindPopup(popup_24aff34e00833c1559c3639e7f6fcf45)
    ;




var marker_5d8d7bbeffbf87cac029ac8173669e29 = L.marker(
    [43.54643, -79.585319],
    {}
).addTo(emitters);


var icon_6a204ff05e81dbe0825c9ce82818aaa4 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_5d8d7bbeffbf87cac029ac8173669e29.setIcon(icon_6a204ff05e81dbe0825c9ce82818aaa4);


var popup_d6babf3584e025d08867836292784de0 = L.popup({ "maxWidth": "100%" });



var html_72e7a28de8f9fb26923517322d2308fc = $(`<div id="html_72e7a28de8f9fb26923517322d2308fc" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Saddington Park <br> Type: solid waste</div>`)[0];
popup_d6babf3584e025d08867836292784de0.setContent(html_72e7a28de8f9fb26923517322d2308fc);



marker_5d8d7bbeffbf87cac029ac8173669e29.bindPopup(popup_d6babf3584e025d08867836292784de0)
    ;




var marker_cecde8cc4b5b0e31c2299ace8a999e01 = L.marker(
    [43.5289, -79.6451],
    {}
).addTo(emitters);


var icon_7450a24f0d211582de9489b25a2a2324 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_cecde8cc4b5b0e31c2299ace8a999e01.setIcon(icon_7450a24f0d211582de9489b25a2a2324);


var popup_06e444f6559b67b3ee0de232f8cae3fc = L.popup({ "maxWidth": "100%" });



var html_bf98746ad3d0ba9739e67c336de71d93 = $(`<div id="html_bf98746ad3d0ba9739e67c336de71d93" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: North Sheridan Landfill Site <br> Type: solid waste</div>`)[0];
popup_06e444f6559b67b3ee0de232f8cae3fc.setContent(html_bf98746ad3d0ba9739e67c336de71d93);



marker_cecde8cc4b5b0e31c2299ace8a999e01.bindPopup(popup_06e444f6559b67b3ee0de232f8cae3fc)
    ;




var marker_60c73448ba318ad4c3028f50276c9c50 = L.marker(
    [43.799361, -79.84919000000001],
    {}
).addTo(emitters);


var icon_cd728349293f94ccd836178e065fc8b6 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_60c73448ba318ad4c3028f50276c9c50.setIcon(icon_cd728349293f94ccd836178e065fc8b6);


var popup_4cb1faff7ef01493bd8e8f1ead43eb3f = L.popup({ "maxWidth": "100%" });



var html_c878e6023b109039f52cc9d9896c17a5 = $(`<div id="html_c878e6023b109039f52cc9d9896c17a5" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Chinguacousy Landfill <br> Type: solid waste</div>`)[0];
popup_4cb1faff7ef01493bd8e8f1ead43eb3f.setContent(html_c878e6023b109039f52cc9d9896c17a5);



marker_60c73448ba318ad4c3028f50276c9c50.bindPopup(popup_4cb1faff7ef01493bd8e8f1ead43eb3f)
    ;




var marker_931e7bfe56b79dfc82366ecb2687864b = L.marker(
    [43.546995, -79.654902],
    {}
).addTo(emitters);


var icon_1ed53ba41da92a97963aaac876788ef7 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_931e7bfe56b79dfc82366ecb2687864b.setIcon(icon_1ed53ba41da92a97963aaac876788ef7);


var popup_fe454d8e0302bd7feea270c2eb2df9fb = L.popup({ "maxWidth": "100%" });



var html_f33952cb29f16fc2936571f2c6795dd0 = $(`<div id="html_f33952cb29f16fc2936571f2c6795dd0" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Erindale Park <br> Type: solid waste</div>`)[0];
popup_fe454d8e0302bd7feea270c2eb2df9fb.setContent(html_f33952cb29f16fc2936571f2c6795dd0);



marker_931e7bfe56b79dfc82366ecb2687864b.bindPopup(popup_fe454d8e0302bd7feea270c2eb2df9fb)
    ;




var marker_c70ee7f4c7e2e35682c676b9772262ee = L.marker(
    [43.5843, -79.7177],
    {}
).addTo(emitters);


var icon_84be8ecd4f3b5200aff7df864f83753e = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_c70ee7f4c7e2e35682c676b9772262ee.setIcon(icon_84be8ecd4f3b5200aff7df864f83753e);


var popup_b44bcafb7750fa20695355fd0509d432 = L.popup({ "maxWidth": "100%" });



var html_5a14b33aaa4c54289ddfbdfabdd9ef33 = $(`<div id="html_5a14b33aaa4c54289ddfbdfabdd9ef33" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Albion Landfill <br> Type: solid waste</div>`)[0];
popup_b44bcafb7750fa20695355fd0509d432.setContent(html_5a14b33aaa4c54289ddfbdfabdd9ef33);



marker_c70ee7f4c7e2e35682c676b9772262ee.bindPopup(popup_b44bcafb7750fa20695355fd0509d432)
    ;




var marker_14a94d435a23bc93d3ef545095a8f835 = L.marker(
    [43.838468, -80.017354],
    {}
).addTo(emitters);


var icon_38d95270246b6dc68a3381108cc43836 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_14a94d435a23bc93d3ef545095a8f835.setIcon(icon_38d95270246b6dc68a3381108cc43836);


var popup_848291371358ed3c87cdc441e1bab084 = L.popup({ "maxWidth": "100%" });



var html_7dd6c4ce7140c0ac0929d4808b8db7d9 = $(`<div id="html_7dd6c4ce7140c0ac0929d4808b8db7d9" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Caledon Sanitary Landfill Site <br> Type: solid waste</div>`)[0];
popup_848291371358ed3c87cdc441e1bab084.setContent(html_7dd6c4ce7140c0ac0929d4808b8db7d9);



marker_14a94d435a23bc93d3ef545095a8f835.bindPopup(popup_848291371358ed3c87cdc441e1bab084)
    ;




var marker_cd77afd2ced8857eaeef94bdc86063fb = L.marker(
    [43.602022999999996, -79.695199],
    {}
).addTo(emitters);


var icon_7947103645b00fbce8a1d896b8bb5c71 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_cd77afd2ced8857eaeef94bdc86063fb.setIcon(icon_7947103645b00fbce8a1d896b8bb5c71);


var popup_b68d153a3688b3088e300abac6579d99 = L.popup({ "maxWidth": "100%" });



var html_978df87d33f883400eb181b32ed7630f = $(`<div id="html_978df87d33f883400eb181b32ed7630f" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Britannia Sanitary Landfill Site <br> Type: solid waste</div>`)[0];
popup_b68d153a3688b3088e300abac6579d99.setContent(html_978df87d33f883400eb181b32ed7630f);



marker_cd77afd2ced8857eaeef94bdc86063fb.bindPopup(popup_b68d153a3688b3088e300abac6579d99)
    ;




var marker_2b037cbacb7a7f500b904a1dc260cf81 = L.marker(
    [43.709983, -79.67194],
    {}
).addTo(emitters);


var icon_df42fa912fad25b9127244c337ef2ddf = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_2b037cbacb7a7f500b904a1dc260cf81.setIcon(icon_df42fa912fad25b9127244c337ef2ddf);


var popup_dc33bdb6b67eb7c5910f571c440ec406 = L.popup({ "maxWidth": "100%" });



var html_a4074c1f64405befeb2569530328c99a = $(`<div id="html_a4074c1f64405befeb2569530328c99a" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Peel Integrated Waste Management Facility <br> Type: solid waste</div>`)[0];
popup_dc33bdb6b67eb7c5910f571c440ec406.setContent(html_a4074c1f64405befeb2569530328c99a);



marker_2b037cbacb7a7f500b904a1dc260cf81.bindPopup(popup_dc33bdb6b67eb7c5910f571c440ec406)
    ;




var marker_3c16a97eab93438463f2e0765d2c9548 = L.marker(
    [43.840562, -80.01800899999999],
    {}
).addTo(emitters);


var icon_3a12605a28160a5be2113713f8456c0c = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_3c16a97eab93438463f2e0765d2c9548.setIcon(icon_3a12605a28160a5be2113713f8456c0c);


var popup_aefd9212919edc7f6fab499767575aab = L.popup({ "maxWidth": "100%" });



var html_b2f53d55bc0af2466549c88fd525aaed = $(`<div id="html_b2f53d55bc0af2466549c88fd525aaed" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Caledon Public Waste <br> Type: solid waste</div>`)[0];
popup_aefd9212919edc7f6fab499767575aab.setContent(html_b2f53d55bc0af2466549c88fd525aaed);



marker_3c16a97eab93438463f2e0765d2c9548.bindPopup(popup_aefd9212919edc7f6fab499767575aab)
    ;




var marker_3bfd7fb67cbb1e1912ad943da64da24f = L.marker(
    [43.799361, -79.84919000000001],
    {}
).addTo(emitters);


var icon_39279069707b0e113db04b0b11bef6a8 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_3bfd7fb67cbb1e1912ad943da64da24f.setIcon(icon_39279069707b0e113db04b0b11bef6a8);


var popup_2629e9c297b79d84eb9c4c3e67e4acc4 = L.popup({ "maxWidth": "100%" });



var html_144b5fa89dc76571fb26285f3198ba94 = $(`<div id="html_144b5fa89dc76571fb26285f3198ba94" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Peel Curing Facility <br>Type: solid waste</div>`)[0];
popup_2629e9c297b79d84eb9c4c3e67e4acc4.setContent(html_144b5fa89dc76571fb26285f3198ba94);



marker_3bfd7fb67cbb1e1912ad943da64da24f.bindPopup(popup_2629e9c297b79d84eb9c4c3e67e4acc4)
    ;




var marker_4d4be2bfb5d5ec68838d26afcdfe3dfb = L.marker(
    [43.649460299999994, -79.3308377],
    {}
).addTo(emitters);


var icon_a32f9f7550157b33601fe611a68541ef = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_4d4be2bfb5d5ec68838d26afcdfe3dfb.setIcon(icon_a32f9f7550157b33601fe611a68541ef);


var popup_263277d31bfb101a2bbcb836dbc6be4f = L.popup({ "maxWidth": "100%" });



var html_904ebe6192eba5eeb12363d23f934d70 = $(`<div id="html_904ebe6192eba5eeb12363d23f934d70" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Portlands Energy Centre <br> Type: Power Plant</div>`)[0];
popup_263277d31bfb101a2bbcb836dbc6be4f.setContent(html_904ebe6192eba5eeb12363d23f934d70);



marker_4d4be2bfb5d5ec68838d26afcdfe3dfb.bindPopup(popup_263277d31bfb101a2bbcb836dbc6be4f)
    ;




var marker_58619fdcf3f4a7488fda8c70875ac1b1 = L.marker(
    [43.786460999999996, -79.46436899999999],
    {}
).addTo(emitters);


var icon_7e0b99d4a91110e1705d3982901c3ff1 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_58619fdcf3f4a7488fda8c70875ac1b1.setIcon(icon_7e0b99d4a91110e1705d3982901c3ff1);


var popup_2b270d3ce893eda0ff42edbee1348524 = L.popup({ "maxWidth": "100%" });



var html_1f7d8277491dda071ce83c14e0576e11 = $(`<div id="html_1f7d8277491dda071ce83c14e0576e11" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Sanofi Pasteur Limited -Connaught Campus <br> Type: Manufacturing</div>`)[0];
popup_2b270d3ce893eda0ff42edbee1348524.setContent(html_1f7d8277491dda071ce83c14e0576e11);



marker_58619fdcf3f4a7488fda8c70875ac1b1.bindPopup(popup_2b270d3ce893eda0ff42edbee1348524)
    ;




var marker_d8339a13831c7676192713806ad4f9a3 = L.marker(
    [43.7742, -79.5023],
    {}
).addTo(emitters);


var icon_950bd504948493cd3fdbe4a82680556e = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_d8339a13831c7676192713806ad4f9a3.setIcon(icon_950bd504948493cd3fdbe4a82680556e);


var popup_1f952b17c8474e0e8db612e17925a43f = L.popup({ "maxWidth": "100%" });



var html_69ba6bc02e7bf54ba16b7ae7d4660928 = $(`<div id="html_69ba6bc02e7bf54ba16b7ae7d4660928" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: York University - Keele Campus <br> Type: Power Plant</div>`)[0];
popup_1f952b17c8474e0e8db612e17925a43f.setContent(html_69ba6bc02e7bf54ba16b7ae7d4660928);



marker_d8339a13831c7676192713806ad4f9a3.bindPopup(popup_1f952b17c8474e0e8db612e17925a43f)
    ;




var marker_3358022ed028f2bf0c89a0e9ac74c65d = L.marker(
    [44.0749737, -79.53211440000001],
    {}
).addTo(emitters);


var icon_7a99c1f69a25ac2e1c0b46855fb69fae = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_3358022ed028f2bf0c89a0e9ac74c65d.setIcon(icon_7a99c1f69a25ac2e1c0b46855fb69fae);


var popup_5347f335b53b4e738e24ee4f3a3962cb = L.popup({ "maxWidth": "100%" });



var html_bcd3e89615f64c9161b82d317311d0ad = $(`<div id="html_bcd3e89615f64c9161b82d317311d0ad" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: York Energy Centre LP <br> Type: Power Plant</div>`)[0];
popup_5347f335b53b4e738e24ee4f3a3962cb.setContent(html_bcd3e89615f64c9161b82d317311d0ad);



marker_3358022ed028f2bf0c89a0e9ac74c65d.bindPopup(popup_5347f335b53b4e738e24ee4f3a3962cb)
    ;




var marker_ed0c14717535944854aae3ad4509f7f9 = L.marker(
    [43.846553, -79.333618],
    {}
).addTo(emitters);


var icon_c8241cd450acb5703494176f258b4579 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_ed0c14717535944854aae3ad4509f7f9.setIcon(icon_c8241cd450acb5703494176f258b4579);


var popup_cc309d7f78a70dbde818b60a74d1df22 = L.popup({ "maxWidth": "100%" });



var html_6dea9e9b8a7c5cce8b23a7d4a12ad576 = $(`<div id="html_6dea9e9b8a7c5cce8b23a7d4a12ad576" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Markham District Energy Inc. - Warden Energy Centre <br> Type: Power Plant</div>`)[0];
popup_cc309d7f78a70dbde818b60a74d1df22.setContent(html_6dea9e9b8a7c5cce8b23a7d4a12ad576);



marker_ed0c14717535944854aae3ad4509f7f9.bindPopup(popup_cc309d7f78a70dbde818b60a74d1df22)
    ;




var marker_c5d6da643cb70d793eb3d1b904faf93a = L.marker(
    [43.830080200000005, -79.34953399999999],
    {}
).addTo(emitters);


var icon_2b910cf070af39b9eb253565a5188d8c = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_c5d6da643cb70d793eb3d1b904faf93a.setIcon(icon_2b910cf070af39b9eb253565a5188d8c);


var popup_9759408908ffd892e6fb28ce58b6bc09 = L.popup({ "maxWidth": "100%" });



var html_ad1a174f158499120f82a06c000ee495 = $(`<div id="html_ad1a174f158499120f82a06c000ee495" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Descor Industries Inc. <br> Type: Manufacturing</div>`)[0];
popup_9759408908ffd892e6fb28ce58b6bc09.setContent(html_ad1a174f158499120f82a06c000ee495);



marker_c5d6da643cb70d793eb3d1b904faf93a.bindPopup(popup_9759408908ffd892e6fb28ce58b6bc09)
    ;




var marker_256b5ce73cf42162c2ae172eedef3a46 = L.marker(
    [43.558816799999995, -79.8524932],
    {}
).addTo(emitters);


var icon_d8d8c5019426b6fcc5bc35ce3b5f0ac7 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_256b5ce73cf42162c2ae172eedef3a46.setIcon(icon_d8d8c5019426b6fcc5bc35ce3b5f0ac7);


var popup_045c889535603838ce8f18683c33b201 = L.popup({ "maxWidth": "100%" });



var html_a8cc73ab834d74c9609168133384347f = $(`<div id="html_a8cc73ab834d74c9609168133384347f" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: TransCanada Energy Ltd. - Halton Hills Generating Station <br> Type: Power Plant</div>`)[0];
popup_045c889535603838ce8f18683c33b201.setContent(html_a8cc73ab834d74c9609168133384347f);



marker_256b5ce73cf42162c2ae172eedef3a46.bindPopup(popup_045c889535603838ce8f18683c33b201)
    ;




var marker_cbd6f228f41bbc05ed2abac63d0f138e = L.marker(
    [43.859374, -78.902599],
    {}
).addTo(emitters);


var icon_713db25dc16c67940e53309af7699f0c = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_cbd6f228f41bbc05ed2abac63d0f138e.setIcon(icon_713db25dc16c67940e53309af7699f0c);


var popup_64637edf01ec5ed852dedc9745f312ba = L.popup({ "maxWidth": "100%" });



var html_8910760947e1d4ce0c6e4a93f9d48306 = $(`<div id="html_8910760947e1d4ce0c6e4a93f9d48306" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Whitby Cogeneration L.P. <br> Type: Power Plant</div>`)[0];
popup_64637edf01ec5ed852dedc9745f312ba.setContent(html_8910760947e1d4ce0c6e4a93f9d48306);



marker_cbd6f228f41bbc05ed2abac63d0f138e.bindPopup(popup_64637edf01ec5ed852dedc9745f312ba)
    ;




var marker_aacfab020c355050f9ed84a43c7ef068 = L.marker(
    [43.709331899999995, -79.35416670000001],
    {}
).addTo(emitters);


var icon_1f97fb4fed0bd30f9cc0cedcce57463d = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_aacfab020c355050f9ed84a43c7ef068.setIcon(icon_1f97fb4fed0bd30f9cc0cedcce57463d);


var popup_c23a749688b0a0adfecf5b8240092100 = L.popup({ "maxWidth": "100%" });



var html_fd84f8bc586e29cfb906580b86fc2da9 = $(`<div id="html_fd84f8bc586e29cfb906580b86fc2da9" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: St. Marys Cement Inc. (Canada) - Bowmanville Cement Plant <br> Type: Manufacturing</div>`)[0];
popup_c23a749688b0a0adfecf5b8240092100.setContent(html_fd84f8bc586e29cfb906580b86fc2da9);



marker_aacfab020c355050f9ed84a43c7ef068.bindPopup(popup_c23a749688b0a0adfecf5b8240092100)
    ;




var marker_9664c3f08f08558a5c8cfcefae1a1559 = L.marker(
    [43.492389, -79.622815],
    {}
).addTo(emitters);


var icon_52b1b22682da8aa18fe3b77900d4b03b = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_9664c3f08f08558a5c8cfcefae1a1559.setIcon(icon_52b1b22682da8aa18fe3b77900d4b03b);


var popup_0bba98d83458e3f76142fa2fc55726d8 = L.popup({ "maxWidth": "100%" });



var html_df9e85438a04486cda45396a88ec8e34 = $(`<div id="html_df9e85438a04486cda45396a88ec8e34" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: CRH Canada Group Inc. - Mississauga Cement Plant <br> Type: Manufacturing</div>`)[0];
popup_0bba98d83458e3f76142fa2fc55726d8.setContent(html_df9e85438a04486cda45396a88ec8e34);



marker_9664c3f08f08558a5c8cfcefae1a1559.bindPopup(popup_0bba98d83458e3f76142fa2fc55726d8)
    ;




var marker_44d833f2c089dcea6eb19ca1ff62386f = L.marker(
    [43.746466, -79.679979],
    {}
).addTo(emitters);


var icon_af0d5f1875862e9ecdc7e751730ecf87 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_44d833f2c089dcea6eb19ca1ff62386f.setIcon(icon_af0d5f1875862e9ecdc7e751730ecf87);


var popup_15c0ec7b1d837ff71656d3c35be17027 = L.popup({ "maxWidth": "100%" });



var html_03571ec87ba46247dabac5612f8d1646 = $(`<div id="html_03571ec87ba46247dabac5612f8d1646" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Goreway Station Partnership - Goreway Power Station <br> Type: Power Plant</div>`)[0];
popup_15c0ec7b1d837ff71656d3c35be17027.setContent(html_03571ec87ba46247dabac5612f8d1646);



marker_44d833f2c089dcea6eb19ca1ff62386f.bindPopup(popup_15c0ec7b1d837ff71656d3c35be17027)
    ;




var marker_d4641f66b890b2df2d9743081279e44a = L.marker(
    [43.697306700000006, -79.68066400000001],
    {}
).addTo(emitters);


var icon_95ee733dff091b832c140cde26785568 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_d4641f66b890b2df2d9743081279e44a.setIcon(icon_95ee733dff091b832c140cde26785568);


var popup_4604a93417f1241ee99db51836a2873a = L.popup({ "maxWidth": "100%" });



var html_4fe7c07466511651314b9b911c07eb04 = $(`<div id="html_4fe7c07466511651314b9b911c07eb04" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Emerald Energy From Waste Inc. <br> Type: Power Plant</div>`)[0];
popup_4604a93417f1241ee99db51836a2873a.setContent(html_4fe7c07466511651314b9b911c07eb04);



marker_d4641f66b890b2df2d9743081279e44a.bindPopup(popup_4604a93417f1241ee99db51836a2873a)
    ;




var marker_3defdc86b6c01f0d181dc8f003a0c5ba = L.marker(
    [43.499146, -79.61308100000001],
    {}
).addTo(emitters);


var icon_cca93a6518b5ccae3b43eca3eee0b404 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_3defdc86b6c01f0d181dc8f003a0c5ba.setIcon(icon_cca93a6518b5ccae3b43eca3eee0b404);


var popup_eebe8138cf8128481d04876101679981 = L.popup({ "maxWidth": "100%" });



var html_9325ff9ae183a7a3a109273b18ec3ddd = $(`<div id="html_9325ff9ae183a7a3a109273b18ec3ddd" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Petro-Canada Lubricants Inc. - Mississauga Lubricants Centre <br> Type: Manufacturing</div>`)[0];
popup_eebe8138cf8128481d04876101679981.setContent(html_9325ff9ae183a7a3a109273b18ec3ddd);



marker_3defdc86b6c01f0d181dc8f003a0c5ba.bindPopup(popup_eebe8138cf8128481d04876101679981)
    ;




var marker_9ae9de801029f5d76b1ea831c3f14e8e = L.marker(
    [43.6980572, -79.6427518],
    {}
).addTo(emitters);


var icon_ecdc05c1abe38bd52b1a653bab194b43 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_9ae9de801029f5d76b1ea831c3f14e8e.setIcon(icon_ecdc05c1abe38bd52b1a653bab194b43);


var popup_135096965d1018247e03f40e720fe3a4 = L.popup({ "maxWidth": "100%" });



var html_4ad35966e61bd2281709cef6541341f2 = $(`<div id="html_4ad35966e61bd2281709cef6541341f2" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: TransAlta Generation Partnership - Mississauga Cogeneration Plant <br> Type: Power Plant</div>`)[0];
popup_135096965d1018247e03f40e720fe3a4.setContent(html_4ad35966e61bd2281709cef6541341f2);



marker_9ae9de801029f5d76b1ea831c3f14e8e.bindPopup(popup_135096965d1018247e03f40e720fe3a4)
    ;




var marker_a6c03fffdb96aa30c0dfbf0625aad21b = L.marker(
    [43.660211, -79.397909],
    {}
).addTo(emitters);


var icon_8771518ef9100e6e00da5f54369e836f = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_a6c03fffdb96aa30c0dfbf0625aad21b.setIcon(icon_8771518ef9100e6e00da5f54369e836f);


var popup_d1fbf3b30efbd48b12032aa17334cc76 = L.popup({ "maxWidth": "100%" });



var html_45b0dbaf51cbfdf9ea7412bff1a078a2 = $(`<div id="html_45b0dbaf51cbfdf9ea7412bff1a078a2" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: The University of Toronto Central Steam Plant <br> Type: Power Plant</div>`)[0];
popup_d1fbf3b30efbd48b12032aa17334cc76.setContent(html_45b0dbaf51cbfdf9ea7412bff1a078a2);



marker_a6c03fffdb96aa30c0dfbf0625aad21b.bindPopup(popup_d1fbf3b30efbd48b12032aa17334cc76)
    ;




var marker_734a0a5fee519027fee29f7d0da72195 = L.marker(
    [43.648165000000006, -79.38623199999999],
    {}
).addTo(emitters);


var icon_c5fc839e5d999a97e6a6194d6244adf8 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_734a0a5fee519027fee29f7d0da72195.setIcon(icon_c5fc839e5d999a97e6a6194d6244adf8);


var popup_288a712417dce7b9f402d96b5461224f = L.popup({ "maxWidth": "100%" });



var html_d7381a6fffe59204510edae926ce4d01 = $(`<div id="html_d7381a6fffe59204510edae926ce4d01" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Pearl Street Steam Plant- Enwave Energy Corporation <br> Type: Power Plant</div>`)[0];
popup_288a712417dce7b9f402d96b5461224f.setContent(html_d7381a6fffe59204510edae926ce4d01);



marker_734a0a5fee519027fee29f7d0da72195.bindPopup(popup_288a712417dce7b9f402d96b5461224f)
    ;




var marker_0a7ba8b52db5898187958c54e8515945 = L.marker(
    [43.6578, -79.38538],
    {}
).addTo(emitters);


var icon_bc8829bf6bfa6601dcd93c3cd83e20c5 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_0a7ba8b52db5898187958c54e8515945.setIcon(icon_bc8829bf6bfa6601dcd93c3cd83e20c5);


var popup_6452cf61cb6d3e9db6db11a7ec052208 = L.popup({ "maxWidth": "100%" });



var html_2d5496ead1e7747005a4f63061a503dc = $(`<div id="html_2d5496ead1e7747005a4f63061a503dc" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Walton Street Steam Plant - Enwave Energy Corporation <br> Type: Power Plant</div>`)[0];
popup_6452cf61cb6d3e9db6db11a7ec052208.setContent(html_2d5496ead1e7747005a4f63061a503dc);



marker_0a7ba8b52db5898187958c54e8515945.bindPopup(popup_6452cf61cb6d3e9db6db11a7ec052208)
    ;




var marker_cc1c0f49dac3928cecc3a87d26a1d098 = L.marker(
    [43.642520000000005, -79.37075],
    {}
).addTo(emitters);


var icon_bfdcf52704ff02325fd57b35f25ae961 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_cc1c0f49dac3928cecc3a87d26a1d098.setIcon(icon_bfdcf52704ff02325fd57b35f25ae961);


var popup_4055271ca3022e2e4f2bb6df7852fe99 = L.popup({ "maxWidth": "100%" });



var html_5826dc3a137699425f1fbeda8f1631d1 = $(`<div id="html_5826dc3a137699425f1fbeda8f1631d1" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Redpath Sugar Refinery <br> Type: Manufacturing</div>`)[0];
popup_4055271ca3022e2e4f2bb6df7852fe99.setContent(html_5826dc3a137699425f1fbeda8f1631d1);



marker_cc1c0f49dac3928cecc3a87d26a1d098.bindPopup(popup_4055271ca3022e2e4f2bb6df7852fe99)
    ;

//---------------------END KNOWN EMITTERS--------------------------
// toggle visibility of emitters
var clicked = document.getElementById("show_emitters");
var showing = 0;
clicked.addEventListener('click', toggle_emitters);

function toggle_emitters() {
    if (showing == 0) {
        past_measurements_map.addLayer(emitters);
        showing = 1;
    }
    else if (showing == 1) {
        past_measurements_map.removeLayer(emitters);
        showing = 0;
    }
}

// display map data
// get today's date for the default display
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

// get array of days between date_from and date_to
const getDaysArray = function(start, end) {
    const arr = [];
    for(const dt=new Date(start); dt<=new Date(end); dt.setDate(dt.getDate()+1)){
        arr.push(new Date(dt).toISOString().slice(0,10));
    }
    return arr;
};

// default display
dates = ["methane", "./GTA-Emissions-Gaussian-Clusters-Updated-main/dataBike/sync_data_"+today+".csv"];
range_is_today = true;
fetchData();

// custom date range display
var submitBtn = document.getElementById('submit');
submitBtn.onclick = function () {
    range_is_today = false;
    date_from = document.forms["displayPastDates"]["date-from"].value;
    date_to = document.forms["displayPastDates"]["date-to"].value;
    plotvar = document.forms["displayPastDates"]["variable"].value;
    dates = []
    dates.push(plotvar);
    days_arr = getDaysArray(date_from, date_to);
    for (let j = 0; j < days_arr.length; j++) {
        // turn each date into a url where the data can be accessed
        dates.push("./GTA-Emissions-Gaussian-Clusters-Updated-main/dataBike/sync_data_"+days_arr[j]+".csv"
        );
    }
    fetchData();
}

// send array of dates and variable to be plotted to dates_to_from_csv.php,
// which sends back data from the files corresponding to the dates and variable
function fetchData() {
    fetch('dates_to_from_csv.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dates)
    })
    .then((response) => {
        if (!response.ok) { // Before parsing (i.e. decoding) the JSON data,
            // check for any errors.
            // In case of an error, throw.
            throw new Error("Something went wrong!");
        }
        return response.json(); // Parse the JSON data.
    })
    .then((data) => {
        alert(JSON.stringify(data));
    })
    .catch((error) => {
        alert("There was an error processing data. Try entering a smaller date range.");
        // most likely there is an error because the number of files processed
        // exhausted the program's memory, so it is usually fixed by entering a smaller date range.
    });

}