<?php
    // Get data from ert_form.js
    $responses = json_decode(file_get_contents("php://input"), true);

    // Get the database URL from Heroku's environment variables
    $databaseUrl = getenv('DATABASE_URL');

    if (!$databaseUrl) {
        die("DATABASE_URL environment variable is not set.");
    }

    // Parse the database URL
    $dbopts = parse_url($databaseUrl);

    // Database connection details
    $host = $dbopts["host"];
    $port = $dbopts["port"];
    $user = $dbopts["user"];
    $password = $dbopts["pass"];
    $dbname = ltrim($dbopts["path"], '/');

    // Establish a connection to the PostgreSQL database
    $dsn = "pgsql:host=$host;port=$port;dbname=$dbname";
    try {
        $pdo = new PDO($dsn, $user, $password, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        ]);

        $sql = "INSERT INTO reports (_Latitude, _Longitude, _Date, _Time, _SmellRating, _Description, _Possible Cause) VALUES (:_Latitude, :_Longitude, :_Date, :_Time, :_SmellRating, :_Description, :_Possible Cause)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            '_Latitude' => $responses['lat'],
            '_Longitude' => $responses['lng'],
            '_Date' => $responses['date'],
            '_Time' => $responses['time'],
            '_SmellRating' => $responses['smell'],
            '_Description' => $responses['describe'],
            '_Possible Cause' => $responses['cause']
        ]);
        
        file_put_contents("php://stderr", "Row successfully appended\n");
    } catch (PDOException $e) {
        file_put_contents("php://stderr", $e->getMessage());
        die("Error: " . $e->getMessage());
    }
?>
