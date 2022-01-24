<?php
$data = [];
$url = 'http://api.openweathermap.org/data/2.5/weather?q=Frankfurt&units=metric&lang=de&APPID=12345';
$request = remote::request($url);
if (!empty($request->content)) {
$data = json_decode($request->content, true);
} ?>
<?php if($data['cod'] == 200): ?>
 <?= round($data['main']['temp']); ?>°C /
 <?= $data['weather'][0]['description'];?>
 <?php else: ?>
<?= $data['message']; ?> 
<?php endif; ?>
