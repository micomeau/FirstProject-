<?php
    $object = ['Name' => 'asd', 'Link' => 'https://www.youtube.com/', 'data' => ['Key1' => 'Value1', 'Key2' => 'Value2', 'Key3' => 'Value3']];
    header("content-type: application/json");
    echo json_encode($object); 
?>

