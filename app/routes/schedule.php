<?php

use Pms\Entities\User;
use Pms\Entities\UserSessionManager;
use Pms\Datalayer\ScheduleDB;
use Pms\Utilities\XMLHelper;

$app->group('/schedule', function(){

  // schedule functions
  $this->post('/createUpdateSchedule', function ($request, $response) {

    try {

      $user = UserSessionManager::getUser();

      $postedData = $request->getParsedBody();
      //return $response->withJson($postedData);

     /*
      $doctorId = $user->doctorId;
      $startDate = $postedData['startDate'];
      $endDate = $postedData['endDate'];
      $locId = $postedData['selectedLocation']['id'];
      $scheduleCount = $postedData['scheduleDaysCount'];

      //converting schedule list to xml
      $xml_data = new \SimpleXMLElement('<?xml version="1.0"?><schedules></schedules>');
      XMLHelper::array_to_xml($postedData['scheduleList'], $xml_data);
      $scheduleListXML = $xml_data->asXML();

      $userId = $user->id;
      $userType = $user->type;
*/

      $doctorId = $user->doctorId;
      $startDate = $postedData['startDate'];  //start date is going as null
      $endDate = $postedData['endDate'];
      $locId = $postedData['selectedLocation']['id'];
      $scheduleCount = $postedData['scheduleDaysCount'];

      //converting schedule list to xml
      $xml_data = new \SimpleXMLElement('<?xml version="1.0"?><schedules></schedules>');
      XMLHelper::array_to_xml($postedData['scheduleList'], $xml_data);
      $scheduleListXML = $xml_data->asXML();

      $userId = $user->id;
      $userType = $user->type;

      $scheduleDB = new ScheduleDB();
      $result = $scheduleDB->persistSchedule($doctorId, $startDate, $endDate, $locId, $scheduleCount, $scheduleListXML, $userId, $userType);


      $data = array('status' => $result['status'], 'data' => $postedData, 'message' => 'success' );
      return $response->withJson($data);



    } catch (Exception $e) {
      $data = array('status' => "-1", 'data' => "-1", 'message' => 'something is not right in controller' . $e->getMessage() );
      return $response->withJson($data);
    }



    /*
    $user = UserSessionManager::getUser();

    if($user->id != "-1"){

      $postedData = $request->getParsedBody();

      $scheduleDB = new ScheduleDB();
      $arrayCopy = $postedData;
      $arrayCopy['userId'] =  $user->id;
      $resultArray = $scheduleDB->persistSchedule($arrayCopy);

      return $response->withJson($resultArray);

    }else{

      $data = array('status' => "-1", 'data' => "-1", 'message' => 'exception' );
      return $response->withJson($data);

    }
    */
  });

  $this->get('/getScheduleList', function ($request, $response) {

    try {

      $user = UserSessionManager::getUser();

      if($user->id != "-1"){

        $scheduleDB = new ScheduleDB();

        $scheduleResponse = $scheduleDB->getScheduleList($user->id);

        return $response->withJson($scheduleResponse);

      }

    } catch (Exception $e) {
      $data = array('status' => "-1", 'data' => "-1", 'message' => 'something is not right in controller' );
      return $response->withJson($data);
    }


  });

  $this->get('/getCalanderDetails', function ($request, $response) {
    try {

      $user = UserSessionManager::getUser();

      if($user->id != "-1"){

        $doctorId = $user->doctorId;
        $locaionId = 12;
        $startDate = '01-05-2016';
        $endDate = '31-06-2016';

        $scheduleDB = new ScheduleDB();
        $scheduleResponse = $scheduleDB->getCalanderDetails($doctorId, $locaionId, $startDate, $endDate);

        return $response->withJson($scheduleResponse['data']);

      }

    } catch (Exception $e) {
      $data = array('status' => "-1", 'data' => "-1", 'message' => 'something is not right in controller' );
      return $response->withJson($data);
    }

  });


});
