<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

  $policies = [];
  $sql = "SELECT * FROM policies";
  if($result = mysqli_query($con,$sql)) { $i = 0;
    while($row = mysqli_fetch_assoc($result)) {
      $policies[$i]['id']    = $row['id'];
      $policies[$i]['Name'] = $row['Name'];
      $policies[$i]['UserName'] = $row['UserName'];
      $policies[$i]['Password'] = $row['Password'];
      $policies[$i]['Gender'] = $row['Gender'];
      $policies[$i]['DatOfBirth'] = $row['DatOfBirth'];
      $i++;
    }
    echo json_encode($policies);
  } else { http_response_code(404); }


