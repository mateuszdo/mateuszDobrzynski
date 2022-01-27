var map = L.map('map').locate({
    setView: true,
    maxZoom: 16,
    minZoom: 3
});
L.tileLayer('https://api.maptiler.com/maps/topo/256/{z}/{x}/{y}.png?key=psJfNymHeKKgEI07anEa', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',

}).addTo(map);
let countryName;
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
        L.marker([latitude, longitude]).addTo(map).bindPopup("You are here : Lattitude: " + latitude + " Longitude: " + longitude).openPopup();
        //get countryName based on lat i long
        
        //get client country info from opencage
        //$("#getPlace").click(function () {
        getLocation(latitude, longitude);
        //get initial weather status from clients country
        getWeather(latitude, longitude);
        //get initial weather forecast from clients country
        getWeatherForecast(latitude, longitude);
        //open sidebar with client country info
        getSelect();
        openNav();
        
        
    });
}

 else {
    console.log('geolocation not available');
};

//get country name from lat i lng
function getCountryName(lat, lng) {
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
                //$("#capital").html('Capital City: ' + data.results[0]['components']['city']);
                countryName = data.results[0]['components']['country'];
                

            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    })
};
// get user location and info using lat i lng from navigator
function getLocation(lat, lng) {
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
                //$("#capital").html('Capital City: ' + data.results[0]['components']['city']);
                $("#countryName").html(data.results[0]['components']['country']);
                country1 = data.results[0]['components']['country']
                $("#flag").prepend(data.results[0]['annotations']['flag']);
                $("#currency").html('Currency: ' + data.results[0]['annotations']['currency']['name']);
                //$("#cityName").html(result.geonames[0]['toponymName']);
                //$("#countryName").html(result.geonames[0]['countryName']);
                //console.log(data);
                //console.log(country1);
                
            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
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
                $("#temp1day").html("day: " + data.daily[0]['temp']['night'] + "℃");
                $("#temp2day").html("day: " + data.daily[1]['temp']['night'] + "℃");
                $("#temp3day").html("day: " + data.daily[2]['temp']['night'] + "℃");
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


function openNav() {
    document.getElementById("mySidebar").style.width = "400px";
    document.getElementById("main").style.marginLeft = "250px";
};

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
};

function getSelect() {
   $.ajax({
       url: 'libs/php/getSelect.php',
       type: 'POST',
       dataType: 'json',
       success: function(result){
           for(let i = 0; i < result.data.length; i++) {
            $("#select").append('<option value="' + result.data[i].iso_a3 + '">' + result.data[i].name + '</option>');
           }
        }
    }) 
}
    






