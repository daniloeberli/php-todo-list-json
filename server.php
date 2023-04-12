<?php

$str = file_get_contents(__DIR__ . '/task.json');

$tasks = json_decode($str, true);


header("Content-Type: application/json");
echo json_encode($tasks);

?>
