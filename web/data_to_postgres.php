<?php
    // PHP code that sends data from ert_form.js to Heroku Postgres
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

        $sql = "INSERT INTO reports (\"latitude_entries\", \"longitude_entries\", \"date_entries\", \"time_entries\", \"smellRating_entries\", \"description_entries\", \"possibleCause_entries\") VALUES (:latitude_entries, :longitude_entries, :date_entries, :time_entries, :smellRating_entries, :description_entries, :possibleCause_entries)";
        $stmt = $pdo->prepare($sql);

        // we bind parameters afterward to avoid SQL injection
        $stmt -> bindParam(':latitude_entries', $responses['lat']);
        $stmt -> bindParam(':longitude_entries', $responses['lng']);
        $stmt -> bindParam(':date_entries', $responses['date']);
        $stmt -> bindParam(':time_entries', $responses['time']);
        $stmt -> bindParam(':smellRating_entries', $responses['smell']);
        $stmt -> bindParam(':description_entries', $responses['describe']);
        $stmt -> bindParam(':possibleCause_entries', $responses['cause']);

        $stmt->execute();
        
        // write "row successfully appended" to Heroku logs. unfortunately this is how you have to do it
        file_put_contents("php://stderr", "Row successfully appended\n");
    } catch (PDOException $e) {
        // write error message to Heroku logs
        file_put_contents("php://stderr", $e->getMessage());
    }
?>
