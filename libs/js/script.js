
   const map = L.map('map');
    map.locate({
    setView: true,
    maxZoom: 16,
    minZoom: 3
});

 
base = L.tileLayer('https://api.maptiler.com/maps/outdoor/{z}/{x}/{y}.png?key=WNljffzMsHfVWwd1hLeq', {
    attribution: '<a href="https://api.maptiler.com/maps/outdoor/style.json?key=WNljffzMsHfVWwd1hLeq" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',

}).addTo(map);
  

const googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(map);
const googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(map);
const googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
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
let featuresLayer = L.layerGroup().addTo(map);
let tourismMarkers = L.markerClusterGroup();


function addMyData(layer) {
    featuresLayer.addLayer(layer)
}

let layerControl = {
    "Border": featuresLayer,
    "Pubs": pubMarkers,
    "Cities": cityMarkers,
    "Hotels": hotelMarkers,
    "Tourism": tourismMarkers,
    
    
}

L.control.layers(baseMaps, layerControl).addTo(map);
//L.control.layers(baseMaps).addTo(map);


const greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [40, 61],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
const orangeIcon = new L.Icon({
    iconUrl: 'libs/favicon_io/weather.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [80, 100],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    zIndexOffset: 1000
});

const myIcon = new L.Icon({
    iconUrl: "https://img.icons8.com/office/80/000000/place-marker--v1.png",
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [40, 50],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    zIndexOffset: 100
});

