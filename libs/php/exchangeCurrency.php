
<?php
function convertCurrency($amount,$from_currency,$to_currency){
  $apikey = '7ba9c15e9588ef5a55dc';

  $amount = $_REQUEST['amount'];
  $from_Currency = urlencode($_REQUEST['from']);
  $to_Currency = urlencode($_REQUEST['to']);
  $query =  "{$from_Currency}_{$to_Currency}";

  // change to the free URL if you're using the free version
  $json = file_get_contents("https://free.currconv.com/api/v7/convert?q={$query}&compact=ultra&apiKey={$apikey}");
  $obj = json_decode($json, true);

  $val = floatval($obj["$query"]);


  $total = $val * $amount;
  return number_format($total, 2, '.', '');
}


echo convertCurrency($amount,$from_currency,$to_currency);
?>
