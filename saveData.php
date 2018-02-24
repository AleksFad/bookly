<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
/**
 * Created by PhpStorm.
 * User: Fadjuha
 * Date: 19.07.2016
 * Time: 17:03
 */
$config = array(
    'host' => 'localhost',
    'user' => 'fadeyeveu',
    'pass' => '',
    'db' => 'fadeyeveu_test'
);

$mysqli = new mysqli(
    $config['host'],
    $config['user'],
    $config['pass'],
    $config['db']
);

if ($mysqli->connect_error) echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
$mysqli->query("SET NAMES 'UTF8'");

$sql = '
INSERT INTO contact_table 
(`Package`,`Name`, `Surname`, `Email`, `Username`, `Company_name`, `Company_regnum`, `Password`, `Password_repeat`)
VALUES 
("'.$_POST['Package'].'","'.$_POST['Name'].'","'.$_POST['Surname'].'","'.$_POST['Email'].'","'.$_POST['Username'].'","'.$_POST['Company_name'].'","'.$_POST['Company_regnum'].'","'.$_POST['Password'].'","'.$_POST['Password_repeat'].'")
';

if ($mysqli->query($sql) === TRUE) {
    echo "Your record was sucessfully added";
} else{
    echo "Error: " . $sql ."<br>" . $mysqli->error;
}

$mysqli->close();
?>