const goldIcon = new L.Icon({
    iconUrl: 'img/marker-icon-2x-gold.png',
    shadowUrl: 'img/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const yellowIcon = new L.Icon({
    iconUrl: 'img/marker-icon-2x-yellow.png',
    shadowUrl: 'img/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const violetIcon = new L.Icon({
    iconUrl: 'img/marker-icon-2x-violet.png',
    shadowUrl: 'img/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});





if ('geolocation' in navigator) {
    console.log('geolocation available');
    navigator.geolocation.getCurrentPosition(position => {
        let {
            latitude,
            longitude
        } = position.coords
        
        
        
        //marker showing actual clients position
        
            //map.addLayer(greenMarker);
        //addMyData(greenMarker);
            //map.addLayer(greenMarker);
        //get initial users country info
        getCountryInfo(latitude, longitude);
        //get initial weather status from clients country
        //getWeather(latitude, longitude);
        //get initial weather forecast from clients country
        //getWeatherForecast(latitude, longitude);
        //populate select country options
        getSelect();
        //get full list of world currencies
        //getCurrency();
        //get 10 country's biggest cities as markers
        //getCities();
        //open sidebar
        //openNav(); 
        
        
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
                getCountryInfoByISO2(countryISO2);
                //getBorders(countryISO2);
                //getCities(countryISO2);
                let lower = countryISO2.toLowerCase()
                getNews(countryISO2);
                //getWikipedia(countryISO2);
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
                $("#flag").attr('src', data['flags']['svg']);
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
                //getPubs(lt,ln);
                //getHotels(lt,ln);
                //getTourism(lt,ln);
                //getWikipedia(lt, ln); 
                //getWeatherByCity(capitalname);
                //getWikipedia(capitalname, countryname)
                //getWeatherForecast(lt, ln);
                let weatherMarker = L.marker([lt, ln],
                    {
                        icon: orangeIcon,
                        draggable: true
                        
                    }).on('dragend', function (event) {
                        let latlng = event.target.getLatLng();
                        getWeather(latlng.lat, latlng.lng);
                        getWeatherForecast(latlng.lat, latlng.lng);
                    }).addTo(map).bindPopup("Move this marker to check local weather elswhere", {
                        keepInView: false,
                    }).openPopup();
                    addMyData(weatherMarker);
                
                
                currency_from = data['currencies'][0]['code'];
                currency_to = $("#selectCurrency option:selected").val();
                let  amount = $("#currencyValue").val();
                
                exchangeCurrency(currency_from, currency_to, amount);
                
                
            }
           
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
       addMyData(border);
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
                $("#wicon").attr('src', "http://openweathermap.org/img/w/"+data.weather[0]['icon']+".png");
                $("#temp").html(Math.round(data.main.temp) +  "℃");
                $("#humidity").html(data.main.humidity + "%");
                $("#pressure").html(data.main.pressure + "hPa");
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
                $("#wicon").attr('src', "http://openweathermap.org/img/w/" + data.weather[0]['icon'] + ".png");
                $("#temp").html(Math.round(data.main.temp) + "℃");
                $("#humidity").html(data.main.humidity + "%");
                $("#pressure").html(data.main.pressure + "hPa");
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
                console.log(data);
                
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
                $("#wicon1").attr('src', "http://openweathermap.org/img/w/"+data.daily[1]['weather'][0]['icon']+".png");
                $("#wicon2").attr('src', "http://openweathermap.org/img/w/"+data.daily[2]['weather'][0]['icon']+".png");
                $("#wicon3").attr('src', "http://openweathermap.org/img/w/"+data.daily[3]['weather'][0]['icon']+".png");
                $("#wicon4").attr('src', "http://openweathermap.org/img/w/" + data.daily[4]['weather'][0]['icon'] + ".png");
                $("#wicon5").attr('src', "http://openweathermap.org/img/w/" + data.daily[5]['weather'][0]['icon'] + ".png");
                $("#wicon6").attr('src', "http://openweathermap.org/img/w/" + data.daily[6]['weather'][0]['icon'] + ".png");
                $("#wicon7").attr('src', "http://openweathermap.org/img/w/" + data.daily[7]['weather'][0]['icon'] + ".png");

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
               //console.log(data);
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
        url: "libs/php/getNews.php",
        type: "POST",
        dataType: "json",
        data: {
            code: code
        },
        success: function (data) {

            console.log(data);
            $("#news-link1").html(data.feed[0]['title']);
            $("#news-link1").attr('href', 'https://' + data.feed[0]['link']);
            
            $("#news-link2").html(data.feed[1]['title']);
            $("#news-link2").attr('href', 'https://' + data.feed[1]['link']);
            
            $("#news-link3").html(data.feed[2]['title']);
            $("#news-link3").attr('href', 'https://' + data.feed[2]['link']);
           
            $("#news-link4").html(data.feed[3]['title']);
            $("#news-link4").attr('href', 'https://' + data.feed[3]['link']);
            
            $("#news-link5").html(data.feed[4]['title']);
            $("#news-link5").attr('href', 'https://' + data.feed[4]['link']);
            
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

           //console.log(data.features);
            for(let i = 0; i < data.features.length; i++) {
                //let pubMarkers = L.MarkerClusterGroup();
                let ltMarker = data.features[i]['properties']['lat'];
                let lnMarker = data.features[i]['properties']['lon'];
                let blueMarker = L.marker([ltMarker, lnMarker], {
                   riseOnHover: true,
                    title: data.features[i]['properties']['name'],
                    opacity: 0.8
                }).bindPopup(data.features[i]['properties']['address_line2']).bindTooltip(data.features[i]['properties']['name'], {
                    permanent: true, opacity: 0.7
                });
                pubMarkers.addLayer(blueMarker);
                //addMyData(blueMarker);
                //map.addLayer(pubMarkers);
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
           //console.log(data);
          
            data.forEach(element => {
                let latMarker = element.coordinates.latitude;
                let lonMarker = element.coordinates.longitude;
                
                let pinkMarker = L.marker([latMarker, lonMarker], {
                    icon: myIcon,
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
         
            //console.log(data.features);
            for (let i = 0; i < data.features.length; i++) {
                //let pubMarkers = L.MarkerClusterGroup();
                let latiMarker = data.features[i]['properties']['lat'];
                let longiMarker = data.features[i]['properties']['lon'];
                let goldMarker = L.marker([latiMarker, longiMarker], {
                    icon: greenIcon,
                    riseOnHover: true,
                    title: data.features[i]['properties']['name'],
                    opacity: 0.8
                }).bindPopup(data.features[i]['properties']['address_line2']).bindTooltip(data.features[i]['properties']['name'], {
                    permanent: true,
                    opacity: 0.7
                });
                hotelMarkers.addLayer(goldMarker);
                //addMyData(blueMarker);
                //map.addLayer(pubMarkers);
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

            console.log(data);
            for (let i = 0; i < data.features.length; i++) {
                //let pubMarkers = L.MarkerClusterGroup();
                let latitMarker = data.features[i]['properties']['lat'];
                let longitMarker = data.features[i]['properties']['lon'];
                let yellowMarker = L.marker([latitMarker, longitMarker], {
                    icon: yellowIcon,
                    riseOnHover: true,
                    title: data.features[i]['properties']['name'],
                    opacity: 0.8
                }).bindPopup(data.features[i]['properties']['address_line2']).bindTooltip(data.features[i]['properties']['name'], {
                    permanent: true,
                    opacity: 0.7
                });
                tourismMarkers.addLayer(yellowMarker);
                //addMyData(blueMarker);
                //map.addLayer(pubMarkers);
            }
            map.addLayer(tourismMarkers);
        }
    })
};

//click event changing info based on country selected from list of countries
function clickSelect() {
   
    map.removeLayer(featuresLayer);
    featuresLayer.clearLayers();
    map.removeLayer(pubMarkers);
    pubMarkers.clearLayers();
    map.removeLayer(cityMarkers);
    cityMarkers.clearLayers();
    map.removeLayer(hotelMarkers);
    hotelMarkers.clearLayers();
    map.removeLayer(tourismMarkers);
    tourismMarkers.clearLayers();
    //map.removeLayer(weatherMarker);
    //weatherMarker.clearLayers();
   
    const code = $("#select option:selected").attr("value");
    
    //console.log(code);
    getCountryInfoByISO2(code);
    getBorders(code);
    getCities(code);
    
   
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

function addLayer(layer) {
    layer.addTo(map);
};

function removeLayer(layer) {
    map.remove(layer);
}


