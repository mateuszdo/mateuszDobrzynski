$(document).ready(function() {
    $("#getWeather").click(() => {
  
   $.ajax({
    url: "libs/php/getWeather.php",
    type: "POST",
    dataType: "json",
    data: {
        getStation: $("#weatherId").val()
    },
    success: function (result) {
        
        console.log(JSON.stringify(result));

        if (result.status.name == "ok") {
           console.log("all good");
           $("#weatherResult").html(result);
        }
        
    },
    error : function (jqXHR, textStatus, errorThrown) {
        console.log("error");
    }
   }); 
 });
 console.log("hey");
});