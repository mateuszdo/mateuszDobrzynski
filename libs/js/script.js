var map = L.map('map').locate({
    setView: true,
    maxZoom: 16,
    minZoom: 3
});

var base = L.tileLayer('https://api.maptiler.com/maps/topo/256/{z}/{x}/{y}.png?key=psJfNymHeKKgEI07anEa', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',

}).addTo(map);


var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(map);
var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(map);
var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(map);


var baseMaps = {
    "Terrain": googleTerrain,
    "Hybrid": googleHybrid,
    "Streets": googleStreets,
    "Base": base
}


//L.control.layers(baseMaps).addTo(map);

var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [40, 61],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
var orangeIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [40, 61],
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
        
        //document.getElementById('lat').textContent = latitude;
        //document.getElementById('lng').textContent = longitude;
        
        //marker showing actual clients position
        var greenMarker = L.marker([latitude, longitude], 
            {
              icon: greenIcon,
            }).addTo(map).bindPopup("You are here", {
                keepInView: true,
            }).openPopup();
        map.addLayer(greenMarker);
        //get initial users country info
        getCountryInfo(latitude, longitude);
        //get initial weather status from clients country
        getWeather(latitude, longitude);
        //get initial weather forecast from clients country
        getWeatherForecast(latitude, longitude);
        //populate select country options
        getSelect();
        //get full list of world currencies
        getCurrency();
        //get 10 country's biggest cities as markers
        getCities();
        //open sidebar
        openNav(); 
        var overlayMaps = {
            "Green Marker": greenMarker,
            //"Weather Marker": weatherMarker,
            //"Cities": blueMarker
            //"Weather Marker": weatherMarker
        } 
        
        L.control.layers(baseMaps, overlayMaps).addTo(map);
        });
}

 else {
    console.log('geolocation not available');
};

 
//exchangeCurrency("USD", "PHP", 10);
//document.getElementById("selectCurrency").addEventListener("click", console.log("miau"));


//get country info based on name from lat and lng from navigator
function getCountryInfo(lat, lng) {
    
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
                //console.log(data);
                //$("#capital").html('Capital City: ' + data.results[0]['components']['city']);
                let countryISO2 = data.results[0]['components']['ISO_3166-1_alpha-2'];
                //countrycurrency = data[0]['currencies'][0]['name'];
                let countryname = data.results[0]['components']['country'];
                //let currencyFrom = data.results[0]['annotations']['currency']['name']
                //let currencyTo = $("#selectCurrency").innerText;
                //let amount = $("#currencyValue").innerText;
                //console.log(countryISO2);
                //console.log(currencyFrom);
                //console.log(currencyTo)
                if(countryname === "United Kingdom"){
                    countryISO2 = "GB";
                }
                getCountryInfoByISO2(countryISO2);
                getBorders(countryISO2);
                getCities(countryISO2);
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
                console.log(data);
                
                $("#countryName").html(data['name']);
                $("#flag").attr('src', data['flags']['svg']);
                //$("#countryNativeName").html("( " + data[0]['nativeName'] + " )");
                $("#area").html("<em>Area: " + data['area'] + " &#13218");
                $("#capital").html("Capital: " + data['capital']);
                $("#language").html("<em>Language(s): " + data['languages'][0]['name']);
                $("#population").html("<em>Population: " + data['population']);
                $("#currency").html("<em>Currency: " + data['currencies'][0]['name'] + " ( " + data['currencies'][0]['symbol'] + " )");
                $("#currencyName").html(data['currencies'][0]['code'] + " ( " + data['currencies'][0]['symbol'] + " )");
                //let countryname = data['name'];
                let capitalname = data['capital'];
                let lt = data['latlng'][0];
                let ln = data['latlng'][1];
                getWikipedia(capitalname); 
                getWeatherByCity(capitalname);
                getWeatherForecast(lt, ln);
                var weatherMarker = L.marker([lt, ln],
                    {
                        icon: orangeIcon,
                        draggable: true
                    }).on('dragend', function (event) {
                        var latlng = event.target.getLatLng();
                        getWeather(latlng.lat, latlng.lng);
                        getWeatherForecast(latlng.lat, latlng.lng);
                    }).addTo(map).bindPopup("Move this marker to check local weather elswhere", {
                        keepInView: true,
                    }).openPopup();
                   
                /*
                let from = data['currencies'][0]['code'];
                console.log(from);
                let to = $("#selectCurrency option:selected").val();
                console.log(to);
                let  amount = $("#currencyValue").val();
                console.log(amount);
                exchangeCurrency(from, to, amount);
                */
                
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
       //console.log(result);
       let state = {
           "type": "Feature",
           "geometry": {
               "type": result.data['type'],
               "coordinates": result.data['coordinates']
           }
       };
       //console.log(state);
       var border = L.geoJSON(state, {
                   color: "grey",
                   weight: 8,
                   opacity: 1,
                   fillColor: "lightgrey",
                   fillOpacity: 0.5
       }).addTo(map);
       map.fitBounds(border.getBounds());
      } 
   })
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
                $("#cityname").html(data.name + " " + "Weather Status");
                $("#weather-descr").html(data.weather[0]['description']);
                $("#wicon").attr('src', "http://openweathermap.org/img/w/"+data.weather[0]['icon']+".png");
                $("#temp").html(data.main.temp +  "℃");
                $("#humidity").html("Humidity: " + data.main.humidity);
                $("#pressure").html("Pressure: " + data.main.pressure + "hPa");
                $("#wind").html("Wind: " + data.wind.speed + "m/ph");
                

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
                $("#cityname").html(data.name + " " + "Weather Status");
                $("#weather-descr").html(data.weather[0]['description']);
                $("#wicon").attr('src', "http://openweathermap.org/img/w/" + data.weather[0]['icon'] + ".png");
                $("#temp").html(data.main.temp + "℃");
                $("#humidity").html("Humidity: " + data.main.humidity);
                $("#pressure").html("Pressure: " + data.main.pressure + "hPa");
                $("#wind").html("Wind: " + data.wind.speed + "m/ph");


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
                //$("#cityname").html(data.name + " " + "Weather Status");
                $("#weather-forecast-descr1").html(data.daily[0]['weather'][0]['description']);
                $("#weather-forecast-descr2").html(data.daily[1]['weather'][0]['description']);
                $("#weather-forecast-descr3").html(data.daily[2]['weather'][0]['description']);
                $("#temp1day").html("day: " + data.daily[0]['temp']['day'] + "℃");
                $("#temp2day").html("day: " + data.daily[1]['temp']['day'] + "℃");
                $("#temp3day").html("day: " + data.daily[2]['temp']['day'] + "℃");
                $("#temp1night").html("night: " + data.daily[0]['temp']['night'] + "℃");
                $("#temp2night").html("night: " + data.daily[1]['temp']['night'] + "℃");
                $("#temp3night").html("night: " + data.daily[2]['temp']['night'] + "℃");
                $("#wicon1").attr('src', "http://openweathermap.org/img/w/"+data.daily[0]['weather'][0]['icon']+".png");
                $("#wicon2").attr('src', "http://openweathermap.org/img/w/"+data.daily[1]['weather'][0]['icon']+".png");
                $("#wicon3").attr('src', "http://openweathermap.org/img/w/"+data.daily[2]['weather'][0]['icon']+".png");

            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    })
};


