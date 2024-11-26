<?php

    $data = json_decode(file_get_contents("php://input"), true);

    $filename = 'methane-enhancement-reports.csv';
    $f = fopen($filename, 'a+');
    if ($f === false) {
        die('Error opening the file ' . $filename);
    }

    fputcsv($f, $data, ",", "\"", "\\", "\n");

    // close the file
    fclose($f);
?>