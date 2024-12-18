<?php
    // PHP code that gets array of dates from past_measurements.js, accesses
    // the corresponding bike survey files, and returns data corresponding to the plotted 
    // variable to past_measurements.js
    // if calibrated data is available for that date and variable, return the calibrated data

    $dates = json_decode(file_get_contents("php://input"), true);
    
    $plotvar = "";
    $result = [];
    $lat = [];
    $lng = [];
    $windspeed = [];
    $winddir = [];
    $time = [];
    
    foreach($dates as $date) {
        if ($date == $dates[0]) {
            $plotvar = $date; // the first element of dates is the variable to be plotted
        }
        else if (file_exists($date)) { // only add the dates that have corresponding files
            $temp_file = new SplFileObject($date, 'r'); // handy little trick to find the length of a file without having to use fgetcsv
            $temp_file ->seek(PHP_INT_MAX);
            $num_col = $temp_file ->key();
            
            // check if the file is calibrated. this affects which column numbers we get.
            // we open and close the file twice because fgetcsv eats up lines and we don't want that
            // to affect the data we send back to the js file
            $file = fopen($date,"r");
            $arr = [];
            while(! feof($file))
            {
                $temp_arr = fgetcsv($file, $num_col, ',', '\'', '\\');
                if ($temp_arr != false) {$arr[] = $temp_arr[6];}
            }
            fclose($file);
            $is_calibrated =  $arr[0] == "ch4cal";

            // determining which column to read
            $col = 0;
            if ($plotvar == "methane") {
                if ($is_calibrated) {$col = 6;}
                else {$col = 4;}
            }
            else if ($plotvar == "co2") {
                if ($is_calibrated) {$col = 10;}
                else {$col = 7;}
            }
            else if ($plotvar == "co") {
                if ($is_calibrated) {$col = 7;}
                else {$col = 6;}
            }
            else if ($plotvar == "h2o") {
                if ($is_calibrated) {$col = 14;}
                else {$col = 12;}
            }
            else if ($plotvar == "temp") {{$col = 3;}}
            else if ($plotvar == "pressure") {
                if ($is_calibrated) {$col = 19;}
                else {$col = 17;}
            }  
            // put data into an array called $result
            $file = fopen($date,"r");          
            $i = 0;
            while(! feof($file))
            {   
                $temp_result = fgetcsv($file, $num_col, ',', '\'', '\\');
                if($temp_result != false) {$result[] = $temp_result[$col];} // at the end of the file it will return false and screw everything up, so we have this condition
            }
            fclose($file);

            // get data we will need regardless of variable: time, latitude, longitude, wind speed and direction
            $file = fopen($date, "r");
            $i = 0;
            if ($is_calibrated) {
                $lngcol = 18;
                $latcol = 17;
                $windspeedcol = 28;
                $winddircol = 26;
            }
            else {
                $lngcol = 16;
                $latcol = 15;
                $windspeedcol = 26;
                $winddircol = 24;
            }
            while(! feof($file))
            {   
                $temp_result = fgetcsv($file, $num_col, ',', '\'', '\\');
                if($temp_result != false) {
                    $lat[] = $temp_result[$latcol];
                    $lng[] = $temp_result[$lngcol];
                    $windspeed[] = $temp_result[$windspeedcol];
                    $winddir[] = $temp_result[$winddircol];
                    $time[] = substr($temp_result[1], 0, 19);
                } // at the end of the file it will return false and screw everything up, so we have this condition
            }
            fclose($file);
        }
    }
    // squish all columns into one array
    $result = [$result, $lat, $lng, $windspeed, $winddir, $time];
    // send data out into the void
    echo(json_encode($result));
?>