//$(document).ready(function() {
    $("#getWeather").click(function() {

        //does click work?
        //console.log("works");  
        //$("#weatherResult").html("works");      
        $.ajax({
            url: "libs/php/getWeather.php",
            type: "POST",
            dataType: "json",
            data: {
                getStation: $("#weatherId").val()
            },
            success: function (result) {
        
                console.log(JSON.stringify(result));
                if (result) {
                    console.log("all good");
                    $("#getTemp").html(JSON.stringify(result.weatherObservation.temperature));
                    $("#getWind").html(JSON.stringify(result.weatherObservation.windSpeed));
                    $("#getCloud").html(JSON.stringify(result.weatherObservation.clouds));
                    $("#getHumidity").html(JSON.stringify(result.weatherObservation.humidity));
                }
        
            },
            error : function (jqXHR, textStatus, errorThrown) {
                  alert(errorThrown);
            }
        }); 
    });

$("#getPlace").click(function () {

    //does click work?
    
    //$("#weatherResult").html("works");      
    $.ajax({
        url: "libs/php/getPlace.php",
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
//});

    $("#getEarthquake").click(function () {

    //does click work?
    
    //$("#weatherResult").html("works");      
        $.ajax({
            url: "libs/php/getEarthquake.php",
            type: "POST",
            dataType: "json",
            data: {
                north: $("#north").val(),
                south: $("#south").val(),
                east: $("#east").val(),
                west: $("#west").val()
        },
        success: function (result) {

            console.log(JSON.stringify(result));
            if (result) {
                console.log("all good");
                //$("#oceanName").html
                console.log(JSON.stringify(result));
                $("#earthquakeDate").html(JSON.stringify(result.earthquakes[0]['datetime']));
                $("#earthquakeDepth").html(JSON.stringify(result.earthquakes[0]['depth']));
                $("#earthquakeMagnitude").html(JSON.stringify(result.earthquakes[0]['magnitude']));
               

            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });
});