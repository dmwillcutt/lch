
var map = L.map('map').setView([42.73465, -84.54209], 20);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={pk.eyJ1IjoiZG13aWxsY3V0dCIsImEiOiJjazMwanlyNTEwOWc0M2tvNGMxcm90aThvIn0.SzFNAdPEsMo8yXKj7nDuvA}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v8',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZG13aWxsY3V0dCIsImEiOiJjazMwanlyNTEwOWc0M2tvNGMxcm90aThvIn0.SzFNAdPEsMo8yXKj7nDuvA'
}).addTo(map);

L.marker([42.73465, -84.54209]).addTo(map)
    .bindPopup('Clara <br> Easily customizable.')
    .openPopup();
