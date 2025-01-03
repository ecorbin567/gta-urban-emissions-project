// JS code that displays the emissions cluster map. most of this was forked from the original Wunch lab website
// to update the clusters, run the scripts in ./GTA-Emissions-Gaussian-Clusters-Updated-main

// initialize map
var map_c0a827379a3e92ac42793ff5128f9960 = L.map(
    "cluster-map",
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
L.control.layers(baseMaps).addTo(map_c0a827379a3e92ac42793ff5128f9960);

// Adding the street tile that actually works :))
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: mbAttr
}).addTo(map_c0a827379a3e92ac42793ff5128f9960);

// adding known emitters
var marker_a105190ea1b936998cdc0c55d4281fe9 = L.marker(
    [43.658941999999996, -79.317386],
    {}
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


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
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var icon_bfdcf52704ff02325fd57b35f25ae961 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "ok-sign", "iconColor": "white", "markerColor": "darkpurple", "prefix": "glyphicon" }
);
marker_cc1c0f49dac3928cecc3a87d26a1d098.setIcon(icon_bfdcf52704ff02325fd57b35f25ae961);


var popup_4055271ca3022e2e4f2bb6df7852fe99 = L.popup({ "maxWidth": "100%" });



var html_5826dc3a137699425f1fbeda8f1631d1 = $(`<div id="html_5826dc3a137699425f1fbeda8f1631d1" style="width: 100.0%; height: 100.0%;">Known Emitter <br> Name: Redpath Sugar Refinery <br> Type: Manufacturing</div>`)[0];
popup_4055271ca3022e2e4f2bb6df7852fe99.setContent(html_5826dc3a137699425f1fbeda8f1631d1);



marker_cc1c0f49dac3928cecc3a87d26a1d098.bindPopup(popup_4055271ca3022e2e4f2bb6df7852fe99)
    ;



// adding cluster centres. they're in a layer group so we can toggle their visibility
var centres = L.layerGroup();

var marker_4e04ec412ebbe5159291256662355559 = L.marker(
    [43.6609822129815, -79.31488395907925],
    {}
).addTo(centres);

var icon_653bbe46b3b7027862dcf5bd5fdd36f9 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_4e04ec412ebbe5159291256662355559.setIcon(icon_653bbe46b3b7027862dcf5bd5fdd36f9);


var popup_651926a3cd0b07f66e49e1e3962499b3 = L.popup({ "maxWidth": "100%" });



var html_2ee483442992980adb42a402845fb35e = $(`<div id="html_2ee483442992980adb42a402845fb35e" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[ 1.07016149e-05 -4.55350003e-06]  [-4.55350003e-06  8.33972029e-06]]</div>`)[0];
popup_651926a3cd0b07f66e49e1e3962499b3.setContent(html_2ee483442992980adb42a402845fb35e);



marker_4e04ec412ebbe5159291256662355559.bindPopup(popup_651926a3cd0b07f66e49e1e3962499b3)
    ;




var marker_611b31bd3b4798caacb89377f4b4476a = L.marker(
    [43.640257565425685, -79.45536951775787],
    {}
).addTo(centres);


var icon_22e2df49f69f4131d8f8b98e07086abb = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_611b31bd3b4798caacb89377f4b4476a.setIcon(icon_22e2df49f69f4131d8f8b98e07086abb);


var popup_a9f45fce01fff26ba204f40ef4fad56e = L.popup({ "maxWidth": "100%" });



var html_a740642a529f311b8ce4742614b522d4 = $(`<div id="html_a740642a529f311b8ce4742614b522d4" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[1.00314545e-06 1.90988078e-09]  [1.90988078e-09 1.07148128e-06]]</div>`)[0];
popup_a9f45fce01fff26ba204f40ef4fad56e.setContent(html_a740642a529f311b8ce4742614b522d4);



marker_611b31bd3b4798caacb89377f4b4476a.bindPopup(popup_a9f45fce01fff26ba204f40ef4fad56e)
    ;




var marker_6fdc7b35f08625b2cdce6c69b64f2728 = L.marker(
    [43.70221934989353, -79.60930627386766],
    {}
).addTo(centres);


var icon_a342a3be270427f59811b944d3a81e00 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_6fdc7b35f08625b2cdce6c69b64f2728.setIcon(icon_a342a3be270427f59811b944d3a81e00);


var popup_3885e0c72985c891b351f5dc30214d3d = L.popup({ "maxWidth": "100%" });



var html_4b3cf0b3ca2843fdca4dba862cfe5b13 = $(`<div id="html_4b3cf0b3ca2843fdca4dba862cfe5b13" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[ 1.23417525e-06 -2.55198590e-07]  [-2.55198590e-07  1.28411664e-06]]</div>`)[0];
popup_3885e0c72985c891b351f5dc30214d3d.setContent(html_4b3cf0b3ca2843fdca4dba862cfe5b13);



marker_6fdc7b35f08625b2cdce6c69b64f2728.bindPopup(popup_3885e0c72985c891b351f5dc30214d3d)
    ;




var marker_19357f056d175d04fce2778e648356c1 = L.marker(
    [43.64728496319392, -79.3860786851719],
    {}
).addTo(centres);


var icon_3c6c5d655357015d42e58de015b66d24 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_19357f056d175d04fce2778e648356c1.setIcon(icon_3c6c5d655357015d42e58de015b66d24);


var popup_cf3f6c6b0944ee7493fb0bdf69d7f07e = L.popup({ "maxWidth": "100%" });



var html_447c8753afd4b0ab9dcce0e38f1ac05a = $(`<div id="html_447c8753afd4b0ab9dcce0e38f1ac05a" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[ 5.75606972e-06 -2.00481796e-06]  [-2.00481796e-06  1.22997281e-05]]</div>`)[0];
popup_cf3f6c6b0944ee7493fb0bdf69d7f07e.setContent(html_447c8753afd4b0ab9dcce0e38f1ac05a);



marker_19357f056d175d04fce2778e648356c1.bindPopup(popup_cf3f6c6b0944ee7493fb0bdf69d7f07e)
    ;




var marker_5b0b5b385cf044f3ceedb40e176526de = L.marker(
    [43.65072861436692, -79.34841534050757],
    {}
).addTo(centres);


var icon_e32d426a3e6fd052e743bdb403ab9ca6 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_5b0b5b385cf044f3ceedb40e176526de.setIcon(icon_e32d426a3e6fd052e743bdb403ab9ca6);


var popup_7950de594ef74c2f58c6044890e8149a = L.popup({ "maxWidth": "100%" });



var html_d0ca82410c7acd20cea7dd208968a3e6 = $(`<div id="html_d0ca82410c7acd20cea7dd208968a3e6" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[5.19341184e-06 1.35812683e-06]  [1.35812683e-06 1.91872041e-06]]</div>`)[0];
popup_7950de594ef74c2f58c6044890e8149a.setContent(html_d0ca82410c7acd20cea7dd208968a3e6);



marker_5b0b5b385cf044f3ceedb40e176526de.bindPopup(popup_7950de594ef74c2f58c6044890e8149a)
    ;




var marker_251c606bb1bc8c18a156df221d802e5b = L.marker(
    [43.60244662367551, -79.69468140720609],
    {}
).addTo(centres);


var icon_5416eb751c29b7dc6098140475831032 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_251c606bb1bc8c18a156df221d802e5b.setIcon(icon_5416eb751c29b7dc6098140475831032);


var popup_8e89c22b6f92f617adb6556e4c17c983 = L.popup({ "maxWidth": "100%" });



var html_b4048ff6a05f8a9bce2d6486c04575a6 = $(`<div id="html_b4048ff6a05f8a9bce2d6486c04575a6" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[ 2.20942873e-06 -9.12744690e-07]  [-9.12744690e-07  1.68883998e-06]]</div>`)[0];
popup_8e89c22b6f92f617adb6556e4c17c983.setContent(html_b4048ff6a05f8a9bce2d6486c04575a6);



marker_251c606bb1bc8c18a156df221d802e5b.bindPopup(popup_8e89c22b6f92f617adb6556e4c17c983)
    ;




var marker_878de2da586add0e0c911bb27dd71c48 = L.marker(
    [43.6464713531697, -79.4970561688193],
    {}
).addTo(centres);


var icon_e9d8c129a9e32c08faba5893c229b2aa = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_878de2da586add0e0c911bb27dd71c48.setIcon(icon_e9d8c129a9e32c08faba5893c229b2aa);


var popup_da0a5b5716223f0861ca18fc0a9dafe7 = L.popup({ "maxWidth": "100%" });



var html_4e700ae69015924a493b1b8b0563f46d = $(`<div id="html_4e700ae69015924a493b1b8b0563f46d" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[ 3.54254519e-06 -9.39937437e-08]  [-9.39937437e-08  1.11909205e-06]]</div>`)[0];
popup_da0a5b5716223f0861ca18fc0a9dafe7.setContent(html_4e700ae69015924a493b1b8b0563f46d);



marker_878de2da586add0e0c911bb27dd71c48.bindPopup(popup_da0a5b5716223f0861ca18fc0a9dafe7)
    ;




var marker_f21be6be6dcb39c0b5f4470e6976e28c = L.marker(
    [43.68045146268421, -79.4783396737794],
    {}
).addTo(centres);


var icon_ade0fba05f87d75ba86633809b28e332 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_f21be6be6dcb39c0b5f4470e6976e28c.setIcon(icon_ade0fba05f87d75ba86633809b28e332);


var popup_05a25c422c0b82ba9a33afcf0b075569 = L.popup({ "maxWidth": "100%" });



var html_03d79ad9550f05d0f2b7b55838761303 = $(`<div id="html_03d79ad9550f05d0f2b7b55838761303" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[1.19343969e-06 2.58388743e-07]  [2.58388743e-07 1.42740420e-06]]</div>`)[0];
popup_05a25c422c0b82ba9a33afcf0b075569.setContent(html_03d79ad9550f05d0f2b7b55838761303);



marker_f21be6be6dcb39c0b5f4470e6976e28c.bindPopup(popup_05a25c422c0b82ba9a33afcf0b075569)
    ;




var marker_2f052d4b29553bef081888e2de0e4bb7 = L.marker(
    [43.76001809797838, -79.47669106361678],
    {}
).addTo(centres);


var icon_c859e6775e70ee1a8b760c615aa433cc = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_2f052d4b29553bef081888e2de0e4bb7.setIcon(icon_c859e6775e70ee1a8b760c615aa433cc);


var popup_0f6f239c86db7e69d47b66a590185f2d = L.popup({ "maxWidth": "100%" });



var html_f545384c09f1b459f404d940b1f61205 = $(`<div id="html_f545384c09f1b459f404d940b1f61205" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[2.04715613e-06 4.40922421e-07]  [4.40922421e-07 1.18565768e-06]]</div>`)[0];
popup_0f6f239c86db7e69d47b66a590185f2d.setContent(html_f545384c09f1b459f404d940b1f61205);



marker_2f052d4b29553bef081888e2de0e4bb7.bindPopup(popup_0f6f239c86db7e69d47b66a590185f2d)
    ;




var marker_298c4b7c58bd61f2565e16031451561f = L.marker(
    [43.76014081467432, -79.58663611166247],
    {}
).addTo(centres);


var icon_fbaab2064c90178b3df57d7ced7d0d78 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_298c4b7c58bd61f2565e16031451561f.setIcon(icon_fbaab2064c90178b3df57d7ced7d0d78);


var popup_e3b510a5a33a3b2b8a3e998075c8cf80 = L.popup({ "maxWidth": "100%" });



var html_5cf42814c846fb6e6501ea3605f54e00 = $(`<div id="html_5cf42814c846fb6e6501ea3605f54e00" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[1.73136486e-05 3.57991556e-06]  [3.57991556e-06 1.78651970e-06]]</div>`)[0];
popup_e3b510a5a33a3b2b8a3e998075c8cf80.setContent(html_5cf42814c846fb6e6501ea3605f54e00);



marker_298c4b7c58bd61f2565e16031451561f.bindPopup(popup_e3b510a5a33a3b2b8a3e998075c8cf80)
    ;




var marker_1fd770580e3f587d5904257b6d1ef219 = L.marker(
    [43.655777566598616, -79.42609391476432],
    {}
).addTo(centres);


var icon_1bd29ddfd3f2c8d60dbe1aae284d7052 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_1fd770580e3f587d5904257b6d1ef219.setIcon(icon_1bd29ddfd3f2c8d60dbe1aae284d7052);


var popup_6b4e3c1aad2ec74bd897f1f1be1b7afd = L.popup({ "maxWidth": "100%" });



var html_411993f2aa781a60f84b0a29cb8e73a9 = $(`<div id="html_411993f2aa781a60f84b0a29cb8e73a9" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[9.87571507e-06 1.00390898e-05]  [1.00390898e-05 1.71431133e-05]]</div>`)[0];
popup_6b4e3c1aad2ec74bd897f1f1be1b7afd.setContent(html_411993f2aa781a60f84b0a29cb8e73a9);



marker_1fd770580e3f587d5904257b6d1ef219.bindPopup(popup_6b4e3c1aad2ec74bd897f1f1be1b7afd)
    ;




var marker_9c16a8795a5540e083aa7b1e04a34bca = L.marker(
    [43.66395749227685, -79.46294776656352],
    {}
).addTo(centres);


var icon_cdffa90403d28f6fdcd091cdcc30e903 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_9c16a8795a5540e083aa7b1e04a34bca.setIcon(icon_cdffa90403d28f6fdcd091cdcc30e903);


var popup_0cad25dc336f198ec0e4d04338915610 = L.popup({ "maxWidth": "100%" });



var html_922057fb9057ddf5b9527ec1e6d48fed = $(`<div id="html_922057fb9057ddf5b9527ec1e6d48fed" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[ 4.46297234e-06 -4.28328255e-06]  [-4.28328255e-06  1.09852855e-05]]</div>`)[0];
popup_0cad25dc336f198ec0e4d04338915610.setContent(html_922057fb9057ddf5b9527ec1e6d48fed);



marker_9c16a8795a5540e083aa7b1e04a34bca.bindPopup(popup_0cad25dc336f198ec0e4d04338915610)
    ;




var marker_bf5d83894839f99aaf810d53b1f9d5ff = L.marker(
    [43.62613501952093, -79.325425313885],
    {}
).addTo(centres);


var icon_243caf6518610e78eb312b84baedac4f = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_bf5d83894839f99aaf810d53b1f9d5ff.setIcon(icon_243caf6518610e78eb312b84baedac4f);


var popup_3be573501b8c2c213e8688f2ba6be52f = L.popup({ "maxWidth": "100%" });



var html_6c66626ce0c377b2967c28b76f1acfc1 = $(`<div id="html_6c66626ce0c377b2967c28b76f1acfc1" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[ 5.91940558e-06 -2.21098499e-06]  [-2.21098499e-06  2.70778697e-06]]</div>`)[0];
popup_3be573501b8c2c213e8688f2ba6be52f.setContent(html_6c66626ce0c377b2967c28b76f1acfc1);



marker_bf5d83894839f99aaf810d53b1f9d5ff.bindPopup(popup_3be573501b8c2c213e8688f2ba6be52f)
    ;




var marker_e9cff465cd9add3094d2ad0ca19a7374 = L.marker(
    [43.63388608159098, -79.48078522287804],
    {}
).addTo(centres);


var icon_5877643b726fb0d30cdc41feba221126 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_e9cff465cd9add3094d2ad0ca19a7374.setIcon(icon_5877643b726fb0d30cdc41feba221126);


var popup_36bc573792838a50a4b2a9666e1d5c79 = L.popup({ "maxWidth": "100%" });



var html_8afbcc4972ddc70b7a10a1131ae12683 = $(`<div id="html_8afbcc4972ddc70b7a10a1131ae12683" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[ 3.37696895e-05 -3.10619038e-06]  [-3.10619038e-06  3.05873992e-06]]</div>`)[0];
popup_36bc573792838a50a4b2a9666e1d5c79.setContent(html_8afbcc4972ddc70b7a10a1131ae12683);



marker_e9cff465cd9add3094d2ad0ca19a7374.bindPopup(popup_36bc573792838a50a4b2a9666e1d5c79)
    ;




var marker_404c8e57d3a2801e95a8edb42c51b6de = L.marker(
    [43.69944005496908, -79.32168098603697],
    {}
).addTo(centres);


var icon_1d9fbed61abf28f3bf51a7821286d072 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_404c8e57d3a2801e95a8edb42c51b6de.setIcon(icon_1d9fbed61abf28f3bf51a7821286d072);


var popup_d94d38afaa38dc94c3a046cd857b1d83 = L.popup({ "maxWidth": "100%" });



var html_3eeca30a54151ea1f652a4ac7219196b = $(`<div id="html_3eeca30a54151ea1f652a4ac7219196b" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[6.70844649e-05 9.67551767e-06]  [9.67551767e-06 1.06679766e-05]]</div>`)[0];
popup_d94d38afaa38dc94c3a046cd857b1d83.setContent(html_3eeca30a54151ea1f652a4ac7219196b);



marker_404c8e57d3a2801e95a8edb42c51b6de.bindPopup(popup_d94d38afaa38dc94c3a046cd857b1d83)
    ;




var marker_7474571a61fa9917e26b620cea006e08 = L.marker(
    [43.661780939121456, -79.37953496912121],
    {}
).addTo(centres);


var icon_88cc62c273226f02b7f94023c74ee195 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_7474571a61fa9917e26b620cea006e08.setIcon(icon_88cc62c273226f02b7f94023c74ee195);


var popup_1c851fd98fd0c1e254ee03441ae5d920 = L.popup({ "maxWidth": "100%" });



var html_f16c47b8675ea0e6ee91d99b4181b5b7 = $(`<div id="html_f16c47b8675ea0e6ee91d99b4181b5b7" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[2.14819306e-05 7.24441208e-06]  [7.24441208e-06 2.15464449e-05]]</div>`)[0];
popup_1c851fd98fd0c1e254ee03441ae5d920.setContent(html_f16c47b8675ea0e6ee91d99b4181b5b7);



marker_7474571a61fa9917e26b620cea006e08.bindPopup(popup_1c851fd98fd0c1e254ee03441ae5d920)
    ;




var marker_80828135e9ed5d00dcc3cbe6373882bc = L.marker(
    [43.66013504544914, -79.39817308812921],
    {}
).addTo(centres);


var icon_bf05ab4aea384f37075837e565480d25 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_80828135e9ed5d00dcc3cbe6373882bc.setIcon(icon_bf05ab4aea384f37075837e565480d25);


var popup_80ff3389eb7ea5475a2ba10c351c3282 = L.popup({ "maxWidth": "100%" });



var html_1f344418a36daab2ad55e6226ddeebcb = $(`<div id="html_1f344418a36daab2ad55e6226ddeebcb" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[2.54917402e-06 9.09044444e-07]  [9.09044444e-07 2.08636675e-06]]</div>`)[0];
popup_80ff3389eb7ea5475a2ba10c351c3282.setContent(html_1f344418a36daab2ad55e6226ddeebcb);



marker_80828135e9ed5d00dcc3cbe6373882bc.bindPopup(popup_80ff3389eb7ea5475a2ba10c351c3282)
    ;




var marker_b64c01465b51d2b1395be67f78f0331c = L.marker(
    [43.63028605913878, -79.42410807334603],
    {}
).addTo(centres);


var icon_a958a29d4d07dbd473b8b3be9a12a85b = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_b64c01465b51d2b1395be67f78f0331c.setIcon(icon_a958a29d4d07dbd473b8b3be9a12a85b);


var popup_4c48d24ce156787b68ee3584b1998378 = L.popup({ "maxWidth": "100%" });



var html_11182c3e804ec3d0f2c7d4c13337de01 = $(`<div id="html_11182c3e804ec3d0f2c7d4c13337de01" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[ 7.62830652e-06 -5.44498687e-07]  [-5.44498687e-07  1.07267797e-06]]</div>`)[0];
popup_4c48d24ce156787b68ee3584b1998378.setContent(html_11182c3e804ec3d0f2c7d4c13337de01);



marker_b64c01465b51d2b1395be67f78f0331c.bindPopup(popup_4c48d24ce156787b68ee3584b1998378)
    ;




var marker_22411fffef831989a469d4324fe7c0e6 = L.marker(
    [43.663504532199376, -79.35597687114524],
    {}
).addTo(centres);


var icon_310bc60e561d21c6277f70d93607cc9d = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_22411fffef831989a469d4324fe7c0e6.setIcon(icon_310bc60e561d21c6277f70d93607cc9d);


var popup_888eb4f79a8678f448813fc84ae48dd5 = L.popup({ "maxWidth": "100%" });



var html_bec3eb653bca860f1d02c5ec30875dea = $(`<div id="html_bec3eb653bca860f1d02c5ec30875dea" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[4.81156161e-06 8.40369304e-06]  [8.40369304e-06 3.70965565e-05]]</div>`)[0];
popup_888eb4f79a8678f448813fc84ae48dd5.setContent(html_bec3eb653bca860f1d02c5ec30875dea);



marker_22411fffef831989a469d4324fe7c0e6.bindPopup(popup_888eb4f79a8678f448813fc84ae48dd5)
    ;




var marker_ef283d85b614d8f307cf72903eb6c474 = L.marker(
    [43.63891283110544, -79.39695118532208],
    {}
).addTo(centres);


var icon_5542072591bcc963e01e16f88d9fd60e = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_ef283d85b614d8f307cf72903eb6c474.setIcon(icon_5542072591bcc963e01e16f88d9fd60e);


var popup_0f996322f2ec9aaf6e04ae85afefde1b = L.popup({ "maxWidth": "100%" });



var html_5599a83604cc1f68c082c2b297eed678 = $(`<div id="html_5599a83604cc1f68c082c2b297eed678" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[ 2.66482835e-06 -3.04584794e-06]  [-3.04584794e-06  2.23247238e-05]]</div>`)[0];
popup_0f996322f2ec9aaf6e04ae85afefde1b.setContent(html_5599a83604cc1f68c082c2b297eed678);



marker_ef283d85b614d8f307cf72903eb6c474.bindPopup(popup_0f996322f2ec9aaf6e04ae85afefde1b)
    ;




var marker_8b01a6259206d5cde1f31b5397e31dee = L.marker(
    [43.64377048187203, -79.37094197258506],
    {}
).addTo(centres);


var icon_10ed718aef1ef3ebab41c13f1699c860 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_8b01a6259206d5cde1f31b5397e31dee.setIcon(icon_10ed718aef1ef3ebab41c13f1699c860);


var popup_8b9572662468ee365bbe36cd563f6198 = L.popup({ "maxWidth": "100%" });



var html_7fb60d4e119de13460c0d7e8adaca2b4 = $(`<div id="html_7fb60d4e119de13460c0d7e8adaca2b4" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[7.19617062e-06 3.92221988e-06]  [3.92221988e-06 5.84961160e-06]]</div>`)[0];
popup_8b9572662468ee365bbe36cd563f6198.setContent(html_7fb60d4e119de13460c0d7e8adaca2b4);



marker_8b01a6259206d5cde1f31b5397e31dee.bindPopup(popup_8b9572662468ee365bbe36cd563f6198)
    ;




var marker_8419a0800cf6e598d1fdce3d6d4d82e0 = L.marker(
    [43.62155765439328, -79.47609387728994],
    {}
).addTo(centres);


var icon_b9335fb9738f917498ff99609617c374 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_8419a0800cf6e598d1fdce3d6d4d82e0.setIcon(icon_b9335fb9738f917498ff99609617c374);


var popup_d62f04e4f995bb013649a64a61adb1ad = L.popup({ "maxWidth": "100%" });



var html_9d93ee6322aa6bccbfc7419362bedc9b = $(`<div id="html_9d93ee6322aa6bccbfc7419362bedc9b" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[ 5.54141376e-06 -1.33723641e-07]  [-1.33723641e-07  2.50863480e-06]]</div>`)[0];
popup_d62f04e4f995bb013649a64a61adb1ad.setContent(html_9d93ee6322aa6bccbfc7419362bedc9b);



marker_8419a0800cf6e598d1fdce3d6d4d82e0.bindPopup(popup_d62f04e4f995bb013649a64a61adb1ad)
    ;




var marker_af6dffbc73142797aedb6bcd94214798 = L.marker(
    [43.6613014384565, -79.33738907754966],
    {}
).addTo(centres);


var icon_e34860022caeafa01a7bcd2647295362 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_af6dffbc73142797aedb6bcd94214798.setIcon(icon_e34860022caeafa01a7bcd2647295362);


var popup_5db58123e9f37bf384a8c8ee3464099b = L.popup({ "maxWidth": "100%" });



var html_d3080a8c99ab5b32c34c6711326ccc56 = $(`<div id="html_d3080a8c99ab5b32c34c6711326ccc56" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[5.77735767e-05 1.56625103e-05]  [1.56625103e-05 2.17024875e-05]]</div>`)[0];
popup_5db58123e9f37bf384a8c8ee3464099b.setContent(html_d3080a8c99ab5b32c34c6711326ccc56);



marker_af6dffbc73142797aedb6bcd94214798.bindPopup(popup_5db58123e9f37bf384a8c8ee3464099b)
    ;




var marker_f686f3949237a93274f2af58e8ee17ce = L.marker(
    [43.65982546336681, -79.32248976022521],
    {}
).addTo(centres);


var icon_87f056626fe8492e81d9238cabc71ad3 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_f686f3949237a93274f2af58e8ee17ce.setIcon(icon_87f056626fe8492e81d9238cabc71ad3);


var popup_da69069c33a64f21eb14749fccae3775 = L.popup({ "maxWidth": "100%" });



var html_a4e915396657f5dee74d341ccb859493 = $(`<div id="html_a4e915396657f5dee74d341ccb859493" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[1.29254686e-05 8.32568482e-06]  [8.32568482e-06 1.84264388e-05]]</div>`)[0];
popup_da69069c33a64f21eb14749fccae3775.setContent(html_a4e915396657f5dee74d341ccb859493);



marker_f686f3949237a93274f2af58e8ee17ce.bindPopup(popup_da69069c33a64f21eb14749fccae3775)
    ;




var marker_cd7b55fc3ce321da68c04ff327f6999f = L.marker(
    [43.65345834880105, -79.45836424293748],
    {}
).addTo(centres);


var icon_5937ca967448533e638d9c263c000bc0 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_cd7b55fc3ce321da68c04ff327f6999f.setIcon(icon_5937ca967448533e638d9c263c000bc0);


var popup_e2efb67af79333f53e34ce18bde34e5a = L.popup({ "maxWidth": "100%" });



var html_2970487e7cacd94a6e36d21c718045d1 = $(`<div id="html_2970487e7cacd94a6e36d21c718045d1" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[2.32243334e-05 5.47055648e-06]  [5.47055648e-06 5.41469371e-06]]</div>`)[0];
popup_e2efb67af79333f53e34ce18bde34e5a.setContent(html_2970487e7cacd94a6e36d21c718045d1);



marker_cd7b55fc3ce321da68c04ff327f6999f.bindPopup(popup_e2efb67af79333f53e34ce18bde34e5a)
    ;




var marker_c524d4b8956aa06d74edfc1a71be748f = L.marker(
    [43.65270671038704, -79.470687826455],
    {}
).addTo(centres);


var icon_f08994b7f873ad8b60d7592f64c63382 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_c524d4b8956aa06d74edfc1a71be748f.setIcon(icon_f08994b7f873ad8b60d7592f64c63382);


var popup_11647e0afda33be9b284fbf3b27cd645 = L.popup({ "maxWidth": "100%" });



var html_aa2e68311dc51dc6b6b65d48d1531b80 = $(`<div id="html_aa2e68311dc51dc6b6b65d48d1531b80" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[ 1.19516510e-06 -3.54194856e-07]  [-3.54194856e-07  6.22357819e-06]]</div>`)[0];
popup_11647e0afda33be9b284fbf3b27cd645.setContent(html_aa2e68311dc51dc6b6b65d48d1531b80);



marker_c524d4b8956aa06d74edfc1a71be748f.bindPopup(popup_11647e0afda33be9b284fbf3b27cd645)
    ;




var marker_c68e1644e68aff553c569d819625062f = L.marker(
    [43.70038058408137, -79.60257990326771],
    {}
).addTo(centres);


var icon_6840be0d886815c2250c8e92e65607c4 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_c68e1644e68aff553c569d819625062f.setIcon(icon_6840be0d886815c2250c8e92e65607c4);


var popup_d66fe41f91ab6b4de14c1003eb397c84 = L.popup({ "maxWidth": "100%" });



var html_e64707b4fb382197f160c8b6d86cf255 = $(`<div id="html_e64707b4fb382197f160c8b6d86cf255" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[ 2.63499235e-06 -2.11915990e-07]  [-2.11915990e-07  1.14839057e-06]]</div>`)[0];
popup_d66fe41f91ab6b4de14c1003eb397c84.setContent(html_e64707b4fb382197f160c8b6d86cf255);



marker_c68e1644e68aff553c569d819625062f.bindPopup(popup_d66fe41f91ab6b4de14c1003eb397c84)
    ;




var marker_88d3eadd9b9330f3e4fc4f031a19871f = L.marker(
    [43.64087179704384, -79.4910405064668],
    {}
).addTo(centres);


var icon_5f124f6a6c4a1c22c432d028b051e334 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "fa-question", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_88d3eadd9b9330f3e4fc4f031a19871f.setIcon(icon_5f124f6a6c4a1c22c432d028b051e334);


var popup_6a8d9636af4d52c95504b3d7d6a3a4b7 = L.popup({ "maxWidth": "100%" });



var html_8004ed5cbce9982e9113ea57967ae7c3 = $(`<div id="html_8004ed5cbce9982e9113ea57967ae7c3" style="width: 100.0%; height: 100.0%;">Potential source of emissions with cov: [[ 1.07821842e-06 -2.89026734e-08]  [-2.89026734e-08  1.01120464e-06]]</div>`)[0];
popup_6a8d9636af4d52c95504b3d7d6a3a4b7.setContent(html_8004ed5cbce9982e9113ea57967ae7c3);



marker_88d3eadd9b9330f3e4fc4f031a19871f.bindPopup(popup_6a8d9636af4d52c95504b3d7d6a3a4b7)
    ;


// toggle visibility of cluster centres
var clicked = document.getElementById("show_cluster_centres")
var showing = 0
clicked.addEventListener('click', toggle_cluster_centres)

function toggle_cluster_centres() {
    if (showing == 0) {
        map_c0a827379a3e92ac42793ff5128f9960.addLayer(centres)
        showing = 1
    }
    else if (showing == 1) {
        map_c0a827379a3e92ac42793ff5128f9960.removeLayer(centres)
        showing = 0
    }
}

