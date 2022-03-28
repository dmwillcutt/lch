var map = L.map('map').setView([42.73465, -84.54209], 16);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={pk.eyJ1IjoiZG13aWxsY3V0dCIsImEiOiJjbDE5bmZ4eWQwMHFwM2pvMzZ0M2F1dmN4In0.vISO5O9caY4NVJt3Vbi8FQ}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZG13aWxsY3V0dCIsImEiOiJjbDE5bmZ4eWQwMHFwM2pvMzZ0M2F1dmN4In0.vISO5O9caY4NVJt3Vbi8FQ'
}).addTo(map);

L.marker([42.73465, -84.54209]).addTo(map)
    .bindPopup('Clara's <br> Easily customizable.')
    .openPopup();

 <!--Claras Depot-->
  var marker = L.marker([42.73465, -84.54209]).addTo(map);

<!--Bijou-->

<!--Nuthouse-->

<!--Dines-->

<!--Knight Cap-->

<!--Stobers-->

<!--Jims Tiffany-->

<!--Kellys Downtown-->

<!--Foo Ying Cafe-->

<!--Moriartys-->

<!--Home Dairy Co-->
