var map = L.map('map').setView([42.73342,-84.54792], 16);

https://api.mapbox.com/styles/v1/dmwillcutt/cl0a16gb3000h14pc85bdfpio.html?title=copy&access_token=pk.eyJ1IjoiZG13aWxsY3V0dCIsImEiOiJjbDFoMGYzbmswMmJhM2xwYmQ3ZDFha2NxIn0.5lZY2hzSlHS69b2dXGVbrQ&zoomwheel=true&fresh=true#14.85/42.74133/-84.5437

mapbox://styles/dmwillcutt/cl0a16gb3000h14pc85bdfpio

L.tileLayer('https://api.mapbox.com/styles/v1/dmwillcutt/cl0a16gb3000h14pc85bdfpio/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZG13aWxsY3V0dCIsImEiOiJjbDFoMGYzbmswMmJhM2xwYmQ3ZDFha2NxIn0.5lZY2hzSlHS69b2dXGVbrQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZG13aWxsY3V0dCIsImEiOiJjbDFoMGYzbmswMmJhM2xwYmQ3ZDFha2NxIn0.5lZY2hzSlHS69b2dXGVbrQ'
}).addTo(map);

var waitressIcon = L.icon({
    iconURL: 'https://github.com/dmwillcutt/lch/blob/main/waitressIcon.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
});

L.marker([42.733722, -84.543056], {icon: waitressIcon}).addTo(map)
    .bindPopup('Claras Lansing Station')
    .openPopup();
L.marker([42.73403, -84.55119]).addTo(map)
    .bindPopup('Bijou Restaurant')
    .openPopup();
L.marker([42.73343, -84.54708]).addTo(map)
    .bindPopup('The Nuthouse Sports Grill')
    .openPopup();
L.marker([42.73371, -84.54829]).addTo(map)
    .bindPopup('Dines Restaurant')
    .openPopup();
L.marker([42.73358, -84.54792]).addTo(map)
    .bindPopup('The Knight Cap')
    .openPopup();
L.marker([42.73342, -84.53967]).addTo(map)
    .bindPopup('Stobers Bar')
    .openPopup();
L.marker([42.73370, -84.55183]).addTo(map)
    .bindPopup('Jims Tiffany')
    .openPopup();
L.marker([42.73192, -84.55224]).addTo(map)
    .bindPopup('Kellys Downtown')
    .openPopup();
L.marker([42.73192, -84.55224]).addTo(map)
    .bindPopup('Foo Ying Cafe 1')
    .openPopup();
L.marker([42.73348, -84.54044]).addTo(map)
    .bindPopup('Foo Ying Cafe 2')
    .openPopup();
L.marker([42.73348, -84.54044]).addTo(map)
    .bindPopup('Moriartys Pub')
    .openPopup();
L.marker([42.73063, -84.55187]).addTo(map)
    .bindPopup('Home Dairy Company')
    .openPopup();
L.marker([42.73733, -84.55359]).addTo(map)
    .bindPopup('Gregorys Ice and Smoke')
    .openPopup();
L.marker([42.73008, -84.55203]).addTo(map)
    .bindPopup('LAiglon Restaurant')
    .openPopup();
L.marker([42.733602, -84.553959]).addTo(map)
    .bindPopup('Michigan Capitol Building')
    .openPopup();
L.marker([42.73691, -84.55266]).addTo(map)
    .bindPopup('Palador Cafe')
    .openPopup();
