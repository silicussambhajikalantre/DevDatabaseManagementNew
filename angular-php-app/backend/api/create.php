<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if(trim($request->Name) === '')
  {
    return http_response_code(400);
  }

  // Sanitize.
  $Name = mysqli_real_escape_string($con, trim($request->Name));
  $userName = mysqli_real_escape_string($con, $request->userName);
  $Password = mysqli_real_escape_string($con, trim($request->Password));
  $Gender = mysqli_real_escape_string($con, $request->Gender);
  $DOB = mysqli_real_escape_string($con, trim($request->DOB));
  
  // Create.
  $sql = "INSERT INTO `policies`(`id`, `Name`,`UserName`,`Password`,`Gender`,`DatOfBirth`) VALUES (null,'{$Name}','{$userName}','{$Password}','{$Gender}','{$DOB}')";

  if(mysqli_query($con,$sql))
  {
    //http_response_code(201);
    $userData = [
      'Name' => $Name,
      'UserName' => $userName,
      'Password' => $Password,
      'Gender' => $Gender,
      'DatOfBirth' => $DOB,
      
    ];
    $responseToAPI = [
      'Success' => true, 
      'Secret' => "Record has been added."
    ];
    echo json_encode($responseToAPI);
  }
  else
  {
    //http_response_code(422);    
    $responseToAPI = [
      'Success' => false, 
      'Secret' => "There is an issue."
    ];
    echo json_encode($responseToAPI);
  }
} else { 
  $responseToAPI = [
    'Success' => false, 
    'Secret' => "Only Post accepted."
  ];
  echo json_encode($responseToAPI);
  } ?>