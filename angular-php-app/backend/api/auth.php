<?php
/**
 * Returns the list of policies.
 */
require 'database.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)) {
$request = json_decode($postdata);
  $sql = "SELECT * FROM registeredusers where UserName = '".$request->email."' AND Password = '".$request->password."'";
  if($result = mysqli_query($con,$sql)) { 
	  $i = 0;
	  if(mysqli_num_rows($result) > 0){
		while($row = mysqli_fetch_assoc($result)) {
		//   $policies[$i]['id']    = $row['id'];
			$FName = $row['FName'];
			$LName = $row['LName'];
			$EmailID = $row['EmailID'];
			$UserName = $row['UserName'];
		//   $policies[$i]['UserName'] = $row['UserName'];
		//   $policies[$i]['Password'] = $row['Password'];
		//   $policies[$i]['Gender'] = $row['Gender'];
		//   $policies[$i]['DatOfBirth'] = $row['DatOfBirth'];
		  $i++;
		}
		$authentication = [
			"Success" => true,
			"Message" => 'Logged in successfully.',
            "FName" => $FName.' '.$LName,			
			"EmailID" => $EmailID,
			"UserName" => $UserName             
		];
	  }else {
		$authentication = [
			"Success" => false,
			"Message" => 'Please enter valid credentials.',			
		];
	  } 
		echo json_encode($authentication);
  } else { 	
	//http_response_code(404); 
	$authentication = [
		"Success" => false,
		"Message" => 'There is connection issue.'
	];
	echo json_encode($authentication);
	}
}else {
	$authentication = [
		"Success" => false,
		"Message" => 'Only post data accepted.'
	];
	  echo json_encode($authentication);
}