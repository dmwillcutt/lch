var map = L.map('map').setView([42.73342,-84.54792], 16);

L.tileLayer('https://api.mapbox.com/styles/v1/{dmwillcutt}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZG13aWxsY3V0dCIsImEiOiJjbDFoMGYzbmswMmJhM2xwYmQ3ZDFha2NxIn0.5lZY2hzSlHS69b2dXGVbrQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZG13aWxsY3V0dCIsImEiOiJjbDFoMGYzbmswMmJhM2xwYmQ3ZDFha2NxIn0.5lZY2hzSlHS69b2dXGVbrQ'
}).addTo(map);

L.marker([42.73465, -84.54209]).addTo(map)
    .bindPopup('Claras Lansing Station')
    .openPopup();
