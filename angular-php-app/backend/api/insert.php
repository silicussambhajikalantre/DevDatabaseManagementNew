<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Create.
  $sql = "INSERT INTO `users`(`id`, `yourName`,`yourEmail`,`userName`,`gender`,`password`) VALUES (null,'{$request->yourName}','{$request->yourEmail}','{$request->userName}','{$request->gender}','{$request->password}')";

  if(mysqli_query($con,$sql))
  {
    //http_response_code(201);
    $responseToAPI = [
		
      'Success' => true, 
      'Message' => "Record has been added."
    ];
    echo json_encode($responseToAPI);
  }
  else
  {
    //http_response_code(422);    
    $responseToAPI = [
      'Success' => false, 
      'Message' => "There is an issue."
    ];
    echo json_encode($responseToAPI);
  }
} else { 
  $responseToAPI = [
    'Success' => false, 
    'Message' => "Only Post accepted."
  ];
  echo json_encode($responseToAPI);
  } ?>