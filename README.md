# gta-urban-emissions-project #
### [gtamethane.org](https://gtamethane.org/) ###

An updated website for the GTA Urban Emissions Project. Created by Elise Corbin.

This website was created for ENV491 at the University of Toronto in Fall 2024. Special thanks to Profs. Robert Soden and Debra Wunch, without whose supervision and feedback this project would not exist.

This website's Emissions Cluster Map page uses Juliette Lavoie, Michael Raczkowski, and Atlas Changulani's Gaussian cluster algorithm, created for the original project website. For more information about the Gaussian cluster algorithm, visit ./GTA-Emissions-Gaussian-Clusters-Updated-main/README.md.

The original GTA Urban Emissions Project website can be found here: https://www.atmosp.physics.utoronto.ca/GTA-Emissions/About/index.html. The github code can be found here: https://github.com/WunchLab/gta-emissions-webpage/blob/master/README.md. This website was created and edited in 2017 by Colin Arrowsmith, Sajjan Heerah, and Prof. Debra Wunch.

### TO DO (for Wunch lab members viewing and maintaining this code): ###
* Include the code that displays live data in ./live_measurements.js.
* Add information about lab funding to "About" page.
* If new bike survey data is available, deposit it in the folder ./GTA-Emissions-Gaussian-Clusters-Updated-main/dataBike and **make sure each filename is of the form 'sync_data_YYYY-MM-DD.csv'**.
* Do NOT add data from before 2017. The CSV files are formatted differently and the plotting will not work.
* If you wish to update the Gaussian clusters with new bike survey data, visit ./GTA-Emissions-Gaussian-Clusters-Updated-main/README.md. (When this is done, please modify the code of
cluster_map.js to make the sizes of the circles on the emissions cluster map vary depending on the size of the enhancement they represent.)

### Setup ###
* This website is currently live at gtamethane.org and automatically updated via this repository.
* The site is live via Heroku and citizen emissions reports are stored using Heroku Postgres.
* If you want to run this website remotely, note that it must be run on a server with PHP capabilities. You must also use the files in the not_in_use folder instead of data_from_postgres.php and data_to_postgres.php.
* If you have VSCode, you can download this repository and run it using the PHP Server package.
* Otherwise, find an equivalent server for your IDE.

### Dependencies ###
* All dependencies, except PHP, are linked to in the HTML pages.

### What's in this repository? ###
All of the following refers to the /web folder. The rest of the repository has to do with the live app deployment.
### Folders ###
* GTA-Emissions-Gaussian-Clusters-Updated-main: See ./GTA-Emissions-Gaussian-Clusters-Updated-main/README.md.
* images: All the static images displayed on the site.
* max_min_values: Excel spreadsheets with the 2.5th and 97.5th percentiles of data from each plotted variable on the past measurements map. This helps calculate what colour each data point will be. More information can be found in ./past_measurements.js.
* not_in_use: Files that pertain to storing citizen emissions reports data in a CSV file. These files
are not currently in use because Heroku Postgres is used instead, but if the website is moved away from
Heroku at some point, you may need these files as a backup method of storing data.
### HTML pages ###
* index.html: The home page. Serves as an introduction to the website and what users can find on it.
* about.html: The About page. Gives technical and background information about the project. The "Funding" section is unpopulated, so if you have that information, please add it.
* live-measurements.html: The Live Measurements page. Displays bike survey data that is currently being collected.
* past-measurements.html: The Past Measurements page. Displays bike survey data from the past, from 2018 to 2023. (2024 still needs to be added.)
* emissions-cluster-map.html: The Emissions Cluster Map page. Displays the Gaussian Clusters of bike survey data.
* emissions-reporting-tool-map.html: The Emissions Reporting Tool Map page. Displays reports submitted via the Submit an Emissions Report page.
* about-the-ert.html: The About the ERT page. Gives background information about the new Emissions Reporting Tool, what it is for, and what users can expect from the tool.
* submit-an-emissions-report.html: The Submit an Emissions Report page. Allows users to report methane enhancements in their area based on smell.
* submit-a-cause-report.html: The Submit a Cause Report page. An embedded Jotform that allows users to report possible causes of emissions in their area.
### JS files ###
* live_measurements.js: Displays the Live Measurements map. The code that actually displays live data is not available to me, so if it is available to you, please add it.
* past_measurements.js: Displays the Past Measurements map. Interacts with dates_to_from_csv.php. Some of the code is taken from the original website's past measurements map code.
* cluster_map.js: Displays the Gaussian cluster map. Mostly copied from the original Gaussian Clusters repository.
* ert_map.js: Displays the Emissions Reporting Tool map. Interacts with data_from_csv.php.
* ert_form.js: Collects form responses from the Submit an Emissions Report page. Interacts with data_to_csv.php.
### PHP files ###
* data_to_postgres.php: Sends data from ert_form.js to Heroku Postgres.
* data_to_postgres.php: Sends data from Heroku Postgres to ert_map.js.
* dates_to_from_csv.php: Gets array of dates from past_measurements.js, accesses the corresponding bike survey files, and returns data corresponding to the plotted variable to past_measurements.js. If calibrated data is available for that date and variable, returns the calibrated data.
### Other files ###
* style.css: The CSS style sheet for the entire website.
* README.md: You are here!

### Questions? ###
Contact me at elise.corbin@mail.utoronto.ca.

