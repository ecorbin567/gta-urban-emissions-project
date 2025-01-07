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

        // Define the table and data to append
        $tableName = 'reports'; // Replace with your table name
        $data = [
            'Latitude' => $responses[0], // Replace column names and values with your data
            'Longitude' => $responses[1],
            'Date' => $responses[2],
            'Time' => $responses[3],
            'Smell Rating' => $responses[4],
            'Description' => $responses[5],
            'Possible Cause' => $responses[6]
        ];

        // Prepare the SQL query for inserting data
        $columns = implode(", ", array_keys($data));
        $placeholders = ":" . implode(", :", array_keys($data));
        $sql = "INSERT INTO $tableName ($columns) VALUES ($placeholders)";

        // Prepare and execute the statement
        $stmt = $pdo->prepare($sql);
        $stmt->execute($data);

        // echo "Row successfully appended to $tableName.";
    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }
?>
