<?php
    // PHP code that sends data from form.js to methane-enhancement-reports.csv

    $data = json_decode(file_get_contents("php://input"), true);

    $filename = 'methane_enhancement_reports.csv';
    $f = fopen($filename, 'a+');
    if ($f === false) {
        die('Error opening the file ' . $filename);
    }

    // fputcsv makes you put in all the default values or else it freaks out about "no escape parameter"
    fputcsv($f, $data, ",", "\"", "\\", "\n");

    // close the file
    fclose($f);
?>