<?php
    // NOT IN USE. might be nice to have in case you decide to move the site off Heroku
    // PHP code that sends data from methane-enhancement-reports.csv to ert_map.js

    $rows = array_map(fn($v) => str_getcsv($v, ',', '\'', '\\'), file('methane_enhancement_reports.csv'));
    
    $header = array_shift($rows);
    
    // format the data the way we want it
    $csv = [];
    foreach($rows as $row) {
        $csv[] = array_combine($header, $row);
    }
    
    // send the data off into the void
    echo json_encode($csv);
?>