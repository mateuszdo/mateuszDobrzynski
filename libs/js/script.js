var map = L.map('map').locate({
    setView: true,
    maxZoom: 16,
    minZoom: 3
});
L.tileLayer('https://api.maptiler.com/maps/topo/256/{z}/{x}/{y}.png?key=psJfNymHeKKgEI07anEa', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',

}).addTo(map);

if ('geolocation' in navigator) {
    console.log('geolocation available');
    navigator.geolocation.getCurrentPosition(position => {
        let {
            latitude,
            longitude
        } = position.coords
        document.getElementById('lat').textContent = latitude;
        document.getElementById('lng').textContent = longitude;

        L.marker([latitude, longitude]).addTo(map).bindPopup("You are here : Lattitude: " + latitude + " Longitude: " + longitude).openPopup();

        $("#getPlace").click(function () {
            getLocation(latitude, longitude)
        });

        $("#getAllCountries").click(function() {
            console.log("click");
            getSelect()
        });
    });
} else {
    console.log('geolocation not available');
};
// get user location using lat i lng from navigator
function getLocation(lat, lng) {
    $.ajax({
        url: "libs/php/getLocation.php",
        type: "POST",
        dataType: "json",
        data: {
            lat: lat,
            lng: lng,
        },
        success: function (result) {
            if (result) {
                $("#cityName").html(result.geonames[0]['toponymName']);
                $("#countryName").html(result.geonames[0]['countryName']);
                console.log(result);
            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    })
};

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
};

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
};

function getSelect() {
    $.getJSON("libs/php/getSelect.php", function(result){
        $("#getAllCountries").html("hey");
       console.log(result);
    })
};   


