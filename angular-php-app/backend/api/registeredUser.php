<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
  $request = json_decode($postdata);

  $sql = "SELECT * FROM registeredusers where UserName = '".$request->userName."' OR EmailID = '".$request->emailId."'";
  if($result = mysqli_query($con,$sql)) { 
	  $i = 0;
	  if(mysqli_num_rows($result) > 0){
      $authentication = [
        "Success" => false,
        "Message" => 'User Name or Email ID is already exist.',      
      ];
      echo json_encode($authentication);
	  }else {
          $sql ="INSERT INTO `registeredusers`(`id`, `FName`,`LName`,`EmailID`,`UserName`,`Password`, `PhoneNumber`) VALUES (NULL, '".$request->firstName."', '".$request->lastName."', '".$request->emailId."', '".$request->userName."', '".$request->password."', '".$request->phoneNumber."')";
          if(mysqli_query($con,$sql)){
            $responseToAPI = [		
              'Success' => true, 
              'Message' => "Record has been added."
            ];
            echo json_encode($responseToAPI);
          }else {
            //http_response_code(422);    
            $responseToAPI = [
              'Success' => false, 
              'Message' => "There is an issue."
            ];
            echo json_encode($responseToAPI);
          }
	  }             
} else { 
  $responseToAPI = [
    'Success' => false, 
    'Message' => "Only Post accepted."
  ];
  echo json_encode($responseToAPI);
  }
  
}?>