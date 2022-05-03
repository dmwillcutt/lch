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

L.marker([42.733722, -84.543056]).addTo(map)
    .bindPopup('<b>Clara&#8217;s Lansing Station</b>')
    .openPopup();
L.marker([42.73403, -84.55119]).addTo(map)
    .bindPopup('<b>Bijou Restaurant</b> was a fine dining icon in downtown Lansing.')
    .openPopup();
L.marker([42.73343, -84.54708]).addTo(map)
    .bindPopup('<b>The Nuthouse Sports Grill</b> opened in 1996 alongside Lansing Lugnut Stadium - the city&#8217;s first AAA baseball stadium. “The Nuthouse,” as locals refer to it - stands out because of the large tower in the shape of a lugnut attached to the building. The stadium&#8217;s opening marked a wave of change for the downtown area. During the 1970s and 1908s much of East Michigan Avenue in front of the capitol building had been overtaken by the less savory elements of nightlife; namely adult bookstores, XXX movie theaters, and stripclubs. Revitalization during the 1990s welcomed Lansing-area families back downtown.')
    .openPopup();
L.marker([42.73371, -84.54829]).addTo(map)
    .bindPopup('<b>Dine&#8217;s Restaurant</b> was opened and owned by husband and wife team George and Nevenka Dines. When they closed it, they bought the Cedar Village Shopping Center and ran a specialty food shop named Dines Gourmet and Gifts. Owned the Village Book Store too. The latter two ventures were with their daughter and two sons. Chef Jay Pilbeam. Near to the capitol building so it attracted a lot of government officials. The place included a cocktail lounge. Served cornish game hen, prime rib, broiled lobster tails. Could select a live lobster.')
    .openPopup();
L.marker([42.73358, -84.54792]).addTo(map)
    .bindPopup('George and Charlie Sinadinos opened <b>The Knight Cap</b> in 1969. George died in 1988, but his wife, Charlie, kept the restaurant running until March 21, 2015. Charlie was helped by her sister, Windy Johnson, who served as the general manager of the Knight Cap for more than twenty-five years. The Knight Cap is one of many Lansing restaurants owned and operated by females.')
    .openPopup();
L.marker([42.73342, -84.53967]).addTo(map)
    .bindPopup('<b>Stober&#8217;s Bar</b>')
    .openPopup();
L.marker([42.73370, -84.55183]).addTo(map)
    .bindPopup('<b>Jim&#8217;s Tiffany</b>')
    .openPopup();
L.marker([42.73192, -84.55224]).addTo(map)
    .bindPopup('<b>Kelly&#8217;s Downtown</b>')
    .openPopup();
L.marker([42.73192, -84.55224]).addTo(map)
    .bindPopup('<b>Foo Ying Cafe 1</b>')
    .openPopup();
L.marker([42.73348, -84.54044]).addTo(map)
    .bindPopup('<b>Foo Ying Cafe 2</b>')
    .openPopup();
L.marker([42.73348, -84.54044]).addTo(map)
    .bindPopup('<b>Moriarty&#8217;s Pub</b> has been in Lansing for almost fifty years and is still operating. Michael "Mort" Moriarty - original owner and namesake - opened the pub in 1970(ca.) while working in a nearby automobile factory. In 2014 Moriarty sold the pub to Carolyn Baron and Joy Alswede, who still own the bar today. Moriarty&#8217;s is known for live music, including Jazz Tuesdays.')
    .openPopup();
L.marker([42.73063, -84.55187]).addTo(map)
    .bindPopup('<b>Home Dairy Company</b>')
    .openPopup();
L.marker([42.73733, -84.55359]).addTo(map)
    .bindPopup('<b>Gregory&#8217;s Ice and Smoke</b> was owned and operated by Gregory Eaton, who now owns Greogry&#8217;s Soul Food at the corner of Grand River Avenue and Martin Luther King, Jr. Boulevard. Eaton was the first African American business owner to receive a liquor license in Lansing. Liquor licenses are controlled by the state liquor commission.')
    .openPopup();
L.marker([42.73008, -84.55203]).addTo(map)
    .bindPopup('<b>L&#8217;Aiglon Restaurant</b>')
    .openPopup();
L.marker([42.733602, -84.553959]).addTo(map)
    .bindPopup('<b>Michigan Capitol Building</b>')
    .openPopup();
L.marker([42.73691, -84.55266]).addTo(map)
    .bindPopup('<b>Palador Cafe</b>')
    .openPopup();
