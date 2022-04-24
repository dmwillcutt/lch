var map = L.map('map').setView([42.733779348826594, -84.54847476501921], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZG13aWxsY3V0dCIsImEiOiJjbDFoMGYzbmswMmJhM2xwYmQ3ZDFha2NxIn0.5lZY2hzSlHS69b2dXGVbrQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZG13aWxsY3V0dCIsImEiOiJjbDFoMGYzbmswMmJhM2xwYmQ3ZDFha2NxIn0.5lZY2hzSlHS69b2dXGVbrQ'
}).addTo(map);
