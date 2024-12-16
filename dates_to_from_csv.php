<?php
    // PHP code that gets array of dates from past_measurements.js, accesses
    // the corresponding bike survey files, and returns them to past_measurements.js

    $dates = json_decode(file_get_contents("php://input"), true);
    
    $rows = [];
    // headers may be different because calibrated files have extra variables
    $headers = [];
    // only add the dates that have corresponding files
    foreach($dates as $date) {
        if (file_exists($date)) {
            $temp_rows = array_map(fn($v) => str_getcsv($v, ',', '\'', '\\'), file($date));
            array_push($headers, array_shift($temp_rows));
            array_push($rows, $temp_rows);
        }
    }

    // format the data the way we want it
    $csv = []; 
    $i = 0;
    foreach ($rows as $row) {
        $header = $headers[$i];
        foreach($row as $str) {
            $csv[] = array_combine($header, $str);
        }
        $i = $i + 1;
    }
    
    // send the data off into the void
    echo json_encode($csv);
?>