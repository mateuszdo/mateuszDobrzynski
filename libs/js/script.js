
   const map = L.map('map');
    map.locate({
    setView: true,
    maxZoom: 16,
    minZoom: 3
});

 
base = L.tileLayer('https://api.maptiler.com/maps/outdoor/{z}/{x}/{y}.png?key=WNljffzMsHfVWwd1hLeq', {
    attribution: '<a href="https://api.maptiler.com/maps/outdoor/style.json?key=WNljffzMsHfVWwd1hLeq" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',

}).addTo(map);
  


L.easyButton('<img src="libs/favicon_io/icons8-restart-24.png">', function (btn, map) {
    map.flyTo([54, -9]);


    
}).addTo(map);


const googleStreets = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(map);
const googleHybrid = L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(map);
const googleTerrain = L.tileLayer('https://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(map);
    

let baseMaps = {
    "Terrain": googleTerrain,
    "Hybrid": googleHybrid,
    "Streets": googleStreets,
    "Base": base
}
let pubMarkers = L.markerClusterGroup();
let cityMarkers = L.markerClusterGroup();
let hotelMarkers = L.markerClusterGroup();
let borderLayer = L.layerGroup();
let tourismMarkers = L.markerClusterGroup();
let airportMarkers = L.markerClusterGroup();
let beachMarkers = L.markerClusterGroup();
let mountainMarkers = L.markerClusterGroup();


let layerControl = {
    "Border": borderLayer,
    "Pubs": pubMarkers,
    "Cities": cityMarkers,
    "Hotels": hotelMarkers,
    "Tourism": tourismMarkers,
    "Airports": airportMarkers,
    "Beach": beachMarkers,
    "Mountains": mountainMarkers
    
}

L.control.layers(baseMaps, layerControl).addTo(map);
//L.control.layers(baseMaps).addTo(map);

/*
const greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [40, 61],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});


const myIcon = new L.Icon({
    iconUrl: "https://img.icons8.com/office/80/000000/place-marker--v1.png",
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [50, 50],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    zIndexOffset: 100
});

const hotelIcon = new L.Icon({
    iconUrl: 'libs/favicon_io/icons8-hotel-bed-48.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [50, 50],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const yellowIcon = new L.Icon({
    iconUrl: 'img/marker-icon-2x-yellow.png',
    shadowUrl: 'img/marker-shadow.png',
    iconSize: [50, 50],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const pubIcon = new L.Icon({
    iconUrl: 'libs/favicon_io/icons8-beers-64.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [50, 50],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const mountainIcon = new L.Icon({
    iconUrl: 'libs/favicon_io/icons8-mountain-96.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [50, 50],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const airportIcon = new L.Icon({
    iconUrl: 'libs/favicon_io/icons8-airport-100.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [50, 50],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const beachIcon = new L.Icon({
    iconUrl: 'libs/favicon_io/icons8-beach-120.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [50, 50],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
*/
const orangeIcon = new L.Icon({
    iconUrl: 'libs/favicon_io/weather.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [80, 100],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    zIndexOffset: 1000
});

const cityMarker = L.ExtraMarkers.icon({
        icon: 'fa-city',
        markerColor: 'red',
        shape: 'circle',
        prefix: 'fa'
});

const pubMarker = L.ExtraMarkers.icon({
    icon: 'fa-utensils',
    markerColor: 'cyan',
    shape: 'square',
    prefix: 'fa'
});

const visitorMarker = L.ExtraMarkers.icon({
    icon: 'fa-landmark',
    markerColor: 'purple',
    shape: 'star',
    prefix: 'fa'
});

const hotelMarker = L.ExtraMarkers.icon({
    icon: 'fa-bed',
    markerColor: 'green-light',
    shape: 'square',
    prefix: 'fa'
});

const airMarker = L.ExtraMarkers.icon({
    icon: 'fa-plane-departure',
    markerColor: 'blue-dark',
    shape: 'circle',
    prefix: 'fa'
});

const beachesMarker = L.ExtraMarkers.icon({
    icon: 'fa-umbrella-beach',
    markerColor: 'pink',
    shape: 'star',
    prefix: 'fa'
});

const mountainsMarker = L.ExtraMarkers.icon({
    icon: 'fa-mountain',
    markerColor: 'orange-dark',
    shape: 'penta',
    prefix: 'fa'
});







if ('geolocation' in navigator) {
    
    navigator.geolocation.getCurrentPosition(position => {
        let {
            latitude,
            longitude
        } = position.coords
        
        
        //populate select country options
        getSelect();
        //get initial users country info
        getCountryInfo(latitude, longitude);
        //get full list of world currencies
        getCurrency();
       
        
    });
        
}

 else {
    console.log('geolocation not available');
};

 



//get country info based on name from lat and lng from navigator
function getCountryInfo(lat, lng) {
    let currency_from, currency_to;
    $.ajax({
        url: "libs/php/getLocation.php",
        type: "POST",
        dataType: "json",
        data: {
            lat: lat,
            lng: lng,
        },
        success: function (data) {
            if (data) {
              
                let countryISO2 = data.results[0]['components']['ISO_3166-1_alpha-2'];
                let countryname = data.results[0]['components']['country'];
                if(countryname === "United Kingdom"){
                    countryISO2 = "GB";
                }
                
                $("#select").val(countryISO2).trigger("change");
                //getBorders(countryISO2);
                //getCities(countryISO2);
                //getNews(countryISO2);
                //getAirports(countryISO2);
                //getBeach(countryISO2);
                //getMountain(countryISO2);
                //getCountryInfoByISO2(countryISO2);
                
                
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });
};
// called inside getCountryInfo
function getCountryInfoByISO2(code) {
    
    $.ajax({
        url: "libs/php/getCountry.php",
        type: "POST",
        dataType: "json",
        data: {
                code: code
        },
        success: function (data) {
            if (data) {
               
                
                $("#countryName").html(data['name']);
                $("#nativeName").html(data['nativeName']);
                $("#flag").attr('src', data['flags']['svg']);
                $("#callingcode").html(data['callingCodes'][0]);
                //$("#countryNativeName").html("( " + data[0]['nativeName'] + " )");
                $("#area").html(data['area'].toLocaleString() + " &#13218");
                $("#capital").html(data['capital']);
                $("#language").html(data['languages'][0]['name']);
                $("#population").html(data['population'].toLocaleString());
                $("#currency").html(data['currencies'][0]['name'] + " ( " + data['currencies'][0]['symbol'] + " )");
                $("#currencyName").html(data['currencies'][0]['code'] + " ( " + data['currencies'][0]['symbol'] + " )");
                let countryname = data['name'];
                let capitalname = data['capital'];
                let lt = data['latlng'][0];
                
                let ln = data['latlng'][1];
                getPubs(lt,ln);
                getHotels(lt,ln);
                getTourism(lt,ln);
                getWikipedia(lt, ln); 
                getWeatherByCity(capitalname);
                getWeatherForecast(lt, ln);
                let weatherMarker = L.marker([lt, ln],
                    {
                        icon: orangeIcon,
                        draggable: true
                    }).on('dragend', function (event) {
                        let latlng = event.target.getLatLng();
                        getWeather(latlng.lat, latlng.lng);
                        getWeatherForecast(latlng.lat, latlng.lng);
                    }).bindPopup("Move this marker to check local weather elswhere", {
                        keepInView: false,
                    }).openPopup();
                    weatherMarker.addTo(borderLayer);
                    
                currency_from = data['currencies'][0]['code'];
                currency_to = $("#selectCurrency option:selected").val();
                let  amount = $("#currencyValue").val();
                
                exchangeCurrency(currency_from, currency_to, amount);
                
                
            }
           // map.addLayer(borderLayer);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    })
}

//get countryBorders from geo.json
function getBorders(iso_a2) {
   $.ajax({
       url: "libs/php/getBorders.php",
       type: "POST",
       dataType: "json",
       data: {
           iso_a2: iso_a2
       },
       success: function(result) {
       
       let state = {
           "type": "Feature",
           "geometry": {
               "type": result.data['type'],
               "coordinates": result.data['coordinates']
           }
       };
       
       let border = L.geoJSON(state, {
                   color: "grey",
                   weight: 8,
                   opacity: 1,
                   fillColor: "lightgrey",
                   fillOpacity: 0.5
       }).addTo(map);
       bounds = border.getBounds();
       map.fitBounds(bounds);
       border.addTo(borderLayer);
       map.addLayer(borderLayer);
       }
       
    });
};

//get weather based on lat and long from navigator
function getWeather(lat, lon) {
    $.ajax({
        url: "libs/php/getWeather.php",
        type: "POST",
        dataType: "json",
        data: {
            lat: lat,
            lon: lon,
        },
        success: function (data) {
            if (data) {
                
                $("#cityname").html(data.name);
                $("#weatherForecastCityName").html(data.name);
                $("#weather-descr").html(data.weather[0]['description']);
                $("#wicon").attr('src', "https://openweathermap.org/img/w/"+data.weather[0]['icon']+".png");
                $("#temp").html(Math.round(data.main.temp) +  "&#8451");
                $("#humidity").html(data.main.humidity + "%");
                $("#pressure").html(data.main.pressure + " hPa");
                $("#wind").html(Math.round(data.wind.speed) + "m/ph");
                

            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    })
};
//get weather based on cityname
function getWeatherByCity(city) {
    $.ajax({
        url: "libs/php/getWeatherByCityName.php",
        type: "POST",
        dataType: "json",
        data: {
            city: city
        },
        success: function (data) {
            if (data) {
            //console.log(data);
                $("#cityname").html(data.name);
                $("#weatherForecastCityName").html(data.name);
                $("#weather-descr").html(data.weather[0]['description']);
                $("#wicon").attr('src', "https://openweathermap.org/img/w/" + data.weather[0]['icon'] + ".png");
                $("#temp").html(Math.round(data.main.temp) + "&#8451");
                $("#humidity").html(data.main.humidity + "%");
                $("#pressure").html(data.main.pressure + " hPa");
                $("#wind").html(Math.round(data.wind.speed) + "m/ph");


            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    })
};
//get 3 days weather forecast
function getWeatherForecast(lat, lon) {
    $.ajax({
        url: "libs/php/getWeatherForecast.php",
        type: "POST",
        dataType: "json",
        data: {
            lat: lat,
            lon: lon,
        },
        success: function (data) {
            if (data) {
                
                
                $("#day1").html(new Date(data.daily[1]['dt'] * 1000).toLocaleDateString('en-us', { weekday: 'short' }));
                $("#day2").html(new Date(data.daily[2]['dt'] * 1000).toLocaleDateString('en-us', { weekday: 'short' }));
                $("#day3").html(new Date(data.daily[3]['sunrise'] * 1000).toLocaleDateString('en-us', { weekday: 'short' }));
                $("#day4").html(new Date(data.daily[4]['sunrise'] * 1000).toLocaleDateString('en-us', { weekday: 'short' }));
                $("#day5").html(new Date(data.daily[5]['sunrise'] * 1000).toLocaleDateString('en-us', { weekday: 'short' }));
                $("#day6").html(new Date(data.daily[6]['sunrise'] * 1000).toLocaleDateString('en-us', { weekday: 'short' }));
                $("#day7").html(new Date(data.daily[7]['sunrise'] * 1000).toLocaleDateString('en-us', { weekday: 'short' }));
                $("#temp1day").html(Math.round(data.daily[1]['temp']['day']) + "&#176" + "  |  " + Math.round(data.daily[1]['temp']['night']) + "℃");
                $("#temp2day").html(Math.round(data.daily[2]['temp']['day']) + "&#176" + "  |  " + Math.round(data.daily[2]['temp']['night']) + "℃");
                $("#temp3day").html(Math.round(data.daily[3]['temp']['day']) + "&#176" + "  |  " + Math.round(data.daily[3]['temp']['night']) + "℃");
                $("#temp4day").html(Math.round(data.daily[4]['temp']['day']) + "&#176" + "  |  " + Math.round(data.daily[4]['temp']['night']) + "℃");
                $("#temp5day").html(Math.round(data.daily[5]['temp']['day']) + "&#176" + "  |  " + Math.round(data.daily[5]['temp']['night']) + "℃");
                $("#temp6day").html(Math.round(data.daily[6]['temp']['day']) + "&#176" + "  |  " + Math.round(data.daily[6]['temp']['night']) + "℃");
                $("#temp7day").html(Math.round(data.daily[7]['temp']['day']) + "&#176" + "  |  " + Math.round(data.daily[7]['temp']['night']) + "℃");
                $("#wicon1").attr('src', "https://openweathermap.org/img/w/"+data.daily[1]['weather'][0]['icon']+".png");
                $("#wicon2").attr('src', "https://openweathermap.org/img/w/"+data.daily[2]['weather'][0]['icon']+".png");
                $("#wicon3").attr('src', "https://openweathermap.org/img/w/"+data.daily[3]['weather'][0]['icon']+".png");
                $("#wicon4").attr('src', "https://openweathermap.org/img/w/" + data.daily[4]['weather'][0]['icon'] + ".png");
                $("#wicon5").attr('src', "https://openweathermap.org/img/w/" + data.daily[5]['weather'][0]['icon'] + ".png");
                $("#wicon6").attr('src', "https://openweathermap.org/img/w/" + data.daily[6]['weather'][0]['icon'] + ".png");
                $("#wicon7").attr('src', "https://openweathermap.org/img/w/" + data.daily[7]['weather'][0]['icon'] + ".png");

            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    })
};


function getSelect() {
   $.ajax({
       url: 'libs/php/getSelect.php',
       type: 'POST',
       dataType: 'json',
       success: function(result){
           
           result.data.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
           for(let i = 0; i < result.data.length; i++) {
            $("#select").append('<option class="select-country" value="' + result.data[i].iso_a2 + '">' + result.data[i].name + '</option>').sort();
            
            $("#select option[value=countryname]").attr('selected', 'selected'); 
              }
            
         }       
       
    }) 
    
};


//populate world currencies from api
function getCurrency() {
    $.getJSON("libs/php/getCurrency.php", function(result){
     
        for(const key in result.symbols) {
            
            $("#selectCurrency").append('<option class="convert" value="' + key + '">' + result.symbols[key] + '</option>');
        }
        
    })
};
//convert currency from base to any from select options
function exchangeCurrency(from, to, amount) {
    $.ajax({
        url: "libs/php/exchangeCurrency2.php",
        type: "POST",
        dataType: "json",
        data: {
            from: from,
            to: to,
            amount: amount,
        },
        success: function (data) {
            if (data) {
                
                $("#exchangeResult").html(data.conversion_result);
                
            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    })
};


//get articles based on city name
function getWikipedia(lat, lng) {
    $.ajax({
        url: "libs/php/getWikipedia.php",
        type: "POST",
        dataType: "json",
        data: {
            lat: lat,
            lng: lng
        },
        success: function (data) {
            if (data) {
               
               $("#link1").html(data.geonames[0]['title']);
               $("#link1").attr('href', 'https://' + data.geonames[0]['wikipediaUrl']);
               $("#wiki1").html(data.geonames[0]['summary']);
               $("#link2").html(data.geonames[1]['title']);
               $("#link2").attr('href', 'https://' + data.geonames[1]['wikipediaUrl']);
               $("#wiki2").html(data.geonames[1]['summary']);
               $("#link3").html(data.geonames[2]['title']);
               $("#link3").attr('href', 'https://' + data.geonames[2]['wikipediaUrl']);
               $("#wiki3").html(data.geonames[2]['summary']);
            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    })
};


function getNews(code) {
    $.ajax({
        url: "libs/php/getNews2.php",
        type: "POST",
        dataType: "json",
        data: {
            code: code
        },
        success: function (data) {

            
            $("#news-source-1").html(data.articles[0]['source']['name']);
            $("#news-link-1").html(data.articles[0]['description']);
            $("#news-link-1").attr('href', data.articles[0]['url']);
            $("#news-img-1").attr('src', data.articles[0]['urlToImage']);

            $("#news-source-2").html(data.articles[1]['source']['name']);
            $("#news-link-2").html(data.articles[1]['description']);
            $("#news-link-2").attr('href', data.articles[1]['url']);
            $("#news-img-2").attr('src', data.articles[1]['urlToImage']);

            $("#news-source-3").html(data.articles[2]['source']['name']);
            $("#news-link-3").html(data.articles[2]['description']);
            $("#news-link-3").attr('href', data.articles[2]['url']);
            $("#news-img-3").attr('src', data.articles[2]['urlToImage']);

            $("#news-source-4").html(data.articles[3]['source']['name']);
            $("#news-link-4").html(data.articles[3]['description']);
            $("#news-link-4").attr('href', data.articles[3]['url']);
            $("#news-img-4").attr('src', data.articles[3]['urlToImage']);

            $("#news-source-5").html(data.articles[4]['source']['name']);
            $("#news-link-5").html(data.articles[4]['description']);
            $("#news-link-5").attr('href', data.articles[4]['url']);
            $("#news-img-5").attr('src', data.articles[4]['urlToImage']);

        }
    })
};


function getPubs(lat, lon) {
    $.ajax({
        url: "libs/php/getPubs.php",
        type: "POST",
        dataType: "json",
        data: {
            lat: lat,
            lon: lon,
        },
        success: function (data) {

           
            for(let i = 0; i < data.features.length; i++) {
                
                let ltMarker = data.features[i]['properties']['lat'];
                let lnMarker = data.features[i]['properties']['lon'];
                let blueMarker = L.marker([ltMarker, lnMarker], {
                    icon: pubMarker,
                    riseOnHover: true,
                    title: data.features[i]['properties']['name'],
                    opacity: 0.8
                }).bindPopup(data.features[i]['properties']['address_line2']).bindTooltip(data.features[i]['properties']['name'], {
                    permanent: true, opacity: 0.7
                });
                pubMarkers.addLayer(blueMarker);
              
            }
            map.addLayer(pubMarkers);
        }
    })
};

//get country's  biggest nearby cities based on population
function getCities(code) {
    $.ajax({
        url: "libs/php/getCities.php",
        type: "POST",
        dataType: "json",
        data: {
           code: code
        },
        success: function (data) {
           
          
            data.forEach(element => {
                let latMarker = element.coordinates.latitude;
                let lonMarker = element.coordinates.longitude;
                
                let pinkMarker = L.marker([latMarker, lonMarker], {
                    icon: cityMarker,
                    riseOnHover: true,
                    title: element.name,
                    opacity: 0.8
                }).bindPopup("Population: " + element.population.toLocaleString()).bindTooltip(element.name, {
                    permanent: true, opacity: 0.7});
                cityMarkers.addLayer(pinkMarker);
            })
            
            map.addLayer(cityMarkers);
         },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    })
};

function getHotels(lat, lon) {
    $.ajax({
        url: "libs/php/getHotels.php",
        type: "POST",
        dataType: "json",
        data: {
            lat: lat,
            lon: lon,
        },
        success: function (data) {
         
            
            for (let i = 0; i < data.features.length; i++) {
                
                let latiMarker = data.features[i]['properties']['lat'];
                let longiMarker = data.features[i]['properties']['lon'];
                let goldMarker = L.marker([latiMarker, longiMarker], {
                    icon: hotelMarker,
                    riseOnHover: true,
                    title: data.features[i]['properties']['name'],
                    opacity: 0.8
                }).bindPopup(data.features[i]['properties']['address_line2']).bindTooltip(data.features[i]['properties']['name'], {
                    permanent: true,
                    opacity: 0.7
                });
                hotelMarkers.addLayer(goldMarker);
                
            }
            map.addLayer(hotelMarkers);
        }
    })
};

function getTourism(lat, lon) {
    $.ajax({
        url: "libs/php/getTourism.php",
        type: "POST",
        dataType: "json",
        data: {
            lat: lat,
            lon: lon,
        },
        success: function (data) {

            
            for (let i = 0; i < data.features.length; i++) {
                
                let latitMarker = data.features[i]['properties']['lat'];
                let longitMarker = data.features[i]['properties']['lon'];
                let tourismMarker = L.marker([latitMarker, longitMarker], {
                    icon: visitorMarker,
                    riseOnHover: true,
                    title: data.features[i]['properties']['name'],
                    opacity: 0.8
                }).bindPopup(data.features[i]['properties']['address_line2']).bindTooltip(data.features[i]['properties']['name'], {
                    permanent: true,
                    opacity: 0.7
                });
                tourismMarkers.addLayer(tourismMarker);
                
            }
            map.addLayer(tourismMarkers);
        }
    })
};

function getAirports(iso) {
    $.ajax({
        url: "libs/php/getAirports.php",
        type: "POST",
        dataType: "json",
        data: {
           iso: iso
        },
        success: function (data) {
          
            
            for (let i = 0; i < data.results.length; i++) {
            
                let latituMarker = data.results[i]['coordinates']['latitude'];
                let longituMarker = data.results[i]['coordinates']['longitude'];
                let airportMarker = L.marker([latituMarker, longituMarker], {
                    icon: airMarker,
                    riseOnHover: true,
                    title: data.results[i]['name'],
                    opacity: 0.8
                }).bindPopup(data.results[i]['snippet']).bindTooltip(data.results[i]['name'], {
                    permanent: true,
                    opacity: 0.7
                }).openPopup();
                airportMarkers.addLayer(airportMarker);
                
            }
            map.addLayer(airportMarkers);
        }
    })
};

function getBeach(iso) {
    $.ajax({
        url: "libs/php/getBeach.php",
        type: "POST",
        dataType: "json",
        data: {
            iso: iso
        },
        success: function (data) {

            
            for (let i = 0; i < data.results.length; i++) {
                
                let lattMarker = data.results[i]['coordinates']['latitude'];
                let longgMarker = data.results[i]['coordinates']['longitude'];
                let beachMarker = L.marker([lattMarker, longgMarker], {
                    icon: beachesMarker,
                    riseOnHover: true,
                    title: data.results[i]['name'],
                    opacity: 0.8
                }).bindPopup(data.results[i]['snippet']).bindTooltip(data.results[i]['name'], {
                    permanent: true,
                    opacity: 0.7
                }).openPopup();
                beachMarkers.addLayer(beachMarker);
                
            }
            map.addLayer(beachMarkers);
        }
    })
};


function getMountain(iso) {
    $.ajax({
        url: "libs/php/getMountain.php",
        type: "POST",
        dataType: "json",
        data: {
            iso: iso
        },
        success: function (data) {

            
            for (let i = 0; i < data.results.length; i++) {
                
                let latitudMarker = data.results[i]['coordinates']['latitude'];
                let longitudMarker = data.results[i]['coordinates']['longitude'];
                let image = data.results[i]['images'][0]['source_url'];
                let element = document.createElement("img");
                element.setAttribute("src", image);
                element.setAttribute("class", "marker-img");
                
                let mountainMarker = L.marker([latitudMarker, longitudMarker], {
                    icon: mountainsMarker,
                    riseOnHover: true,
                    title: data.results[i]['name'],
                    opacity: 0.8
                }).bindPopup(element).bindTooltip(data.results[i]['name'], {
                    permanent: true,
                }).openPopup();
                mountainMarkers.addLayer(mountainMarker);
                
            }
            map.addLayer(mountainMarkers);
        }
    })
};

//click event changing info based on country selected from list of countries
function clickSelect() {
   
    map.removeLayer(borderLayer);
    borderLayer.clearLayers();
    map.removeLayer(pubMarkers);
    pubMarkers.clearLayers();
    map.removeLayer(cityMarkers);
    cityMarkers.clearLayers();
    map.removeLayer(hotelMarkers);
    hotelMarkers.clearLayers();
    map.removeLayer(tourismMarkers);
    tourismMarkers.clearLayers();
    map.removeLayer(mountainMarkers);
    mountainMarkers.clearLayers();
    map.removeLayer(airportMarkers);
    airportMarkers.clearLayers();
    map.removeLayer(beachMarkers);
    beachMarkers.clearLayers();
    
   
    const code = $("#select option:selected").attr("value");
    
    
    getCountryInfoByISO2(code);
    getBorders(code);
    getCities(code);
    getNews(code);
    getAirports(code.toLowerCase());
    getBeach(code.toLowerCase());
    getMountain(code.toLowerCase());
    
};

$("#select").on('change', function () {
    clickSelect();
});

$("#selectCurrency").on("change", () => {
    currency_to = $("#selectCurrency option:selected").val();
    exchangeCurrency(currency_from, currency_to, $("#currencyValue").val());
});

$("#currencyValue").on("input", (e) => {
    exchangeCurrency(currency_from, currency_to, e.target.value);
});