// adding circles
var circle_12021db780713e190cb76eea90f4e777 = L.circle(
    [43.64632693031661, -79.38853196805027],
    { "bubblingMouseEvents": true, "color": "#62BA6B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#62BA6B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_96243b6add43dfa585f5aec969f84009 = L.popup({ "maxWidth": "100%" });



var html_22cf42835ba9907fcadd7909692f6676 = $(`<div id="html_22cf42835ba9907fcadd7909692f6676" style="width: 100.0%; height: 100.0%;">2017-08-10</div>`)[0];
popup_96243b6add43dfa585f5aec969f84009.setContent(html_22cf42835ba9907fcadd7909692f6676);



circle_12021db780713e190cb76eea90f4e777.bindPopup(popup_96243b6add43dfa585f5aec969f84009)
    ;




var circle_05d7ef2ac1fc5581863b411c399a1774 = L.circle(
    [43.65127483331282, -79.34731695904297],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_1f3c19f7e3020a3163995eb8e690360e = L.popup({ "maxWidth": "100%" });



var html_10b4a96953fd63d0092499b6622a806d = $(`<div id="html_10b4a96953fd63d0092499b6622a806d" style="width: 100.0%; height: 100.0%;">2017-08-10</div>`)[0];
popup_1f3c19f7e3020a3163995eb8e690360e.setContent(html_10b4a96953fd63d0092499b6622a806d);



circle_05d7ef2ac1fc5581863b411c399a1774.bindPopup(popup_1f3c19f7e3020a3163995eb8e690360e)
    ;




var circle_6c76dcea334d7ff8f18a3c8e62a9415a = L.circle(
    [43.64984819705269, -79.34906974318568],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_215f4501b7bdf6fd693f3430b54e0e9a = L.popup({ "maxWidth": "100%" });



var html_95fd37a791eee97de8b5b7ca1aee875f = $(`<div id="html_95fd37a791eee97de8b5b7ca1aee875f" style="width: 100.0%; height: 100.0%;">2017-08-10</div>`)[0];
popup_215f4501b7bdf6fd693f3430b54e0e9a.setContent(html_95fd37a791eee97de8b5b7ca1aee875f);



circle_6c76dcea334d7ff8f18a3c8e62a9415a.bindPopup(popup_215f4501b7bdf6fd693f3430b54e0e9a)
    ;




var circle_ba759d08d149d18b3e169f479ab09231 = L.circle(
    [43.64984819705269, -79.34906974318568],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_127c7076995f5ede36b10ab5b8233317 = L.popup({ "maxWidth": "100%" });



var html_29462b9f4421b6776e497a6719de6995 = $(`<div id="html_29462b9f4421b6776e497a6719de6995" style="width: 100.0%; height: 100.0%;">2017-08-10</div>`)[0];
popup_127c7076995f5ede36b10ab5b8233317.setContent(html_29462b9f4421b6776e497a6719de6995);



circle_ba759d08d149d18b3e169f479ab09231.bindPopup(popup_127c7076995f5ede36b10ab5b8233317)
    ;




var circle_38e2c531c4101926a77496ae703407d9 = L.circle(
    [43.64984819705269, -79.34906974318568],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_0034cecec4575afc3bd6873c992760d5 = L.popup({ "maxWidth": "100%" });



var html_403552ce050c91c2e753763aa1a33fcb = $(`<div id="html_403552ce050c91c2e753763aa1a33fcb" style="width: 100.0%; height: 100.0%;">2017-08-10</div>`)[0];
popup_0034cecec4575afc3bd6873c992760d5.setContent(html_403552ce050c91c2e753763aa1a33fcb);



circle_38e2c531c4101926a77496ae703407d9.bindPopup(popup_0034cecec4575afc3bd6873c992760d5)
    ;




var circle_89a46b1952740da406857141ad78c48e = L.circle(
    [43.65030262856467, -79.34797611693676],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_80279f7e1ff330587850539f86e17c6c = L.popup({ "maxWidth": "100%" });



var html_786c322a1dd28f3e593d4ddbdf0d948b = $(`<div id="html_786c322a1dd28f3e593d4ddbdf0d948b" style="width: 100.0%; height: 100.0%;">2017-08-10</div>`)[0];
popup_80279f7e1ff330587850539f86e17c6c.setContent(html_786c322a1dd28f3e593d4ddbdf0d948b);



circle_89a46b1952740da406857141ad78c48e.bindPopup(popup_80279f7e1ff330587850539f86e17c6c)
    ;




var circle_f893f8cb0b4545851a481f060a566440 = L.circle(
    [43.65030262856467, -79.34797611693676],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_e8d68ba9f69214b4916c17a390bc53fb = L.popup({ "maxWidth": "100%" });



var html_c19a280fa28cc0abbb7c51fb895cdfb8 = $(`<div id="html_c19a280fa28cc0abbb7c51fb895cdfb8" style="width: 100.0%; height: 100.0%;">2017-08-10</div>`)[0];
popup_e8d68ba9f69214b4916c17a390bc53fb.setContent(html_c19a280fa28cc0abbb7c51fb895cdfb8);



circle_f893f8cb0b4545851a481f060a566440.bindPopup(popup_e8d68ba9f69214b4916c17a390bc53fb)
    ;




var circle_62d6ad6a9e1ae6a1b5ea1e0395cbce2f = L.circle(
    [43.65030262856467, -79.34797611693676],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_956c2e9a1830b46d0dd62e791b72d6dd = L.popup({ "maxWidth": "100%" });



var html_8b78f7fb31fd9f8ebdc7521d580a0a5e = $(`<div id="html_8b78f7fb31fd9f8ebdc7521d580a0a5e" style="width: 100.0%; height: 100.0%;">2017-08-10</div>`)[0];
popup_956c2e9a1830b46d0dd62e791b72d6dd.setContent(html_8b78f7fb31fd9f8ebdc7521d580a0a5e);



circle_62d6ad6a9e1ae6a1b5ea1e0395cbce2f.bindPopup(popup_956c2e9a1830b46d0dd62e791b72d6dd)
    ;




var circle_db407de1256cf222413c4464abb7dec8 = L.circle(
    [43.65837050641818, -79.32233554303278],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_4484b04246a55eeab90d18b8c6fdbedb = L.popup({ "maxWidth": "100%" });



var html_2a08d3f87bb35224afa20943e89e3c9f = $(`<div id="html_2a08d3f87bb35224afa20943e89e3c9f" style="width: 100.0%; height: 100.0%;">2017-08-10</div>`)[0];
popup_4484b04246a55eeab90d18b8c6fdbedb.setContent(html_2a08d3f87bb35224afa20943e89e3c9f);



circle_db407de1256cf222413c4464abb7dec8.bindPopup(popup_4484b04246a55eeab90d18b8c6fdbedb)
    ;




var circle_bf889761c41e4a77bb2d2366d28fb9c7 = L.circle(
    [43.65837050641818, -79.32233554303278],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_bf738f5b6dfa9a307e4bd3e922279efc = L.popup({ "maxWidth": "100%" });



var html_483523eb04091f02fdb1b395389a950d = $(`<div id="html_483523eb04091f02fdb1b395389a950d" style="width: 100.0%; height: 100.0%;">2017-08-10</div>`)[0];
popup_bf738f5b6dfa9a307e4bd3e922279efc.setContent(html_483523eb04091f02fdb1b395389a950d);



circle_bf889761c41e4a77bb2d2366d28fb9c7.bindPopup(popup_bf738f5b6dfa9a307e4bd3e922279efc)
    ;




var circle_b062d490b7b1ab9a708409161b789905 = L.circle(
    [43.65837050641818, -79.32233554303278],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_6c5032863fe1d69b6fb67c1880158b3f = L.popup({ "maxWidth": "100%" });



var html_75695c028ab171212757aa41d7e97792 = $(`<div id="html_75695c028ab171212757aa41d7e97792" style="width: 100.0%; height: 100.0%;">2017-08-10</div>`)[0];
popup_6c5032863fe1d69b6fb67c1880158b3f.setContent(html_75695c028ab171212757aa41d7e97792);



circle_b062d490b7b1ab9a708409161b789905.bindPopup(popup_6c5032863fe1d69b6fb67c1880158b3f)
    ;




var circle_1c05b06a2df693c99c288539a013294d = L.circle(
    [43.65981112542805, -79.33309233952997],
    { "bubblingMouseEvents": true, "color": "#1E945C", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#1E945C", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_7fa407a196f37b65fe6b2ab8af7daa91 = L.popup({ "maxWidth": "100%" });



var html_33cdd69497e836841071a98f8bfcca97 = $(`<div id="html_33cdd69497e836841071a98f8bfcca97" style="width: 100.0%; height: 100.0%;">2017-08-10</div>`)[0];
popup_7fa407a196f37b65fe6b2ab8af7daa91.setContent(html_33cdd69497e836841071a98f8bfcca97);



circle_1c05b06a2df693c99c288539a013294d.bindPopup(popup_7fa407a196f37b65fe6b2ab8af7daa91)
    ;




var circle_7da0f4b8b677d3769cadf8f436989ebb = L.circle(
    [43.65644393666592, -79.36023799749212],
    { "bubblingMouseEvents": true, "color": "#0C0328", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#0C0328", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_304ec700349ecf2680a6d9fdb1f22fa6 = L.popup({ "maxWidth": "100%" });



var html_8e443a9319255828e52dfe9ead465804 = $(`<div id="html_8e443a9319255828e52dfe9ead465804" style="width: 100.0%; height: 100.0%;">2017-08-10</div>`)[0];
popup_304ec700349ecf2680a6d9fdb1f22fa6.setContent(html_8e443a9319255828e52dfe9ead465804);



circle_7da0f4b8b677d3769cadf8f436989ebb.bindPopup(popup_304ec700349ecf2680a6d9fdb1f22fa6)
    ;




var circle_71df2ec0a21c775a12ad7f08b2608f73 = L.circle(
    [43.66297089508153, -79.33120449852369],
    { "bubblingMouseEvents": true, "color": "#1E945C", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#1E945C", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_bc0de02cf1226b7bd56c015df2432126 = L.popup({ "maxWidth": "100%" });



var html_b73eaeedd7b0debc830d3df7f83e3dbd = $(`<div id="html_b73eaeedd7b0debc830d3df7f83e3dbd" style="width: 100.0%; height: 100.0%;">2017-08-10</div>`)[0];
popup_bc0de02cf1226b7bd56c015df2432126.setContent(html_b73eaeedd7b0debc830d3df7f83e3dbd);



circle_71df2ec0a21c775a12ad7f08b2608f73.bindPopup(popup_bc0de02cf1226b7bd56c015df2432126)
    ;




var circle_6be5c80e558793194fb4a40aac3f26c8 = L.circle(
    [43.64877795886341, -79.35400611369815],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_6228d079d39618ebcc3aa570c2ef7cb2 = L.popup({ "maxWidth": "100%" });



var html_fb4596f7c69cf8832a54dfa5844a57fd = $(`<div id="html_fb4596f7c69cf8832a54dfa5844a57fd" style="width: 100.0%; height: 100.0%;">2017-08-10</div>`)[0];
popup_6228d079d39618ebcc3aa570c2ef7cb2.setContent(html_fb4596f7c69cf8832a54dfa5844a57fd);



circle_6be5c80e558793194fb4a40aac3f26c8.bindPopup(popup_6228d079d39618ebcc3aa570c2ef7cb2)
    ;




var circle_ae2a592ce813f0ddb40c32db5fc18c1c = L.circle(
    [43.64865379968647, -79.39631196295467],
    { "bubblingMouseEvents": true, "color": "#F73D32", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#F73D32", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_a3afc0fb2f766aee8b2a3d068cd76021 = L.popup({ "maxWidth": "100%" });



var html_3523add2393d9216aed4f07f995a245a = $(`<div id="html_3523add2393d9216aed4f07f995a245a" style="width: 100.0%; height: 100.0%;">2017-08-10</div>`)[0];
popup_a3afc0fb2f766aee8b2a3d068cd76021.setContent(html_3523add2393d9216aed4f07f995a245a);



circle_ae2a592ce813f0ddb40c32db5fc18c1c.bindPopup(popup_a3afc0fb2f766aee8b2a3d068cd76021)
    ;




var circle_25f0aaa0ec9b4096fe527bc7f5ca6a40 = L.circle(
    [43.64901496768989, -79.38640558942802],
    { "bubblingMouseEvents": true, "color": "#62BA6B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#62BA6B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_232eeba595c5c196307a0f53218d3841 = L.popup({ "maxWidth": "100%" });



var html_bf812aa0a481acadab12a7fe1d6deb52 = $(`<div id="html_bf812aa0a481acadab12a7fe1d6deb52" style="width: 100.0%; height: 100.0%;">2017-08-15</div>`)[0];
popup_232eeba595c5c196307a0f53218d3841.setContent(html_bf812aa0a481acadab12a7fe1d6deb52);



circle_25f0aaa0ec9b4096fe527bc7f5ca6a40.bindPopup(popup_232eeba595c5c196307a0f53218d3841)
    ;




var circle_274bc16eb3a8a57f88aecd7788a3c5f4 = L.circle(
    [43.64901496768989, -79.38640558942802],
    { "bubblingMouseEvents": true, "color": "#62BA6B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#62BA6B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_9d93385f25546de20b1213499e2097db = L.popup({ "maxWidth": "100%" });



var html_0c490aea684b90a67a125fedcdfa288b = $(`<div id="html_0c490aea684b90a67a125fedcdfa288b" style="width: 100.0%; height: 100.0%;">2017-08-15</div>`)[0];
popup_9d93385f25546de20b1213499e2097db.setContent(html_0c490aea684b90a67a125fedcdfa288b);



circle_274bc16eb3a8a57f88aecd7788a3c5f4.bindPopup(popup_9d93385f25546de20b1213499e2097db)
    ;




var circle_e4e199c8f13382983665d4310953a32c = L.circle(
    [43.64901496768989, -79.38640558942802],
    { "bubblingMouseEvents": true, "color": "#62BA6B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#62BA6B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_486abe967d81f4f7b7a880e2eca8cc45 = L.popup({ "maxWidth": "100%" });



var html_17684d00cb595c81d283ec0a33807e20 = $(`<div id="html_17684d00cb595c81d283ec0a33807e20" style="width: 100.0%; height: 100.0%;">2017-08-15</div>`)[0];
popup_486abe967d81f4f7b7a880e2eca8cc45.setContent(html_17684d00cb595c81d283ec0a33807e20);



circle_e4e199c8f13382983665d4310953a32c.bindPopup(popup_486abe967d81f4f7b7a880e2eca8cc45)
    ;




var circle_177a9d5b0bc6a37ee0f3530b311b8914 = L.circle(
    [43.65047664000797, -79.34787729749056],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_505366a4647d520c2a9280bb0bc2e2e6 = L.popup({ "maxWidth": "100%" });



var html_c2e3b3e59442e8034fe6e485d3ac3e04 = $(`<div id="html_c2e3b3e59442e8034fe6e485d3ac3e04" style="width: 100.0%; height: 100.0%;">2017-08-15</div>`)[0];
popup_505366a4647d520c2a9280bb0bc2e2e6.setContent(html_c2e3b3e59442e8034fe6e485d3ac3e04);



circle_177a9d5b0bc6a37ee0f3530b311b8914.bindPopup(popup_505366a4647d520c2a9280bb0bc2e2e6)
    ;




var circle_981a2c2d4bf22fe369e97482ab84ef73 = L.circle(
    [43.65047664000797, -79.34787729749056],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_883f33d208a6fd8d7c9a78d931271424 = L.popup({ "maxWidth": "100%" });



var html_400728d9b27c4a93500db312444c1f9d = $(`<div id="html_400728d9b27c4a93500db312444c1f9d" style="width: 100.0%; height: 100.0%;">2017-08-15</div>`)[0];
popup_883f33d208a6fd8d7c9a78d931271424.setContent(html_400728d9b27c4a93500db312444c1f9d);



circle_981a2c2d4bf22fe369e97482ab84ef73.bindPopup(popup_883f33d208a6fd8d7c9a78d931271424)
    ;




var circle_83a393df118d340074331deea9bca699 = L.circle(
    [43.65047664000797, -79.34787729749056],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_a884650990c02472ebc1fe1578c8e532 = L.popup({ "maxWidth": "100%" });



var html_bfbdf7bdf5597aba8ffb7bb9f5d504d9 = $(`<div id="html_bfbdf7bdf5597aba8ffb7bb9f5d504d9" style="width: 100.0%; height: 100.0%;">2017-08-15</div>`)[0];
popup_a884650990c02472ebc1fe1578c8e532.setContent(html_bfbdf7bdf5597aba8ffb7bb9f5d504d9);



circle_83a393df118d340074331deea9bca699.bindPopup(popup_a884650990c02472ebc1fe1578c8e532)
    ;




var circle_b8ae23e6fe4b9c2bc0f09946f3d06098 = L.circle(
    [43.661469774950916, -79.35571156105634],
    { "bubblingMouseEvents": true, "color": "#0C0328", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#0C0328", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_bc68c55d4066d1b512e7dc202b3466ba = L.popup({ "maxWidth": "100%" });



var html_2d65cfac1750bb0cc83c22edd5b1a8a1 = $(`<div id="html_2d65cfac1750bb0cc83c22edd5b1a8a1" style="width: 100.0%; height: 100.0%;">2017-08-15</div>`)[0];
popup_bc68c55d4066d1b512e7dc202b3466ba.setContent(html_2d65cfac1750bb0cc83c22edd5b1a8a1);



circle_b8ae23e6fe4b9c2bc0f09946f3d06098.bindPopup(popup_bc68c55d4066d1b512e7dc202b3466ba)
    ;




var circle_05d8037fdcac3a5cf05413ef46b69704 = L.circle(
    [43.662398581697985, -79.35593546006962],
    { "bubblingMouseEvents": true, "color": "#0C0328", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#0C0328", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_168f8116634868294e2072f8abe0135a = L.popup({ "maxWidth": "100%" });



var html_a36a61b264f5f80fff4e39929a988166 = $(`<div id="html_a36a61b264f5f80fff4e39929a988166" style="width: 100.0%; height: 100.0%;">2017-08-15</div>`)[0];
popup_168f8116634868294e2072f8abe0135a.setContent(html_a36a61b264f5f80fff4e39929a988166);



circle_05d8037fdcac3a5cf05413ef46b69704.bindPopup(popup_168f8116634868294e2072f8abe0135a)
    ;




var circle_68e4a79ff265446149b77a14ae1fa879 = L.circle(
    [43.64798963805277, -79.38591744290932],
    { "bubblingMouseEvents": true, "color": "#62BA6B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#62BA6B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_c3f7f835582ecaf6ee771d9c766bd571 = L.popup({ "maxWidth": "100%" });



var html_cba9902b7bb8f33b568f603b7f6dc7d9 = $(`<div id="html_cba9902b7bb8f33b568f603b7f6dc7d9" style="width: 100.0%; height: 100.0%;">2017-08-15</div>`)[0];
popup_c3f7f835582ecaf6ee771d9c766bd571.setContent(html_cba9902b7bb8f33b568f603b7f6dc7d9);



circle_68e4a79ff265446149b77a14ae1fa879.bindPopup(popup_c3f7f835582ecaf6ee771d9c766bd571)
    ;




var circle_49006e6313f0488793f9b0133b9c7cca = L.circle(
    [43.64798963805277, -79.38591744290932],
    { "bubblingMouseEvents": true, "color": "#62BA6B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#62BA6B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_3e6e4973f655c7e7f2570967e4eb0acd = L.popup({ "maxWidth": "100%" });



var html_be6c79454db485f8c1852d721e2b179c = $(`<div id="html_be6c79454db485f8c1852d721e2b179c" style="width: 100.0%; height: 100.0%;">2017-08-15</div>`)[0];
popup_3e6e4973f655c7e7f2570967e4eb0acd.setContent(html_be6c79454db485f8c1852d721e2b179c);



circle_49006e6313f0488793f9b0133b9c7cca.bindPopup(popup_3e6e4973f655c7e7f2570967e4eb0acd)
    ;




var circle_e7cea13db99a9b9c45bf625dfe606ab2 = L.circle(
    [43.64798963805277, -79.38591744290932],
    { "bubblingMouseEvents": true, "color": "#62BA6B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#62BA6B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_ad628e9386a52f4010a658ab20d3552d = L.popup({ "maxWidth": "100%" });



var html_caa093a5529aece5842bbda0985616ee = $(`<div id="html_caa093a5529aece5842bbda0985616ee" style="width: 100.0%; height: 100.0%;">2017-08-15</div>`)[0];
popup_ad628e9386a52f4010a658ab20d3552d.setContent(html_caa093a5529aece5842bbda0985616ee);



circle_e7cea13db99a9b9c45bf625dfe606ab2.bindPopup(popup_ad628e9386a52f4010a658ab20d3552d)
    ;




var circle_bca8f6d8521bbcbcb89dfe9441487576 = L.circle(
    [43.70087957658459, -79.60442528883412],
    { "bubblingMouseEvents": true, "color": "#B9B20B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#B9B20B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_96aafc1021f4c1f915b1eefaf445953d = L.popup({ "maxWidth": "100%" });



var html_1965d787ac6265ed51983342026a05af = $(`<div id="html_1965d787ac6265ed51983342026a05af" style="width: 100.0%; height: 100.0%;">2017-08-18</div>`)[0];
popup_96aafc1021f4c1f915b1eefaf445953d.setContent(html_1965d787ac6265ed51983342026a05af);



circle_bca8f6d8521bbcbcb89dfe9441487576.bindPopup(popup_96aafc1021f4c1f915b1eefaf445953d)
    ;




var circle_38c07ee9dd07e11252b452f817c19818 = L.circle(
    [43.70087957658459, -79.60442528883412],
    { "bubblingMouseEvents": true, "color": "#B9B20B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#B9B20B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_fedcc3a919fefdf7428e63681f3200a3 = L.popup({ "maxWidth": "100%" });



var html_56932536a2395be9705d8335dfae7ab3 = $(`<div id="html_56932536a2395be9705d8335dfae7ab3" style="width: 100.0%; height: 100.0%;">2017-08-18</div>`)[0];
popup_fedcc3a919fefdf7428e63681f3200a3.setContent(html_56932536a2395be9705d8335dfae7ab3);



circle_38c07ee9dd07e11252b452f817c19818.bindPopup(popup_fedcc3a919fefdf7428e63681f3200a3)
    ;




var circle_8f8fc27f456a23eac9954fb437989ca8 = L.circle(
    [43.70087957658459, -79.60442528883412],
    { "bubblingMouseEvents": true, "color": "#B9B20B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#B9B20B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_ed9b938c51cb5c506e70580504f63a29 = L.popup({ "maxWidth": "100%" });



var html_04c6511928b31f5a25c8b43069521cec = $(`<div id="html_04c6511928b31f5a25c8b43069521cec" style="width: 100.0%; height: 100.0%;">2017-08-18</div>`)[0];
popup_ed9b938c51cb5c506e70580504f63a29.setContent(html_04c6511928b31f5a25c8b43069521cec);



circle_8f8fc27f456a23eac9954fb437989ca8.bindPopup(popup_ed9b938c51cb5c506e70580504f63a29)
    ;




var circle_b74ba3c77b6dd3ab6e4bc99195302c51 = L.circle(
    [43.70161409984315, -79.60881958780325],
    { "bubblingMouseEvents": true, "color": "#73CAB8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#73CAB8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_627954b0a9e07a41071381aece0ee485 = L.popup({ "maxWidth": "100%" });



var html_c9f548b7e4b2931df8b781d069a46d7c = $(`<div id="html_c9f548b7e4b2931df8b781d069a46d7c" style="width: 100.0%; height: 100.0%;">2017-08-18</div>`)[0];
popup_627954b0a9e07a41071381aece0ee485.setContent(html_c9f548b7e4b2931df8b781d069a46d7c);



circle_b74ba3c77b6dd3ab6e4bc99195302c51.bindPopup(popup_627954b0a9e07a41071381aece0ee485)
    ;




var circle_bc0435aea802163de6f057ab35231386 = L.circle(
    [43.700751399871876, -79.60151526054771],
    { "bubblingMouseEvents": true, "color": "#B9B20B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#B9B20B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_2a5094a5a194d3e0ad75c78afd6885a3 = L.popup({ "maxWidth": "100%" });



var html_a163b1fa8081b8074d0b582aadba9b1a = $(`<div id="html_a163b1fa8081b8074d0b582aadba9b1a" style="width: 100.0%; height: 100.0%;">2017-08-18</div>`)[0];
popup_2a5094a5a194d3e0ad75c78afd6885a3.setContent(html_a163b1fa8081b8074d0b582aadba9b1a);



circle_bc0435aea802163de6f057ab35231386.bindPopup(popup_2a5094a5a194d3e0ad75c78afd6885a3)
    ;




var circle_69528cda8a2e482c8a16092bab42e8db = L.circle(
    [43.700751399871876, -79.60151526054771],
    { "bubblingMouseEvents": true, "color": "#B9B20B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#B9B20B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_e397db23f86786cd142fc2cdc7de2023 = L.popup({ "maxWidth": "100%" });



var html_10558c1dc0a0a0e677f73945956e2f8f = $(`<div id="html_10558c1dc0a0a0e677f73945956e2f8f" style="width: 100.0%; height: 100.0%;">2017-08-18</div>`)[0];
popup_e397db23f86786cd142fc2cdc7de2023.setContent(html_10558c1dc0a0a0e677f73945956e2f8f);



circle_69528cda8a2e482c8a16092bab42e8db.bindPopup(popup_e397db23f86786cd142fc2cdc7de2023)
    ;




var circle_21eaa1b99c440f905833bd750302369e = L.circle(
    [43.700751399871876, -79.60151526054771],
    { "bubblingMouseEvents": true, "color": "#B9B20B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#B9B20B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_ce0b3caaf0bb9808488cb8d9e1a4ab05 = L.popup({ "maxWidth": "100%" });



var html_db49cef8f869f721dccc84f425a46a43 = $(`<div id="html_db49cef8f869f721dccc84f425a46a43" style="width: 100.0%; height: 100.0%;">2017-08-18</div>`)[0];
popup_ce0b3caaf0bb9808488cb8d9e1a4ab05.setContent(html_db49cef8f869f721dccc84f425a46a43);



circle_21eaa1b99c440f905833bd750302369e.bindPopup(popup_ce0b3caaf0bb9808488cb8d9e1a4ab05)
    ;




var circle_3426f404cea38600807a530ff9321c4c = L.circle(
    [43.70023135853162, -79.6038160363968],
    { "bubblingMouseEvents": true, "color": "#B9B20B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#B9B20B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_a36fa63ec709c30af781481579f3de08 = L.popup({ "maxWidth": "100%" });



var html_d69a39718504936cabc973912c092858 = $(`<div id="html_d69a39718504936cabc973912c092858" style="width: 100.0%; height: 100.0%;">2017-08-18</div>`)[0];
popup_a36fa63ec709c30af781481579f3de08.setContent(html_d69a39718504936cabc973912c092858);



circle_3426f404cea38600807a530ff9321c4c.bindPopup(popup_a36fa63ec709c30af781481579f3de08)
    ;




var circle_adef256599a7f91276c01e911905f955 = L.circle(
    [43.70023135853162, -79.6038160363968],
    { "bubblingMouseEvents": true, "color": "#B9B20B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#B9B20B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_0b4ec83083e29e7b212bfbc6bf61d854 = L.popup({ "maxWidth": "100%" });



var html_2044b5430913e8b26a3523fece81d4c3 = $(`<div id="html_2044b5430913e8b26a3523fece81d4c3" style="width: 100.0%; height: 100.0%;">2017-08-18</div>`)[0];
popup_0b4ec83083e29e7b212bfbc6bf61d854.setContent(html_2044b5430913e8b26a3523fece81d4c3);



circle_adef256599a7f91276c01e911905f955.bindPopup(popup_0b4ec83083e29e7b212bfbc6bf61d854)
    ;




var circle_d95d75caf5a9c1bbe5499e8a0142160c = L.circle(
    [43.70023135853162, -79.6038160363968],
    { "bubblingMouseEvents": true, "color": "#B9B20B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#B9B20B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_f3fdc41142dbcec55d1591cabfc29103 = L.popup({ "maxWidth": "100%" });



var html_e8c18b7628347dc3f5ea1554c8c3d49b = $(`<div id="html_e8c18b7628347dc3f5ea1554c8c3d49b" style="width: 100.0%; height: 100.0%;">2017-08-18</div>`)[0];
popup_f3fdc41142dbcec55d1591cabfc29103.setContent(html_e8c18b7628347dc3f5ea1554c8c3d49b);



circle_d95d75caf5a9c1bbe5499e8a0142160c.bindPopup(popup_f3fdc41142dbcec55d1591cabfc29103)
    ;




var circle_7159f7a8d539ad75d76d2bca947da032 = L.circle(
    [43.70213189122834, -79.60913409944247],
    { "bubblingMouseEvents": true, "color": "#73CAB8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#73CAB8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_9babe620827f573a02450aa1111291f1 = L.popup({ "maxWidth": "100%" });



var html_181621cc588875e87ede91b28bab5112 = $(`<div id="html_181621cc588875e87ede91b28bab5112" style="width: 100.0%; height: 100.0%;">2017-08-18</div>`)[0];
popup_9babe620827f573a02450aa1111291f1.setContent(html_181621cc588875e87ede91b28bab5112);



circle_7159f7a8d539ad75d76d2bca947da032.bindPopup(popup_9babe620827f573a02450aa1111291f1)
    ;




var circle_c774fbdf1cb4f5e53f82b1b9086ea132 = L.circle(
    [43.699933364231256, -79.60155276143327],
    { "bubblingMouseEvents": true, "color": "#B9B20B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#B9B20B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_c5f2210856eb734fb250b30aa3240269 = L.popup({ "maxWidth": "100%" });



var html_8a8b54b7391acd00dbd083796bda5f0a = $(`<div id="html_8a8b54b7391acd00dbd083796bda5f0a" style="width: 100.0%; height: 100.0%;">2017-08-18</div>`)[0];
popup_c5f2210856eb734fb250b30aa3240269.setContent(html_8a8b54b7391acd00dbd083796bda5f0a);



circle_c774fbdf1cb4f5e53f82b1b9086ea132.bindPopup(popup_c5f2210856eb734fb250b30aa3240269)
    ;




var circle_10851cebca43df91500656edcf6a3b4b = L.circle(
    [43.699933364231256, -79.60155276143327],
    { "bubblingMouseEvents": true, "color": "#B9B20B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#B9B20B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_2502c937c871d60fc9bc2c1595ba01bc = L.popup({ "maxWidth": "100%" });



var html_1a4ba5b5d094234cf036727da1293666 = $(`<div id="html_1a4ba5b5d094234cf036727da1293666" style="width: 100.0%; height: 100.0%;">2017-08-18</div>`)[0];
popup_2502c937c871d60fc9bc2c1595ba01bc.setContent(html_1a4ba5b5d094234cf036727da1293666);



circle_10851cebca43df91500656edcf6a3b4b.bindPopup(popup_2502c937c871d60fc9bc2c1595ba01bc)
    ;




var circle_f55bdb00a2d707cf5407970edd129cb2 = L.circle(
    [43.699933364231256, -79.60155276143327],
    { "bubblingMouseEvents": true, "color": "#B9B20B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#B9B20B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_6592864878bcb25527789841e8f713be = L.popup({ "maxWidth": "100%" });



var html_543dead00ee377e858d466da6e7bc6b4 = $(`<div id="html_543dead00ee377e858d466da6e7bc6b4" style="width: 100.0%; height: 100.0%;">2017-08-18</div>`)[0];
popup_6592864878bcb25527789841e8f713be.setContent(html_543dead00ee377e858d466da6e7bc6b4);



circle_f55bdb00a2d707cf5407970edd129cb2.bindPopup(popup_6592864878bcb25527789841e8f713be)
    ;




var circle_663610b3e2cd68b30bfee81349e78030 = L.circle(
    [43.70031269233477, -79.60134851872257],
    { "bubblingMouseEvents": true, "color": "#B9B20B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#B9B20B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_654add13e6b3866adf3da118e850a91c = L.popup({ "maxWidth": "100%" });



var html_3006594b116a0c060c1c6ee7a7a2236d = $(`<div id="html_3006594b116a0c060c1c6ee7a7a2236d" style="width: 100.0%; height: 100.0%;">2017-08-18</div>`)[0];
popup_654add13e6b3866adf3da118e850a91c.setContent(html_3006594b116a0c060c1c6ee7a7a2236d);



circle_663610b3e2cd68b30bfee81349e78030.bindPopup(popup_654add13e6b3866adf3da118e850a91c)
    ;




var circle_205f11a18687f61272da444d276b8581 = L.circle(
    [43.645500737997786, -79.39094249833835],
    { "bubblingMouseEvents": true, "color": "#62BA6B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#62BA6B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_f614e1861779859b8a0843a4c7fd5c6c = L.popup({ "maxWidth": "100%" });



var html_1c5509bf418dbb83af0d36956c56f8f6 = $(`<div id="html_1c5509bf418dbb83af0d36956c56f8f6" style="width: 100.0%; height: 100.0%;">2018-05-31</div>`)[0];
popup_f614e1861779859b8a0843a4c7fd5c6c.setContent(html_1c5509bf418dbb83af0d36956c56f8f6);



circle_205f11a18687f61272da444d276b8581.bindPopup(popup_f614e1861779859b8a0843a4c7fd5c6c)
    ;




var circle_7809062d0210fddc8892441bdb8ddb31 = L.circle(
    [43.648497468847836, -79.38694550911549],
    { "bubblingMouseEvents": true, "color": "#62BA6B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#62BA6B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_5534c5f446324e2c5c2d98249cdd3df9 = L.popup({ "maxWidth": "100%" });



var html_0e4bc1e694326a48bfe19f060ea92676 = $(`<div id="html_0e4bc1e694326a48bfe19f060ea92676" style="width: 100.0%; height: 100.0%;">2018-06-04</div>`)[0];
popup_5534c5f446324e2c5c2d98249cdd3df9.setContent(html_0e4bc1e694326a48bfe19f060ea92676);



circle_7809062d0210fddc8892441bdb8ddb31.bindPopup(popup_5534c5f446324e2c5c2d98249cdd3df9)
    ;




var circle_e58fa89291685397c2b2932f6004f508 = L.circle(
    [43.648497468847836, -79.38694550911549],
    { "bubblingMouseEvents": true, "color": "#62BA6B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#62BA6B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_871967adb71438f9d2dda0a9569b1e4d = L.popup({ "maxWidth": "100%" });



var html_41690c4c658be4393109152ab96107b9 = $(`<div id="html_41690c4c658be4393109152ab96107b9" style="width: 100.0%; height: 100.0%;">2018-06-04</div>`)[0];
popup_871967adb71438f9d2dda0a9569b1e4d.setContent(html_41690c4c658be4393109152ab96107b9);



circle_e58fa89291685397c2b2932f6004f508.bindPopup(popup_871967adb71438f9d2dda0a9569b1e4d)
    ;




var circle_a093cda1f8a600b8641a2f22f15d619e = L.circle(
    [43.648497468847836, -79.38694550911549],
    { "bubblingMouseEvents": true, "color": "#62BA6B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#62BA6B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_52d4137e4d8a090619af3946b0314f5d = L.popup({ "maxWidth": "100%" });



var html_5d636a6c3ece0af6b84e286da0d5a4aa = $(`<div id="html_5d636a6c3ece0af6b84e286da0d5a4aa" style="width: 100.0%; height: 100.0%;">2018-06-04</div>`)[0];
popup_52d4137e4d8a090619af3946b0314f5d.setContent(html_5d636a6c3ece0af6b84e286da0d5a4aa);



circle_a093cda1f8a600b8641a2f22f15d619e.bindPopup(popup_52d4137e4d8a090619af3946b0314f5d)
    ;




var circle_c262c26ebb20262f65b938675ceb3c6f = L.circle(
    [43.642779194605, -79.38417576946894],
    { "bubblingMouseEvents": true, "color": "#62BA6B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#62BA6B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_3b4ea2bbefe55815f7f2cf998aeb9e4a = L.popup({ "maxWidth": "100%" });



var html_1a37986cbc6a0a2f4cdf741729e10ae5 = $(`<div id="html_1a37986cbc6a0a2f4cdf741729e10ae5" style="width: 100.0%; height: 100.0%;">2018-06-04</div>`)[0];
popup_3b4ea2bbefe55815f7f2cf998aeb9e4a.setContent(html_1a37986cbc6a0a2f4cdf741729e10ae5);



circle_c262c26ebb20262f65b938675ceb3c6f.bindPopup(popup_3b4ea2bbefe55815f7f2cf998aeb9e4a)
    ;




var circle_ad48e8aa0a08a2f2bca0a63a76cf0a9d = L.circle(
    [43.65061190801929, -79.3478762889646],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_c2101c8044306ee570446c717e2f2823 = L.popup({ "maxWidth": "100%" });



var html_1e5b90fe0eb20b23780f63d29a157c9c = $(`<div id="html_1e5b90fe0eb20b23780f63d29a157c9c" style="width: 100.0%; height: 100.0%;">2018-06-04</div>`)[0];
popup_c2101c8044306ee570446c717e2f2823.setContent(html_1e5b90fe0eb20b23780f63d29a157c9c);



circle_ad48e8aa0a08a2f2bca0a63a76cf0a9d.bindPopup(popup_c2101c8044306ee570446c717e2f2823)
    ;




var circle_655b3bf9bf9fb08a35546aa8398f1b23 = L.circle(
    [43.65061190801929, -79.3478762889646],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_c7f754a302921f2f072d9e06762f8f94 = L.popup({ "maxWidth": "100%" });



var html_83f4df6c6dcb99bfa46292577b7a0c0a = $(`<div id="html_83f4df6c6dcb99bfa46292577b7a0c0a" style="width: 100.0%; height: 100.0%;">2018-06-04</div>`)[0];
popup_c7f754a302921f2f072d9e06762f8f94.setContent(html_83f4df6c6dcb99bfa46292577b7a0c0a);



circle_655b3bf9bf9fb08a35546aa8398f1b23.bindPopup(popup_c7f754a302921f2f072d9e06762f8f94)
    ;




var circle_e271c249e3c6aa3740c6e59ab520ee6a = L.circle(
    [43.65061190801929, -79.3478762889646],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_74c251e59cf87d90bf7d6dead514f02a = L.popup({ "maxWidth": "100%" });



var html_58a341e620accee9f212b27e36aa509b = $(`<div id="html_58a341e620accee9f212b27e36aa509b" style="width: 100.0%; height: 100.0%;">2018-06-04</div>`)[0];
popup_74c251e59cf87d90bf7d6dead514f02a.setContent(html_58a341e620accee9f212b27e36aa509b);



circle_e271c249e3c6aa3740c6e59ab520ee6a.bindPopup(popup_74c251e59cf87d90bf7d6dead514f02a)
    ;




var circle_13a08be86183992f2620dd46616fceee = L.circle(
    [43.65016827285708, -79.34683031373629],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_5a581b192b58abde4610ca8b5df955e5 = L.popup({ "maxWidth": "100%" });



var html_c478e07abeb2719658604b5d52c4eb60 = $(`<div id="html_c478e07abeb2719658604b5d52c4eb60" style="width: 100.0%; height: 100.0%;">2018-06-04</div>`)[0];
popup_5a581b192b58abde4610ca8b5df955e5.setContent(html_c478e07abeb2719658604b5d52c4eb60);



circle_13a08be86183992f2620dd46616fceee.bindPopup(popup_5a581b192b58abde4610ca8b5df955e5)
    ;




var circle_0882126007b55027c009668c26c6c37d = L.circle(
    [43.6492257044742, -79.34907571848822],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_566fe3aeb2e36eb2c20e0fb1d198d1f1 = L.popup({ "maxWidth": "100%" });



var html_6edeb1ee1b512c8ceeb0a3fa04a93fb7 = $(`<div id="html_6edeb1ee1b512c8ceeb0a3fa04a93fb7" style="width: 100.0%; height: 100.0%;">2018-06-04</div>`)[0];
popup_566fe3aeb2e36eb2c20e0fb1d198d1f1.setContent(html_6edeb1ee1b512c8ceeb0a3fa04a93fb7);



circle_0882126007b55027c009668c26c6c37d.bindPopup(popup_566fe3aeb2e36eb2c20e0fb1d198d1f1)
    ;




var circle_a6ac023584e40d2149296fbb98252cbe = L.circle(
    [43.647809880493135, -79.35402451645072],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_2b7b736fa5428efccaa63e37bd75e4c2 = L.popup({ "maxWidth": "100%" });



var html_bb820c9bad7eadbdc339d846e8e52983 = $(`<div id="html_bb820c9bad7eadbdc339d846e8e52983" style="width: 100.0%; height: 100.0%;">2018-06-04</div>`)[0];
popup_2b7b736fa5428efccaa63e37bd75e4c2.setContent(html_bb820c9bad7eadbdc339d846e8e52983);



circle_a6ac023584e40d2149296fbb98252cbe.bindPopup(popup_2b7b736fa5428efccaa63e37bd75e4c2)
    ;




var circle_d64131a372809cc73cd1ac857a80e6b6 = L.circle(
    [43.65045905696733, -79.34829498316702],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_0da569eb45e60b7bd3f18a607b8a61b1 = L.popup({ "maxWidth": "100%" });



var html_bbf0942654d1d6f8a890ed032de40260 = $(`<div id="html_bbf0942654d1d6f8a890ed032de40260" style="width: 100.0%; height: 100.0%;">2018-06-04</div>`)[0];
popup_0da569eb45e60b7bd3f18a607b8a61b1.setContent(html_bbf0942654d1d6f8a890ed032de40260);



circle_d64131a372809cc73cd1ac857a80e6b6.bindPopup(popup_0da569eb45e60b7bd3f18a607b8a61b1)
    ;




var circle_1673949575108f48c1e432755e562109 = L.circle(
    [43.65045905696733, -79.34829498316702],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_c7d9da3c054dd660c9ed09ed030c3338 = L.popup({ "maxWidth": "100%" });



var html_eeac8a064db3f832f2d92cd28778948a = $(`<div id="html_eeac8a064db3f832f2d92cd28778948a" style="width: 100.0%; height: 100.0%;">2018-06-04</div>`)[0];
popup_c7d9da3c054dd660c9ed09ed030c3338.setContent(html_eeac8a064db3f832f2d92cd28778948a);



circle_1673949575108f48c1e432755e562109.bindPopup(popup_c7d9da3c054dd660c9ed09ed030c3338)
    ;




var circle_2a25a448790152e4bce03dde40d2dd55 = L.circle(
    [43.65045905696733, -79.34829498316702],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_aeda779fa9f23f00cb49b1f0b3f06791 = L.popup({ "maxWidth": "100%" });



var html_93bc8526e6193399238a937b55004cdc = $(`<div id="html_93bc8526e6193399238a937b55004cdc" style="width: 100.0%; height: 100.0%;">2018-06-04</div>`)[0];
popup_aeda779fa9f23f00cb49b1f0b3f06791.setContent(html_93bc8526e6193399238a937b55004cdc);



circle_2a25a448790152e4bce03dde40d2dd55.bindPopup(popup_aeda779fa9f23f00cb49b1f0b3f06791)
    ;




var circle_c19bb266187743b89f5ce1fa4829ab8d = L.circle(
    [43.65012629266601, -79.32832781839512],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_cf01e55f267a7da6cd39c1e1ba5b6d64 = L.popup({ "maxWidth": "100%" });



var html_f5ad797f757029c0a216afef961ce997 = $(`<div id="html_f5ad797f757029c0a216afef961ce997" style="width: 100.0%; height: 100.0%;">2018-06-04</div>`)[0];
popup_cf01e55f267a7da6cd39c1e1ba5b6d64.setContent(html_f5ad797f757029c0a216afef961ce997);



circle_c19bb266187743b89f5ce1fa4829ab8d.bindPopup(popup_cf01e55f267a7da6cd39c1e1ba5b6d64)
    ;




var circle_7fbed5de529248af9723cadad04dbb75 = L.circle(
    [43.65077905233666, -79.32669479118081],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_ee6389c97ae70b267510ac864b70c8f1 = L.popup({ "maxWidth": "100%" });



var html_a75129964e1e6e6e16d4618e4e686ea8 = $(`<div id="html_a75129964e1e6e6e16d4618e4e686ea8" style="width: 100.0%; height: 100.0%;">2018-06-04</div>`)[0];
popup_ee6389c97ae70b267510ac864b70c8f1.setContent(html_a75129964e1e6e6e16d4618e4e686ea8);



circle_7fbed5de529248af9723cadad04dbb75.bindPopup(popup_ee6389c97ae70b267510ac864b70c8f1)
    ;




var circle_d23e9bfef65864526f32211651f766a9 = L.circle(
    [43.656199999421226, -79.31100399655811],
    { "bubblingMouseEvents": true, "color": "#980020", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#980020", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_5481063480d99c0673f16db25d409051 = L.popup({ "maxWidth": "100%" });



var html_4a357d236b0646510be03f616ceaf2fa = $(`<div id="html_4a357d236b0646510be03f616ceaf2fa" style="width: 100.0%; height: 100.0%;">2018-06-04</div>`)[0];
popup_5481063480d99c0673f16db25d409051.setContent(html_4a357d236b0646510be03f616ceaf2fa);



circle_d23e9bfef65864526f32211651f766a9.bindPopup(popup_5481063480d99c0673f16db25d409051)
    ;




var circle_521c01afe1e8235aab7d6585096a1971 = L.circle(
    [43.647488866151924, -79.49591088811216],
    { "bubblingMouseEvents": true, "color": "#78F967", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#78F967", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_1f99b95941b1dda2623d955c98975c3a = L.popup({ "maxWidth": "100%" });



var html_2d4f22163fc0775805c9ba584819c298 = $(`<div id="html_2d4f22163fc0775805c9ba584819c298" style="width: 100.0%; height: 100.0%;">2018-06-07</div>`)[0];
popup_1f99b95941b1dda2623d955c98975c3a.setContent(html_2d4f22163fc0775805c9ba584819c298);



circle_521c01afe1e8235aab7d6585096a1971.bindPopup(popup_1f99b95941b1dda2623d955c98975c3a)
    ;




var circle_9bf7b442f40b4a376d8b6378256c4ccc = L.circle(
    [43.646860882192435, -79.49594654296526],
    { "bubblingMouseEvents": true, "color": "#78F967", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#78F967", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_87f83fb37f3949b55152967218dc38f8 = L.popup({ "maxWidth": "100%" });



var html_8c9878cf21b009b580ef0ecfa03ed3e6 = $(`<div id="html_8c9878cf21b009b580ef0ecfa03ed3e6" style="width: 100.0%; height: 100.0%;">2018-06-07</div>`)[0];
popup_87f83fb37f3949b55152967218dc38f8.setContent(html_8c9878cf21b009b580ef0ecfa03ed3e6);



circle_9bf7b442f40b4a376d8b6378256c4ccc.bindPopup(popup_87f83fb37f3949b55152967218dc38f8)
    ;




var circle_bdc5a83892987c332f506424ee40213f = L.circle(
    [43.646069574591124, -79.49458410664631],
    { "bubblingMouseEvents": true, "color": "#78F967", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#78F967", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_4fbd948b90313487b2e0e411b2b465ba = L.popup({ "maxWidth": "100%" });



var html_fc49a67a8cc11b078ac0e8495eec25d4 = $(`<div id="html_fc49a67a8cc11b078ac0e8495eec25d4" style="width: 100.0%; height: 100.0%;">2018-06-07</div>`)[0];
popup_4fbd948b90313487b2e0e411b2b465ba.setContent(html_fc49a67a8cc11b078ac0e8495eec25d4);



circle_bdc5a83892987c332f506424ee40213f.bindPopup(popup_4fbd948b90313487b2e0e411b2b465ba)
    ;




var circle_c7c9e12a2cbcdc6af5219b483ca24c25 = L.circle(
    [43.646069574591124, -79.49458410664631],
    { "bubblingMouseEvents": true, "color": "#78F967", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#78F967", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_458864162ec52b30354ba497a26c4a37 = L.popup({ "maxWidth": "100%" });



var html_9e9765aee80e693a1decf119a5094687 = $(`<div id="html_9e9765aee80e693a1decf119a5094687" style="width: 100.0%; height: 100.0%;">2018-06-07</div>`)[0];
popup_458864162ec52b30354ba497a26c4a37.setContent(html_9e9765aee80e693a1decf119a5094687);



circle_c7c9e12a2cbcdc6af5219b483ca24c25.bindPopup(popup_458864162ec52b30354ba497a26c4a37)
    ;




var circle_27927df37a39138533e8c51853bc61d5 = L.circle(
    [43.646069574591124, -79.49458410664631],
    { "bubblingMouseEvents": true, "color": "#78F967", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#78F967", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_b96e2af4d7311f36518e1bcd491d14e1 = L.popup({ "maxWidth": "100%" });



var html_afce9b76863e7b0f96f178d43488b7c3 = $(`<div id="html_afce9b76863e7b0f96f178d43488b7c3" style="width: 100.0%; height: 100.0%;">2018-06-07</div>`)[0];
popup_b96e2af4d7311f36518e1bcd491d14e1.setContent(html_afce9b76863e7b0f96f178d43488b7c3);



circle_27927df37a39138533e8c51853bc61d5.bindPopup(popup_b96e2af4d7311f36518e1bcd491d14e1)
    ;




var circle_43bc2c39653098f1987b3c4f6c556436 = L.circle(
    [43.64072024156178, -79.49066105603912],
    { "bubblingMouseEvents": true, "color": "#D220DA", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D220DA", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_0b40b9a464631d084e39553128a7d7ad = L.popup({ "maxWidth": "100%" });



var html_00467e26c95d429e11cfb3ad72923f4b = $(`<div id="html_00467e26c95d429e11cfb3ad72923f4b" style="width: 100.0%; height: 100.0%;">2018-06-07</div>`)[0];
popup_0b40b9a464631d084e39553128a7d7ad.setContent(html_00467e26c95d429e11cfb3ad72923f4b);



circle_43bc2c39653098f1987b3c4f6c556436.bindPopup(popup_0b40b9a464631d084e39553128a7d7ad)
    ;




var circle_f85050d6ef96ebeed8d1f9e4f1ff2a3f = L.circle(
    [43.635785103525684, -79.48650746692891],
    { "bubblingMouseEvents": true, "color": "#D4D163", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D4D163", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_ae1b40eb046b5ebdea1194040e8b75e3 = L.popup({ "maxWidth": "100%" });



var html_94fc7a28037c59c13f34b4b2721e4faa = $(`<div id="html_94fc7a28037c59c13f34b4b2721e4faa" style="width: 100.0%; height: 100.0%;">2018-06-07</div>`)[0];
popup_ae1b40eb046b5ebdea1194040e8b75e3.setContent(html_94fc7a28037c59c13f34b4b2721e4faa);



circle_f85050d6ef96ebeed8d1f9e4f1ff2a3f.bindPopup(popup_ae1b40eb046b5ebdea1194040e8b75e3)
    ;




var circle_2a8eb9e6530f40ef3280493ad76236a4 = L.circle(
    [43.6325363649845, -79.48267775542773],
    { "bubblingMouseEvents": true, "color": "#D4D163", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D4D163", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_52ae61f53afec0373eae4d59d6e034a8 = L.popup({ "maxWidth": "100%" });



var html_102887a2474c159edad349b35998b152 = $(`<div id="html_102887a2474c159edad349b35998b152" style="width: 100.0%; height: 100.0%;">2018-06-07</div>`)[0];
popup_52ae61f53afec0373eae4d59d6e034a8.setContent(html_102887a2474c159edad349b35998b152);



circle_2a8eb9e6530f40ef3280493ad76236a4.bindPopup(popup_52ae61f53afec0373eae4d59d6e034a8)
    ;




var circle_3fa9fbf0eb2804763c10bf44c67367af = L.circle(
    [43.63303196427027, -79.48337478519352],
    { "bubblingMouseEvents": true, "color": "#D4D163", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D4D163", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_458f507c91129b026381b683f7e7ed35 = L.popup({ "maxWidth": "100%" });



var html_eae6c72a22bf3f8aa98b6b50726db975 = $(`<div id="html_eae6c72a22bf3f8aa98b6b50726db975" style="width: 100.0%; height: 100.0%;">2018-06-07</div>`)[0];
popup_458f507c91129b026381b683f7e7ed35.setContent(html_eae6c72a22bf3f8aa98b6b50726db975);



circle_3fa9fbf0eb2804763c10bf44c67367af.bindPopup(popup_458f507c91129b026381b683f7e7ed35)
    ;




var circle_0a3e549787095eef2a79c2998230ccd2 = L.circle(
    [43.63303196427027, -79.48337478519352],
    { "bubblingMouseEvents": true, "color": "#D4D163", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D4D163", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_52654431cac2b6c2c73536f6adc5d66c = L.popup({ "maxWidth": "100%" });



var html_e02a34ab05cf279a6ee0d76d3a461b7f = $(`<div id="html_e02a34ab05cf279a6ee0d76d3a461b7f" style="width: 100.0%; height: 100.0%;">2018-06-07</div>`)[0];
popup_52654431cac2b6c2c73536f6adc5d66c.setContent(html_e02a34ab05cf279a6ee0d76d3a461b7f);



circle_0a3e549787095eef2a79c2998230ccd2.bindPopup(popup_52654431cac2b6c2c73536f6adc5d66c)
    ;




var circle_4e473f327bb95c6d2717480dbb2ffc35 = L.circle(
    [43.63303196427027, -79.48337478519352],
    { "bubblingMouseEvents": true, "color": "#D4D163", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D4D163", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_5a8e9e2f1e752170382adb23e1e7c86a = L.popup({ "maxWidth": "100%" });



var html_e8a4b62dde326712fcd4f91e6afc3469 = $(`<div id="html_e8a4b62dde326712fcd4f91e6afc3469" style="width: 100.0%; height: 100.0%;">2018-06-07</div>`)[0];
popup_5a8e9e2f1e752170382adb23e1e7c86a.setContent(html_e8a4b62dde326712fcd4f91e6afc3469);



circle_4e473f327bb95c6d2717480dbb2ffc35.bindPopup(popup_5a8e9e2f1e752170382adb23e1e7c86a)
    ;




var circle_63bc91930a3a03e34e36000f748b4bb5 = L.circle(
    [43.634936322214145, -79.48615445989105],
    { "bubblingMouseEvents": true, "color": "#D4D163", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D4D163", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_cfa61e8fa73970e29eeb0044e34703cf = L.popup({ "maxWidth": "100%" });



var html_f1fbb44452b4b32e3496c2bba1f93e7e = $(`<div id="html_f1fbb44452b4b32e3496c2bba1f93e7e" style="width: 100.0%; height: 100.0%;">2018-06-07</div>`)[0];
popup_cfa61e8fa73970e29eeb0044e34703cf.setContent(html_f1fbb44452b4b32e3496c2bba1f93e7e);



circle_63bc91930a3a03e34e36000f748b4bb5.bindPopup(popup_cfa61e8fa73970e29eeb0044e34703cf)
    ;




var circle_bc2cb6016dafc15f8d7e026014fd5f0b = L.circle(
    [43.75958721785144, -79.4777143700846],
    { "bubblingMouseEvents": true, "color": "#354E4C", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#354E4C", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_c5811deb7f833cd7f8666e707a4c4fff = L.popup({ "maxWidth": "100%" });



var html_0801194f937a2f47efeb857dbbaf37ec = $(`<div id="html_0801194f937a2f47efeb857dbbaf37ec" style="width: 100.0%; height: 100.0%;">2018-06-21</div>`)[0];
popup_c5811deb7f833cd7f8666e707a4c4fff.setContent(html_0801194f937a2f47efeb857dbbaf37ec);



circle_bc2cb6016dafc15f8d7e026014fd5f0b.bindPopup(popup_c5811deb7f833cd7f8666e707a4c4fff)
    ;




var circle_e4a3aa2f99a2f82a01f58859b571a444 = L.circle(
    [43.76044897810543, -79.47566775714914],
    { "bubblingMouseEvents": true, "color": "#354E4C", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#354E4C", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_74656b52e01cbc402e57d318e4f81552 = L.popup({ "maxWidth": "100%" });



var html_5a235d6e1d15b87d9036398f86ebac45 = $(`<div id="html_5a235d6e1d15b87d9036398f86ebac45" style="width: 100.0%; height: 100.0%;">2018-06-21</div>`)[0];
popup_74656b52e01cbc402e57d318e4f81552.setContent(html_5a235d6e1d15b87d9036398f86ebac45);



circle_e4a3aa2f99a2f82a01f58859b571a444.bindPopup(popup_74656b52e01cbc402e57d318e4f81552)
    ;




var circle_443cf9843873372d039c826760ade0e3 = L.circle(
    [43.75918280230571, -79.59086966067568],
    { "bubblingMouseEvents": true, "color": "#EBACB4", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#EBACB4", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_9b82113d249a2ee09333bdf545e6df6f = L.popup({ "maxWidth": "100%" });



var html_067aed84ae10258bce8dbe57b7f22053 = $(`<div id="html_067aed84ae10258bce8dbe57b7f22053" style="width: 100.0%; height: 100.0%;">2018-06-28</div>`)[0];
popup_9b82113d249a2ee09333bdf545e6df6f.setContent(html_067aed84ae10258bce8dbe57b7f22053);



circle_443cf9843873372d039c826760ade0e3.bindPopup(popup_9b82113d249a2ee09333bdf545e6df6f)
    ;




var circle_360124ded220c9c3a2e7b468f5442611 = L.circle(
    [43.76132084780161, -79.58119845324313],
    { "bubblingMouseEvents": true, "color": "#EBACB4", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#EBACB4", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_13af6c3a3bda7383f5d6d9fbc6037108 = L.popup({ "maxWidth": "100%" });



var html_0a5fe212813d8d590207f86224bfae1d = $(`<div id="html_0a5fe212813d8d590207f86224bfae1d" style="width: 100.0%; height: 100.0%;">2018-06-28</div>`)[0];
popup_13af6c3a3bda7383f5d6d9fbc6037108.setContent(html_0a5fe212813d8d590207f86224bfae1d);



circle_360124ded220c9c3a2e7b468f5442611.bindPopup(popup_13af6c3a3bda7383f5d6d9fbc6037108)
    ;




var circle_d5caf7a2957730e832f19e59a16615d8 = L.circle(
    [43.759918793915745, -79.58784022106876],
    { "bubblingMouseEvents": true, "color": "#EBACB4", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#EBACB4", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_cab5d3f0921c363bda1f591ea96a510f = L.popup({ "maxWidth": "100%" });



var html_086b69910c244648202a9095cd9b4496 = $(`<div id="html_086b69910c244648202a9095cd9b4496" style="width: 100.0%; height: 100.0%;">2018-06-28</div>`)[0];
popup_cab5d3f0921c363bda1f591ea96a510f.setContent(html_086b69910c244648202a9095cd9b4496);



circle_d5caf7a2957730e832f19e59a16615d8.bindPopup(popup_cab5d3f0921c363bda1f591ea96a510f)
    ;




var circle_35715276e15134b668981764a94ec098 = L.circle(
    [43.663565875185874, -79.46294850962204],
    { "bubblingMouseEvents": true, "color": "#FF20FF", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#FF20FF", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_a1f9e70f5d1e89ed78c8a274e7e4e33a = L.popup({ "maxWidth": "100%" });



var html_1f826426407288fc46c819f2ed7cba9b = $(`<div id="html_1f826426407288fc46c819f2ed7cba9b" style="width: 100.0%; height: 100.0%;">2018-06-29</div>`)[0];
popup_a1f9e70f5d1e89ed78c8a274e7e4e33a.setContent(html_1f826426407288fc46c819f2ed7cba9b);



circle_35715276e15134b668981764a94ec098.bindPopup(popup_a1f9e70f5d1e89ed78c8a274e7e4e33a)
    ;




var circle_aa841dbc65ead1c1f5020e17730912f7 = L.circle(
    [43.63561069076503, -79.48407219098883],
    { "bubblingMouseEvents": true, "color": "#D4D163", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D4D163", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_b6372555cdd87b2e514e90a669924bf8 = L.popup({ "maxWidth": "100%" });



var html_6e78acdbaf92179b65902373f09672c5 = $(`<div id="html_6e78acdbaf92179b65902373f09672c5" style="width: 100.0%; height: 100.0%;">2018-06-29</div>`)[0];
popup_b6372555cdd87b2e514e90a669924bf8.setContent(html_6e78acdbaf92179b65902373f09672c5);



circle_aa841dbc65ead1c1f5020e17730912f7.bindPopup(popup_b6372555cdd87b2e514e90a669924bf8)
    ;




var circle_ad5ee6399e3203001c3649e6fc7d330d = L.circle(
    [43.64045091671566, -79.45531427662166],
    { "bubblingMouseEvents": true, "color": "#409E47", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#409E47", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_7fdb8232544a235a7692e7ca0810cc1c = L.popup({ "maxWidth": "100%" });



var html_8f6999a137216085d9fe7d367fee29d3 = $(`<div id="html_8f6999a137216085d9fe7d367fee29d3" style="width: 100.0%; height: 100.0%;">2018-06-29</div>`)[0];
popup_7fdb8232544a235a7692e7ca0810cc1c.setContent(html_8f6999a137216085d9fe7d367fee29d3);



circle_ad5ee6399e3203001c3649e6fc7d330d.bindPopup(popup_7fdb8232544a235a7692e7ca0810cc1c)
    ;




var circle_0927c57a1eb480b7f77ae8eba5bd102e = L.circle(
    [43.64045091671566, -79.45531427662166],
    { "bubblingMouseEvents": true, "color": "#409E47", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#409E47", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_de76a6a6e5781cc51bb51b378fefa0e0 = L.popup({ "maxWidth": "100%" });



var html_c0b9848baa812be893021bdf43c662f9 = $(`<div id="html_c0b9848baa812be893021bdf43c662f9" style="width: 100.0%; height: 100.0%;">2018-06-29</div>`)[0];
popup_de76a6a6e5781cc51bb51b378fefa0e0.setContent(html_c0b9848baa812be893021bdf43c662f9);



circle_0927c57a1eb480b7f77ae8eba5bd102e.bindPopup(popup_de76a6a6e5781cc51bb51b378fefa0e0)
    ;




var circle_1c81fa5bfc722f8cc5225e97ce300bd3 = L.circle(
    [43.64045091671566, -79.45531427662166],
    { "bubblingMouseEvents": true, "color": "#409E47", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#409E47", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_e3a5d6704d86b032630594b65aa859e1 = L.popup({ "maxWidth": "100%" });



var html_92db68147bd3bea7f80039f7eee6da83 = $(`<div id="html_92db68147bd3bea7f80039f7eee6da83" style="width: 100.0%; height: 100.0%;">2018-06-29</div>`)[0];
popup_e3a5d6704d86b032630594b65aa859e1.setContent(html_92db68147bd3bea7f80039f7eee6da83);



circle_1c81fa5bfc722f8cc5225e97ce300bd3.bindPopup(popup_e3a5d6704d86b032630594b65aa859e1)
    ;




var circle_b3ec698c47793b0f4bf218dc25b5e2e4 = L.circle(
    [43.63995336150416, -79.45538859289587],
    { "bubblingMouseEvents": true, "color": "#409E47", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#409E47", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_539e9bd69d053c1b94df8fe073efe576 = L.popup({ "maxWidth": "100%" });



var html_ac88d1d87fd07ea01bf90f91ceb4a68e = $(`<div id="html_ac88d1d87fd07ea01bf90f91ceb4a68e" style="width: 100.0%; height: 100.0%;">2018-06-29</div>`)[0];
popup_539e9bd69d053c1b94df8fe073efe576.setContent(html_ac88d1d87fd07ea01bf90f91ceb4a68e);



circle_b3ec698c47793b0f4bf218dc25b5e2e4.bindPopup(popup_539e9bd69d053c1b94df8fe073efe576)
    ;




var circle_47e3b1a2d4bde755ee686bfbdafbc6fa = L.circle(
    [43.63995336150416, -79.45538859289587],
    { "bubblingMouseEvents": true, "color": "#409E47", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#409E47", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_8e99c78a717687ff34dade1bd7df511a = L.popup({ "maxWidth": "100%" });



var html_afa8ce0df94d5cc6920372ce41824362 = $(`<div id="html_afa8ce0df94d5cc6920372ce41824362" style="width: 100.0%; height: 100.0%;">2018-06-29</div>`)[0];
popup_8e99c78a717687ff34dade1bd7df511a.setContent(html_afa8ce0df94d5cc6920372ce41824362);



circle_47e3b1a2d4bde755ee686bfbdafbc6fa.bindPopup(popup_8e99c78a717687ff34dade1bd7df511a)
    ;




var circle_eeaa83505d567587dbe0f96e8ba7cc32 = L.circle(
    [43.63995336150416, -79.45538859289587],
    { "bubblingMouseEvents": true, "color": "#409E47", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#409E47", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_d25ac639c20a20a27465eb5e6a712932 = L.popup({ "maxWidth": "100%" });



var html_722aee49c174eceb1ecbddf77951ba70 = $(`<div id="html_722aee49c174eceb1ecbddf77951ba70" style="width: 100.0%; height: 100.0%;">2018-06-29</div>`)[0];
popup_d25ac639c20a20a27465eb5e6a712932.setContent(html_722aee49c174eceb1ecbddf77951ba70);



circle_eeaa83505d567587dbe0f96e8ba7cc32.bindPopup(popup_d25ac639c20a20a27465eb5e6a712932)
    ;




var circle_b1342a6e02a6c0fbee067714a0668341 = L.circle(
    [43.60161665983061, -79.69358166690371],
    { "bubblingMouseEvents": true, "color": "#4F4343", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#4F4343", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_eba3b783d5d492b86033703ed238b272 = L.popup({ "maxWidth": "100%" });



var html_3cb1d62fe4334f2837c54044464bf291 = $(`<div id="html_3cb1d62fe4334f2837c54044464bf291" style="width: 100.0%; height: 100.0%;">2018-07-06</div>`)[0];
popup_eba3b783d5d492b86033703ed238b272.setContent(html_3cb1d62fe4334f2837c54044464bf291);



circle_b1342a6e02a6c0fbee067714a0668341.bindPopup(popup_eba3b783d5d492b86033703ed238b272)
    ;




var circle_7748d2098c20f312652b87607a7f6e49 = L.circle(
    [43.60327658752051, -79.69578114750864],
    { "bubblingMouseEvents": true, "color": "#4F4343", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#4F4343", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_5d65ca5af2846a15f7e9f0a5c65f01c6 = L.popup({ "maxWidth": "100%" });



var html_1b7f4e7748e961b35b22e8023c093fb4 = $(`<div id="html_1b7f4e7748e961b35b22e8023c093fb4" style="width: 100.0%; height: 100.0%;">2018-07-06</div>`)[0];
popup_5d65ca5af2846a15f7e9f0a5c65f01c6.setContent(html_1b7f4e7748e961b35b22e8023c093fb4);



circle_7748d2098c20f312652b87607a7f6e49.bindPopup(popup_5d65ca5af2846a15f7e9f0a5c65f01c6)
    ;




var circle_054b39bd145718785702b302284b1d2d = L.circle(
    [43.702910893212454, -79.60996455784496],
    { "bubblingMouseEvents": true, "color": "#73CAB8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#73CAB8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_2842f12ac7cbf8445b6786ebbcc83e77 = L.popup({ "maxWidth": "100%" });



var html_e978ca652e8b45bfeb291e8bc0e7f64f = $(`<div id="html_e978ca652e8b45bfeb291e8bc0e7f64f" style="width: 100.0%; height: 100.0%;">2018-07-10</div>`)[0];
popup_2842f12ac7cbf8445b6786ebbcc83e77.setContent(html_e978ca652e8b45bfeb291e8bc0e7f64f);



circle_054b39bd145718785702b302284b1d2d.bindPopup(popup_2842f12ac7cbf8445b6786ebbcc83e77)
    ;




var circle_e4fd9a3ec41443eea97101348e7cec07 = L.circle(
    [43.700231454096716, -79.60171745780724],
    { "bubblingMouseEvents": true, "color": "#B9B20B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#B9B20B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_8e0b091b2ef6e1bdaf5d2fb3de0f6bb9 = L.popup({ "maxWidth": "100%" });



var html_1293f0895654d7404cf88bab9566b09b = $(`<div id="html_1293f0895654d7404cf88bab9566b09b" style="width: 100.0%; height: 100.0%;">2018-07-10</div>`)[0];
popup_8e0b091b2ef6e1bdaf5d2fb3de0f6bb9.setContent(html_1293f0895654d7404cf88bab9566b09b);



circle_e4fd9a3ec41443eea97101348e7cec07.bindPopup(popup_8e0b091b2ef6e1bdaf5d2fb3de0f6bb9)
    ;




var circle_1c6802dda4a6957cfbe19a05efc26c53 = L.circle(
    [43.69977392922642, -79.6016877193579],
    { "bubblingMouseEvents": true, "color": "#B9B20B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#B9B20B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_6d8de027dfadff7dc93f3deb8df6a154 = L.popup({ "maxWidth": "100%" });



var html_fff841931f58948ed11b6e923fb4d894 = $(`<div id="html_fff841931f58948ed11b6e923fb4d894" style="width: 100.0%; height: 100.0%;">2018-07-10</div>`)[0];
popup_6d8de027dfadff7dc93f3deb8df6a154.setContent(html_fff841931f58948ed11b6e923fb4d894);



circle_1c6802dda4a6957cfbe19a05efc26c53.bindPopup(popup_6d8de027dfadff7dc93f3deb8df6a154)
    ;




var circle_f093c5c720e30cf6fa791dfb0bb3795d = L.circle(
    [43.66040102877623, -79.39732696050986],
    { "bubblingMouseEvents": true, "color": "#CB3ADF", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#CB3ADF", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_9b61c84822f7b808df2b067159a6c872 = L.popup({ "maxWidth": "100%" });



var html_8ba121445714c27f886f9863bb783b71 = $(`<div id="html_8ba121445714c27f886f9863bb783b71" style="width: 100.0%; height: 100.0%;">2019-05-16</div>`)[0];
popup_9b61c84822f7b808df2b067159a6c872.setContent(html_8ba121445714c27f886f9863bb783b71);



circle_f093c5c720e30cf6fa791dfb0bb3795d.bindPopup(popup_9b61c84822f7b808df2b067159a6c872)
    ;




var circle_54efc288c8d2e08b1dd819fc1c290fc2 = L.circle(
    [43.64637890339091, -79.38566220729962],
    { "bubblingMouseEvents": true, "color": "#62BA6B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#62BA6B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_5c032603cc7d2da0b3c9b592dbbafc68 = L.popup({ "maxWidth": "100%" });



var html_65bfc997b901fd3bb0f30e75d0d50ea1 = $(`<div id="html_65bfc997b901fd3bb0f30e75d0d50ea1" style="width: 100.0%; height: 100.0%;">2019-05-16</div>`)[0];
popup_5c032603cc7d2da0b3c9b592dbbafc68.setContent(html_65bfc997b901fd3bb0f30e75d0d50ea1);



circle_54efc288c8d2e08b1dd819fc1c290fc2.bindPopup(popup_5c032603cc7d2da0b3c9b592dbbafc68)
    ;




var circle_fb06e5fe0b4a0c2cfa9d7f634373c9fe = L.circle(
    [43.65710774158943, -79.44894386752036],
    { "bubblingMouseEvents": true, "color": "#C1EA98", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#C1EA98", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_d43b14a7b7449855529dce30b7116d18 = L.popup({ "maxWidth": "100%" });



var html_0656515629f1d8ea64c5b7bb48fed4f6 = $(`<div id="html_0656515629f1d8ea64c5b7bb48fed4f6" style="width: 100.0%; height: 100.0%;">2019-05-16</div>`)[0];
popup_d43b14a7b7449855529dce30b7116d18.setContent(html_0656515629f1d8ea64c5b7bb48fed4f6);



circle_fb06e5fe0b4a0c2cfa9d7f634373c9fe.bindPopup(popup_d43b14a7b7449855529dce30b7116d18)
    ;




var circle_5ea3ed1e69b1d4e5b8bcbf546ad4f6b9 = L.circle(
    [43.66710123723406, -79.37054656552866],
    { "bubblingMouseEvents": true, "color": "#1FCF8F", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#1FCF8F", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_944907f7a427dee9467b1c9a75ec5fd4 = L.popup({ "maxWidth": "100%" });



var html_5bc1c4a10a3ac378b87c0dade9ffdb9e = $(`<div id="html_5bc1c4a10a3ac378b87c0dade9ffdb9e" style="width: 100.0%; height: 100.0%;">2019-05-17</div>`)[0];
popup_944907f7a427dee9467b1c9a75ec5fd4.setContent(html_5bc1c4a10a3ac378b87c0dade9ffdb9e);



circle_5ea3ed1e69b1d4e5b8bcbf546ad4f6b9.bindPopup(popup_944907f7a427dee9467b1c9a75ec5fd4)
    ;




var circle_f1c6bcdcd621c143fa733a5f5999f67b = L.circle(
    [43.70149090754419, -79.33164727805263],
    { "bubblingMouseEvents": true, "color": "#721B5D", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#721B5D", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_602f2058511b304b4fa3458c8599ee5b = L.popup({ "maxWidth": "100%" });



var html_af2125115821e24c7bec92f7586d5482 = $(`<div id="html_af2125115821e24c7bec92f7586d5482" style="width: 100.0%; height: 100.0%;">2019-05-17</div>`)[0];
popup_602f2058511b304b4fa3458c8599ee5b.setContent(html_af2125115821e24c7bec92f7586d5482);



circle_f1c6bcdcd621c143fa733a5f5999f67b.bindPopup(popup_602f2058511b304b4fa3458c8599ee5b)
    ;




var circle_1b1d825132fe3270da79f8ad160032dd = L.circle(
    [43.649450361900996, -79.35624885970144],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_e45ffe76fced6f4bce59824676ccc146 = L.popup({ "maxWidth": "100%" });



var html_1c11a167622dc4989067c8bef8c206fe = $(`<div id="html_1c11a167622dc4989067c8bef8c206fe" style="width: 100.0%; height: 100.0%;">2019-05-27</div>`)[0];
popup_e45ffe76fced6f4bce59824676ccc146.setContent(html_1c11a167622dc4989067c8bef8c206fe);



circle_1b1d825132fe3270da79f8ad160032dd.bindPopup(popup_e45ffe76fced6f4bce59824676ccc146)
    ;




var circle_e64d251e723573e0240a87518bc5ef0c = L.circle(
    [43.66170004333893, -79.31328809105156],
    { "bubblingMouseEvents": true, "color": "#980020", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#980020", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_5ebc9c6dd646ddec906c5c66351bb2c9 = L.popup({ "maxWidth": "100%" });



var html_ca09c33d3d06f0d9a725d093dbc98dbe = $(`<div id="html_ca09c33d3d06f0d9a725d093dbc98dbe" style="width: 100.0%; height: 100.0%;">2019-05-27</div>`)[0];
popup_5ebc9c6dd646ddec906c5c66351bb2c9.setContent(html_ca09c33d3d06f0d9a725d093dbc98dbe);



circle_e64d251e723573e0240a87518bc5ef0c.bindPopup(popup_5ebc9c6dd646ddec906c5c66351bb2c9)
    ;




var circle_7790d7f34d9aae9ab276893b4f784667 = L.circle(
    [43.662358232380136, -79.31556550420966],
    { "bubblingMouseEvents": true, "color": "#980020", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#980020", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_411aa352c0462d108807d902f70808c2 = L.popup({ "maxWidth": "100%" });



var html_50f56e96afb2744cc14f3d9d0d4a6868 = $(`<div id="html_50f56e96afb2744cc14f3d9d0d4a6868" style="width: 100.0%; height: 100.0%;">2019-05-27</div>`)[0];
popup_411aa352c0462d108807d902f70808c2.setContent(html_50f56e96afb2744cc14f3d9d0d4a6868);



circle_7790d7f34d9aae9ab276893b4f784667.bindPopup(popup_411aa352c0462d108807d902f70808c2)
    ;




var circle_a4abb19feb7c4eb77612087904f83af2 = L.circle(
    [43.65125166810842, -79.34916575636294],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_ccdb3b588841090437de69d196e91b21 = L.popup({ "maxWidth": "100%" });



var html_42cf8480cac3060cdcca88326712a497 = $(`<div id="html_42cf8480cac3060cdcca88326712a497" style="width: 100.0%; height: 100.0%;">2019-05-27</div>`)[0];
popup_ccdb3b588841090437de69d196e91b21.setContent(html_42cf8480cac3060cdcca88326712a497);



circle_a4abb19feb7c4eb77612087904f83af2.bindPopup(popup_ccdb3b588841090437de69d196e91b21)
    ;




var circle_1f3bfbdd67b725ad29b9c2b1a5ffa41d = L.circle(
    [43.661719614942854, -79.31555217093113],
    { "bubblingMouseEvents": true, "color": "#980020", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#980020", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_d52f3c1907b53cca8e19092545d00a89 = L.popup({ "maxWidth": "100%" });



var html_76a9aac6d86064fa96ad716097f63719 = $(`<div id="html_76a9aac6d86064fa96ad716097f63719" style="width: 100.0%; height: 100.0%;">2019-05-27</div>`)[0];
popup_d52f3c1907b53cca8e19092545d00a89.setContent(html_76a9aac6d86064fa96ad716097f63719);



circle_1f3bfbdd67b725ad29b9c2b1a5ffa41d.bindPopup(popup_d52f3c1907b53cca8e19092545d00a89)
    ;




var circle_f51f5fce2b220f592e3272cb03948026 = L.circle(
    [43.66924914794623, -79.31525534594932],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_2839c320b779567f8c180ccc53af6cae = L.popup({ "maxWidth": "100%" });



var html_9c24e21768c5efda96125777ab9b3786 = $(`<div id="html_9c24e21768c5efda96125777ab9b3786" style="width: 100.0%; height: 100.0%;">2019-05-27</div>`)[0];
popup_2839c320b779567f8c180ccc53af6cae.setContent(html_9c24e21768c5efda96125777ab9b3786);



circle_f51f5fce2b220f592e3272cb03948026.bindPopup(popup_2839c320b779567f8c180ccc53af6cae)
    ;




var circle_ce18de82e53b3ee29b8c4bcdd142fa4b = L.circle(
    [43.6669275464527, -79.33149667176166],
    { "bubblingMouseEvents": true, "color": "#1E945C", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#1E945C", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_4091a975c219d6e7862c8fae2325d988 = L.popup({ "maxWidth": "100%" });



var html_d8acfe4efca0038661af0cee2b51d80a = $(`<div id="html_d8acfe4efca0038661af0cee2b51d80a" style="width: 100.0%; height: 100.0%;">2019-05-27</div>`)[0];
popup_4091a975c219d6e7862c8fae2325d988.setContent(html_d8acfe4efca0038661af0cee2b51d80a);



circle_ce18de82e53b3ee29b8c4bcdd142fa4b.bindPopup(popup_4091a975c219d6e7862c8fae2325d988)
    ;




var circle_f70d9b2d0aa22de57781d4d011afe0b1 = L.circle(
    [43.66324441523307, -79.46206334512192],
    { "bubblingMouseEvents": true, "color": "#FF20FF", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#FF20FF", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_7ea1fc3c5147a87c5a574bec5e843e70 = L.popup({ "maxWidth": "100%" });



var html_2354c37928bec42d2650959a0e5f5fbd = $(`<div id="html_2354c37928bec42d2650959a0e5f5fbd" style="width: 100.0%; height: 100.0%;">2019-05-31</div>`)[0];
popup_7ea1fc3c5147a87c5a574bec5e843e70.setContent(html_2354c37928bec42d2650959a0e5f5fbd);



circle_f70d9b2d0aa22de57781d4d011afe0b1.bindPopup(popup_7ea1fc3c5147a87c5a574bec5e843e70)
    ;




var circle_871895f0dc087a970cb6e8ed80babb08 = L.circle(
    [43.65941291889726, -79.46047362798336],
    { "bubblingMouseEvents": true, "color": "#FF20FF", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#FF20FF", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_c18b59e55f8fdf4eb0ba217ea94de35c = L.popup({ "maxWidth": "100%" });



var html_5c782d35c6c73c5db3a269ad03c9155d = $(`<div id="html_5c782d35c6c73c5db3a269ad03c9155d" style="width: 100.0%; height: 100.0%;">2019-05-31</div>`)[0];
popup_c18b59e55f8fdf4eb0ba217ea94de35c.setContent(html_5c782d35c6c73c5db3a269ad03c9155d);



circle_871895f0dc087a970cb6e8ed80babb08.bindPopup(popup_c18b59e55f8fdf4eb0ba217ea94de35c)
    ;




var circle_ab8823112ab224dee45293a8860de797 = L.circle(
    [43.663445150477, -79.46227067451154],
    { "bubblingMouseEvents": true, "color": "#FF20FF", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#FF20FF", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_2630b523bc32ddc7a62aeb82d4a3f1df = L.popup({ "maxWidth": "100%" });



var html_669b0ac2363ae5f79e53940cd0b00daa = $(`<div id="html_669b0ac2363ae5f79e53940cd0b00daa" style="width: 100.0%; height: 100.0%;">2019-05-31</div>`)[0];
popup_2630b523bc32ddc7a62aeb82d4a3f1df.setContent(html_669b0ac2363ae5f79e53940cd0b00daa);



circle_ab8823112ab224dee45293a8860de797.bindPopup(popup_2630b523bc32ddc7a62aeb82d4a3f1df)
    ;




var circle_5628b13aeaf1bc5abe0903cc0f4da5a3 = L.circle(
    [43.65309311111809, -79.47013495921622],
    { "bubblingMouseEvents": true, "color": "#90E7A1", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#90E7A1", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_c31fd0c5a4e19a9aefedd76da4f0922d = L.popup({ "maxWidth": "100%" });



var html_f04b039dd8b2d1c34a87449b706392e4 = $(`<div id="html_f04b039dd8b2d1c34a87449b706392e4" style="width: 100.0%; height: 100.0%;">2019-05-31</div>`)[0];
popup_c31fd0c5a4e19a9aefedd76da4f0922d.setContent(html_f04b039dd8b2d1c34a87449b706392e4);



circle_5628b13aeaf1bc5abe0903cc0f4da5a3.bindPopup(popup_c31fd0c5a4e19a9aefedd76da4f0922d)
    ;




var circle_cb232b9c8be3bf77d5bdfdcf5c614026 = L.circle(
    [43.64598160009613, -79.39930474495803],
    { "bubblingMouseEvents": true, "color": "#F73D32", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#F73D32", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_7ab50ca15284abd9978b1d57da6b506e = L.popup({ "maxWidth": "100%" });



var html_4f29766b87d91fe454be8f0d361a1182 = $(`<div id="html_4f29766b87d91fe454be8f0d361a1182" style="width: 100.0%; height: 100.0%;">2019-05-31</div>`)[0];
popup_7ab50ca15284abd9978b1d57da6b506e.setContent(html_4f29766b87d91fe454be8f0d361a1182);



circle_cb232b9c8be3bf77d5bdfdcf5c614026.bindPopup(popup_7ab50ca15284abd9978b1d57da6b506e)
    ;




var circle_a0a00b63a32a63534845c7d2bbc26c39 = L.circle(
    [43.661904234712985, -79.31812997214436],
    { "bubblingMouseEvents": true, "color": "#980020", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#980020", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_d84f1e9020005a768dd3ce8b8230e3e1 = L.popup({ "maxWidth": "100%" });



var html_bfc0e24d38e73529264169c713fca8f5 = $(`<div id="html_bfc0e24d38e73529264169c713fca8f5" style="width: 100.0%; height: 100.0%;">2019-06-07</div>`)[0];
popup_d84f1e9020005a768dd3ce8b8230e3e1.setContent(html_bfc0e24d38e73529264169c713fca8f5);



circle_a0a00b63a32a63534845c7d2bbc26c39.bindPopup(popup_d84f1e9020005a768dd3ce8b8230e3e1)
    ;




var circle_3382bc948956fdb3a7f70bb6433c1fb5 = L.circle(
    [43.661870488852905, -79.31702913894601],
    { "bubblingMouseEvents": true, "color": "#980020", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#980020", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_f791f041572183f2f146b86290e11d5d = L.popup({ "maxWidth": "100%" });



var html_2cdd86ef7c75b31a57e6c649879e9ccd = $(`<div id="html_2cdd86ef7c75b31a57e6c649879e9ccd" style="width: 100.0%; height: 100.0%;">2019-06-07</div>`)[0];
popup_f791f041572183f2f146b86290e11d5d.setContent(html_2cdd86ef7c75b31a57e6c649879e9ccd);



circle_3382bc948956fdb3a7f70bb6433c1fb5.bindPopup(popup_f791f041572183f2f146b86290e11d5d)
    ;




var circle_134e739cf1bd658f2353da967d961aed = L.circle(
    [43.66080271901839, -79.32129379342233],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_b4e9888dd4f46e262c3d89c93578538e = L.popup({ "maxWidth": "100%" });



var html_ddacd81a87b546a4d6544b25067c88b5 = $(`<div id="html_ddacd81a87b546a4d6544b25067c88b5" style="width: 100.0%; height: 100.0%;">2019-06-07</div>`)[0];
popup_b4e9888dd4f46e262c3d89c93578538e.setContent(html_ddacd81a87b546a4d6544b25067c88b5);



circle_134e739cf1bd658f2353da967d961aed.bindPopup(popup_b4e9888dd4f46e262c3d89c93578538e)
    ;




var circle_22bf8abc280ec14f81d5d3527eab1b40 = L.circle(
    [43.65150717119785, -79.34692343758303],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_eda7dafaa82baf3a41ef3d45cf0c1cbc = L.popup({ "maxWidth": "100%" });



var html_e3ab1939675260287e475d34e1357820 = $(`<div id="html_e3ab1939675260287e475d34e1357820" style="width: 100.0%; height: 100.0%;">2019-06-07</div>`)[0];
popup_eda7dafaa82baf3a41ef3d45cf0c1cbc.setContent(html_e3ab1939675260287e475d34e1357820);



circle_22bf8abc280ec14f81d5d3527eab1b40.bindPopup(popup_eda7dafaa82baf3a41ef3d45cf0c1cbc)
    ;




var circle_a080e2279c208b47fddd8cdd9c33bb4f = L.circle(
    [43.65150717119785, -79.34692343758303],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_16b66542739c1c9d53c8226e6e76f157 = L.popup({ "maxWidth": "100%" });



var html_3098888ffb166da3ae251fb6d50ad409 = $(`<div id="html_3098888ffb166da3ae251fb6d50ad409" style="width: 100.0%; height: 100.0%;">2019-06-07</div>`)[0];
popup_16b66542739c1c9d53c8226e6e76f157.setContent(html_3098888ffb166da3ae251fb6d50ad409);



circle_a080e2279c208b47fddd8cdd9c33bb4f.bindPopup(popup_16b66542739c1c9d53c8226e6e76f157)
    ;




var circle_05803ad4ea8836e51f6319710ad4a34e = L.circle(
    [43.65150717119785, -79.34692343758303],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_ca0022ad362f586bfeaa031db27f3230 = L.popup({ "maxWidth": "100%" });



var html_ed5219b46a33bf9c72e78789a6a6f779 = $(`<div id="html_ed5219b46a33bf9c72e78789a6a6f779" style="width: 100.0%; height: 100.0%;">2019-06-07</div>`)[0];
popup_ca0022ad362f586bfeaa031db27f3230.setContent(html_ed5219b46a33bf9c72e78789a6a6f779);



circle_05803ad4ea8836e51f6319710ad4a34e.bindPopup(popup_ca0022ad362f586bfeaa031db27f3230)
    ;




var circle_519cfd58480d0dd80ec17f41ef8fac9e = L.circle(
    [43.65141486335942, -79.38414623048209],
    { "bubblingMouseEvents": true, "color": "#62BA6B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#62BA6B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_93889a4e3fe015ce556dfb2aaf80a3c9 = L.popup({ "maxWidth": "100%" });



var html_b0a26fb57ff63540b788c67adcc4d4df = $(`<div id="html_b0a26fb57ff63540b788c67adcc4d4df" style="width: 100.0%; height: 100.0%;">2019-06-07</div>`)[0];
popup_93889a4e3fe015ce556dfb2aaf80a3c9.setContent(html_b0a26fb57ff63540b788c67adcc4d4df);



circle_519cfd58480d0dd80ec17f41ef8fac9e.bindPopup(popup_93889a4e3fe015ce556dfb2aaf80a3c9)
    ;




var circle_56e9fc3c6c62badc907166984407d08e = L.circle(
    [43.66053211859824, -79.39712190682378],
    { "bubblingMouseEvents": true, "color": "#CB3ADF", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#CB3ADF", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_273789ac1d0b0ad7056fcf3ef2abd751 = L.popup({ "maxWidth": "100%" });



var html_baec7dcda0f7491e3e13fb152d0fc339 = $(`<div id="html_baec7dcda0f7491e3e13fb152d0fc339" style="width: 100.0%; height: 100.0%;">2019-06-11</div>`)[0];
popup_273789ac1d0b0ad7056fcf3ef2abd751.setContent(html_baec7dcda0f7491e3e13fb152d0fc339);



circle_56e9fc3c6c62badc907166984407d08e.bindPopup(popup_273789ac1d0b0ad7056fcf3ef2abd751)
    ;




var circle_f6444e54571c2055d5fb1f89556cdb4a = L.circle(
    [43.666441106960534, -79.37886167139234],
    { "bubblingMouseEvents": true, "color": "#1FCF8F", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#1FCF8F", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_83049d61f9b0bfcadfb1658678e9f5eb = L.popup({ "maxWidth": "100%" });



var html_b788d3128896a8fb6f291e36fa7bd3c8 = $(`<div id="html_b788d3128896a8fb6f291e36fa7bd3c8" style="width: 100.0%; height: 100.0%;">2019-06-11</div>`)[0];
popup_83049d61f9b0bfcadfb1658678e9f5eb.setContent(html_b788d3128896a8fb6f291e36fa7bd3c8);



circle_f6444e54571c2055d5fb1f89556cdb4a.bindPopup(popup_83049d61f9b0bfcadfb1658678e9f5eb)
    ;




var circle_6b94e3d420116d496057d093af88ee15 = L.circle(
    [43.6677641076555, -79.371311479027],
    { "bubblingMouseEvents": true, "color": "#1FCF8F", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#1FCF8F", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_edc3332484b67d3670cffbb905107a2b = L.popup({ "maxWidth": "100%" });



var html_695dea72c22906c8d29eafa597edef8d = $(`<div id="html_695dea72c22906c8d29eafa597edef8d" style="width: 100.0%; height: 100.0%;">2019-06-11</div>`)[0];
popup_edc3332484b67d3670cffbb905107a2b.setContent(html_695dea72c22906c8d29eafa597edef8d);



circle_6b94e3d420116d496057d093af88ee15.bindPopup(popup_edc3332484b67d3670cffbb905107a2b)
    ;




var circle_4f481c2f189c3271ae73a6022971121c = L.circle(
    [43.66976349746964, -79.31914200074866],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_c7b39f0316693753f826264bbf3b98d0 = L.popup({ "maxWidth": "100%" });



var html_0a4b6238a51ca9c46122f3649d4eb6e8 = $(`<div id="html_0a4b6238a51ca9c46122f3649d4eb6e8" style="width: 100.0%; height: 100.0%;">2019-06-11</div>`)[0];
popup_c7b39f0316693753f826264bbf3b98d0.setContent(html_0a4b6238a51ca9c46122f3649d4eb6e8);



circle_4f481c2f189c3271ae73a6022971121c.bindPopup(popup_c7b39f0316693753f826264bbf3b98d0)
    ;




var circle_5614492885dc94f04a4af0d8c214b05d = L.circle(
    [43.658259747035295, -79.33973666026345],
    { "bubblingMouseEvents": true, "color": "#1E945C", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#1E945C", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_c2470f31a27e2b3dd545518c7891672c = L.popup({ "maxWidth": "100%" });



var html_e9de3cd3f3ea777973d9c07865e97dfc = $(`<div id="html_e9de3cd3f3ea777973d9c07865e97dfc" style="width: 100.0%; height: 100.0%;">2019-06-11</div>`)[0];
popup_c2470f31a27e2b3dd545518c7891672c.setContent(html_e9de3cd3f3ea777973d9c07865e97dfc);



circle_5614492885dc94f04a4af0d8c214b05d.bindPopup(popup_c2470f31a27e2b3dd545518c7891672c)
    ;




var circle_08b0472d09274777e0138fd37baecef3 = L.circle(
    [43.65089303583556, -79.38222849275829],
    { "bubblingMouseEvents": true, "color": "#62BA6B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#62BA6B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_b14c122b32bcc3fae0f683d8951e7493 = L.popup({ "maxWidth": "100%" });



var html_8bc88ec7928b64c48f5e45259f612f39 = $(`<div id="html_8bc88ec7928b64c48f5e45259f612f39" style="width: 100.0%; height: 100.0%;">2019-06-11</div>`)[0];
popup_b14c122b32bcc3fae0f683d8951e7493.setContent(html_8bc88ec7928b64c48f5e45259f612f39);



circle_08b0472d09274777e0138fd37baecef3.bindPopup(popup_b14c122b32bcc3fae0f683d8951e7493)
    ;




var circle_9bf22d5cb6e016934bbfcb073fa0f29e = L.circle(
    [43.70100588331012, -79.31345497505464],
    { "bubblingMouseEvents": true, "color": "#721B5D", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#721B5D", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_775cf95be56ea9e1154bf0ee43523fac = L.popup({ "maxWidth": "100%" });



var html_03157b76f73c3d042f206e8e78f04a4b = $(`<div id="html_03157b76f73c3d042f206e8e78f04a4b" style="width: 100.0%; height: 100.0%;">2019-06-12</div>`)[0];
popup_775cf95be56ea9e1154bf0ee43523fac.setContent(html_03157b76f73c3d042f206e8e78f04a4b);



circle_9bf22d5cb6e016934bbfcb073fa0f29e.bindPopup(popup_775cf95be56ea9e1154bf0ee43523fac)
    ;




var circle_6d47b6ba21c00d49a787b5e046758061 = L.circle(
    [43.648157047462846, -79.38955619028206],
    { "bubblingMouseEvents": true, "color": "#62BA6B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#62BA6B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_63add4e53674eabdd5512336e1f3b11f = L.popup({ "maxWidth": "100%" });



var html_08d40d4dbfcbc4040f5cd089b2be29c1 = $(`<div id="html_08d40d4dbfcbc4040f5cd089b2be29c1" style="width: 100.0%; height: 100.0%;">2019-06-18</div>`)[0];
popup_63add4e53674eabdd5512336e1f3b11f.setContent(html_08d40d4dbfcbc4040f5cd089b2be29c1);



circle_6d47b6ba21c00d49a787b5e046758061.bindPopup(popup_63add4e53674eabdd5512336e1f3b11f)
    ;




var circle_b5d025b5569a23f36b66e63bc1549d90 = L.circle(
    [43.647387334437845, -79.38587662519042],
    { "bubblingMouseEvents": true, "color": "#62BA6B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#62BA6B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_c1702e94b181a7a15f207ae8fbe7889b = L.popup({ "maxWidth": "100%" });



var html_44aa17ff2735095f6b15b947b06181c2 = $(`<div id="html_44aa17ff2735095f6b15b947b06181c2" style="width: 100.0%; height: 100.0%;">2019-06-18</div>`)[0];
popup_c1702e94b181a7a15f207ae8fbe7889b.setContent(html_44aa17ff2735095f6b15b947b06181c2);



circle_b5d025b5569a23f36b66e63bc1549d90.bindPopup(popup_c1702e94b181a7a15f207ae8fbe7889b)
    ;




var circle_600de7fd87f5e21f6ef3c9ebaabd8ff8 = L.circle(
    [43.63574815592156, -79.39798315791799],
    { "bubblingMouseEvents": true, "color": "#F73D32", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#F73D32", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_64d1039626f4e1e84778034a62e9f567 = L.popup({ "maxWidth": "100%" });



var html_6ae2d3ba5ddff3a5d1776ab5b0baef47 = $(`<div id="html_6ae2d3ba5ddff3a5d1776ab5b0baef47" style="width: 100.0%; height: 100.0%;">2019-06-18</div>`)[0];
popup_64d1039626f4e1e84778034a62e9f567.setContent(html_6ae2d3ba5ddff3a5d1776ab5b0baef47);



circle_600de7fd87f5e21f6ef3c9ebaabd8ff8.bindPopup(popup_64d1039626f4e1e84778034a62e9f567)
    ;




var circle_4dc87d64a8349604967d4a787f334c32 = L.circle(
    [43.63372513664799, -79.46902834141643],
    { "bubblingMouseEvents": true, "color": "#D4D163", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D4D163", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_f09c3b0b8479834c1109ba8bf577107c = L.popup({ "maxWidth": "100%" });



var html_f49beb00255f4651d6edff55fcbabb1a = $(`<div id="html_f49beb00255f4651d6edff55fcbabb1a" style="width: 100.0%; height: 100.0%;">2019-06-18</div>`)[0];
popup_f09c3b0b8479834c1109ba8bf577107c.setContent(html_f49beb00255f4651d6edff55fcbabb1a);



circle_4dc87d64a8349604967d4a787f334c32.bindPopup(popup_f09c3b0b8479834c1109ba8bf577107c)
    ;




var circle_8baa98d1f61430efa58cb3dfa302f4da = L.circle(
    [43.619219467782955, -79.47482667161667],
    { "bubblingMouseEvents": true, "color": "#6C792E", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#6C792E", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_ad9bfdcab1a5586a3c7051e0f96a5995 = L.popup({ "maxWidth": "100%" });



var html_77e049e455cf31b446780ccea2532b7e = $(`<div id="html_77e049e455cf31b446780ccea2532b7e" style="width: 100.0%; height: 100.0%;">2019-06-18</div>`)[0];
popup_ad9bfdcab1a5586a3c7051e0f96a5995.setContent(html_77e049e455cf31b446780ccea2532b7e);



circle_8baa98d1f61430efa58cb3dfa302f4da.bindPopup(popup_ad9bfdcab1a5586a3c7051e0f96a5995)
    ;




var circle_17768bbc05985a630ffc046d5b1a59bb = L.circle(
    [43.629967612677646, -79.42296379803417],
    { "bubblingMouseEvents": true, "color": "#33CDB5", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#33CDB5", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_86699203f4be443ba2f25f8703330f55 = L.popup({ "maxWidth": "100%" });



var html_bbc1fe9d99040b38c1ed5e93ee3eac68 = $(`<div id="html_bbc1fe9d99040b38c1ed5e93ee3eac68" style="width: 100.0%; height: 100.0%;">2019-06-18</div>`)[0];
popup_86699203f4be443ba2f25f8703330f55.setContent(html_bbc1fe9d99040b38c1ed5e93ee3eac68);



circle_17768bbc05985a630ffc046d5b1a59bb.bindPopup(popup_86699203f4be443ba2f25f8703330f55)
    ;




var circle_c4e3db1e52491ef6e55c9b4b6e63fa10 = L.circle(
    [43.6458424071916, -79.39924611500413],
    { "bubblingMouseEvents": true, "color": "#F73D32", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#F73D32", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_8956c1d7b4e1a2a1ce4948bef21f28be = L.popup({ "maxWidth": "100%" });



var html_a4ce903e063df570c1f6b89ea0ff1553 = $(`<div id="html_a4ce903e063df570c1f6b89ea0ff1553" style="width: 100.0%; height: 100.0%;">2019-06-18</div>`)[0];
popup_8956c1d7b4e1a2a1ce4948bef21f28be.setContent(html_a4ce903e063df570c1f6b89ea0ff1553);



circle_c4e3db1e52491ef6e55c9b4b6e63fa10.bindPopup(popup_8956c1d7b4e1a2a1ce4948bef21f28be)
    ;




var circle_953bc086b938d5c798aa7b8adf21786e = L.circle(
    [43.66126878484924, -79.39894584327142],
    { "bubblingMouseEvents": true, "color": "#CB3ADF", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#CB3ADF", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_fac8d9c0cc950d5892e024275679e33c = L.popup({ "maxWidth": "100%" });



var html_03fa176c9df3faecabca8afe8b990491 = $(`<div id="html_03fa176c9df3faecabca8afe8b990491" style="width: 100.0%; height: 100.0%;">2019-06-19</div>`)[0];
popup_fac8d9c0cc950d5892e024275679e33c.setContent(html_03fa176c9df3faecabca8afe8b990491);



circle_953bc086b938d5c798aa7b8adf21786e.bindPopup(popup_fac8d9c0cc950d5892e024275679e33c)
    ;




var circle_5260cd6d46b3f2dec9a37e5f72e80fa1 = L.circle(
    [43.63682411870864, -79.39557491619857],
    { "bubblingMouseEvents": true, "color": "#F73D32", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#F73D32", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_f5a5980a33042529b13f59b1759e0581 = L.popup({ "maxWidth": "100%" });



var html_bbdd9bb51676ecf42bf58a35b424976b = $(`<div id="html_bbdd9bb51676ecf42bf58a35b424976b" style="width: 100.0%; height: 100.0%;">2019-06-19</div>`)[0];
popup_f5a5980a33042529b13f59b1759e0581.setContent(html_bbdd9bb51676ecf42bf58a35b424976b);



circle_5260cd6d46b3f2dec9a37e5f72e80fa1.bindPopup(popup_f5a5980a33042529b13f59b1759e0581)
    ;




var circle_45a0fada2e447049f387febb1d73ecfd = L.circle(
    [43.63926637896194, -79.3826657875048],
    { "bubblingMouseEvents": true, "color": "#62BA6B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#62BA6B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_fbe7f0a277d7253170d574f29c5552c3 = L.popup({ "maxWidth": "100%" });



var html_a2bf1bfca295057df7295339112cc3f7 = $(`<div id="html_a2bf1bfca295057df7295339112cc3f7" style="width: 100.0%; height: 100.0%;">2019-06-19</div>`)[0];
popup_fbe7f0a277d7253170d574f29c5552c3.setContent(html_a2bf1bfca295057df7295339112cc3f7);



circle_45a0fada2e447049f387febb1d73ecfd.bindPopup(popup_fbe7f0a277d7253170d574f29c5552c3)
    ;




var circle_28f24e5077d8338fbe832e5728571c08 = L.circle(
    [43.643654274747185, -79.36879381667435],
    { "bubblingMouseEvents": true, "color": "#712C2D", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#712C2D", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_2cc9c61f1d68f8dee375f12cc37456b9 = L.popup({ "maxWidth": "100%" });



var html_769265481b288b824ecc0eaef80a22a5 = $(`<div id="html_769265481b288b824ecc0eaef80a22a5" style="width: 100.0%; height: 100.0%;">2019-06-19</div>`)[0];
popup_2cc9c61f1d68f8dee375f12cc37456b9.setContent(html_769265481b288b824ecc0eaef80a22a5);



circle_28f24e5077d8338fbe832e5728571c08.bindPopup(popup_2cc9c61f1d68f8dee375f12cc37456b9)
    ;




var circle_226ffef5a5789254483a93a85a86c22d = L.circle(
    [43.64691335359441, -79.35364675468443],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_67246fd4c8c4b5cb1e8d5273ecf85f07 = L.popup({ "maxWidth": "100%" });



var html_e9d6a30487585d67c6eed6a7edad21a8 = $(`<div id="html_e9d6a30487585d67c6eed6a7edad21a8" style="width: 100.0%; height: 100.0%;">2019-06-19</div>`)[0];
popup_67246fd4c8c4b5cb1e8d5273ecf85f07.setContent(html_e9d6a30487585d67c6eed6a7edad21a8);



circle_226ffef5a5789254483a93a85a86c22d.bindPopup(popup_67246fd4c8c4b5cb1e8d5273ecf85f07)
    ;




var circle_3614507ebf80a9f828aa0375c9ddce82 = L.circle(
    [43.660365124868754, -79.32181877957215],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_cf5ca92f5bf2c6c31a1be4e03168c124 = L.popup({ "maxWidth": "100%" });



var html_dd9c1ca5cbfef825e7c7923372e3604b = $(`<div id="html_dd9c1ca5cbfef825e7c7923372e3604b" style="width: 100.0%; height: 100.0%;">2019-06-19</div>`)[0];
popup_cf5ca92f5bf2c6c31a1be4e03168c124.setContent(html_dd9c1ca5cbfef825e7c7923372e3604b);



circle_3614507ebf80a9f828aa0375c9ddce82.bindPopup(popup_cf5ca92f5bf2c6c31a1be4e03168c124)
    ;




var circle_8dd42c2336456cabe38bae9b10e4fc08 = L.circle(
    [43.660365124868754, -79.32181877957215],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_1f46e81222fa8873eedd31b6946b36e8 = L.popup({ "maxWidth": "100%" });



var html_6a375876a8773724b3aad84667048987 = $(`<div id="html_6a375876a8773724b3aad84667048987" style="width: 100.0%; height: 100.0%;">2019-06-19</div>`)[0];
popup_1f46e81222fa8873eedd31b6946b36e8.setContent(html_6a375876a8773724b3aad84667048987);



circle_8dd42c2336456cabe38bae9b10e4fc08.bindPopup(popup_1f46e81222fa8873eedd31b6946b36e8)
    ;




var circle_54cd5823cee5793bc96ac7d394b90406 = L.circle(
    [43.660365124868754, -79.32181877957215],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_b772ea9a55da7db4406454ca0f23c762 = L.popup({ "maxWidth": "100%" });



var html_fc6c3cf49e225e31b4aa3ffb05d59e30 = $(`<div id="html_fc6c3cf49e225e31b4aa3ffb05d59e30" style="width: 100.0%; height: 100.0%;">2019-06-19</div>`)[0];
popup_b772ea9a55da7db4406454ca0f23c762.setContent(html_fc6c3cf49e225e31b4aa3ffb05d59e30);



circle_54cd5823cee5793bc96ac7d394b90406.bindPopup(popup_b772ea9a55da7db4406454ca0f23c762)
    ;




var circle_c798984f20cc7c0fd0765b21be3d7d49 = L.circle(
    [43.65992598571175, -79.32555916885129],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_95329f6238d113bfc390a7dc9efb415e = L.popup({ "maxWidth": "100%" });



var html_af395c3dda4280294ab10a7920f960d3 = $(`<div id="html_af395c3dda4280294ab10a7920f960d3" style="width: 100.0%; height: 100.0%;">2019-06-19</div>`)[0];
popup_95329f6238d113bfc390a7dc9efb415e.setContent(html_af395c3dda4280294ab10a7920f960d3);



circle_c798984f20cc7c0fd0765b21be3d7d49.bindPopup(popup_95329f6238d113bfc390a7dc9efb415e)
    ;




var circle_b9368e15391260cc298f415af0b0822d = L.circle(
    [43.66210127396257, -79.32588109058395],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_3074a11a294e239113dc3ff4e5766c82 = L.popup({ "maxWidth": "100%" });



var html_2c37382b18ce7c057a1bbc5657f2e077 = $(`<div id="html_2c37382b18ce7c057a1bbc5657f2e077" style="width: 100.0%; height: 100.0%;">2019-06-19</div>`)[0];
popup_3074a11a294e239113dc3ff4e5766c82.setContent(html_2c37382b18ce7c057a1bbc5657f2e077);



circle_b9368e15391260cc298f415af0b0822d.bindPopup(popup_3074a11a294e239113dc3ff4e5766c82)
    ;




var circle_5dc07b84e6afd1e30d072103bd6a1bd2 = L.circle(
    [43.6661237324702, -79.33486617114671],
    { "bubblingMouseEvents": true, "color": "#1E945C", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#1E945C", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_d83cecde608f064a551e12edcc2fcb36 = L.popup({ "maxWidth": "100%" });



var html_2b845c6b2ae1055be6b51758128acc08 = $(`<div id="html_2b845c6b2ae1055be6b51758128acc08" style="width: 100.0%; height: 100.0%;">2019-06-19</div>`)[0];
popup_d83cecde608f064a551e12edcc2fcb36.setContent(html_2b845c6b2ae1055be6b51758128acc08);



circle_5dc07b84e6afd1e30d072103bd6a1bd2.bindPopup(popup_d83cecde608f064a551e12edcc2fcb36)
    ;




var circle_ff3a4143afde26f99d8ab4af60cf2ba7 = L.circle(
    [43.66785704838917, -79.34100938577058],
    { "bubblingMouseEvents": true, "color": "#1E945C", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#1E945C", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_cfde726748874de02605ed949d8c5188 = L.popup({ "maxWidth": "100%" });



var html_d2f5d6acb6e8486f88f8dd6576a7291a = $(`<div id="html_d2f5d6acb6e8486f88f8dd6576a7291a" style="width: 100.0%; height: 100.0%;">2019-06-19</div>`)[0];
popup_cfde726748874de02605ed949d8c5188.setContent(html_d2f5d6acb6e8486f88f8dd6576a7291a);



circle_ff3a4143afde26f99d8ab4af60cf2ba7.bindPopup(popup_cfde726748874de02605ed949d8c5188)
    ;




var circle_ec4567dfae1da976d1a8e6067b241684 = L.circle(
    [43.65937887437254, -79.32814168785977],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_7820769984ed8efb72ec0d8bf432e241 = L.popup({ "maxWidth": "100%" });



var html_68355a778c0f399397c9bea329ae4f13 = $(`<div id="html_68355a778c0f399397c9bea329ae4f13" style="width: 100.0%; height: 100.0%;">2019-06-19</div>`)[0];
popup_7820769984ed8efb72ec0d8bf432e241.setContent(html_68355a778c0f399397c9bea329ae4f13);



circle_ec4567dfae1da976d1a8e6067b241684.bindPopup(popup_7820769984ed8efb72ec0d8bf432e241)
    ;




var circle_296ac33f9b96913aa9b41c45bdc64d3b = L.circle(
    [43.65146286942692, -79.34805195439947],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_2a19f75a8c92935002066c47c4bfdc0e = L.popup({ "maxWidth": "100%" });



var html_136178267d336143234698035eae231c = $(`<div id="html_136178267d336143234698035eae231c" style="width: 100.0%; height: 100.0%;">2019-06-19</div>`)[0];
popup_2a19f75a8c92935002066c47c4bfdc0e.setContent(html_136178267d336143234698035eae231c);



circle_296ac33f9b96913aa9b41c45bdc64d3b.bindPopup(popup_2a19f75a8c92935002066c47c4bfdc0e)
    ;




var circle_16986aba3b0b14d12f5d7c48f462ba5f = L.circle(
    [43.65146286942692, -79.34805195439947],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_ca09d2a6b2fd10d388704f99db0e5282 = L.popup({ "maxWidth": "100%" });



var html_de12166422ed8e97d855965c7d35a7de = $(`<div id="html_de12166422ed8e97d855965c7d35a7de" style="width: 100.0%; height: 100.0%;">2019-06-19</div>`)[0];
popup_ca09d2a6b2fd10d388704f99db0e5282.setContent(html_de12166422ed8e97d855965c7d35a7de);



circle_16986aba3b0b14d12f5d7c48f462ba5f.bindPopup(popup_ca09d2a6b2fd10d388704f99db0e5282)
    ;




var circle_da6ed680639901f53500e5cd20c4760a = L.circle(
    [43.65146286942692, -79.34805195439947],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_3c083105ada1ebafeb24cb2ff8bb94ae = L.popup({ "maxWidth": "100%" });



var html_36cac3f8b09655dc3dc2e3fc1183fecc = $(`<div id="html_36cac3f8b09655dc3dc2e3fc1183fecc" style="width: 100.0%; height: 100.0%;">2019-06-19</div>`)[0];
popup_3c083105ada1ebafeb24cb2ff8bb94ae.setContent(html_36cac3f8b09655dc3dc2e3fc1183fecc);



circle_da6ed680639901f53500e5cd20c4760a.bindPopup(popup_3c083105ada1ebafeb24cb2ff8bb94ae)
    ;




var circle_a2bf059e2617b782f24c133fe76112eb = L.circle(
    [43.64289673158257, -79.37167877787816],
    { "bubblingMouseEvents": true, "color": "#712C2D", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#712C2D", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_a592fe9b4c08dbb34849d3487a53b3d5 = L.popup({ "maxWidth": "100%" });



var html_c63e9ca5f18b751f433d752c227ab63b = $(`<div id="html_c63e9ca5f18b751f433d752c227ab63b" style="width: 100.0%; height: 100.0%;">2019-06-19</div>`)[0];
popup_a592fe9b4c08dbb34849d3487a53b3d5.setContent(html_c63e9ca5f18b751f433d752c227ab63b);



circle_a2bf059e2617b782f24c133fe76112eb.bindPopup(popup_a592fe9b4c08dbb34849d3487a53b3d5)
    ;




var circle_caf66ed4f2758c91794ed6ecca835407 = L.circle(
    [43.63896220536605, -79.38475206065438],
    { "bubblingMouseEvents": true, "color": "#62BA6B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#62BA6B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_7f47d743a9d28c0aa71b4b3e90930117 = L.popup({ "maxWidth": "100%" });



var html_7e1687b5e5e8a4796cfded9278ead2e5 = $(`<div id="html_7e1687b5e5e8a4796cfded9278ead2e5" style="width: 100.0%; height: 100.0%;">2019-06-19</div>`)[0];
popup_7f47d743a9d28c0aa71b4b3e90930117.setContent(html_7e1687b5e5e8a4796cfded9278ead2e5);



circle_caf66ed4f2758c91794ed6ecca835407.bindPopup(popup_7f47d743a9d28c0aa71b4b3e90930117)
    ;




var circle_458c7a1af9b2317f3b8310feeba263e1 = L.circle(
    [43.63997037466781, -79.3829233796577],
    { "bubblingMouseEvents": true, "color": "#62BA6B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#62BA6B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_8a86190568a07dc1a0fbf69c8163f618 = L.popup({ "maxWidth": "100%" });



var html_78d6d9b4010ee0eef45e6d5bf3e0b5cc = $(`<div id="html_78d6d9b4010ee0eef45e6d5bf3e0b5cc" style="width: 100.0%; height: 100.0%;">2019-06-19</div>`)[0];
popup_8a86190568a07dc1a0fbf69c8163f618.setContent(html_78d6d9b4010ee0eef45e6d5bf3e0b5cc);



circle_458c7a1af9b2317f3b8310feeba263e1.bindPopup(popup_8a86190568a07dc1a0fbf69c8163f618)
    ;




var circle_f9b55c97c8eb9ead3ea65084c69aa703 = L.circle(
    [43.64520417458823, -79.3850240485509],
    { "bubblingMouseEvents": true, "color": "#62BA6B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#62BA6B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_d7ad9a03072a5e57d27ab475496f1384 = L.popup({ "maxWidth": "100%" });



var html_58cb87ab056d7cc78415876e746210ef = $(`<div id="html_58cb87ab056d7cc78415876e746210ef" style="width: 100.0%; height: 100.0%;">2019-06-19</div>`)[0];
popup_d7ad9a03072a5e57d27ab475496f1384.setContent(html_58cb87ab056d7cc78415876e746210ef);



circle_f9b55c97c8eb9ead3ea65084c69aa703.bindPopup(popup_d7ad9a03072a5e57d27ab475496f1384)
    ;




var circle_beec97590cd0292193f3b07734236e8f = L.circle(
    [43.65946909587591, -79.4605896792861],
    { "bubblingMouseEvents": true, "color": "#FF20FF", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#FF20FF", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_075b726e54ca921d311e1eed814e8bb4 = L.popup({ "maxWidth": "100%" });



var html_70610a66d9f6421673534d74dec45666 = $(`<div id="html_70610a66d9f6421673534d74dec45666" style="width: 100.0%; height: 100.0%;">2019-06-27</div>`)[0];
popup_075b726e54ca921d311e1eed814e8bb4.setContent(html_70610a66d9f6421673534d74dec45666);



circle_beec97590cd0292193f3b07734236e8f.bindPopup(popup_075b726e54ca921d311e1eed814e8bb4)
    ;




var circle_5f40ca4fc28e5a1efc308ade50b19ee0 = L.circle(
    [43.654613733301126, -79.46092862578513],
    { "bubblingMouseEvents": true, "color": "#C1EA98", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#C1EA98", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_d0ac0020f40f07835694b92fbecd3944 = L.popup({ "maxWidth": "100%" });



var html_31a93c8d4355aad696794b6b84d818b1 = $(`<div id="html_31a93c8d4355aad696794b6b84d818b1" style="width: 100.0%; height: 100.0%;">2019-06-27</div>`)[0];
popup_d0ac0020f40f07835694b92fbecd3944.setContent(html_31a93c8d4355aad696794b6b84d818b1);



circle_5f40ca4fc28e5a1efc308ade50b19ee0.bindPopup(popup_d0ac0020f40f07835694b92fbecd3944)
    ;




var circle_0140826ec999a058e1f1459fde14aec5 = L.circle(
    [43.660156505604476, -79.4635635322842],
    { "bubblingMouseEvents": true, "color": "#FF20FF", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#FF20FF", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_54a0daae9c360796cc413d7e188e41fb = L.popup({ "maxWidth": "100%" });



var html_d522a005ce6f53a437d8c0479a4b3109 = $(`<div id="html_d522a005ce6f53a437d8c0479a4b3109" style="width: 100.0%; height: 100.0%;">2019-06-27</div>`)[0];
popup_54a0daae9c360796cc413d7e188e41fb.setContent(html_d522a005ce6f53a437d8c0479a4b3109);



circle_0140826ec999a058e1f1459fde14aec5.bindPopup(popup_54a0daae9c360796cc413d7e188e41fb)
    ;




var circle_b0d721620138a95792523eb8abbf8a0e = L.circle(
    [43.65523220314874, -79.47120957117602],
    { "bubblingMouseEvents": true, "color": "#90E7A1", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#90E7A1", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_48891fcb056bffe3690ade83d47db9b1 = L.popup({ "maxWidth": "100%" });



var html_e525a5574ab8bcb689c8085cca81a0d7 = $(`<div id="html_e525a5574ab8bcb689c8085cca81a0d7" style="width: 100.0%; height: 100.0%;">2019-06-27</div>`)[0];
popup_48891fcb056bffe3690ade83d47db9b1.setContent(html_e525a5574ab8bcb689c8085cca81a0d7);



circle_b0d721620138a95792523eb8abbf8a0e.bindPopup(popup_48891fcb056bffe3690ade83d47db9b1)
    ;




var circle_12587ed74d6e931b1889bcda07d4a442 = L.circle(
    [43.663475399053695, -79.46339103061739],
    { "bubblingMouseEvents": true, "color": "#FF20FF", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#FF20FF", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_c606a39f25c6b3a347efeba77401f54b = L.popup({ "maxWidth": "100%" });



var html_35f9c5606d7cc68c4edd9e988f04130f = $(`<div id="html_35f9c5606d7cc68c4edd9e988f04130f" style="width: 100.0%; height: 100.0%;">2019-06-27</div>`)[0];
popup_c606a39f25c6b3a347efeba77401f54b.setContent(html_35f9c5606d7cc68c4edd9e988f04130f);



circle_12587ed74d6e931b1889bcda07d4a442.bindPopup(popup_c606a39f25c6b3a347efeba77401f54b)
    ;




var circle_4436d0615223fbb738e87ae7f49dc43f = L.circle(
    [43.653633347077935, -79.42610582887947],
    { "bubblingMouseEvents": true, "color": "#06C657", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#06C657", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_ed3f5d4f0a39c7efcd365111a291fd4a = L.popup({ "maxWidth": "100%" });



var html_a8165cb219a6352051fc2a3e4ca064d5 = $(`<div id="html_a8165cb219a6352051fc2a3e4ca064d5" style="width: 100.0%; height: 100.0%;">2019-06-27</div>`)[0];
popup_ed3f5d4f0a39c7efcd365111a291fd4a.setContent(html_a8165cb219a6352051fc2a3e4ca064d5);



circle_4436d0615223fbb738e87ae7f49dc43f.bindPopup(popup_ed3f5d4f0a39c7efcd365111a291fd4a)
    ;




var circle_cfa56a8932991373881ed442514b1d25 = L.circle(
    [43.66537094775253, -79.38240328104963],
    { "bubblingMouseEvents": true, "color": "#1FCF8F", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#1FCF8F", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_e137a308a44379c0f8ea19cf5c52f7b7 = L.popup({ "maxWidth": "100%" });



var html_bce439b69a3ffe6c848c34a560d0978a = $(`<div id="html_bce439b69a3ffe6c848c34a560d0978a" style="width: 100.0%; height: 100.0%;">2019-07-02</div>`)[0];
popup_e137a308a44379c0f8ea19cf5c52f7b7.setContent(html_bce439b69a3ffe6c848c34a560d0978a);



circle_cfa56a8932991373881ed442514b1d25.bindPopup(popup_e137a308a44379c0f8ea19cf5c52f7b7)
    ;




var circle_e8c582616db44e5802af5821fc34237f = L.circle(
    [43.661292718654344, -79.31813914594098],
    { "bubblingMouseEvents": true, "color": "#980020", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#980020", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_4f644811ecedf56d2b8b4d32e619b088 = L.popup({ "maxWidth": "100%" });



var html_c7372b1ad74f28199fd1b6f037707f78 = $(`<div id="html_c7372b1ad74f28199fd1b6f037707f78" style="width: 100.0%; height: 100.0%;">2019-07-03</div>`)[0];
popup_4f644811ecedf56d2b8b4d32e619b088.setContent(html_c7372b1ad74f28199fd1b6f037707f78);



circle_e8c582616db44e5802af5821fc34237f.bindPopup(popup_4f644811ecedf56d2b8b4d32e619b088)
    ;




var circle_0b9d5ece3c98d1fac05e91342d581568 = L.circle(
    [43.661292718654344, -79.31813914594098],
    { "bubblingMouseEvents": true, "color": "#980020", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#980020", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_bbfbd0f3853c50132fa8d048fecab7b4 = L.popup({ "maxWidth": "100%" });



var html_98f8d1eb5a55a598735a17ea6316408a = $(`<div id="html_98f8d1eb5a55a598735a17ea6316408a" style="width: 100.0%; height: 100.0%;">2019-07-03</div>`)[0];
popup_bbfbd0f3853c50132fa8d048fecab7b4.setContent(html_98f8d1eb5a55a598735a17ea6316408a);



circle_0b9d5ece3c98d1fac05e91342d581568.bindPopup(popup_bbfbd0f3853c50132fa8d048fecab7b4)
    ;




var circle_0671b5ec8347cbd75e538c86c83c0319 = L.circle(
    [43.661292718654344, -79.31813914594098],
    { "bubblingMouseEvents": true, "color": "#980020", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#980020", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_45db95d01b42a94ebbff39517c2dda43 = L.popup({ "maxWidth": "100%" });



var html_002a2eec7ee99af7b7586f36c0a4504d = $(`<div id="html_002a2eec7ee99af7b7586f36c0a4504d" style="width: 100.0%; height: 100.0%;">2019-07-03</div>`)[0];
popup_45db95d01b42a94ebbff39517c2dda43.setContent(html_002a2eec7ee99af7b7586f36c0a4504d);



circle_0671b5ec8347cbd75e538c86c83c0319.bindPopup(popup_45db95d01b42a94ebbff39517c2dda43)
    ;




var circle_557c747db97a05fd586d6fefcfa10b28 = L.circle(
    [43.66101659173046, -79.32022616344193],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_bad50d929cdfc53c0be4a8d2525bede9 = L.popup({ "maxWidth": "100%" });



var html_bb144741c7e75446f360826b28854052 = $(`<div id="html_bb144741c7e75446f360826b28854052" style="width: 100.0%; height: 100.0%;">2019-07-03</div>`)[0];
popup_bad50d929cdfc53c0be4a8d2525bede9.setContent(html_bb144741c7e75446f360826b28854052);



circle_557c747db97a05fd586d6fefcfa10b28.bindPopup(popup_bad50d929cdfc53c0be4a8d2525bede9)
    ;




var circle_594b82bbc3c7bf1df35aad6a3d5e0849 = L.circle(
    [43.65148511275459, -79.34749886541532],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_e96198ab658db8d6193428bbf743ccc8 = L.popup({ "maxWidth": "100%" });



var html_d940e2bab19d2f03a794c6c0cb58644a = $(`<div id="html_d940e2bab19d2f03a794c6c0cb58644a" style="width: 100.0%; height: 100.0%;">2019-07-03</div>`)[0];
popup_e96198ab658db8d6193428bbf743ccc8.setContent(html_d940e2bab19d2f03a794c6c0cb58644a);



circle_594b82bbc3c7bf1df35aad6a3d5e0849.bindPopup(popup_e96198ab658db8d6193428bbf743ccc8)
    ;




var circle_ffec309a14dc05c0e5b140fe02318ab5 = L.circle(
    [43.65148511275459, -79.34749886541532],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_4e7a1dd7e76bbdd540c174871d71f291 = L.popup({ "maxWidth": "100%" });



var html_d6b8fce4efe77500fd1a897350593634 = $(`<div id="html_d6b8fce4efe77500fd1a897350593634" style="width: 100.0%; height: 100.0%;">2019-07-03</div>`)[0];
popup_4e7a1dd7e76bbdd540c174871d71f291.setContent(html_d6b8fce4efe77500fd1a897350593634);



circle_ffec309a14dc05c0e5b140fe02318ab5.bindPopup(popup_4e7a1dd7e76bbdd540c174871d71f291)
    ;




var circle_d870a0b29c7170abaf1da93df0e2e0af = L.circle(
    [43.65148511275459, -79.34749886541532],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_9daee705ebbfc6f72556e079a420bb94 = L.popup({ "maxWidth": "100%" });



var html_f8c070583b7c6baae97d9b935bc185f9 = $(`<div id="html_f8c070583b7c6baae97d9b935bc185f9" style="width: 100.0%; height: 100.0%;">2019-07-03</div>`)[0];
popup_9daee705ebbfc6f72556e079a420bb94.setContent(html_f8c070583b7c6baae97d9b935bc185f9);



circle_d870a0b29c7170abaf1da93df0e2e0af.bindPopup(popup_9daee705ebbfc6f72556e079a420bb94)
    ;




var circle_3c20d9ff593c05a2b5c2e64db87a3c0d = L.circle(
    [43.658692880010975, -79.38366246595048],
    { "bubblingMouseEvents": true, "color": "#1FCF8F", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#1FCF8F", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_6204b83b5c3fe0f6e71b6795a3d42632 = L.popup({ "maxWidth": "100%" });



var html_5414d0b9d76f52f1fd27e301361a6488 = $(`<div id="html_5414d0b9d76f52f1fd27e301361a6488" style="width: 100.0%; height: 100.0%;">2019-07-03</div>`)[0];
popup_6204b83b5c3fe0f6e71b6795a3d42632.setContent(html_5414d0b9d76f52f1fd27e301361a6488);



circle_3c20d9ff593c05a2b5c2e64db87a3c0d.bindPopup(popup_6204b83b5c3fe0f6e71b6795a3d42632)
    ;




var circle_3f3c6c637d8cff0e4491302025a4c290 = L.circle(
    [43.6549982909686, -79.4569078255176],
    { "bubblingMouseEvents": true, "color": "#C1EA98", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#C1EA98", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_f4546b66254f8c75750b581e9fabde3c = L.popup({ "maxWidth": "100%" });



var html_b1b3e940d6ea62f69a85c1fa31b5016a = $(`<div id="html_b1b3e940d6ea62f69a85c1fa31b5016a" style="width: 100.0%; height: 100.0%;">2019-07-08</div>`)[0];
popup_f4546b66254f8c75750b581e9fabde3c.setContent(html_b1b3e940d6ea62f69a85c1fa31b5016a);



circle_3f3c6c637d8cff0e4491302025a4c290.bindPopup(popup_f4546b66254f8c75750b581e9fabde3c)
    ;




var circle_b4b09f4d3b6f38c6cfa9a1c69e7b1bde = L.circle(
    [43.65362265116543, -79.4260146240387],
    { "bubblingMouseEvents": true, "color": "#06C657", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#06C657", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_516c16f2d99866f570076bff8f7aef5b = L.popup({ "maxWidth": "100%" });



var html_de66eacc4dc5f2153967843c5f96ef7f = $(`<div id="html_de66eacc4dc5f2153967843c5f96ef7f" style="width: 100.0%; height: 100.0%;">2019-07-08</div>`)[0];
popup_516c16f2d99866f570076bff8f7aef5b.setContent(html_de66eacc4dc5f2153967843c5f96ef7f);



circle_b4b09f4d3b6f38c6cfa9a1c69e7b1bde.bindPopup(popup_516c16f2d99866f570076bff8f7aef5b)
    ;




var circle_0ee2d79950cb62a804b02d6f0f460090 = L.circle(
    [43.6579199662844, -79.40059994210698],
    { "bubblingMouseEvents": true, "color": "#CB3ADF", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#CB3ADF", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_49d070dbe5937d86173bb7b78f67ece5 = L.popup({ "maxWidth": "100%" });



var html_3b4d7d80da60c606eeb23c039efc5da8 = $(`<div id="html_3b4d7d80da60c606eeb23c039efc5da8" style="width: 100.0%; height: 100.0%;">2019-07-08</div>`)[0];
popup_49d070dbe5937d86173bb7b78f67ece5.setContent(html_3b4d7d80da60c606eeb23c039efc5da8);



circle_0ee2d79950cb62a804b02d6f0f460090.bindPopup(popup_49d070dbe5937d86173bb7b78f67ece5)
    ;




var circle_596d99dd1ee90cb7ad14e513562a9a6a = L.circle(
    [43.6595816083133, -79.38060001409062],
    { "bubblingMouseEvents": true, "color": "#1FCF8F", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#1FCF8F", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_384e9238d6fab8b7cac114f7c3aaface = L.popup({ "maxWidth": "100%" });



var html_b91250414a9397215c7df315b30ff0c1 = $(`<div id="html_b91250414a9397215c7df315b30ff0c1" style="width: 100.0%; height: 100.0%;">2019-07-09</div>`)[0];
popup_384e9238d6fab8b7cac114f7c3aaface.setContent(html_b91250414a9397215c7df315b30ff0c1);



circle_596d99dd1ee90cb7ad14e513562a9a6a.bindPopup(popup_384e9238d6fab8b7cac114f7c3aaface)
    ;




var circle_46a2199affc6b801511caef5533a4ffd = L.circle(
    [43.659321525979564, -79.38061993988899],
    { "bubblingMouseEvents": true, "color": "#1FCF8F", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#1FCF8F", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_8f7eb4240bfe6d2df8b50d5e8bab2c8c = L.popup({ "maxWidth": "100%" });



var html_bd44df5bb555efce6c17aa2ba6e388b1 = $(`<div id="html_bd44df5bb555efce6c17aa2ba6e388b1" style="width: 100.0%; height: 100.0%;">2019-07-09</div>`)[0];
popup_8f7eb4240bfe6d2df8b50d5e8bab2c8c.setContent(html_bd44df5bb555efce6c17aa2ba6e388b1);



circle_46a2199affc6b801511caef5533a4ffd.bindPopup(popup_8f7eb4240bfe6d2df8b50d5e8bab2c8c)
    ;




var circle_2dce2e25f63f86e7e85669b2c5de5792 = L.circle(
    [43.65868884669014, -79.38032509883251],
    { "bubblingMouseEvents": true, "color": "#1FCF8F", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#1FCF8F", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_c7330f7bd110e79a08377bf8c2731f05 = L.popup({ "maxWidth": "100%" });



var html_23ead78243212ab5f8102c2c10fabfb7 = $(`<div id="html_23ead78243212ab5f8102c2c10fabfb7" style="width: 100.0%; height: 100.0%;">2019-07-09</div>`)[0];
popup_c7330f7bd110e79a08377bf8c2731f05.setContent(html_23ead78243212ab5f8102c2c10fabfb7);



circle_2dce2e25f63f86e7e85669b2c5de5792.bindPopup(popup_c7330f7bd110e79a08377bf8c2731f05)
    ;




var circle_429425b648f42c8fb8b21c1e294fba99 = L.circle(
    [43.659644580035675, -79.3798932333966],
    { "bubblingMouseEvents": true, "color": "#1FCF8F", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#1FCF8F", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_b35ba26586fd108f33abe4346750501c = L.popup({ "maxWidth": "100%" });



var html_9161ab2899c10e6dd87c9ac201f5ea22 = $(`<div id="html_9161ab2899c10e6dd87c9ac201f5ea22" style="width: 100.0%; height: 100.0%;">2019-07-09</div>`)[0];
popup_b35ba26586fd108f33abe4346750501c.setContent(html_9161ab2899c10e6dd87c9ac201f5ea22);



circle_429425b648f42c8fb8b21c1e294fba99.bindPopup(popup_b35ba26586fd108f33abe4346750501c)
    ;




var circle_90392d18951c6d9049b9ce96c9a8eed9 = L.circle(
    [43.65056464923142, -79.3844945720324],
    { "bubblingMouseEvents": true, "color": "#62BA6B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#62BA6B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_fc6ef033dfc6c5b2f27ce98741d57564 = L.popup({ "maxWidth": "100%" });



var html_f2efc31912298aabda1ea608878e36ce = $(`<div id="html_f2efc31912298aabda1ea608878e36ce" style="width: 100.0%; height: 100.0%;">2019-07-09</div>`)[0];
popup_fc6ef033dfc6c5b2f27ce98741d57564.setContent(html_f2efc31912298aabda1ea608878e36ce);



circle_90392d18951c6d9049b9ce96c9a8eed9.bindPopup(popup_fc6ef033dfc6c5b2f27ce98741d57564)
    ;




var circle_a8306d7d936c8d6124d09990e684ab34 = L.circle(
    [43.662095065276546, -79.32678931200745],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_a61467afc28ca0c7fef6ba114227161d = L.popup({ "maxWidth": "100%" });



var html_a8be93dad9da084d84847d3c94ecfa2a = $(`<div id="html_a8be93dad9da084d84847d3c94ecfa2a" style="width: 100.0%; height: 100.0%;">2019-07-15</div>`)[0];
popup_a61467afc28ca0c7fef6ba114227161d.setContent(html_a8be93dad9da084d84847d3c94ecfa2a);



circle_a8306d7d936c8d6124d09990e684ab34.bindPopup(popup_a61467afc28ca0c7fef6ba114227161d)
    ;




var circle_26d27abfe994db4691266a95fdbbc56e = L.circle(
    [43.662095065276546, -79.32678931200745],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_1f4044cf991cffc306a083159260b52a = L.popup({ "maxWidth": "100%" });



var html_a6b07fc63a2d813a0d5d7a8213505303 = $(`<div id="html_a6b07fc63a2d813a0d5d7a8213505303" style="width: 100.0%; height: 100.0%;">2019-07-15</div>`)[0];
popup_1f4044cf991cffc306a083159260b52a.setContent(html_a6b07fc63a2d813a0d5d7a8213505303);



circle_26d27abfe994db4691266a95fdbbc56e.bindPopup(popup_1f4044cf991cffc306a083159260b52a)
    ;




var circle_5a51dcbc91310ca78ace445be6e85c91 = L.circle(
    [43.662095065276546, -79.32678931200745],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_b1017efbabf253a5370375ce71ef3f56 = L.popup({ "maxWidth": "100%" });



var html_939e7b88a391d45b602513a317566513 = $(`<div id="html_939e7b88a391d45b602513a317566513" style="width: 100.0%; height: 100.0%;">2019-07-15</div>`)[0];
popup_b1017efbabf253a5370375ce71ef3f56.setContent(html_939e7b88a391d45b602513a317566513);



circle_5a51dcbc91310ca78ace445be6e85c91.bindPopup(popup_b1017efbabf253a5370375ce71ef3f56)
    ;




var circle_920f2d87fb616c201de5a973ff3f10e5 = L.circle(
    [43.660200388290995, -79.32435471073545],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_d776e844d3e22dd02cffb226513bb931 = L.popup({ "maxWidth": "100%" });



var html_9ac877c7ad75d4e5e11dbe109b6cf606 = $(`<div id="html_9ac877c7ad75d4e5e11dbe109b6cf606" style="width: 100.0%; height: 100.0%;">2019-07-15</div>`)[0];
popup_d776e844d3e22dd02cffb226513bb931.setContent(html_9ac877c7ad75d4e5e11dbe109b6cf606);



circle_920f2d87fb616c201de5a973ff3f10e5.bindPopup(popup_d776e844d3e22dd02cffb226513bb931)
    ;




var circle_ec960a78a6e20c481362ea54a78302d8 = L.circle(
    [43.6510106483976, -79.34949978317368],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_2ce5ff28b99e7e45766a59833276c46c = L.popup({ "maxWidth": "100%" });



var html_6a27bafa80fd47a7163be027ec2e7115 = $(`<div id="html_6a27bafa80fd47a7163be027ec2e7115" style="width: 100.0%; height: 100.0%;">2019-07-15</div>`)[0];
popup_2ce5ff28b99e7e45766a59833276c46c.setContent(html_6a27bafa80fd47a7163be027ec2e7115);



circle_ec960a78a6e20c481362ea54a78302d8.bindPopup(popup_2ce5ff28b99e7e45766a59833276c46c)
    ;




var circle_d7eccc89ac0b8f6c62027cfd399e07ca = L.circle(
    [43.65054319095615, -79.38489497697353],
    { "bubblingMouseEvents": true, "color": "#62BA6B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#62BA6B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_2ffeceadf4519c7302bc477c56454c8a = L.popup({ "maxWidth": "100%" });



var html_d3e562b35aeb7c5f10c22ef912007372 = $(`<div id="html_d3e562b35aeb7c5f10c22ef912007372" style="width: 100.0%; height: 100.0%;">2019-07-18</div>`)[0];
popup_2ffeceadf4519c7302bc477c56454c8a.setContent(html_d3e562b35aeb7c5f10c22ef912007372);



circle_d7eccc89ac0b8f6c62027cfd399e07ca.bindPopup(popup_2ffeceadf4519c7302bc477c56454c8a)
    ;




var circle_921b8420fbe1f96a846ec13a3b63dd21 = L.circle(
    [43.648708848995, -79.387927112699],
    { "bubblingMouseEvents": true, "color": "#62BA6B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#62BA6B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_b4115cd951ba29947a36f39448d4982c = L.popup({ "maxWidth": "100%" });



var html_317921b06be8f42921acbd0490d1a555 = $(`<div id="html_317921b06be8f42921acbd0490d1a555" style="width: 100.0%; height: 100.0%;">2019-07-18</div>`)[0];
popup_b4115cd951ba29947a36f39448d4982c.setContent(html_317921b06be8f42921acbd0490d1a555);



circle_921b8420fbe1f96a846ec13a3b63dd21.bindPopup(popup_b4115cd951ba29947a36f39448d4982c)
    ;




var circle_fcc859942f49c22a8ab5876752f97b38 = L.circle(
    [43.6489647651136, -79.38396562956154],
    { "bubblingMouseEvents": true, "color": "#62BA6B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#62BA6B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_ec0f4de80778806e4483f8c189d6ff86 = L.popup({ "maxWidth": "100%" });



var html_0be8a5976be6d5b44d34691ac061b661 = $(`<div id="html_0be8a5976be6d5b44d34691ac061b661" style="width: 100.0%; height: 100.0%;">2019-07-18</div>`)[0];
popup_ec0f4de80778806e4483f8c189d6ff86.setContent(html_0be8a5976be6d5b44d34691ac061b661);



circle_fcc859942f49c22a8ab5876752f97b38.bindPopup(popup_ec0f4de80778806e4483f8c189d6ff86)
    ;




var circle_4fd9cfc39bfca1d43432127d1025cc3b = L.circle(
    [43.63608596715881, -79.39557149738005],
    { "bubblingMouseEvents": true, "color": "#F73D32", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#F73D32", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_12d8bd43c0a8350f605588921457b0c7 = L.popup({ "maxWidth": "100%" });



var html_e95f4c1168f7be8a7839e6a74a99170f = $(`<div id="html_e95f4c1168f7be8a7839e6a74a99170f" style="width: 100.0%; height: 100.0%;">2019-07-18</div>`)[0];
popup_12d8bd43c0a8350f605588921457b0c7.setContent(html_e95f4c1168f7be8a7839e6a74a99170f);



circle_4fd9cfc39bfca1d43432127d1025cc3b.bindPopup(popup_12d8bd43c0a8350f605588921457b0c7)
    ;




var circle_ba2497047cebab4ec02c4549ef2a41ff = L.circle(
    [43.63608596715881, -79.39557149738005],
    { "bubblingMouseEvents": true, "color": "#F73D32", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#F73D32", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_bae1c64b1916db40aa6877982fcccaab = L.popup({ "maxWidth": "100%" });



var html_7e854f0f4aad6087ca8ea587ac202151 = $(`<div id="html_7e854f0f4aad6087ca8ea587ac202151" style="width: 100.0%; height: 100.0%;">2019-07-18</div>`)[0];
popup_bae1c64b1916db40aa6877982fcccaab.setContent(html_7e854f0f4aad6087ca8ea587ac202151);



circle_ba2497047cebab4ec02c4549ef2a41ff.bindPopup(popup_bae1c64b1916db40aa6877982fcccaab)
    ;




var circle_0676636d563839e4c46ae58d6137134b = L.circle(
    [43.63608596715881, -79.39557149738005],
    { "bubblingMouseEvents": true, "color": "#F73D32", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#F73D32", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_72d51aaba64b083be4839f265349f42d = L.popup({ "maxWidth": "100%" });



var html_0617e7f766855bccf339d2c880ff9400 = $(`<div id="html_0617e7f766855bccf339d2c880ff9400" style="width: 100.0%; height: 100.0%;">2019-07-18</div>`)[0];
popup_72d51aaba64b083be4839f265349f42d.setContent(html_0617e7f766855bccf339d2c880ff9400);



circle_0676636d563839e4c46ae58d6137134b.bindPopup(popup_72d51aaba64b083be4839f265349f42d)
    ;




var circle_ff119bfc0e39ee2ab872cce6c30cbf0e = L.circle(
    [43.64366182779803, -79.36923439429182],
    { "bubblingMouseEvents": true, "color": "#712C2D", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#712C2D", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_ea7127ccdc563a4ef2305148096c8578 = L.popup({ "maxWidth": "100%" });



var html_180d55461b103790fd5e73fdc4eba3ca = $(`<div id="html_180d55461b103790fd5e73fdc4eba3ca" style="width: 100.0%; height: 100.0%;">2019-07-18</div>`)[0];
popup_ea7127ccdc563a4ef2305148096c8578.setContent(html_180d55461b103790fd5e73fdc4eba3ca);



circle_ff119bfc0e39ee2ab872cce6c30cbf0e.bindPopup(popup_ea7127ccdc563a4ef2305148096c8578)
    ;




var circle_06465ba515df0cb466bff92e963ef37c = L.circle(
    [43.66026069161408, -79.39779161372451],
    { "bubblingMouseEvents": true, "color": "#CB3ADF", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#CB3ADF", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_6153b176db9c68eb1c3fbd0396fca5f7 = L.popup({ "maxWidth": "100%" });



var html_b1df959b93201fbebc81b0a2c44f0a09 = $(`<div id="html_b1df959b93201fbebc81b0a2c44f0a09" style="width: 100.0%; height: 100.0%;">2019-07-22</div>`)[0];
popup_6153b176db9c68eb1c3fbd0396fca5f7.setContent(html_b1df959b93201fbebc81b0a2c44f0a09);



circle_06465ba515df0cb466bff92e963ef37c.bindPopup(popup_6153b176db9c68eb1c3fbd0396fca5f7)
    ;




var circle_a935b2be03c565b1442cbf563e769a7e = L.circle(
    [43.636406246486324, -79.3971097144281],
    { "bubblingMouseEvents": true, "color": "#F73D32", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#F73D32", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_b31dca80a669f3ff365feeaf067f37c5 = L.popup({ "maxWidth": "100%" });



var html_89362f88a8a2df3fbd701d7fc928f674 = $(`<div id="html_89362f88a8a2df3fbd701d7fc928f674" style="width: 100.0%; height: 100.0%;">2019-07-22</div>`)[0];
popup_b31dca80a669f3ff365feeaf067f37c5.setContent(html_89362f88a8a2df3fbd701d7fc928f674);



circle_a935b2be03c565b1442cbf563e769a7e.bindPopup(popup_b31dca80a669f3ff365feeaf067f37c5)
    ;




var circle_27a1963394007d1bd1d51e13f5821ed0 = L.circle(
    [43.636406246486324, -79.3971097144281],
    { "bubblingMouseEvents": true, "color": "#F73D32", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#F73D32", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_404b1c7d6db99f8b12d23cfd1f780dd7 = L.popup({ "maxWidth": "100%" });



var html_78bed6e79960e94b8b2fb950c2d1b7e5 = $(`<div id="html_78bed6e79960e94b8b2fb950c2d1b7e5" style="width: 100.0%; height: 100.0%;">2019-07-22</div>`)[0];
popup_404b1c7d6db99f8b12d23cfd1f780dd7.setContent(html_78bed6e79960e94b8b2fb950c2d1b7e5);



circle_27a1963394007d1bd1d51e13f5821ed0.bindPopup(popup_404b1c7d6db99f8b12d23cfd1f780dd7)
    ;




var circle_aa9aa4352b104e1f0a23d88298898579 = L.circle(
    [43.636406246486324, -79.3971097144281],
    { "bubblingMouseEvents": true, "color": "#F73D32", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#F73D32", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_c5572332fd84cc0f7712690128727c1e = L.popup({ "maxWidth": "100%" });



var html_ba1af6ad220cb8853144334faac23911 = $(`<div id="html_ba1af6ad220cb8853144334faac23911" style="width: 100.0%; height: 100.0%;">2019-07-22</div>`)[0];
popup_c5572332fd84cc0f7712690128727c1e.setContent(html_ba1af6ad220cb8853144334faac23911);



circle_aa9aa4352b104e1f0a23d88298898579.bindPopup(popup_c5572332fd84cc0f7712690128727c1e)
    ;




var circle_497a61c61693e6350ebeaa48e51ac011 = L.circle(
    [43.636468390387186, -79.39694366043125],
    { "bubblingMouseEvents": true, "color": "#F73D32", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#F73D32", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_f77fdc79d374b9e260cfe1bb45a18c6e = L.popup({ "maxWidth": "100%" });



var html_ef6a0931f6c80eb7f9c50270b871c73c = $(`<div id="html_ef6a0931f6c80eb7f9c50270b871c73c" style="width: 100.0%; height: 100.0%;">2019-07-22</div>`)[0];
popup_f77fdc79d374b9e260cfe1bb45a18c6e.setContent(html_ef6a0931f6c80eb7f9c50270b871c73c);



circle_497a61c61693e6350ebeaa48e51ac011.bindPopup(popup_f77fdc79d374b9e260cfe1bb45a18c6e)
    ;




var circle_a083363e51e24d5e4191c0d5363e0e0d = L.circle(
    [43.630263731135265, -79.42168681238392],
    { "bubblingMouseEvents": true, "color": "#33CDB5", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#33CDB5", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_0e568679757c55daa4b7e91c9b55d251 = L.popup({ "maxWidth": "100%" });



var html_a322276bf5fd8c3667b389f01402ad76 = $(`<div id="html_a322276bf5fd8c3667b389f01402ad76" style="width: 100.0%; height: 100.0%;">2019-07-22</div>`)[0];
popup_0e568679757c55daa4b7e91c9b55d251.setContent(html_a322276bf5fd8c3667b389f01402ad76);



circle_a083363e51e24d5e4191c0d5363e0e0d.bindPopup(popup_0e568679757c55daa4b7e91c9b55d251)
    ;




var circle_b9ca5271ef8cad3cbfe5a1c05e45584d = L.circle(
    [43.62238091661414, -79.47464151483051],
    { "bubblingMouseEvents": true, "color": "#6C792E", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#6C792E", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_7fccca96bc2d9589c5da678d18c4a982 = L.popup({ "maxWidth": "100%" });



var html_97790e09a05c41732f2d97a5f7f4a3fc = $(`<div id="html_97790e09a05c41732f2d97a5f7f4a3fc" style="width: 100.0%; height: 100.0%;">2019-07-22</div>`)[0];
popup_7fccca96bc2d9589c5da678d18c4a982.setContent(html_97790e09a05c41732f2d97a5f7f4a3fc);



circle_b9ca5271ef8cad3cbfe5a1c05e45584d.bindPopup(popup_7fccca96bc2d9589c5da678d18c4a982)
    ;




var circle_7c2d9f6a00d50671aec4fafb8ca5b398 = L.circle(
    [43.62269958440167, -79.47493727506675],
    { "bubblingMouseEvents": true, "color": "#6C792E", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#6C792E", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_addcda1d2095f9f4c29a2568bb5713fa = L.popup({ "maxWidth": "100%" });



var html_a098fcaa70b6b841df52f0b18e45e410 = $(`<div id="html_a098fcaa70b6b841df52f0b18e45e410" style="width: 100.0%; height: 100.0%;">2019-07-22</div>`)[0];
popup_addcda1d2095f9f4c29a2568bb5713fa.setContent(html_a098fcaa70b6b841df52f0b18e45e410);



circle_7c2d9f6a00d50671aec4fafb8ca5b398.bindPopup(popup_addcda1d2095f9f4c29a2568bb5713fa)
    ;




var circle_595a43b1ff8aeba5aed83c8ef705f321 = L.circle(
    [43.62185534943696, -79.47578009382826],
    { "bubblingMouseEvents": true, "color": "#6C792E", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#6C792E", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_760eaf83789b76106c12ff56cd8d12b6 = L.popup({ "maxWidth": "100%" });



var html_8a9c308974f1cd8e10d6827ea6c629ad = $(`<div id="html_8a9c308974f1cd8e10d6827ea6c629ad" style="width: 100.0%; height: 100.0%;">2019-07-22</div>`)[0];
popup_760eaf83789b76106c12ff56cd8d12b6.setContent(html_8a9c308974f1cd8e10d6827ea6c629ad);



circle_595a43b1ff8aeba5aed83c8ef705f321.bindPopup(popup_760eaf83789b76106c12ff56cd8d12b6)
    ;




var circle_0942cd0bec4c9b26bc2def4bc1d06b9a = L.circle(
    [43.62163295371187, -79.48028383111517],
    { "bubblingMouseEvents": true, "color": "#6C792E", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#6C792E", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_bb5bd2d8d364677fffd4ea2889fe8458 = L.popup({ "maxWidth": "100%" });



var html_96f67043cec60d8cb5d28eaf2d798d40 = $(`<div id="html_96f67043cec60d8cb5d28eaf2d798d40" style="width: 100.0%; height: 100.0%;">2019-07-22</div>`)[0];
popup_bb5bd2d8d364677fffd4ea2889fe8458.setContent(html_96f67043cec60d8cb5d28eaf2d798d40);



circle_0942cd0bec4c9b26bc2def4bc1d06b9a.bindPopup(popup_bb5bd2d8d364677fffd4ea2889fe8458)
    ;




var circle_06bdc1aa1f47dad6622321458e920b65 = L.circle(
    [43.69406282803957, -79.3277328877568],
    { "bubblingMouseEvents": true, "color": "#721B5D", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#721B5D", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_341e2576d1605a69d64483b6ea3006e5 = L.popup({ "maxWidth": "100%" });



var html_acb5f015d0bdc2fc1a68ea6b31530098 = $(`<div id="html_acb5f015d0bdc2fc1a68ea6b31530098" style="width: 100.0%; height: 100.0%;">2019-07-23</div>`)[0];
popup_341e2576d1605a69d64483b6ea3006e5.setContent(html_acb5f015d0bdc2fc1a68ea6b31530098);



circle_06bdc1aa1f47dad6622321458e920b65.bindPopup(popup_341e2576d1605a69d64483b6ea3006e5)
    ;




var circle_ade199ff31bb8d6d6f87263c08412559 = L.circle(
    [43.658324785545354, -79.38442036735684],
    { "bubblingMouseEvents": true, "color": "#1FCF8F", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#1FCF8F", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_85fd500a7881b7bcfbcbbab602181bf7 = L.popup({ "maxWidth": "100%" });



var html_93111a57fdc00f39cd5ebaded79de816 = $(`<div id="html_93111a57fdc00f39cd5ebaded79de816" style="width: 100.0%; height: 100.0%;">2019-07-23</div>`)[0];
popup_85fd500a7881b7bcfbcbbab602181bf7.setContent(html_93111a57fdc00f39cd5ebaded79de816);



circle_ade199ff31bb8d6d6f87263c08412559.bindPopup(popup_85fd500a7881b7bcfbcbbab602181bf7)
    ;




var circle_bab9c705534c99f38bee89d1895515ec = L.circle(
    [43.65226249643152, -79.45882992634574],
    { "bubblingMouseEvents": true, "color": "#C1EA98", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#C1EA98", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_9105814f929284bf5e4f056371c9bdf8 = L.popup({ "maxWidth": "100%" });



var html_daf7b7fd884ae97c4336b9abc64d61ec = $(`<div id="html_daf7b7fd884ae97c4336b9abc64d61ec" style="width: 100.0%; height: 100.0%;">2019-07-24</div>`)[0];
popup_9105814f929284bf5e4f056371c9bdf8.setContent(html_daf7b7fd884ae97c4336b9abc64d61ec);



circle_bab9c705534c99f38bee89d1895515ec.bindPopup(popup_9105814f929284bf5e4f056371c9bdf8)
    ;




var circle_214464012c220e9684c0f6b2dc86a87f = L.circle(
    [43.650929783872535, -79.45895747533821],
    { "bubblingMouseEvents": true, "color": "#C1EA98", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#C1EA98", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_47973a2a3ca38ed4626530763c104e50 = L.popup({ "maxWidth": "100%" });



var html_b9ca3618bd5e31555cc6c6be82c04d7c = $(`<div id="html_b9ca3618bd5e31555cc6c6be82c04d7c" style="width: 100.0%; height: 100.0%;">2019-07-24</div>`)[0];
popup_47973a2a3ca38ed4626530763c104e50.setContent(html_b9ca3618bd5e31555cc6c6be82c04d7c);



circle_214464012c220e9684c0f6b2dc86a87f.bindPopup(popup_47973a2a3ca38ed4626530763c104e50)
    ;




var circle_bd459c29c7452dd5d69143f2b43879fd = L.circle(
    [43.65120009173151, -79.45804415909964],
    { "bubblingMouseEvents": true, "color": "#C1EA98", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#C1EA98", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_658435b2dde2d449c19f4b817971a5c7 = L.popup({ "maxWidth": "100%" });



var html_528093320600b0e3407081426dbe338e = $(`<div id="html_528093320600b0e3407081426dbe338e" style="width: 100.0%; height: 100.0%;">2019-07-24</div>`)[0];
popup_658435b2dde2d449c19f4b817971a5c7.setContent(html_528093320600b0e3407081426dbe338e);



circle_bd459c29c7452dd5d69143f2b43879fd.bindPopup(popup_658435b2dde2d449c19f4b817971a5c7)
    ;




var circle_30f60568bb242e1cc90101cabaebe9d3 = L.circle(
    [43.660871795194495, -79.32196172153361],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_276faabb9f0114d2a073cb29f8f53335 = L.popup({ "maxWidth": "100%" });



var html_87f1249813a3284f1a52ea36fa9c0ffe = $(`<div id="html_87f1249813a3284f1a52ea36fa9c0ffe" style="width: 100.0%; height: 100.0%;">2019-07-29</div>`)[0];
popup_276faabb9f0114d2a073cb29f8f53335.setContent(html_87f1249813a3284f1a52ea36fa9c0ffe);



circle_30f60568bb242e1cc90101cabaebe9d3.bindPopup(popup_276faabb9f0114d2a073cb29f8f53335)
    ;




var circle_6825038f624abee8a5eb3a9e308206c1 = L.circle(
    [43.66154744968077, -79.31834755186526],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_dd67ac39c92de6864696d0746003534c = L.popup({ "maxWidth": "100%" });



var html_a841aff024ac4e9f3a51deb2b9513c34 = $(`<div id="html_a841aff024ac4e9f3a51deb2b9513c34" style="width: 100.0%; height: 100.0%;">2019-07-29</div>`)[0];
popup_dd67ac39c92de6864696d0746003534c.setContent(html_a841aff024ac4e9f3a51deb2b9513c34);



circle_6825038f624abee8a5eb3a9e308206c1.bindPopup(popup_dd67ac39c92de6864696d0746003534c)
    ;




var circle_8981d932be5422543e69b59d86720981 = L.circle(
    [43.66154744968077, -79.31834755186526],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_7c770958e93358deff724d62335ae4e3 = L.popup({ "maxWidth": "100%" });



var html_df51c909c5ffa89a4d854d5de34b47c8 = $(`<div id="html_df51c909c5ffa89a4d854d5de34b47c8" style="width: 100.0%; height: 100.0%;">2019-07-29</div>`)[0];
popup_7c770958e93358deff724d62335ae4e3.setContent(html_df51c909c5ffa89a4d854d5de34b47c8);



circle_8981d932be5422543e69b59d86720981.bindPopup(popup_7c770958e93358deff724d62335ae4e3)
    ;




var circle_c09e595547ba5239355333edb832699c = L.circle(
    [43.66154744968077, -79.31834755186526],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_b5c3a4794509f5c738bf8192aa9c3a02 = L.popup({ "maxWidth": "100%" });



var html_3373dd13a7ac2bd55c80f6cafe74c059 = $(`<div id="html_3373dd13a7ac2bd55c80f6cafe74c059" style="width: 100.0%; height: 100.0%;">2019-07-29</div>`)[0];
popup_b5c3a4794509f5c738bf8192aa9c3a02.setContent(html_3373dd13a7ac2bd55c80f6cafe74c059);



circle_c09e595547ba5239355333edb832699c.bindPopup(popup_b5c3a4794509f5c738bf8192aa9c3a02)
    ;




var circle_61e40172c6d32afdadd21d5f25b99fb3 = L.circle(
    [43.6609630473424, -79.32146483799161],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_87f6778b4baffcf505f7eaaf010da912 = L.popup({ "maxWidth": "100%" });



var html_fda04924590b435fb3bc2a8bdc040ec9 = $(`<div id="html_fda04924590b435fb3bc2a8bdc040ec9" style="width: 100.0%; height: 100.0%;">2019-07-29</div>`)[0];
popup_87f6778b4baffcf505f7eaaf010da912.setContent(html_fda04924590b435fb3bc2a8bdc040ec9);



circle_61e40172c6d32afdadd21d5f25b99fb3.bindPopup(popup_87f6778b4baffcf505f7eaaf010da912)
    ;




var circle_8b67701defdc955619ce9ff290fd5d1b = L.circle(
    [43.651322446686045, -79.34893364680777],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_729c63721eb336bfa8fb60b33878a39e = L.popup({ "maxWidth": "100%" });



var html_e9447e7af72e5aa0535acd18384320f5 = $(`<div id="html_e9447e7af72e5aa0535acd18384320f5" style="width: 100.0%; height: 100.0%;">2019-07-29</div>`)[0];
popup_729c63721eb336bfa8fb60b33878a39e.setContent(html_e9447e7af72e5aa0535acd18384320f5);



circle_8b67701defdc955619ce9ff290fd5d1b.bindPopup(popup_729c63721eb336bfa8fb60b33878a39e)
    ;




var circle_2ba23bf50ba49c6f2d34a52d735f7406 = L.circle(
    [43.64278305580207, -79.37265489005398],
    { "bubblingMouseEvents": true, "color": "#712C2D", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#712C2D", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_4b85121a76f76412ecacff910851aa4d = L.popup({ "maxWidth": "100%" });



var html_eb1f0b7edf9400a90b20ae43eb096540 = $(`<div id="html_eb1f0b7edf9400a90b20ae43eb096540" style="width: 100.0%; height: 100.0%;">2019-07-29</div>`)[0];
popup_4b85121a76f76412ecacff910851aa4d.setContent(html_eb1f0b7edf9400a90b20ae43eb096540);



circle_2ba23bf50ba49c6f2d34a52d735f7406.bindPopup(popup_4b85121a76f76412ecacff910851aa4d)
    ;




var circle_1682b4063aceed95e2b19de76a71b7bf = L.circle(
    [43.649789756317524, -79.39107474760469],
    { "bubblingMouseEvents": true, "color": "#62BA6B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#62BA6B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_7eebb41f3bc33a5a2df5efa359863376 = L.popup({ "maxWidth": "100%" });



var html_ef01b60ef19d85927d1e0b608c5a304d = $(`<div id="html_ef01b60ef19d85927d1e0b608c5a304d" style="width: 100.0%; height: 100.0%;">2019-07-29</div>`)[0];
popup_7eebb41f3bc33a5a2df5efa359863376.setContent(html_ef01b60ef19d85927d1e0b608c5a304d);



circle_1682b4063aceed95e2b19de76a71b7bf.bindPopup(popup_7eebb41f3bc33a5a2df5efa359863376)
    ;




var circle_571dbb5699dba5a84309f252002c11bf = L.circle(
    [43.66767069812284, -79.38482166362051],
    { "bubblingMouseEvents": true, "color": "#1FCF8F", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#1FCF8F", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_e5ad740c3044149f7487d8950dc20488 = L.popup({ "maxWidth": "100%" });



var html_931afe48d9a7a9382f2d99926c2330b7 = $(`<div id="html_931afe48d9a7a9382f2d99926c2330b7" style="width: 100.0%; height: 100.0%;">2019-07-31</div>`)[0];
popup_e5ad740c3044149f7487d8950dc20488.setContent(html_931afe48d9a7a9382f2d99926c2330b7);



circle_571dbb5699dba5a84309f252002c11bf.bindPopup(popup_e5ad740c3044149f7487d8950dc20488)
    ;




var circle_740d8861ec0b8261d008891e45fc16da = L.circle(
    [43.65093642747147, -79.35138182328663],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_791b9dc08c5dc7e94a794754926a761c = L.popup({ "maxWidth": "100%" });



var html_5e3d4613e7fa53f20de27f596a34b488 = $(`<div id="html_5e3d4613e7fa53f20de27f596a34b488" style="width: 100.0%; height: 100.0%;">2019-07-31</div>`)[0];
popup_791b9dc08c5dc7e94a794754926a761c.setContent(html_5e3d4613e7fa53f20de27f596a34b488);



circle_740d8861ec0b8261d008891e45fc16da.bindPopup(popup_791b9dc08c5dc7e94a794754926a761c)
    ;




var circle_dfcf69c96953622916734519bd17a09d = L.circle(
    [43.66042608774077, -79.39725388566958],
    { "bubblingMouseEvents": true, "color": "#CB3ADF", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#CB3ADF", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_3b0632404fea4162ed36132c8b0c19c3 = L.popup({ "maxWidth": "100%" });



var html_c898fc198e44e48aab3bdc124bb648df = $(`<div id="html_c898fc198e44e48aab3bdc124bb648df" style="width: 100.0%; height: 100.0%;">2019-08-09</div>`)[0];
popup_3b0632404fea4162ed36132c8b0c19c3.setContent(html_c898fc198e44e48aab3bdc124bb648df);



circle_dfcf69c96953622916734519bd17a09d.bindPopup(popup_3b0632404fea4162ed36132c8b0c19c3)
    ;




var circle_28365f0b5c4ead4ca6a419c897a0af05 = L.circle(
    [43.65136323342209, -79.34736590624723],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_4ab91cd29baee1b6c629af47cb690135 = L.popup({ "maxWidth": "100%" });



var html_d63589c8e3c30936ff3ce1e92d97a5ed = $(`<div id="html_d63589c8e3c30936ff3ce1e92d97a5ed" style="width: 100.0%; height: 100.0%;">2019-08-09</div>`)[0];
popup_4ab91cd29baee1b6c629af47cb690135.setContent(html_d63589c8e3c30936ff3ce1e92d97a5ed);



circle_28365f0b5c4ead4ca6a419c897a0af05.bindPopup(popup_4ab91cd29baee1b6c629af47cb690135)
    ;




var circle_2b9dda104b46332818b8c8c16ae694d7 = L.circle(
    [43.65136323342209, -79.34736590624723],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_58aee67fd6dab61f27e08f083bbb545c = L.popup({ "maxWidth": "100%" });



var html_0ecc0222d9dfa801124feca95e0df685 = $(`<div id="html_0ecc0222d9dfa801124feca95e0df685" style="width: 100.0%; height: 100.0%;">2019-08-09</div>`)[0];
popup_58aee67fd6dab61f27e08f083bbb545c.setContent(html_0ecc0222d9dfa801124feca95e0df685);



circle_2b9dda104b46332818b8c8c16ae694d7.bindPopup(popup_58aee67fd6dab61f27e08f083bbb545c)
    ;




var circle_7c0feb5e00f692a6cc34c48d0daa7968 = L.circle(
    [43.65136323342209, -79.34736590624723],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_3b112aa52a9bbdc3f8916c614790d4a4 = L.popup({ "maxWidth": "100%" });



var html_74b17f2cb2da01d13a253392015ff0cb = $(`<div id="html_74b17f2cb2da01d13a253392015ff0cb" style="width: 100.0%; height: 100.0%;">2019-08-09</div>`)[0];
popup_3b112aa52a9bbdc3f8916c614790d4a4.setContent(html_74b17f2cb2da01d13a253392015ff0cb);



circle_7c0feb5e00f692a6cc34c48d0daa7968.bindPopup(popup_3b112aa52a9bbdc3f8916c614790d4a4)
    ;




var circle_d19041bbbe7d8df4ace1de468383553e = L.circle(
    [43.6276183224314, -79.3297966060447],
    { "bubblingMouseEvents": true, "color": "#E1BF68", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E1BF68", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_ebdb0226b05c7565a0d2c03f07cc086a = L.popup({ "maxWidth": "100%" });



var html_4eaaa9774b83a8d2102931037241cc62 = $(`<div id="html_4eaaa9774b83a8d2102931037241cc62" style="width: 100.0%; height: 100.0%;">2019-08-09</div>`)[0];
popup_ebdb0226b05c7565a0d2c03f07cc086a.setContent(html_4eaaa9774b83a8d2102931037241cc62);



circle_d19041bbbe7d8df4ace1de468383553e.bindPopup(popup_ebdb0226b05c7565a0d2c03f07cc086a)
    ;




var circle_48d9d7cf8564417447eee7a9c247af52 = L.circle(
    [43.6244700507457, -79.32378381899396],
    { "bubblingMouseEvents": true, "color": "#E1BF68", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E1BF68", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_7dd7d80773e23bdb40f06652aa467202 = L.popup({ "maxWidth": "100%" });



var html_7ac5fa2bc2c4a3abf05faf3f39458791 = $(`<div id="html_7ac5fa2bc2c4a3abf05faf3f39458791" style="width: 100.0%; height: 100.0%;">2019-08-09</div>`)[0];
popup_7dd7d80773e23bdb40f06652aa467202.setContent(html_7ac5fa2bc2c4a3abf05faf3f39458791);



circle_48d9d7cf8564417447eee7a9c247af52.bindPopup(popup_7dd7d80773e23bdb40f06652aa467202)
    ;




var circle_8339d5cdb7c75f7a99504d64ebfc5733 = L.circle(
    [43.626190373565095, -79.32359953488468],
    { "bubblingMouseEvents": true, "color": "#E1BF68", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E1BF68", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_0bc0f4dbe54d4693dada2ba85f3a62ee = L.popup({ "maxWidth": "100%" });



var html_253131886db414b79865ad09d1c0a923 = $(`<div id="html_253131886db414b79865ad09d1c0a923" style="width: 100.0%; height: 100.0%;">2019-08-09</div>`)[0];
popup_0bc0f4dbe54d4693dada2ba85f3a62ee.setContent(html_253131886db414b79865ad09d1c0a923);



circle_8339d5cdb7c75f7a99504d64ebfc5733.bindPopup(popup_0bc0f4dbe54d4693dada2ba85f3a62ee)
    ;




var circle_7e70c96b3f9a893c1c6055f66a6b0534 = L.circle(
    [43.66162879447051, -79.31194676271488],
    { "bubblingMouseEvents": true, "color": "#980020", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#980020", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_b7eab44333f47db2a30e07eed42d6431 = L.popup({ "maxWidth": "100%" });



var html_01cfb7f46a7d576690449d480ec5b842 = $(`<div id="html_01cfb7f46a7d576690449d480ec5b842" style="width: 100.0%; height: 100.0%;">2019-08-09</div>`)[0];
popup_b7eab44333f47db2a30e07eed42d6431.setContent(html_01cfb7f46a7d576690449d480ec5b842);



circle_7e70c96b3f9a893c1c6055f66a6b0534.bindPopup(popup_b7eab44333f47db2a30e07eed42d6431)
    ;




var circle_b1e174622bf842615e813279bf2eefdb = L.circle(
    [43.65571012473887, -79.30993279905373],
    { "bubblingMouseEvents": true, "color": "#980020", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#980020", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_e90c6ae5675fa37308f60bbab242e834 = L.popup({ "maxWidth": "100%" });



var html_1e5c1ba3cfbbd501a3a01eb67987ecbc = $(`<div id="html_1e5c1ba3cfbbd501a3a01eb67987ecbc" style="width: 100.0%; height: 100.0%;">2019-08-09</div>`)[0];
popup_e90c6ae5675fa37308f60bbab242e834.setContent(html_1e5c1ba3cfbbd501a3a01eb67987ecbc);



circle_b1e174622bf842615e813279bf2eefdb.bindPopup(popup_e90c6ae5675fa37308f60bbab242e834)
    ;




var circle_32ffa74c936ee2e238fc6155886d8d80 = L.circle(
    [43.655711159152474, -79.37579867312319],
    { "bubblingMouseEvents": true, "color": "#1FCF8F", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#1FCF8F", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_adba0677ad900a629c77e16db2d41373 = L.popup({ "maxWidth": "100%" });



var html_b0ce299e07880d3b78a242e7e9bfad50 = $(`<div id="html_b0ce299e07880d3b78a242e7e9bfad50" style="width: 100.0%; height: 100.0%;">2019-08-09</div>`)[0];
popup_adba0677ad900a629c77e16db2d41373.setContent(html_b0ce299e07880d3b78a242e7e9bfad50);



circle_32ffa74c936ee2e238fc6155886d8d80.bindPopup(popup_adba0677ad900a629c77e16db2d41373)
    ;




var circle_03c70d4fc9a1ef3c291bbfe8bbed1048 = L.circle(
    [43.64080066301866, -79.4908125824776],
    { "bubblingMouseEvents": true, "color": "#D220DA", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D220DA", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_a341a3398b52e7dbd034fdbc77b3a516 = L.popup({ "maxWidth": "100%" });



var html_767b79ba5ee38b9cc289d00dcabf6f37 = $(`<div id="html_767b79ba5ee38b9cc289d00dcabf6f37" style="width: 100.0%; height: 100.0%;">2019-08-14</div>`)[0];
popup_a341a3398b52e7dbd034fdbc77b3a516.setContent(html_767b79ba5ee38b9cc289d00dcabf6f37);



circle_03c70d4fc9a1ef3c291bbfe8bbed1048.bindPopup(popup_a341a3398b52e7dbd034fdbc77b3a516)
    ;




var circle_b8352dcaf23b79b20b9ec61a0e3c3109 = L.circle(
    [43.64080066301866, -79.4908125824776],
    { "bubblingMouseEvents": true, "color": "#D220DA", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D220DA", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_354120a67a0e39686b35955b278170f6 = L.popup({ "maxWidth": "100%" });



var html_5deab0dd3b98073567317f6ba61a67cb = $(`<div id="html_5deab0dd3b98073567317f6ba61a67cb" style="width: 100.0%; height: 100.0%;">2019-08-14</div>`)[0];
popup_354120a67a0e39686b35955b278170f6.setContent(html_5deab0dd3b98073567317f6ba61a67cb);



circle_b8352dcaf23b79b20b9ec61a0e3c3109.bindPopup(popup_354120a67a0e39686b35955b278170f6)
    ;




var circle_f02157dc693337d2b311ee3767eccd3e = L.circle(
    [43.64080066301866, -79.4908125824776],
    { "bubblingMouseEvents": true, "color": "#D220DA", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D220DA", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_8d5dcb9c12b72c21112bce01eb473e39 = L.popup({ "maxWidth": "100%" });



var html_23667256efbc430fa7fdacc79a2ac3f3 = $(`<div id="html_23667256efbc430fa7fdacc79a2ac3f3" style="width: 100.0%; height: 100.0%;">2019-08-14</div>`)[0];
popup_8d5dcb9c12b72c21112bce01eb473e39.setContent(html_23667256efbc430fa7fdacc79a2ac3f3);



circle_f02157dc693337d2b311ee3767eccd3e.bindPopup(popup_8d5dcb9c12b72c21112bce01eb473e39)
    ;




var circle_13a699f0d6a5533b66c9d5e1f92cbc54 = L.circle(
    [43.631502404058836, -79.47165071485699],
    { "bubblingMouseEvents": true, "color": "#D4D163", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D4D163", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_a63feaf9c0cc4a1f52290aca23e841e9 = L.popup({ "maxWidth": "100%" });



var html_33d3932576fb04fad7cac22f1fa4a038 = $(`<div id="html_33d3932576fb04fad7cac22f1fa4a038" style="width: 100.0%; height: 100.0%;">2019-08-14</div>`)[0];
popup_a63feaf9c0cc4a1f52290aca23e841e9.setContent(html_33d3932576fb04fad7cac22f1fa4a038);



circle_13a699f0d6a5533b66c9d5e1f92cbc54.bindPopup(popup_a63feaf9c0cc4a1f52290aca23e841e9)
    ;




var circle_7b05646fc23250747f18c04ac585f24b = L.circle(
    [43.64059012332043, -79.45547801575259],
    { "bubblingMouseEvents": true, "color": "#409E47", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#409E47", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_421652256d779a58cf80d29117b936f7 = L.popup({ "maxWidth": "100%" });



var html_aa6965be59099682bf0b6642fbe7ac08 = $(`<div id="html_aa6965be59099682bf0b6642fbe7ac08" style="width: 100.0%; height: 100.0%;">2019-08-14</div>`)[0];
popup_421652256d779a58cf80d29117b936f7.setContent(html_aa6965be59099682bf0b6642fbe7ac08);



circle_7b05646fc23250747f18c04ac585f24b.bindPopup(popup_421652256d779a58cf80d29117b936f7)
    ;




var circle_b8c4d1dd26b89f634a6e241ed25a1173 = L.circle(
    [43.65332599215513, -79.46522651618969],
    { "bubblingMouseEvents": true, "color": "#C1EA98", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#C1EA98", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_b39423a2cceada878e6e92f98604a4e3 = L.popup({ "maxWidth": "100%" });



var html_94319e54fa5c37efcca752b530149096 = $(`<div id="html_94319e54fa5c37efcca752b530149096" style="width: 100.0%; height: 100.0%;">2020-07-24</div>`)[0];
popup_b39423a2cceada878e6e92f98604a4e3.setContent(html_94319e54fa5c37efcca752b530149096);



circle_b8c4d1dd26b89f634a6e241ed25a1173.bindPopup(popup_b39423a2cceada878e6e92f98604a4e3)
    ;




var circle_6fc3697a5631bdce1fffc492cad8a732 = L.circle(
    [43.649667981333295, -79.47071071637171],
    { "bubblingMouseEvents": true, "color": "#90E7A1", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#90E7A1", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_990067cac078a2af688b9c82e7766956 = L.popup({ "maxWidth": "100%" });



var html_18c1813f2193b6f2366bf5919a6edabd = $(`<div id="html_18c1813f2193b6f2366bf5919a6edabd" style="width: 100.0%; height: 100.0%;">2020-07-24</div>`)[0];
popup_990067cac078a2af688b9c82e7766956.setContent(html_18c1813f2193b6f2366bf5919a6edabd);



circle_6fc3697a5631bdce1fffc492cad8a732.bindPopup(popup_990067cac078a2af688b9c82e7766956)
    ;




var circle_8da9b55549999d80762e6ccd0d4fb7ed = L.circle(
    [43.66534806191418, -79.46173218121606],
    { "bubblingMouseEvents": true, "color": "#FF20FF", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#FF20FF", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_c626aa4a6ad5ed3b573afb0c08e082ca = L.popup({ "maxWidth": "100%" });



var html_833e7b0adc9801fb12879ee361ad5fa6 = $(`<div id="html_833e7b0adc9801fb12879ee361ad5fa6" style="width: 100.0%; height: 100.0%;">2020-07-24</div>`)[0];
popup_c626aa4a6ad5ed3b573afb0c08e082ca.setContent(html_833e7b0adc9801fb12879ee361ad5fa6);



circle_8da9b55549999d80762e6ccd0d4fb7ed.bindPopup(popup_c626aa4a6ad5ed3b573afb0c08e082ca)
    ;




var circle_2740d78100f93b02d7a5c77f3d3144c1 = L.circle(
    [43.66534806191418, -79.46173218121606],
    { "bubblingMouseEvents": true, "color": "#FF20FF", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#FF20FF", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_45d3c53291a25a31e8016e6b3f2e8c5b = L.popup({ "maxWidth": "100%" });



var html_c594180f55a780f61d4389d145c03d33 = $(`<div id="html_c594180f55a780f61d4389d145c03d33" style="width: 100.0%; height: 100.0%;">2020-07-24</div>`)[0];
popup_45d3c53291a25a31e8016e6b3f2e8c5b.setContent(html_c594180f55a780f61d4389d145c03d33);



circle_2740d78100f93b02d7a5c77f3d3144c1.bindPopup(popup_45d3c53291a25a31e8016e6b3f2e8c5b)
    ;




var circle_e44fdae9d352721c83d3594732299f15 = L.circle(
    [43.66534806191418, -79.46173218121606],
    { "bubblingMouseEvents": true, "color": "#FF20FF", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#FF20FF", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_b31f891ab8f4d9723c0f5ac89934726c = L.popup({ "maxWidth": "100%" });



var html_6c0303a286c699f65aed2f9bb00806ed = $(`<div id="html_6c0303a286c699f65aed2f9bb00806ed" style="width: 100.0%; height: 100.0%;">2020-07-24</div>`)[0];
popup_b31f891ab8f4d9723c0f5ac89934726c.setContent(html_6c0303a286c699f65aed2f9bb00806ed);



circle_e44fdae9d352721c83d3594732299f15.bindPopup(popup_b31f891ab8f4d9723c0f5ac89934726c)
    ;




var circle_b90c0283dbcfaf3900a01b2120b99b40 = L.circle(
    [43.64375299121843, -79.36897616649384],
    { "bubblingMouseEvents": true, "color": "#712C2D", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#712C2D", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_dbc43eac0c432deefb9cb989d28572f5 = L.popup({ "maxWidth": "100%" });



var html_7d51fec9cce971ce69c8714b4c2851aa = $(`<div id="html_7d51fec9cce971ce69c8714b4c2851aa" style="width: 100.0%; height: 100.0%;">2020-07-28</div>`)[0];
popup_dbc43eac0c432deefb9cb989d28572f5.setContent(html_7d51fec9cce971ce69c8714b4c2851aa);



circle_b90c0283dbcfaf3900a01b2120b99b40.bindPopup(popup_dbc43eac0c432deefb9cb989d28572f5)
    ;




var circle_faad49f96247224f1c1e1cc91b74b869 = L.circle(
    [43.62610673555562, -79.32360999143813],
    { "bubblingMouseEvents": true, "color": "#E1BF68", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E1BF68", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_7655d0198c72cebd5983455f708fa63e = L.popup({ "maxWidth": "100%" });



var html_bf054dc7c32d38c2732abe170d4454e3 = $(`<div id="html_bf054dc7c32d38c2732abe170d4454e3" style="width: 100.0%; height: 100.0%;">2020-07-28</div>`)[0];
popup_7655d0198c72cebd5983455f708fa63e.setContent(html_bf054dc7c32d38c2732abe170d4454e3);



circle_faad49f96247224f1c1e1cc91b74b869.bindPopup(popup_7655d0198c72cebd5983455f708fa63e)
    ;




var circle_147ac80057993dbacdd295c697c441f7 = L.circle(
    [43.66541356523002, -79.46433643633713],
    { "bubblingMouseEvents": true, "color": "#FF20FF", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#FF20FF", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_5798769aa1e09e35190e7ac91dc4fd45 = L.popup({ "maxWidth": "100%" });



var html_e505e88780413bbdb65adb8457cd050d = $(`<div id="html_e505e88780413bbdb65adb8457cd050d" style="width: 100.0%; height: 100.0%;">2020-07-31</div>`)[0];
popup_5798769aa1e09e35190e7ac91dc4fd45.setContent(html_e505e88780413bbdb65adb8457cd050d);



circle_147ac80057993dbacdd295c697c441f7.bindPopup(popup_5798769aa1e09e35190e7ac91dc4fd45)
    ;




var circle_0202d2b44920c8265367b1ede9616dca = L.circle(
    [43.66543223658325, -79.46397501074732],
    { "bubblingMouseEvents": true, "color": "#FF20FF", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#FF20FF", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_543b057d4c6707706b1cc69748744593 = L.popup({ "maxWidth": "100%" });



var html_581ceef92a1c6fcad8e572cb71ce663d = $(`<div id="html_581ceef92a1c6fcad8e572cb71ce663d" style="width: 100.0%; height: 100.0%;">2020-07-31</div>`)[0];
popup_543b057d4c6707706b1cc69748744593.setContent(html_581ceef92a1c6fcad8e572cb71ce663d);



circle_0202d2b44920c8265367b1ede9616dca.bindPopup(popup_543b057d4c6707706b1cc69748744593)
    ;




var circle_fe96a90660d672bc49929c328da42156 = L.circle(
    [43.68077117725365, -79.4776523609124],
    { "bubblingMouseEvents": true, "color": "#D03EBC", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D03EBC", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_7c157208539e349cd275ccdade4b68ac = L.popup({ "maxWidth": "100%" });



var html_6f1d0811427a710c6ceead2387ff9c4b = $(`<div id="html_6f1d0811427a710c6ceead2387ff9c4b" style="width: 100.0%; height: 100.0%;">2020-07-31</div>`)[0];
popup_7c157208539e349cd275ccdade4b68ac.setContent(html_6f1d0811427a710c6ceead2387ff9c4b);



circle_fe96a90660d672bc49929c328da42156.bindPopup(popup_7c157208539e349cd275ccdade4b68ac)
    ;




var circle_6c8eb4c4506002e3b74da9cc7c0e0dbf = L.circle(
    [43.681029900843136, -79.47807891521386],
    { "bubblingMouseEvents": true, "color": "#D03EBC", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D03EBC", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_f88f75a21d48c3aa18650026afc3b339 = L.popup({ "maxWidth": "100%" });



var html_c4664993cc9c5dfb0a8c8acafaf80082 = $(`<div id="html_c4664993cc9c5dfb0a8c8acafaf80082" style="width: 100.0%; height: 100.0%;">2020-07-31</div>`)[0];
popup_f88f75a21d48c3aa18650026afc3b339.setContent(html_c4664993cc9c5dfb0a8c8acafaf80082);



circle_6c8eb4c4506002e3b74da9cc7c0e0dbf.bindPopup(popup_f88f75a21d48c3aa18650026afc3b339)
    ;




var circle_adf888c1d926a3f6753c37008be120b6 = L.circle(
    [43.681029900843136, -79.47807891521386],
    { "bubblingMouseEvents": true, "color": "#D03EBC", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D03EBC", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_ba74da61c6ad0774ebc087cdab8bebe8 = L.popup({ "maxWidth": "100%" });



var html_54641cdf4ca44f4f6818a2f33772f9b8 = $(`<div id="html_54641cdf4ca44f4f6818a2f33772f9b8" style="width: 100.0%; height: 100.0%;">2020-07-31</div>`)[0];
popup_ba74da61c6ad0774ebc087cdab8bebe8.setContent(html_54641cdf4ca44f4f6818a2f33772f9b8);



circle_adf888c1d926a3f6753c37008be120b6.bindPopup(popup_ba74da61c6ad0774ebc087cdab8bebe8)
    ;




var circle_4e7f7ae8bdf9be11bad196fb13b318dc = L.circle(
    [43.681029900843136, -79.47807891521386],
    { "bubblingMouseEvents": true, "color": "#D03EBC", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D03EBC", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_2c3bfae87ef25efc14f1e5bc11e022ae = L.popup({ "maxWidth": "100%" });



var html_a42404d49bc2fa16eea8872b930a0ac3 = $(`<div id="html_a42404d49bc2fa16eea8872b930a0ac3" style="width: 100.0%; height: 100.0%;">2020-07-31</div>`)[0];
popup_2c3bfae87ef25efc14f1e5bc11e022ae.setContent(html_a42404d49bc2fa16eea8872b930a0ac3);



circle_4e7f7ae8bdf9be11bad196fb13b318dc.bindPopup(popup_2c3bfae87ef25efc14f1e5bc11e022ae)
    ;




var circle_42582186cf5e08ea639ec31e1ef0a318 = L.circle(
    [43.67188224093062, -79.46742212602285],
    { "bubblingMouseEvents": true, "color": "#FF20FF", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#FF20FF", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_e53990e5883ec150a26d087cc3a44242 = L.popup({ "maxWidth": "100%" });



var html_4dd4e953084a1433a07992fb7f14d44c = $(`<div id="html_4dd4e953084a1433a07992fb7f14d44c" style="width: 100.0%; height: 100.0%;">2020-07-31</div>`)[0];
popup_e53990e5883ec150a26d087cc3a44242.setContent(html_4dd4e953084a1433a07992fb7f14d44c);



circle_42582186cf5e08ea639ec31e1ef0a318.bindPopup(popup_e53990e5883ec150a26d087cc3a44242)
    ;




var circle_9a4846e33469fdd5a615e4f2dc536f84 = L.circle(
    [43.65312662189014, -79.43034033149338],
    { "bubblingMouseEvents": true, "color": "#06C657", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#06C657", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_ef511732e9ab56593f387307eaff2d3a = L.popup({ "maxWidth": "100%" });



var html_22b79627c417b761fa87340c05f0799b = $(`<div id="html_22b79627c417b761fa87340c05f0799b" style="width: 100.0%; height: 100.0%;">2020-08-05</div>`)[0];
popup_ef511732e9ab56593f387307eaff2d3a.setContent(html_22b79627c417b761fa87340c05f0799b);



circle_9a4846e33469fdd5a615e4f2dc536f84.bindPopup(popup_ef511732e9ab56593f387307eaff2d3a)
    ;




var circle_b40a8c53b406d3ef27c4493a8b96f8ed = L.circle(
    [43.646350022852864, -79.49836935700836],
    { "bubblingMouseEvents": true, "color": "#78F967", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#78F967", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_51c7115ef7283ca6a79e18de11934b9e = L.popup({ "maxWidth": "100%" });



var html_23cb04aeb68b08a88481e8805729dc77 = $(`<div id="html_23cb04aeb68b08a88481e8805729dc77" style="width: 100.0%; height: 100.0%;">2020-08-05</div>`)[0];
popup_51c7115ef7283ca6a79e18de11934b9e.setContent(html_23cb04aeb68b08a88481e8805729dc77);



circle_b40a8c53b406d3ef27c4493a8b96f8ed.bindPopup(popup_51c7115ef7283ca6a79e18de11934b9e)
    ;




var circle_be6845a338309b0890be5b43ebdb2f85 = L.circle(
    [43.646350022852864, -79.49836935700836],
    { "bubblingMouseEvents": true, "color": "#78F967", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#78F967", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_3688eb1d8e9b4745104b5341c519f3fc = L.popup({ "maxWidth": "100%" });



var html_25caf25bb14753eca1fd1ae3bac8f979 = $(`<div id="html_25caf25bb14753eca1fd1ae3bac8f979" style="width: 100.0%; height: 100.0%;">2020-08-05</div>`)[0];
popup_3688eb1d8e9b4745104b5341c519f3fc.setContent(html_25caf25bb14753eca1fd1ae3bac8f979);



circle_be6845a338309b0890be5b43ebdb2f85.bindPopup(popup_3688eb1d8e9b4745104b5341c519f3fc)
    ;




var circle_695d2deb881d7ba0a23eacd759c78b9f = L.circle(
    [43.646350022852864, -79.49836935700836],
    { "bubblingMouseEvents": true, "color": "#78F967", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#78F967", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_6389d723831caa5d7629ce126be8ca07 = L.popup({ "maxWidth": "100%" });



var html_716d5f757e502edaee930f2633dc437f = $(`<div id="html_716d5f757e502edaee930f2633dc437f" style="width: 100.0%; height: 100.0%;">2020-08-05</div>`)[0];
popup_6389d723831caa5d7629ce126be8ca07.setContent(html_716d5f757e502edaee930f2633dc437f);



circle_695d2deb881d7ba0a23eacd759c78b9f.bindPopup(popup_6389d723831caa5d7629ce126be8ca07)
    ;




var circle_b994bcfd53ccf86927da4c16c8c2db9c = L.circle(
    [43.64107982948351, -79.49148654961984],
    { "bubblingMouseEvents": true, "color": "#D220DA", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D220DA", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_309050aff4cb8eee73032675e493c0d0 = L.popup({ "maxWidth": "100%" });



var html_392243edf4e71d3be3bf91e80eabab3e = $(`<div id="html_392243edf4e71d3be3bf91e80eabab3e" style="width: 100.0%; height: 100.0%;">2020-08-05</div>`)[0];
popup_309050aff4cb8eee73032675e493c0d0.setContent(html_392243edf4e71d3be3bf91e80eabab3e);



circle_b994bcfd53ccf86927da4c16c8c2db9c.bindPopup(popup_309050aff4cb8eee73032675e493c0d0)
    ;




var circle_5a716ac7cd812be4871b0352c72e88d9 = L.circle(
    [43.65148357699122, -79.34851704977788],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_f618d6b3e6d53eba3ff8a7fd6c5afdab = L.popup({ "maxWidth": "100%" });



var html_0135d4c72eb46f7c087f150b1ca9098b = $(`<div id="html_0135d4c72eb46f7c087f150b1ca9098b" style="width: 100.0%; height: 100.0%;">2020-08-06</div>`)[0];
popup_f618d6b3e6d53eba3ff8a7fd6c5afdab.setContent(html_0135d4c72eb46f7c087f150b1ca9098b);



circle_5a716ac7cd812be4871b0352c72e88d9.bindPopup(popup_f618d6b3e6d53eba3ff8a7fd6c5afdab)
    ;




var circle_79d354fef52e5674ca1975596e3c67f1 = L.circle(
    [43.65085178261501, -79.3500584484981],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_0f72a4f301eb7459e7fe307bce13c9be = L.popup({ "maxWidth": "100%" });



var html_c57b5a0c3b63089e8a166b515cbf66ca = $(`<div id="html_c57b5a0c3b63089e8a166b515cbf66ca" style="width: 100.0%; height: 100.0%;">2020-08-06</div>`)[0];
popup_0f72a4f301eb7459e7fe307bce13c9be.setContent(html_c57b5a0c3b63089e8a166b515cbf66ca);



circle_79d354fef52e5674ca1975596e3c67f1.bindPopup(popup_0f72a4f301eb7459e7fe307bce13c9be)
    ;




var circle_ce85af612cdcce1217b14065766910b0 = L.circle(
    [43.70120060098244, -79.31388880328412],
    { "bubblingMouseEvents": true, "color": "#721B5D", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#721B5D", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_dcf693dbe04d32edcdc09d7201b30155 = L.popup({ "maxWidth": "100%" });



var html_e864621d74e47e5a6bcabef53473f781 = $(`<div id="html_e864621d74e47e5a6bcabef53473f781" style="width: 100.0%; height: 100.0%;">2020-08-06</div>`)[0];
popup_dcf693dbe04d32edcdc09d7201b30155.setContent(html_e864621d74e47e5a6bcabef53473f781);



circle_ce85af612cdcce1217b14065766910b0.bindPopup(popup_dcf693dbe04d32edcdc09d7201b30155)
    ;




var circle_913d61b9b023cf633cc8ff1e645eb46b = L.circle(
    [43.65076567139192, -79.35013983296479],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_e20f49bca88be6308e995a4f6809cf93 = L.popup({ "maxWidth": "100%" });



var html_d15dc5ba7f531bab72f3ae33e7941aff = $(`<div id="html_d15dc5ba7f531bab72f3ae33e7941aff" style="width: 100.0%; height: 100.0%;">2020-08-06</div>`)[0];
popup_e20f49bca88be6308e995a4f6809cf93.setContent(html_d15dc5ba7f531bab72f3ae33e7941aff);



circle_913d61b9b023cf633cc8ff1e645eb46b.bindPopup(popup_e20f49bca88be6308e995a4f6809cf93)
    ;




var circle_07a28cf1bb1cf9ad1accea16227edb3d = L.circle(
    [43.64274777813922, -79.37213785655985],
    { "bubblingMouseEvents": true, "color": "#712C2D", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#712C2D", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_a0f3a2dadc86a0e61538f229520d8152 = L.popup({ "maxWidth": "100%" });



var html_aff41528e460471651c72babe9a7740c = $(`<div id="html_aff41528e460471651c72babe9a7740c" style="width: 100.0%; height: 100.0%;">2020-08-06</div>`)[0];
popup_a0f3a2dadc86a0e61538f229520d8152.setContent(html_aff41528e460471651c72babe9a7740c);



circle_07a28cf1bb1cf9ad1accea16227edb3d.bindPopup(popup_a0f3a2dadc86a0e61538f229520d8152)
    ;




var circle_74e2d95112b4c873a90a3ca38f95ff27 = L.circle(
    [43.64160945109871, -79.37617128765827],
    { "bubblingMouseEvents": true, "color": "#712C2D", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#712C2D", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_c066d65c6a3867180d4eb9b266bf8536 = L.popup({ "maxWidth": "100%" });



var html_099730d75d5b0e92c7a9b78d764acfb3 = $(`<div id="html_099730d75d5b0e92c7a9b78d764acfb3" style="width: 100.0%; height: 100.0%;">2020-08-06</div>`)[0];
popup_c066d65c6a3867180d4eb9b266bf8536.setContent(html_099730d75d5b0e92c7a9b78d764acfb3);



circle_74e2d95112b4c873a90a3ca38f95ff27.bindPopup(popup_c066d65c6a3867180d4eb9b266bf8536)
    ;




var circle_5ccaab83989a34d6cfca61391a2e2f54 = L.circle(
    [43.64985193123888, -79.38704678455657],
    { "bubblingMouseEvents": true, "color": "#62BA6B", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#62BA6B", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_96ce5f32f14476004d5fde1bb32dd48a = L.popup({ "maxWidth": "100%" });



var html_283646c266d55c97f57996262abeb8b1 = $(`<div id="html_283646c266d55c97f57996262abeb8b1" style="width: 100.0%; height: 100.0%;">2020-08-06</div>`)[0];
popup_96ce5f32f14476004d5fde1bb32dd48a.setContent(html_283646c266d55c97f57996262abeb8b1);



circle_5ccaab83989a34d6cfca61391a2e2f54.bindPopup(popup_96ce5f32f14476004d5fde1bb32dd48a)
    ;




var circle_debfd1b36700e999a026ff9ef0acf170 = L.circle(
    [43.65985480704398, -79.35523239821782],
    { "bubblingMouseEvents": true, "color": "#0C0328", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#0C0328", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_31015cc194214144549e29ebc4806968 = L.popup({ "maxWidth": "100%" });



var html_486e9eb9562ee7be7b0a93ef0762ddc3 = $(`<div id="html_486e9eb9562ee7be7b0a93ef0762ddc3" style="width: 100.0%; height: 100.0%;">2020-08-07</div>`)[0];
popup_31015cc194214144549e29ebc4806968.setContent(html_486e9eb9562ee7be7b0a93ef0762ddc3);



circle_debfd1b36700e999a026ff9ef0acf170.bindPopup(popup_31015cc194214144549e29ebc4806968)
    ;




var circle_7bddc5282b4e7d97d7bc0c348e8e9792 = L.circle(
    [43.65127284119663, -79.34726354911997],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_e51f4379b707f9e125e041a77efa3560 = L.popup({ "maxWidth": "100%" });



var html_d43e5b46b0915060716a0e9db646cca8 = $(`<div id="html_d43e5b46b0915060716a0e9db646cca8" style="width: 100.0%; height: 100.0%;">2020-08-07</div>`)[0];
popup_e51f4379b707f9e125e041a77efa3560.setContent(html_d43e5b46b0915060716a0e9db646cca8);



circle_7bddc5282b4e7d97d7bc0c348e8e9792.bindPopup(popup_e51f4379b707f9e125e041a77efa3560)
    ;




var circle_8c6026abe29b9d4015d1f7bb9690c43d = L.circle(
    [43.65071613951215, -79.35259916496177],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_02a1a518b3263cee4edccafaad5d1654 = L.popup({ "maxWidth": "100%" });



var html_f147f072f1fd1d1ddf4f95dd6a26701a = $(`<div id="html_f147f072f1fd1d1ddf4f95dd6a26701a" style="width: 100.0%; height: 100.0%;">2020-08-07</div>`)[0];
popup_02a1a518b3263cee4edccafaad5d1654.setContent(html_f147f072f1fd1d1ddf4f95dd6a26701a);



circle_8c6026abe29b9d4015d1f7bb9690c43d.bindPopup(popup_02a1a518b3263cee4edccafaad5d1654)
    ;




var circle_1bd66074898e40f62696f89db3ea41b4 = L.circle(
    [43.64308640359541, -79.3713420001942],
    { "bubblingMouseEvents": true, "color": "#712C2D", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#712C2D", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_3726fac0f75af227c78b486abd653987 = L.popup({ "maxWidth": "100%" });



var html_a8da814a1c2acbfa30010b5c61184282 = $(`<div id="html_a8da814a1c2acbfa30010b5c61184282" style="width: 100.0%; height: 100.0%;">2020-08-07</div>`)[0];
popup_3726fac0f75af227c78b486abd653987.setContent(html_a8da814a1c2acbfa30010b5c61184282);



circle_1bd66074898e40f62696f89db3ea41b4.bindPopup(popup_3726fac0f75af227c78b486abd653987)
    ;




var circle_221b7357418578d2ba859dc54a7a7291 = L.circle(
    [43.65359574787329, -79.32411024302505],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_2b3543d5955c7e74e2adf88e5bd72f82 = L.popup({ "maxWidth": "100%" });



var html_60d4cdefbc97cd881f22b6f74013e700 = $(`<div id="html_60d4cdefbc97cd881f22b6f74013e700" style="width: 100.0%; height: 100.0%;">2020-08-31</div>`)[0];
popup_2b3543d5955c7e74e2adf88e5bd72f82.setContent(html_60d4cdefbc97cd881f22b6f74013e700);



circle_221b7357418578d2ba859dc54a7a7291.bindPopup(popup_2b3543d5955c7e74e2adf88e5bd72f82)
    ;




var circle_089abd825c46204e1dfa0ee8700b62da = L.circle(
    [43.65576153740245, -79.32566819222151],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_79710af637b7e834ac1ea31cdc0c2613 = L.popup({ "maxWidth": "100%" });



var html_d0941382a991beb3739ad80f968dd198 = $(`<div id="html_d0941382a991beb3739ad80f968dd198" style="width: 100.0%; height: 100.0%;">2020-08-31</div>`)[0];
popup_79710af637b7e834ac1ea31cdc0c2613.setContent(html_d0941382a991beb3739ad80f968dd198);



circle_089abd825c46204e1dfa0ee8700b62da.bindPopup(popup_79710af637b7e834ac1ea31cdc0c2613)
    ;




var circle_fd2f3fb2395b40dd46b721d1f32bf32a = L.circle(
    [43.65261213605562, -79.32292896596189],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_004cb981dd93655bb7a979946f8bbf8a = L.popup({ "maxWidth": "100%" });



var html_8d1ac0ac2e51cebbbb3dd2d5bb869211 = $(`<div id="html_8d1ac0ac2e51cebbbb3dd2d5bb869211" style="width: 100.0%; height: 100.0%;">2020-08-31</div>`)[0];
popup_004cb981dd93655bb7a979946f8bbf8a.setContent(html_8d1ac0ac2e51cebbbb3dd2d5bb869211);



circle_fd2f3fb2395b40dd46b721d1f32bf32a.bindPopup(popup_004cb981dd93655bb7a979946f8bbf8a)
    ;




var circle_51d25b282e478f30b535227f7e257277 = L.circle(
    [43.65586923690243, -79.32571826188632],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_d231754aa0d8e2667a90528de4db010f = L.popup({ "maxWidth": "100%" });



var html_0ea35a0430d4b036095950440a9e508d = $(`<div id="html_0ea35a0430d4b036095950440a9e508d" style="width: 100.0%; height: 100.0%;">2020-08-31</div>`)[0];
popup_d231754aa0d8e2667a90528de4db010f.setContent(html_0ea35a0430d4b036095950440a9e508d);



circle_51d25b282e478f30b535227f7e257277.bindPopup(popup_d231754aa0d8e2667a90528de4db010f)
    ;




var circle_22958a9357c186bd82ba51da96aef5ec = L.circle(
    [43.67954055003606, -79.47890132671574],
    { "bubblingMouseEvents": true, "color": "#D03EBC", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D03EBC", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_b3ba40474f91381f587233469849fd7a = L.popup({ "maxWidth": "100%" });



var html_42908855c71809a8892438e2e6c94343 = $(`<div id="html_42908855c71809a8892438e2e6c94343" style="width: 100.0%; height: 100.0%;">2020-09-10</div>`)[0];
popup_b3ba40474f91381f587233469849fd7a.setContent(html_42908855c71809a8892438e2e6c94343);



circle_22958a9357c186bd82ba51da96aef5ec.bindPopup(popup_b3ba40474f91381f587233469849fd7a)
    ;




var circle_425f06e01c241d8df83aea29ee861430 = L.circle(
    [43.67954055003606, -79.47890132671574],
    { "bubblingMouseEvents": true, "color": "#D03EBC", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D03EBC", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_175a7a7f1515a564d8baf7569f98de81 = L.popup({ "maxWidth": "100%" });



var html_c471bc90e617d991b8868036c165f620 = $(`<div id="html_c471bc90e617d991b8868036c165f620" style="width: 100.0%; height: 100.0%;">2020-09-10</div>`)[0];
popup_175a7a7f1515a564d8baf7569f98de81.setContent(html_c471bc90e617d991b8868036c165f620);



circle_425f06e01c241d8df83aea29ee861430.bindPopup(popup_175a7a7f1515a564d8baf7569f98de81)
    ;




var circle_d0189a90b73862ce3673cda7cf03b16b = L.circle(
    [43.67954055003606, -79.47890132671574],
    { "bubblingMouseEvents": true, "color": "#D03EBC", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D03EBC", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_ff7cf5d54a9035ebdd40b829d08c9bc5 = L.popup({ "maxWidth": "100%" });



var html_5f3a46a3e034fb1da3ef74b132bff74c = $(`<div id="html_5f3a46a3e034fb1da3ef74b132bff74c" style="width: 100.0%; height: 100.0%;">2020-09-10</div>`)[0];
popup_ff7cf5d54a9035ebdd40b829d08c9bc5.setContent(html_5f3a46a3e034fb1da3ef74b132bff74c);



circle_d0189a90b73862ce3673cda7cf03b16b.bindPopup(popup_ff7cf5d54a9035ebdd40b829d08c9bc5)
    ;




var circle_4078409cad6cdf1b760a674e2c90ab28 = L.circle(
    [43.680686110430365, -79.47844995533313],
    { "bubblingMouseEvents": true, "color": "#D03EBC", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D03EBC", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_16b73c500944b524a2eb26c78a8dc5d8 = L.popup({ "maxWidth": "100%" });



var html_20179754c2e2ea6a1778fc1a0735a549 = $(`<div id="html_20179754c2e2ea6a1778fc1a0735a549" style="width: 100.0%; height: 100.0%;">2020-09-10</div>`)[0];
popup_16b73c500944b524a2eb26c78a8dc5d8.setContent(html_20179754c2e2ea6a1778fc1a0735a549);



circle_4078409cad6cdf1b760a674e2c90ab28.bindPopup(popup_16b73c500944b524a2eb26c78a8dc5d8)
    ;




var circle_63446a0bcf8315a11da82f82593d93f4 = L.circle(
    [43.68089452383638, -79.47801402198039],
    { "bubblingMouseEvents": true, "color": "#D03EBC", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D03EBC", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_00afaeeb3fe057c5330a25060e561a2f = L.popup({ "maxWidth": "100%" });



var html_583e4b66631a4e19f280e4941c74ce85 = $(`<div id="html_583e4b66631a4e19f280e4941c74ce85" style="width: 100.0%; height: 100.0%;">2020-09-10</div>`)[0];
popup_00afaeeb3fe057c5330a25060e561a2f.setContent(html_583e4b66631a4e19f280e4941c74ce85);



circle_63446a0bcf8315a11da82f82593d93f4.bindPopup(popup_00afaeeb3fe057c5330a25060e561a2f)
    ;




var circle_b8703149ac208a7bafcba94858416fb0 = L.circle(
    [43.65006541944341, -79.34712346720336],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_f221aa618d91d4d9c534fe6fa78cf873 = L.popup({ "maxWidth": "100%" });



var html_b71638445b7487c848bd3b03f27e60ab = $(`<div id="html_b71638445b7487c848bd3b03f27e60ab" style="width: 100.0%; height: 100.0%;">2020-09-23</div>`)[0];
popup_f221aa618d91d4d9c534fe6fa78cf873.setContent(html_b71638445b7487c848bd3b03f27e60ab);



circle_b8703149ac208a7bafcba94858416fb0.bindPopup(popup_f221aa618d91d4d9c534fe6fa78cf873)
    ;




var circle_048ae732ac0ea3894e64548d697d2566 = L.circle(
    [43.65006541944341, -79.34712346720336],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_61a4d1206ac17bbcc4e1bb35177ae9c9 = L.popup({ "maxWidth": "100%" });



var html_02dcf85dd5345dc756f1db3bcf63a03c = $(`<div id="html_02dcf85dd5345dc756f1db3bcf63a03c" style="width: 100.0%; height: 100.0%;">2020-09-23</div>`)[0];
popup_61a4d1206ac17bbcc4e1bb35177ae9c9.setContent(html_02dcf85dd5345dc756f1db3bcf63a03c);



circle_048ae732ac0ea3894e64548d697d2566.bindPopup(popup_61a4d1206ac17bbcc4e1bb35177ae9c9)
    ;




var circle_3703a6420b8ea5d13d96aa5889fba3b0 = L.circle(
    [43.65006541944341, -79.34712346720336],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_a7c242aa52650e67db6ff61b4166c972 = L.popup({ "maxWidth": "100%" });



var html_005ba850bab63ad33ed870b7833a34a7 = $(`<div id="html_005ba850bab63ad33ed870b7833a34a7" style="width: 100.0%; height: 100.0%;">2020-09-23</div>`)[0];
popup_a7c242aa52650e67db6ff61b4166c972.setContent(html_005ba850bab63ad33ed870b7833a34a7);



circle_3703a6420b8ea5d13d96aa5889fba3b0.bindPopup(popup_a7c242aa52650e67db6ff61b4166c972)
    ;




var circle_59d84a42ea77314208add3e3f355dd00 = L.circle(
    [43.65578394507915, -79.31119362422668],
    { "bubblingMouseEvents": true, "color": "#980020", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#980020", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_e1e1bbf9f66970edb7bd83b031aec81e = L.popup({ "maxWidth": "100%" });



var html_6ab35ed9e9fbab5c9c7054b197c1709e = $(`<div id="html_6ab35ed9e9fbab5c9c7054b197c1709e" style="width: 100.0%; height: 100.0%;">2020-09-23</div>`)[0];
popup_e1e1bbf9f66970edb7bd83b031aec81e.setContent(html_6ab35ed9e9fbab5c9c7054b197c1709e);



circle_59d84a42ea77314208add3e3f355dd00.bindPopup(popup_e1e1bbf9f66970edb7bd83b031aec81e)
    ;




var circle_3a25f96223305b8f96e1e7268d21da69 = L.circle(
    [43.62404650261466, -79.32383743878847],
    { "bubblingMouseEvents": true, "color": "#E1BF68", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E1BF68", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_0179336784fab798153a02959bd26c21 = L.popup({ "maxWidth": "100%" });



var html_317002a5d311b8b959aa96e53d76a988 = $(`<div id="html_317002a5d311b8b959aa96e53d76a988" style="width: 100.0%; height: 100.0%;">2020-09-23</div>`)[0];
popup_0179336784fab798153a02959bd26c21.setContent(html_317002a5d311b8b959aa96e53d76a988);



circle_3a25f96223305b8f96e1e7268d21da69.bindPopup(popup_0179336784fab798153a02959bd26c21)
    ;




var circle_11df3abbf63dcaf6885cabbfe0c76cc0 = L.circle(
    [43.62703223681594, -79.32625065238284],
    { "bubblingMouseEvents": true, "color": "#E1BF68", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E1BF68", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_662d46b16f9fc01f72292dfe2252f944 = L.popup({ "maxWidth": "100%" });



var html_d440adb201f2096a88785cd4f43a3002 = $(`<div id="html_d440adb201f2096a88785cd4f43a3002" style="width: 100.0%; height: 100.0%;">2020-09-23</div>`)[0];
popup_662d46b16f9fc01f72292dfe2252f944.setContent(html_d440adb201f2096a88785cd4f43a3002);



circle_11df3abbf63dcaf6885cabbfe0c76cc0.bindPopup(popup_662d46b16f9fc01f72292dfe2252f944)
    ;




var circle_4474ed91e36b773e5da0d3a27d731ce1 = L.circle(
    [43.65168835999202, -79.34608396415723],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_c4aec32af61890147d6b509f67bb8913 = L.popup({ "maxWidth": "100%" });



var html_a43858a126d13fe19a7800d884b440c3 = $(`<div id="html_a43858a126d13fe19a7800d884b440c3" style="width: 100.0%; height: 100.0%;">2020-09-23</div>`)[0];
popup_c4aec32af61890147d6b509f67bb8913.setContent(html_a43858a126d13fe19a7800d884b440c3);



circle_4474ed91e36b773e5da0d3a27d731ce1.bindPopup(popup_c4aec32af61890147d6b509f67bb8913)
    ;




var circle_13320eaaf96b58908293483c7d4554fe = L.circle(
    [43.65168835999202, -79.34608396415723],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_62f276cd24bde159ace72f6d63c66ce5 = L.popup({ "maxWidth": "100%" });



var html_7eeb767f00c136e3c019311d3cd8b427 = $(`<div id="html_7eeb767f00c136e3c019311d3cd8b427" style="width: 100.0%; height: 100.0%;">2020-09-23</div>`)[0];
popup_62f276cd24bde159ace72f6d63c66ce5.setContent(html_7eeb767f00c136e3c019311d3cd8b427);



circle_13320eaaf96b58908293483c7d4554fe.bindPopup(popup_62f276cd24bde159ace72f6d63c66ce5)
    ;




var circle_1332f247e86a227ff6bf678321ce62b9 = L.circle(
    [43.65168835999202, -79.34608396415723],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_1d54570b180ed9c38ef0fb48659678bc = L.popup({ "maxWidth": "100%" });



var html_8525e4793b9be6348a9200b2e3aece85 = $(`<div id="html_8525e4793b9be6348a9200b2e3aece85" style="width: 100.0%; height: 100.0%;">2020-09-23</div>`)[0];
popup_1d54570b180ed9c38ef0fb48659678bc.setContent(html_8525e4793b9be6348a9200b2e3aece85);



circle_1332f247e86a227ff6bf678321ce62b9.bindPopup(popup_1d54570b180ed9c38ef0fb48659678bc)
    ;




var circle_893ccfcc626b23db7017fcc895a37f8a = L.circle(
    [43.646748150102184, -79.49700531960481],
    { "bubblingMouseEvents": true, "color": "#78F967", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#78F967", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_c4d3e42ff493e906d6646bd23f3e2e9c = L.popup({ "maxWidth": "100%" });



var html_d1435b2ddc93a9b7a4384ee2618422f1 = $(`<div id="html_d1435b2ddc93a9b7a4384ee2618422f1" style="width: 100.0%; height: 100.0%;">2020-10-06</div>`)[0];
popup_c4d3e42ff493e906d6646bd23f3e2e9c.setContent(html_d1435b2ddc93a9b7a4384ee2618422f1);



circle_893ccfcc626b23db7017fcc895a37f8a.bindPopup(popup_c4d3e42ff493e906d6646bd23f3e2e9c)
    ;




var circle_4a33684784a723b39d87ab18788da615 = L.circle(
    [43.646748150102184, -79.49700531960481],
    { "bubblingMouseEvents": true, "color": "#78F967", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#78F967", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_264d09c0979bec7dca4735485e5b6b9a = L.popup({ "maxWidth": "100%" });



var html_395d841f2f0594c276424967d97a8ad5 = $(`<div id="html_395d841f2f0594c276424967d97a8ad5" style="width: 100.0%; height: 100.0%;">2020-10-06</div>`)[0];
popup_264d09c0979bec7dca4735485e5b6b9a.setContent(html_395d841f2f0594c276424967d97a8ad5);



circle_4a33684784a723b39d87ab18788da615.bindPopup(popup_264d09c0979bec7dca4735485e5b6b9a)
    ;




var circle_c23631a95a0eb97a07ea928db63675fa = L.circle(
    [43.646748150102184, -79.49700531960481],
    { "bubblingMouseEvents": true, "color": "#78F967", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#78F967", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_e29ba6e7de37fa5b915224c7570747d0 = L.popup({ "maxWidth": "100%" });



var html_6aec6015ccefa405e56e2f6cabeceeb6 = $(`<div id="html_6aec6015ccefa405e56e2f6cabeceeb6" style="width: 100.0%; height: 100.0%;">2020-10-06</div>`)[0];
popup_e29ba6e7de37fa5b915224c7570747d0.setContent(html_6aec6015ccefa405e56e2f6cabeceeb6);



circle_c23631a95a0eb97a07ea928db63675fa.bindPopup(popup_e29ba6e7de37fa5b915224c7570747d0)
    ;




var circle_20c6f16c09a15dd613b96b3416108e8a = L.circle(
    [43.64604068874473, -79.49433958376135],
    { "bubblingMouseEvents": true, "color": "#78F967", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#78F967", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_e10c6c673feca31ff1a57ca2bcf06182 = L.popup({ "maxWidth": "100%" });



var html_a4d5830f3050bd5dcbabc1612afa0558 = $(`<div id="html_a4d5830f3050bd5dcbabc1612afa0558" style="width: 100.0%; height: 100.0%;">2020-10-06</div>`)[0];
popup_e10c6c673feca31ff1a57ca2bcf06182.setContent(html_a4d5830f3050bd5dcbabc1612afa0558);



circle_20c6f16c09a15dd613b96b3416108e8a.bindPopup(popup_e10c6c673feca31ff1a57ca2bcf06182)
    ;




var circle_689edce9c7e6a46a4209d1008b18a30e = L.circle(
    [43.63566655400897, -79.47763350853833],
    { "bubblingMouseEvents": true, "color": "#D4D163", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D4D163", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_68e65de6aa0199fcbcf0ac69c78e2f80 = L.popup({ "maxWidth": "100%" });



var html_b2e6c39041985cfbfb85b15b02ca878e = $(`<div id="html_b2e6c39041985cfbfb85b15b02ca878e" style="width: 100.0%; height: 100.0%;">2020-10-06</div>`)[0];
popup_68e65de6aa0199fcbcf0ac69c78e2f80.setContent(html_b2e6c39041985cfbfb85b15b02ca878e);



circle_689edce9c7e6a46a4209d1008b18a30e.bindPopup(popup_68e65de6aa0199fcbcf0ac69c78e2f80)
    ;




var circle_a6e85838d787b8bcd4a4bda624e001b3 = L.circle(
    [43.63062683360354, -79.42767360962017],
    { "bubblingMouseEvents": true, "color": "#33CDB5", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#33CDB5", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_9be999f936747a3a2cd1163850443de9 = L.popup({ "maxWidth": "100%" });



var html_c444083d6afefc558f0a4fed039c1e49 = $(`<div id="html_c444083d6afefc558f0a4fed039c1e49" style="width: 100.0%; height: 100.0%;">2020-10-06</div>`)[0];
popup_9be999f936747a3a2cd1163850443de9.setContent(html_c444083d6afefc558f0a4fed039c1e49);



circle_a6e85838d787b8bcd4a4bda624e001b3.bindPopup(popup_9be999f936747a3a2cd1163850443de9)
    ;




var circle_e47f22fa77c2f2e6fa6bfcbe15b2ffd3 = L.circle(
    [43.651340257810666, -79.3472673979817],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_3a42d6b66637915928c7d824d03c5322 = L.popup({ "maxWidth": "100%" });



var html_de40c9249702c365514b7a452251b13d = $(`<div id="html_de40c9249702c365514b7a452251b13d" style="width: 100.0%; height: 100.0%;">2020-10-14</div>`)[0];
popup_3a42d6b66637915928c7d824d03c5322.setContent(html_de40c9249702c365514b7a452251b13d);



circle_e47f22fa77c2f2e6fa6bfcbe15b2ffd3.bindPopup(popup_3a42d6b66637915928c7d824d03c5322)
    ;




var circle_9d6b64ddbdf4ff37bc329b96c9882846 = L.circle(
    [43.651340257810666, -79.3472673979817],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_3eb33859e6518e5dac7df08df3c41b96 = L.popup({ "maxWidth": "100%" });



var html_bd3b833b3fe177ada90fb5933e1e35d0 = $(`<div id="html_bd3b833b3fe177ada90fb5933e1e35d0" style="width: 100.0%; height: 100.0%;">2020-10-14</div>`)[0];
popup_3eb33859e6518e5dac7df08df3c41b96.setContent(html_bd3b833b3fe177ada90fb5933e1e35d0);



circle_9d6b64ddbdf4ff37bc329b96c9882846.bindPopup(popup_3eb33859e6518e5dac7df08df3c41b96)
    ;




var circle_545f1aac2851d3333a70c654bf18bd32 = L.circle(
    [43.651340257810666, -79.3472673979817],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_94168954d4459b5bde25cf3a164e2ae9 = L.popup({ "maxWidth": "100%" });



var html_d4fa031ae3203ba587d3b2a064ad083f = $(`<div id="html_d4fa031ae3203ba587d3b2a064ad083f" style="width: 100.0%; height: 100.0%;">2020-10-14</div>`)[0];
popup_94168954d4459b5bde25cf3a164e2ae9.setContent(html_d4fa031ae3203ba587d3b2a064ad083f);



circle_545f1aac2851d3333a70c654bf18bd32.bindPopup(popup_94168954d4459b5bde25cf3a164e2ae9)
    ;




var circle_77dbcdba664d3459ca9665f84ad9eda9 = L.circle(
    [43.662952748571335, -79.3128762952749],
    { "bubblingMouseEvents": true, "color": "#980020", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#980020", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_f2ff0135ba64945719ac5013b3e9175d = L.popup({ "maxWidth": "100%" });



var html_68911dbac5e292527e1d87d1743ed41e = $(`<div id="html_68911dbac5e292527e1d87d1743ed41e" style="width: 100.0%; height: 100.0%;">2020-10-14</div>`)[0];
popup_f2ff0135ba64945719ac5013b3e9175d.setContent(html_68911dbac5e292527e1d87d1743ed41e);



circle_77dbcdba664d3459ca9665f84ad9eda9.bindPopup(popup_f2ff0135ba64945719ac5013b3e9175d)
    ;




var circle_694595617fd13f3b8cc7a4d12d7a734b = L.circle(
    [43.662101483427385, -79.31508947510555],
    { "bubblingMouseEvents": true, "color": "#980020", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#980020", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_0e4aefaa87a54a222523b7fc10d25375 = L.popup({ "maxWidth": "100%" });



var html_8e83d5278e8f75c0f10f91dae705d755 = $(`<div id="html_8e83d5278e8f75c0f10f91dae705d755" style="width: 100.0%; height: 100.0%;">2020-10-14</div>`)[0];
popup_0e4aefaa87a54a222523b7fc10d25375.setContent(html_8e83d5278e8f75c0f10f91dae705d755);



circle_694595617fd13f3b8cc7a4d12d7a734b.bindPopup(popup_0e4aefaa87a54a222523b7fc10d25375)
    ;




var circle_6b36e7057caeb68b88ac6c22b86f73ab = L.circle(
    [43.62748091491822, -79.32709915466259],
    { "bubblingMouseEvents": true, "color": "#E1BF68", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E1BF68", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_f62406b1af15f45ce5afd43892ff74e0 = L.popup({ "maxWidth": "100%" });



var html_0d9eb5f007d3b77d5866ba80f9fa5026 = $(`<div id="html_0d9eb5f007d3b77d5866ba80f9fa5026" style="width: 100.0%; height: 100.0%;">2020-10-14</div>`)[0];
popup_f62406b1af15f45ce5afd43892ff74e0.setContent(html_0d9eb5f007d3b77d5866ba80f9fa5026);



circle_6b36e7057caeb68b88ac6c22b86f73ab.bindPopup(popup_f62406b1af15f45ce5afd43892ff74e0)
    ;




var circle_d2c4f2588928567e62c93504ec9a8bb7 = L.circle(
    [43.661241878269344, -79.31841783142076],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_6cae21e92555921cdbcba937c0ea1c2e = L.popup({ "maxWidth": "100%" });



var html_634a2e0e827b4a9ba63cdeaed83295c5 = $(`<div id="html_634a2e0e827b4a9ba63cdeaed83295c5" style="width: 100.0%; height: 100.0%;">2020-10-14</div>`)[0];
popup_6cae21e92555921cdbcba937c0ea1c2e.setContent(html_634a2e0e827b4a9ba63cdeaed83295c5);



circle_d2c4f2588928567e62c93504ec9a8bb7.bindPopup(popup_6cae21e92555921cdbcba937c0ea1c2e)
    ;




var circle_8999293ebe1fdd9671dca43a1b0b9864 = L.circle(
    [43.66333604335098, -79.3219044169522],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_acaa53e80413d55656bb42dab883d63c = L.popup({ "maxWidth": "100%" });



var html_32e3d1c83bb60fc6a15f2ac7af6f7f63 = $(`<div id="html_32e3d1c83bb60fc6a15f2ac7af6f7f63" style="width: 100.0%; height: 100.0%;">2020-10-14</div>`)[0];
popup_acaa53e80413d55656bb42dab883d63c.setContent(html_32e3d1c83bb60fc6a15f2ac7af6f7f63);



circle_8999293ebe1fdd9671dca43a1b0b9864.bindPopup(popup_acaa53e80413d55656bb42dab883d63c)
    ;




var circle_f3ca0ce3d19b3a224fab47f3d11a20d0 = L.circle(
    [43.65709126627954, -79.34531564114707],
    { "bubblingMouseEvents": true, "color": "#1E945C", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#1E945C", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_67e697d47fe4cda8809c822ec793e5fc = L.popup({ "maxWidth": "100%" });



var html_6c9f25507fa05f90388b5a494e8e29de = $(`<div id="html_6c9f25507fa05f90388b5a494e8e29de" style="width: 100.0%; height: 100.0%;">2020-10-14</div>`)[0];
popup_67e697d47fe4cda8809c822ec793e5fc.setContent(html_6c9f25507fa05f90388b5a494e8e29de);



circle_f3ca0ce3d19b3a224fab47f3d11a20d0.bindPopup(popup_67e697d47fe4cda8809c822ec793e5fc)
    ;




var circle_023562c25cb3ef34ed8130bdf0c54b0e = L.circle(
    [43.659014208225116, -79.34899857614015],
    { "bubblingMouseEvents": true, "color": "#1E945C", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#1E945C", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_7a5b011fe9ecfbb1c2b261c27a5267f4 = L.popup({ "maxWidth": "100%" });



var html_95164be555c9cb9f18c396c8cecd12dc = $(`<div id="html_95164be555c9cb9f18c396c8cecd12dc" style="width: 100.0%; height: 100.0%;">2020-10-14</div>`)[0];
popup_7a5b011fe9ecfbb1c2b261c27a5267f4.setContent(html_95164be555c9cb9f18c396c8cecd12dc);



circle_023562c25cb3ef34ed8130bdf0c54b0e.bindPopup(popup_7a5b011fe9ecfbb1c2b261c27a5267f4)
    ;




var circle_16b9a3182f560779306cfa8144c9c51f = L.circle(
    [43.66620190586186, -79.31715515661996],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_4c1ac7c6ee6b163ed390270a4cf31178 = L.popup({ "maxWidth": "100%" });



var html_906724a3ecd1ebb0306f90db7f055527 = $(`<div id="html_906724a3ecd1ebb0306f90db7f055527" style="width: 100.0%; height: 100.0%;">2020-10-14</div>`)[0];
popup_4c1ac7c6ee6b163ed390270a4cf31178.setContent(html_906724a3ecd1ebb0306f90db7f055527);



circle_16b9a3182f560779306cfa8144c9c51f.bindPopup(popup_4c1ac7c6ee6b163ed390270a4cf31178)
    ;




var circle_6c1a923530653c5b371b12e28e1df0d9 = L.circle(
    [43.660874307701555, -79.32137944613926],
    { "bubblingMouseEvents": true, "color": "#D2B2E8", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D2B2E8", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_b49901f2bb97ca8fe2c2262e5d0bf33b = L.popup({ "maxWidth": "100%" });



var html_d1dc7010f91e221f14a54e4f402f7e48 = $(`<div id="html_d1dc7010f91e221f14a54e4f402f7e48" style="width: 100.0%; height: 100.0%;">2020-10-14</div>`)[0];
popup_b49901f2bb97ca8fe2c2262e5d0bf33b.setContent(html_d1dc7010f91e221f14a54e4f402f7e48);



circle_6c1a923530653c5b371b12e28e1df0d9.bindPopup(popup_b49901f2bb97ca8fe2c2262e5d0bf33b)
    ;




var circle_6aad48ebc0201e12de1393dfc69e928a = L.circle(
    [43.65143781352141, -79.3485130126758],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_2e0ef2c99ed2b8936b79461019155654 = L.popup({ "maxWidth": "100%" });



var html_4faea57afa8b12cb6f6dcc4cad79764c = $(`<div id="html_4faea57afa8b12cb6f6dcc4cad79764c" style="width: 100.0%; height: 100.0%;">2020-10-14</div>`)[0];
popup_2e0ef2c99ed2b8936b79461019155654.setContent(html_4faea57afa8b12cb6f6dcc4cad79764c);



circle_6aad48ebc0201e12de1393dfc69e928a.bindPopup(popup_2e0ef2c99ed2b8936b79461019155654)
    ;




var circle_58fb805b9c4e03d78dfcc31d62efc928 = L.circle(
    [43.671083297146104, -79.35435321116738],
    { "bubblingMouseEvents": true, "color": "#0C0328", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#0C0328", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_db266db725cc2e94fd0c1636e7dbd45a = L.popup({ "maxWidth": "100%" });



var html_a5fc68495b9df0729aa4a192f7329a04 = $(`<div id="html_a5fc68495b9df0729aa4a192f7329a04" style="width: 100.0%; height: 100.0%;">2020-10-21</div>`)[0];
popup_db266db725cc2e94fd0c1636e7dbd45a.setContent(html_a5fc68495b9df0729aa4a192f7329a04);



circle_58fb805b9c4e03d78dfcc31d62efc928.bindPopup(popup_db266db725cc2e94fd0c1636e7dbd45a)
    ;




var circle_f92e0f8ed8436390c718c19c4c00e029 = L.circle(
    [43.67151353316605, -79.35446281319888],
    { "bubblingMouseEvents": true, "color": "#0C0328", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#0C0328", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_34e4407a490ea8a9015df670e4240fd8 = L.popup({ "maxWidth": "100%" });



var html_a2449fc1cb9b3bc81a0031266ca7eca7 = $(`<div id="html_a2449fc1cb9b3bc81a0031266ca7eca7" style="width: 100.0%; height: 100.0%;">2020-10-21</div>`)[0];
popup_34e4407a490ea8a9015df670e4240fd8.setContent(html_a2449fc1cb9b3bc81a0031266ca7eca7);



circle_f92e0f8ed8436390c718c19c4c00e029.bindPopup(popup_34e4407a490ea8a9015df670e4240fd8)
    ;




var circle_9e2625d304bceebf348fd1f035015ffe = L.circle(
    [43.65428032860541, -79.3400912950143],
    { "bubblingMouseEvents": true, "color": "#1E945C", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#1E945C", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_0d8ff333848afaf87303c3ef6c9a2857 = L.popup({ "maxWidth": "100%" });



var html_6c9b51438e25bc11eb83aa63749313cc = $(`<div id="html_6c9b51438e25bc11eb83aa63749313cc" style="width: 100.0%; height: 100.0%;">2020-10-21</div>`)[0];
popup_0d8ff333848afaf87303c3ef6c9a2857.setContent(html_6c9b51438e25bc11eb83aa63749313cc);



circle_9e2625d304bceebf348fd1f035015ffe.bindPopup(popup_0d8ff333848afaf87303c3ef6c9a2857)
    ;




var circle_24660bf063dac55e65e59c008b7debcf = L.circle(
    [43.651491807540424, -79.34701185542292],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_9ea23b324c2866ab1b951aa9a5d27201 = L.popup({ "maxWidth": "100%" });



var html_f95a4e3921d28219a476982b401c621f = $(`<div id="html_f95a4e3921d28219a476982b401c621f" style="width: 100.0%; height: 100.0%;">2020-10-21</div>`)[0];
popup_9ea23b324c2866ab1b951aa9a5d27201.setContent(html_f95a4e3921d28219a476982b401c621f);



circle_24660bf063dac55e65e59c008b7debcf.bindPopup(popup_9ea23b324c2866ab1b951aa9a5d27201)
    ;




var circle_3450273f39da92444c2b6def8c9c9d81 = L.circle(
    [43.64645567984492, -79.49849255309803],
    { "bubblingMouseEvents": true, "color": "#78F967", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#78F967", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_b9f89f9b9ade423b7ce3eb92afbaba50 = L.popup({ "maxWidth": "100%" });



var html_266d1f41b9484101d00f54d317f6965f = $(`<div id="html_266d1f41b9484101d00f54d317f6965f" style="width: 100.0%; height: 100.0%;">2020-10-28</div>`)[0];
popup_b9f89f9b9ade423b7ce3eb92afbaba50.setContent(html_266d1f41b9484101d00f54d317f6965f);



circle_3450273f39da92444c2b6def8c9c9d81.bindPopup(popup_b9f89f9b9ade423b7ce3eb92afbaba50)
    ;




var circle_bbd736a77f07d3d0fe67b9c422f9f00d = L.circle(
    [43.64645567984492, -79.49849255309803],
    { "bubblingMouseEvents": true, "color": "#78F967", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#78F967", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_4d52b1a0c273a6c7ccbad8390fb8e66c = L.popup({ "maxWidth": "100%" });



var html_04f830f9d080385bd4c11e877e0d321a = $(`<div id="html_04f830f9d080385bd4c11e877e0d321a" style="width: 100.0%; height: 100.0%;">2020-10-28</div>`)[0];
popup_4d52b1a0c273a6c7ccbad8390fb8e66c.setContent(html_04f830f9d080385bd4c11e877e0d321a);



circle_bbd736a77f07d3d0fe67b9c422f9f00d.bindPopup(popup_4d52b1a0c273a6c7ccbad8390fb8e66c)
    ;




var circle_820f1a9b9e580b7ba796e4dca27b12fd = L.circle(
    [43.64645567984492, -79.49849255309803],
    { "bubblingMouseEvents": true, "color": "#78F967", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#78F967", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_425c829a2e6071a3513bd4c6c70508a7 = L.popup({ "maxWidth": "100%" });



var html_9e26be58b64ac1793e2b8620b10c116e = $(`<div id="html_9e26be58b64ac1793e2b8620b10c116e" style="width: 100.0%; height: 100.0%;">2020-10-28</div>`)[0];
popup_425c829a2e6071a3513bd4c6c70508a7.setContent(html_9e26be58b64ac1793e2b8620b10c116e);



circle_820f1a9b9e580b7ba796e4dca27b12fd.bindPopup(popup_425c829a2e6071a3513bd4c6c70508a7)
    ;




var circle_25e6898c8311f263e6794f2a4a9f6f78 = L.circle(
    [43.640924102422076, -79.49124622522378],
    { "bubblingMouseEvents": true, "color": "#D220DA", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D220DA", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_1309eaf7179cc17778862222fc15875a = L.popup({ "maxWidth": "100%" });



var html_dfd7cf077ca48355798c4972b5d9b9ea = $(`<div id="html_dfd7cf077ca48355798c4972b5d9b9ea" style="width: 100.0%; height: 100.0%;">2020-10-28</div>`)[0];
popup_1309eaf7179cc17778862222fc15875a.setContent(html_dfd7cf077ca48355798c4972b5d9b9ea);



circle_25e6898c8311f263e6794f2a4a9f6f78.bindPopup(popup_1309eaf7179cc17778862222fc15875a)
    ;




var circle_f0953e63b185e9c6ac3cb29840e0e9e8 = L.circle(
    [43.640924102422076, -79.49124622522378],
    { "bubblingMouseEvents": true, "color": "#D220DA", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D220DA", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_46dcc3ef848a9964e2c4988cbd5f148c = L.popup({ "maxWidth": "100%" });



var html_90db71433e3505a27e3b7839c14916df = $(`<div id="html_90db71433e3505a27e3b7839c14916df" style="width: 100.0%; height: 100.0%;">2020-10-28</div>`)[0];
popup_46dcc3ef848a9964e2c4988cbd5f148c.setContent(html_90db71433e3505a27e3b7839c14916df);



circle_f0953e63b185e9c6ac3cb29840e0e9e8.bindPopup(popup_46dcc3ef848a9964e2c4988cbd5f148c)
    ;




var circle_d37daf325bb7e8d7449ecf70d47f5e6c = L.circle(
    [43.640924102422076, -79.49124622522378],
    { "bubblingMouseEvents": true, "color": "#D220DA", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#D220DA", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_04d25128802bbd6cfef309d39041be03 = L.popup({ "maxWidth": "100%" });



var html_6c6d3de503aab49192860da44cc474c6 = $(`<div id="html_6c6d3de503aab49192860da44cc474c6" style="width: 100.0%; height: 100.0%;">2020-10-28</div>`)[0];
popup_04d25128802bbd6cfef309d39041be03.setContent(html_6c6d3de503aab49192860da44cc474c6);



circle_d37daf325bb7e8d7449ecf70d47f5e6c.bindPopup(popup_04d25128802bbd6cfef309d39041be03)
    ;




var circle_14574647d32fa2fb890f3779f0a81553 = L.circle(
    [43.64974800587348, -79.36748807559225],
    { "bubblingMouseEvents": true, "color": "#712C2D", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#712C2D", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_1564d864552b3ad1030dffb78ef76caa = L.popup({ "maxWidth": "100%" });



var html_a9de9dd86edbbea987e266e752dd2740 = $(`<div id="html_a9de9dd86edbbea987e266e752dd2740" style="width: 100.0%; height: 100.0%;">2020-11-20</div>`)[0];
popup_1564d864552b3ad1030dffb78ef76caa.setContent(html_a9de9dd86edbbea987e266e752dd2740);



circle_14574647d32fa2fb890f3779f0a81553.bindPopup(popup_1564d864552b3ad1030dffb78ef76caa)
    ;




var circle_b21fdaf051689be5f2908698fd610638 = L.circle(
    [43.66175222816057, -79.3118095943872],
    { "bubblingMouseEvents": true, "color": "#980020", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#980020", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_04a83e3b96253d747d793ea2e1af0299 = L.popup({ "maxWidth": "100%" });



var html_98d63a03e88ea030ace3960436adf68f = $(`<div id="html_98d63a03e88ea030ace3960436adf68f" style="width: 100.0%; height: 100.0%;">2020-11-20</div>`)[0];
popup_04a83e3b96253d747d793ea2e1af0299.setContent(html_98d63a03e88ea030ace3960436adf68f);



circle_b21fdaf051689be5f2908698fd610638.bindPopup(popup_04a83e3b96253d747d793ea2e1af0299)
    ;




var circle_6212f77e30b4c474f946cce6a8382238 = L.circle(
    [43.66196807997413, -79.31416480352252],
    { "bubblingMouseEvents": true, "color": "#980020", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#980020", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_09e15ec704204427ece0728fcf675e48 = L.popup({ "maxWidth": "100%" });



var html_dcb7aa99e13a6a97c334ddb8ec963dcc = $(`<div id="html_dcb7aa99e13a6a97c334ddb8ec963dcc" style="width: 100.0%; height: 100.0%;">2020-11-20</div>`)[0];
popup_09e15ec704204427ece0728fcf675e48.setContent(html_dcb7aa99e13a6a97c334ddb8ec963dcc);



circle_6212f77e30b4c474f946cce6a8382238.bindPopup(popup_09e15ec704204427ece0728fcf675e48)
    ;




var circle_55fe7a3d3e73e318ab28e42949b0f065 = L.circle(
    [43.65130911568123, -79.34725370413226],
    { "bubblingMouseEvents": true, "color": "#E93B02", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#E93B02", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_3e53174e61c0a3ed52dacdd20213d4a2 = L.popup({ "maxWidth": "100%" });



var html_9ec4651f77ad1b810fad633c2aea0462 = $(`<div id="html_9ec4651f77ad1b810fad633c2aea0462" style="width: 100.0%; height: 100.0%;">2020-11-20</div>`)[0];
popup_3e53174e61c0a3ed52dacdd20213d4a2.setContent(html_9ec4651f77ad1b810fad633c2aea0462);



circle_55fe7a3d3e73e318ab28e42949b0f065.bindPopup(popup_3e53174e61c0a3ed52dacdd20213d4a2)
    ;




var circle_24b33869f7dfe50b01633ed68197f639 = L.circle(
    [43.664935024862125, -79.465426399035],
    { "bubblingMouseEvents": true, "color": "#FF20FF", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#FF20FF", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_5d7f44a6fd0ec562446a2832270a1377 = L.popup({ "maxWidth": "100%" });



var html_5b4869ec610af08191f9bbc2bf2aa401 = $(`<div id="html_5b4869ec610af08191f9bbc2bf2aa401" style="width: 100.0%; height: 100.0%;">2023-06-21</div>`)[0];
popup_5d7f44a6fd0ec562446a2832270a1377.setContent(html_5b4869ec610af08191f9bbc2bf2aa401);



circle_24b33869f7dfe50b01633ed68197f639.bindPopup(popup_5d7f44a6fd0ec562446a2832270a1377)
    ;




var circle_c190bebe5f7489f5987aefacae280319 = L.circle(
    [43.66272764625948, -79.42191487464854],
    { "bubblingMouseEvents": true, "color": "#06C657", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#06C657", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_e5861c519712ba5eaa37b5274333fe2b = L.popup({ "maxWidth": "100%" });



var html_a1099cdbddc496c07a152327b8aaec04 = $(`<div id="html_a1099cdbddc496c07a152327b8aaec04" style="width: 100.0%; height: 100.0%;">2023-07-06</div>`)[0];
popup_e5861c519712ba5eaa37b5274333fe2b.setContent(html_a1099cdbddc496c07a152327b8aaec04);



circle_c190bebe5f7489f5987aefacae280319.bindPopup(popup_e5861c519712ba5eaa37b5274333fe2b)
    ;




var circle_327ca5e9fec6e46aefb6ddfcfe02078f = L.circle(
    [43.64640787955333, -79.49848667184781],
    { "bubblingMouseEvents": true, "color": "#78F967", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#78F967", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_ae5d6980f777508d83963ce0ab96a043 = L.popup({ "maxWidth": "100%" });



var html_f75cc4c3e8c8a6ed0c478a771bac714b = $(`<div id="html_f75cc4c3e8c8a6ed0c478a771bac714b" style="width: 100.0%; height: 100.0%;">2023-07-06</div>`)[0];
popup_ae5d6980f777508d83963ce0ab96a043.setContent(html_f75cc4c3e8c8a6ed0c478a771bac714b);



circle_327ca5e9fec6e46aefb6ddfcfe02078f.bindPopup(popup_ae5d6980f777508d83963ce0ab96a043)
    ;




var circle_0e6a2e6e1e0bf9ac26184a6773482faf = L.circle(
    [43.64640787955333, -79.49848667184781],
    { "bubblingMouseEvents": true, "color": "#78F967", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#78F967", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_06ca392bc29c68e8e44dc39a91d913eb = L.popup({ "maxWidth": "100%" });



var html_253b084dd173cd5a1ad5b26c2a21571a = $(`<div id="html_253b084dd173cd5a1ad5b26c2a21571a" style="width: 100.0%; height: 100.0%;">2023-07-06</div>`)[0];
popup_06ca392bc29c68e8e44dc39a91d913eb.setContent(html_253b084dd173cd5a1ad5b26c2a21571a);



circle_0e6a2e6e1e0bf9ac26184a6773482faf.bindPopup(popup_06ca392bc29c68e8e44dc39a91d913eb)
    ;




var circle_906f5146994b3dd730029724aa1697db = L.circle(
    [43.64640787955333, -79.49848667184781],
    { "bubblingMouseEvents": true, "color": "#78F967", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#78F967", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_fe6740edab9cdef16fabffebbcf9da9c = L.popup({ "maxWidth": "100%" });



var html_ba6eeb15276ff037a5e1a7b4409fe068 = $(`<div id="html_ba6eeb15276ff037a5e1a7b4409fe068" style="width: 100.0%; height: 100.0%;">2023-07-06</div>`)[0];
popup_fe6740edab9cdef16fabffebbcf9da9c.setContent(html_ba6eeb15276ff037a5e1a7b4409fe068);



circle_906f5146994b3dd730029724aa1697db.bindPopup(popup_fe6740edab9cdef16fabffebbcf9da9c)
    ;




var circle_694a4b8fb734ef746d63abb05b6a9635 = L.circle(
    [43.769359786420665, -79.46496800978778],
    { "bubblingMouseEvents": true, "color": "darkpurple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkpurple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_e8c6cac8955cba8d70cbbf34d70daa7c = L.popup({ "maxWidth": "100%" });



var html_62c5b58b5dd0c72511b3456fc4050559 = $(`<div id="html_62c5b58b5dd0c72511b3456fc4050559" style="width: 100.0%; height: 100.0%;">2018-06-21</div>`)[0];
popup_e8c6cac8955cba8d70cbbf34d70daa7c.setContent(html_62c5b58b5dd0c72511b3456fc4050559);



circle_694a4b8fb734ef746d63abb05b6a9635.bindPopup(popup_e8c6cac8955cba8d70cbbf34d70daa7c)
    ;




var circle_337bea488ca0143c7e0edf31a1a11f47 = L.circle(
    [43.782370202317225, -79.47885982268008],
    { "bubblingMouseEvents": true, "color": "darkpurple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkpurple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_4638739600a6c1338a953ee7942c3c8a = L.popup({ "maxWidth": "100%" });



var html_a28b916a735b10d0c0336faeec8b0764 = $(`<div id="html_a28b916a735b10d0c0336faeec8b0764" style="width: 100.0%; height: 100.0%;">2018-06-21</div>`)[0];
popup_4638739600a6c1338a953ee7942c3c8a.setContent(html_a28b916a735b10d0c0336faeec8b0764);



circle_337bea488ca0143c7e0edf31a1a11f47.bindPopup(popup_4638739600a6c1338a953ee7942c3c8a)
    ;




var circle_d6225017003a5708070db5386226d5f9 = L.circle(
    [43.682138765717966, -79.50900931613751],
    { "bubblingMouseEvents": true, "color": "darkpurple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkpurple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_890c2fc116430fd93db58394ed6634e5 = L.popup({ "maxWidth": "100%" });



var html_71c368cb71feb335dd896ae4f2f3037f = $(`<div id="html_71c368cb71feb335dd896ae4f2f3037f" style="width: 100.0%; height: 100.0%;">2019-05-21</div>`)[0];
popup_890c2fc116430fd93db58394ed6634e5.setContent(html_71c368cb71feb335dd896ae4f2f3037f);



circle_d6225017003a5708070db5386226d5f9.bindPopup(popup_890c2fc116430fd93db58394ed6634e5)
    ;




var circle_421935450bc8f147d64305d396ae9935 = L.circle(
    [43.67668441675285, -79.36558428164135],
    { "bubblingMouseEvents": true, "color": "darkpurple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkpurple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_e22016ed9461cda0409454a0db80bc7f = L.popup({ "maxWidth": "100%" });



var html_352aef92c77d2418e92ca2d655ae2343 = $(`<div id="html_352aef92c77d2418e92ca2d655ae2343" style="width: 100.0%; height: 100.0%;">2019-06-12</div>`)[0];
popup_e22016ed9461cda0409454a0db80bc7f.setContent(html_352aef92c77d2418e92ca2d655ae2343);



circle_421935450bc8f147d64305d396ae9935.bindPopup(popup_e22016ed9461cda0409454a0db80bc7f)
    ;




var circle_4da308eb67e2c4170c28a3040146c296 = L.circle(
    [43.64569526619967, -79.41112401947886],
    { "bubblingMouseEvents": true, "color": "darkpurple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkpurple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_08b5ee0a802e44c42b0340fc2f36832c = L.popup({ "maxWidth": "100%" });



var html_f10d696ce96eabaf488f4c7ac1990149 = $(`<div id="html_f10d696ce96eabaf488f4c7ac1990149" style="width: 100.0%; height: 100.0%;">2019-07-22</div>`)[0];
popup_08b5ee0a802e44c42b0340fc2f36832c.setContent(html_f10d696ce96eabaf488f4c7ac1990149);



circle_4da308eb67e2c4170c28a3040146c296.bindPopup(popup_08b5ee0a802e44c42b0340fc2f36832c)
    ;




var circle_b13b43367c366bdecb0c0446b83ef723 = L.circle(
    [0.0, 0.0],
    { "bubblingMouseEvents": true, "color": "darkpurple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkpurple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_b7dd5b7fd7172508510f13d3fd21490d = L.popup({ "maxWidth": "100%" });



var html_0fe45d7e17a9f02618b4dcdc0d538274 = $(`<div id="html_0fe45d7e17a9f02618b4dcdc0d538274" style="width: 100.0%; height: 100.0%;">2019-08-22</div>`)[0];
popup_b7dd5b7fd7172508510f13d3fd21490d.setContent(html_0fe45d7e17a9f02618b4dcdc0d538274);



circle_b13b43367c366bdecb0c0446b83ef723.bindPopup(popup_b7dd5b7fd7172508510f13d3fd21490d)
    ;




var circle_aa6576ebe2a43c01a1dc21d3907f2afe = L.circle(
    [0.0, 0.0],
    { "bubblingMouseEvents": true, "color": "darkpurple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkpurple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_72a6170b171b7b8a85ab9956ab01892b = L.popup({ "maxWidth": "100%" });



var html_68119b9f5d97004ea912a90a8be06baf = $(`<div id="html_68119b9f5d97004ea912a90a8be06baf" style="width: 100.0%; height: 100.0%;">2019-08-22</div>`)[0];
popup_72a6170b171b7b8a85ab9956ab01892b.setContent(html_68119b9f5d97004ea912a90a8be06baf);



circle_aa6576ebe2a43c01a1dc21d3907f2afe.bindPopup(popup_72a6170b171b7b8a85ab9956ab01892b)
    ;




var circle_f76050f704c3ea242de2eeacf8f888d3 = L.circle(
    [0.0, 0.0],
    { "bubblingMouseEvents": true, "color": "darkpurple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkpurple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_838fc6c3410d64f783d6012a9f79c002 = L.popup({ "maxWidth": "100%" });



var html_19c099484629559e15c07040397f9308 = $(`<div id="html_19c099484629559e15c07040397f9308" style="width: 100.0%; height: 100.0%;">2019-08-22</div>`)[0];
popup_838fc6c3410d64f783d6012a9f79c002.setContent(html_19c099484629559e15c07040397f9308);



circle_f76050f704c3ea242de2eeacf8f888d3.bindPopup(popup_838fc6c3410d64f783d6012a9f79c002)
    ;




var circle_dd8306e62d49929a7677a5c1a8058877 = L.circle(
    [0.0, 0.0],
    { "bubblingMouseEvents": true, "color": "darkpurple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkpurple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_5ca40608abc0795f1b07ce6527b71dd9 = L.popup({ "maxWidth": "100%" });



var html_2b73f36028953a9850e0f2dd288a2b6a = $(`<div id="html_2b73f36028953a9850e0f2dd288a2b6a" style="width: 100.0%; height: 100.0%;">2019-08-22</div>`)[0];
popup_5ca40608abc0795f1b07ce6527b71dd9.setContent(html_2b73f36028953a9850e0f2dd288a2b6a);



circle_dd8306e62d49929a7677a5c1a8058877.bindPopup(popup_5ca40608abc0795f1b07ce6527b71dd9)
    ;




var circle_f0b0e6ba3ebe146e703e1b1d42113e2c = L.circle(
    [0.0, 0.0],
    { "bubblingMouseEvents": true, "color": "darkpurple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkpurple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_8df1a8e60443f15bcc103decba9b84f8 = L.popup({ "maxWidth": "100%" });



var html_7b44d3bfbe4b3f7670c78dcd3043ed27 = $(`<div id="html_7b44d3bfbe4b3f7670c78dcd3043ed27" style="width: 100.0%; height: 100.0%;">2019-08-22</div>`)[0];
popup_8df1a8e60443f15bcc103decba9b84f8.setContent(html_7b44d3bfbe4b3f7670c78dcd3043ed27);



circle_f0b0e6ba3ebe146e703e1b1d42113e2c.bindPopup(popup_8df1a8e60443f15bcc103decba9b84f8)
    ;




var circle_110ee12140e4bca342b9696d170cc925 = L.circle(
    [43.691315138604736, -79.39095953230354],
    { "bubblingMouseEvents": true, "color": "darkpurple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkpurple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_8a6106225fdf48a71a19f2e1e33d053f = L.popup({ "maxWidth": "100%" });



var html_bf2b087febe4dfc13e3893397d9c9808 = $(`<div id="html_bf2b087febe4dfc13e3893397d9c9808" style="width: 100.0%; height: 100.0%;">2020-08-07</div>`)[0];
popup_8a6106225fdf48a71a19f2e1e33d053f.setContent(html_bf2b087febe4dfc13e3893397d9c9808);



circle_110ee12140e4bca342b9696d170cc925.bindPopup(popup_8a6106225fdf48a71a19f2e1e33d053f)
    ;




var circle_7078088189bc6f8d93f13cf30e3fe428 = L.circle(
    [43.679968692683936, -79.37890869421025],
    { "bubblingMouseEvents": true, "color": "darkpurple", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "darkpurple", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 100, "stroke": true, "weight": 3 }
).addTo(map_c0a827379a3e92ac42793ff5128f9960);


var popup_55ceb24a3ec3bc51e439795c85e68026 = L.popup({ "maxWidth": "100%" });



var html_365a22caa81c3029f6c3a65e7eded190 = $(`<div id="html_365a22caa81c3029f6c3a65e7eded190" style="width: 100.0%; height: 100.0%;">2020-08-07</div>`)[0];
popup_55ceb24a3ec3bc51e439795c85e68026.setContent(html_365a22caa81c3029f6c3a65e7eded190);



circle_7078088189bc6f8d93f13cf30e3fe428.bindPopup(popup_55ceb24a3ec3bc51e439795c85e68026)
    ;