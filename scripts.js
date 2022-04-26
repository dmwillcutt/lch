var map = L.map('map').setView([42.73342,-84.54792], 16);

https://api.mapbox.com/styles/v1/dmwillcutt/cl0a16gb3000h14pc85bdfpio.html?title=copy&access_token=pk.eyJ1IjoiZG13aWxsY3V0dCIsImEiOiJjbDFoMGYzbmswMmJhM2xwYmQ3ZDFha2NxIn0.5lZY2hzSlHS69b2dXGVbrQ&zoomwheel=true&fresh=true#14.85/42.74133/-84.5437

mapbox://styles/dmwillcutt/cl0a16gb3000h14pc85bdfpio
*/<a href="https://www.flaticon.com/free-icons/food-and-restaurant" title="food-and-restaurant icons">Food-and-restaurant icons created by Eucalyp - Flaticon</a>/*

L.tileLayer('https://api.mapbox.com/styles/v1/dmwillcutt/cl0a16gb3000h14pc85bdfpio/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZG13aWxsY3V0dCIsImEiOiJjbDFoMGYzbmswMmJhM2xwYmQ3ZDFha2NxIn0.5lZY2hzSlHS69b2dXGVbrQ', {
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
