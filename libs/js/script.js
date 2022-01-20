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
                    $("#weatherResult").html(JSON.stringify(result));
                }
        
            },
            error : function (jqXHR, textStatus, errorThrown) {
                  alert(errorThrown);
            }
        }); 
    });

$("#getPlace").click(function () {

    //does click work?
    alert("works");  
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
                console.log("all good");
                $("#weatherResult").html(JSON.stringify(result));
            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });
});
//});