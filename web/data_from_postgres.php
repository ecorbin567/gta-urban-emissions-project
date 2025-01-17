<?php
    // PHP code that sends data from ert_form.js to Heroku Postgres
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

        // Query to retrieve the contents of the table
        $sql = "SELECT * FROM reports";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();

        // Fetch all rows as an associative array
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Output the results as an array
        echo json_encode($results);

        // write "row successfully appended" to Heroku logs. unfortunately this is how you have to do it
        file_put_contents("php://stderr", "Data successfully retrieved\n");
    } catch (PDOException $e) {
        // write error message to Heroku logs
        file_put_contents("php://stderr", $e->getMessage());
    }
?>