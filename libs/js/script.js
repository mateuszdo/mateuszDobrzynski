

var map = L.map('map').locate({setView: true, maxZoom: 16, minZoom: 3});
L.tileLayer('https://api.maptiler.com/maps/topo/256/{z}/{x}/{y}.png?key=psJfNymHeKKgEI07anEa', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    
}).addTo(map);






if('geolocation' in navigator) {
    console.log('geolocation available');
    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        document.getElementById('lat').textContent = lat;
        document.getElementById('lng').textContent = lng;
        console.log(position);
        L.marker([lat, lng]).addTo(map).bindPopup("You are here : Lattitude: " + lat + " Longitude: " + lng).openPopup();
  
$("#getPlace").click(function () {

    //does click work?

    //$("#weatherResult").html("works");      
    $.ajax({
        url: "libs/php/index.php",
        type: "POST",
        dataType: "json",
        data: {
            lat: $("#lat").val(),
            lng: $("#lng").val(),
        },
        success: function (result) {

            console.log(JSON.stringify(result));
            if (result) {
                //console.log("all good");
                $("#cityName").html(JSON.stringify(result.geonames[0]['toponymName']));
                $("#countryName").html(JSON.stringify(result.geonames[0]['countryName']));

            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });
});


    });
} else {
    console.log('geolocation not available');
};

/* let dropdown = $('#country');

dropdown.empty();

dropdown.append('<option selected="true" disabled>Choose Country</option>');
dropdown.prop('selectedIndex', 0);

const url = 'libs/json/countryBorders.geo.json';

// Populate dropdown with list of provinces
$.getJSON(url, function (data) {
    $.each(data, function (key, entry) {
        dropdown.append($('<option></option>').attr('value', entry.abbreviation).text(entry.name));
    })
});
*/

