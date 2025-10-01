<!DOCTYPE html>
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

function printCPUSubStr($start, $finish){
    $cpuinfo_test = file_get_contents('/proc/cpuinfo');
    if ($cpuinfo_test === false) {
        echo "<br>Error reading /proc/cpuinfo! Check permissions.";
    } else {
        echo htmlspecialchars(substr($cpuinfo_test, $x, $y));
    }
}

function vcgenCommands($command){
$output_array = []; // Initialize array for exec
$return_var = null; // Initialize return var
$vcgen_test = exec('vcgencmd ' . $command . ' 2>&1' . ' | grep -oP "=[0-9]+" | cut -d"=" -f2' , $output_array, $return_var);
if ($return_var !== 0) {
    echo "<br>Error executing vcgencmd! Return code: " . $return_var . ". Output: " . htmlspecialchars(implode("\n", $output_array));
    $path_check = shell_exec('sudo -u www-data which vcgencmd 2>&1');
    echo "<br>vcgencmd path check: " . htmlspecialchars($path_check);
} else {
    echo htmlspecialchars($vcgen_test);
}
}


?>
<html>
    <head>
        <title>Server Statistics</title>
        <link rel="stylesheet" href="styles.css">
        <meta name="author" content="Noah Kivett">
        <meta name="keyword" content="HTML, CSU, CSS, PHP, Raspberry Pi, Webserver">
        <meta name="description" content="A php application to describe the webserver internals">
        <meta http-equiv="refresh" content="60">
    </head>

    <body>
        <header>
            <span>
                <a href="index.php"><img src="/pictures/icons8-growth-64.png" width="30" alt="Homepage"></a>
                <table>
                    <td><a class="header_link" href="index.php">Home</a></td>
                    <td><a class="header_link" href="work.php">Past Experience</a></td>
                    <td><a class="header_link" href="photos.php">Games</a></td>
                    <td><a class="header_link" href="pimonitor.php">Server Statistics</a></td>
                </table>
            </span>
        </header>
        <div class="centered-panel">
            <div class="information">
                <h2>Raspbery Pi Webserver Statistics</h2>
                    <table>
                        <tr>
                            <td class="identifier">CPU Clock</td>
                            <td>
                                <?php vcgenCommands('measure_clock arm', ''); 
                                echo " Hz";
                                ?>
                            </td>
                        </tr>
                        <tr>
                            <td class="identifier">CPU Temp</td>
                            <td class="data">
                                <?php vcgenCommands("measure_temp");
                                    echo " `C";
                                ?>
                            </td>
                        </tr>
                        <tr>
                            <td class="identifier">CPU Voltage</td>
                            <td>
                                <?php vcgenCommands("measure_volts core"); 
                                    echo " V";
                                ?>
                            </td>
                        </tr>
                        <tr>
                            <td class="identifier">RAM Space</td>
                            <td>
                                <?php $output = vcgenCommands("get_mem arm");
                                    echo " Mb";
                                ?>
                            </td>
                        </tr>
                        <tr>
                            <td class="identifier">Space Used</td>
                            <td>
                                <?php echo shell_exec('df -h / --output=pcent | grep "[0-9][0-9]%"');?>
                            </td>
                        </tr>
                        <tr>
                            <td class="identifier">Uptime</td>
                            <td>
                                <?php echo shell_exec('uptime -p');?>
                            </td>
                        </tr>
                    </table>
                <p>This Table is created using PHP and vcgencmd system calls.<br>The table updates statically each time the page is refreshed.<br>This is also done automatically each 60s<br>Ouputs are cleaned using grep on the vcgencmd output</p>

            </div>
        </div>
        

    </body>
        <footer>
            <table class="footer-links">
                <td>
                    <a href="https://github.com/nkiv"><img src="/pictures/icons8-github-100.png" alt="github" width="30" height="30"></a>
                </td>
                <td>
                    <a href="../files/NoahKivettResume.pdf" Download><img src="/pictures/icons8-file-100.png" alt="resume" width="30" height="30"></a>
                </td>
                <td>
                    <a href="mailto:code@nkivett.com"><img src="/pictures/icons8-email-96.png" alt="email me" width="30" height="30"></a>
                </td>
                <td>
                    <p class="sub-footer">Icons by <a href="https://icons8.com/">Icons8</a></p>
                </td>
            </table>
        </footer>
</html>
