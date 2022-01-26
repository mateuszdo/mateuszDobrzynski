<?php
      $url = file_get_contents("libs/json/countryBorders.geo.json");
      $arr = json_decode($url,true);
    
    /*
      foreach($arr as $value)  {
             echo $arr['features'][0]['properties']['name'];
             echo $value['features'][0]['properties']['iso_a2'];
       };
     */  
    /*
    foreach($arr as $value)  {
             echo $value['features'][0]['properties']['name'];
             echo $value['features'][0]['properties']['iso_a2'];
       }; 
    */
    foreach($arr['features'] as $value)  {
             echo $value['properties']['name'];
             echo $value['properties']['iso_a2'];
       };
?>

