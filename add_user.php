
<?php
	$user = "bagyi";
	$pass = "1234";
    try {
		$dbh = new PDO ('mysql:host=localhost;dbname=Customers',$user,$pass);
		$first_name = $_POST['firstname'];
		$last_name = $_POST['lastname'];
		echo '<pr> You input first name as ' . $first_name . '</pr> <br>';
		echo '<pr> Last name as ' . $last_name . '</pr> <br>';
		
		
		
		
	} catch(PDOException $e) {
		print "Error!: ". $e->getMessage() . "<br/>";
		die();
		
	}
?>