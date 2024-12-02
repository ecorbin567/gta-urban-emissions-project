<?php
    $rows = array_map(fn($v) => str_getcsv($v, ',', '\'', '\\'), file('methane-enhancement-reports.csv'));
    $header = array_shift($rows);
    $csv    = [];
    foreach($rows as $row) {
        $csv[] = array_combine($header, $row);
    }
    echo json_encode($csv);
?>