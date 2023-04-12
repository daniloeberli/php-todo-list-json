<?php

$str = file_get_contents(__DIR__ . '/task.json');
$tasks = json_decode($str, true);


if(isset($_POST['newTask'])){
    $new_task = $_POST['newTask'];

    $todo[] = [
        'text'=> $new_task,
        'done'=>false
    ]; 

    file_put_contents(__DIR__ . '/task.json', json_encode($todo));
}


header("Content-Type: application/json");
echo json_encode($tasks);

?>
