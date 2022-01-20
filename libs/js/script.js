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
        
                console.log(result);
                if (result.status.name == "ok") {
                    console.log("all good");
                    $("#weatherResult").html(JSON.stringify(result));
                }
        
            },
            error : function (jqXHR, textStatus, errorThrown) {
                  alert(errorThrown);
            }
        }); 
    });
//});