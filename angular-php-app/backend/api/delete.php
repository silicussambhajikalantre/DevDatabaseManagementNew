<?php

require 'database.php';

// Extract, validate and sanitize the id.
$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id']) : false;

if(!$id)
{
  return http_response_code(400);
}

if($id) {

// Delete.
$sql = "DELETE FROM `policies` WHERE `id` ='{$id}' LIMIT 1";
if(mysqli_query($con, $sql)) {  
  $responseToAPI = [
    'Success' => true, 
    'Secret' => "Record has been deleted."
  ];
  echo json_encode($responseToAPI);
  //http_response_code(204);  
} else { 
$responseToAPI = [
  'Success' => false, 
  'Secret' => "There is some issue, so record has not deleted"
];
echo json_encode($responseToAPI);
//return http_response_code(422);
}

}