//open sidebar 
function openNav() {
    document.getElementById("mySidebar").style.width = "35vw";
    //document.getElementById("map").style.max- = "100vw";
    //document.getElementById("map").style.float = "right";
};
//close sidebar
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("map").style.marginLeft = "0";
};

//populate list of countries from geo.json
function getSelect() {
   $.ajax({
       url: 'libs/php/getSelect.php',
       type: 'POST',
       dataType: 'json',
       success: function(result){
           
           for(let i = 0; i < result.data.length; i++) {
            $("#select").append('<option class="select-country" value="' + result.data[i].iso_a2 + '">' + result.data[i].name + '</option>');
            //console.log(result.data[i].iso_a2);
              
              }
            
         }       
        
    }) 
    
};


//populate world currencies from api
function getCurrency() {
    $.getJSON("libs/php/getCurrency.php", function(result){
        //console.log(result.symbols);
        for(const key in result.symbols) {
            //console.log(`${key}: ${result.symbols[key]}`);
            $("#selectCurrency").append('<option class="convert" value="' + key + '">' + result.symbols[key] + '</option>');
        }
        
    })
};
//convert currency from base to any from select options
function exchangeCurrency(from, to, amount) {
    $.ajax({
        url: "libs/php/exchangeCurrency.php",
        type: "POST",
        dataType: "json",
        data: {
            from: from,
            to: to,
            amount: amount,
        },
        success: function (data) {
            if (data) {
                console.log(data);
                $("#exchangeResult").html(data);
                console.log("works");
            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    })
};


//get articles based on city name
function getWikipedia(name) {
    $.ajax({
        url: "libs/php/getWikipedia.php",
        type: "POST",
        dataType: "json",
        data: {
            name: name
        },
        success: function (data) {
            if (data) {
               //console.log(data);
               $("#link1").html(data.geonames[0]['title']);
               $("#link1").attr('href', data.geonames[0]['wikipediaUrl']);
               $("#wiki1").html(data.geonames[0]['summary']);
               $("#link2").html(data.geonames[1]['title']);
               $("#link2").attr('href', data.geonames[1]['wikipediaUrl']);
               $("#wiki2").html(data.geonames[1]['summary']);
               $("#link3").html(data.geonames[2]['title']);
               $("#link3").attr('href', data.geonames[2]['wikipediaUrl']);
               $("#wiki3").html(data.geonames[2]['summary']);
            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    })
};




//get country's 10 biggest cities based on population
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
                
                var blueMarker = L.marker([latMarker, lonMarker], {
                    riseOnHover: true,
                    title: element.name,
                    opacity: 0.8
                }).addTo(map).bindPopup("Population: " + element.population).bindTooltip(element.name, {
                    permanent: true, opacity: 0.7});
                
            })
            
         },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    })
};

//click event changing info based on country selected from list of countries
function clickSelect() {
    const code = $("#select option:selected").attr("value");
    
    //console.log(code);
    getCountryInfoByISO2(code);
    getBorders(code);
    getCities(code);
    // getWeather(city);
};
//click and onchange event to exchange currency from base to selected one  

function clickChangeCurrency() {
    
        let from = 'GBP';
        //console.log(from);
        let to = $("#selectCurrency option:selected").val();
        //console.log(to);
        let  amount = $("#currencyValue").val();
        //console.log(amount);
        exchangeCurrency(from, to, amount);
    
    
}

function addLayer(layer) {
    layer.addTo(map);
};

function removeLayer(layer) {
    map.remove(layer);
}

