<?php

$str = file_get_contents('task.json');

$tasks = json_decode($str, true);


var_dump($tasks);

?>