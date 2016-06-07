<?php

use Pms\Entities\User;
use Pms\Entities\UserSessionManager;
use Pms\Datalayer\ProgrammeDB;

$app->group('/programme', function(){


  $this->post('/createModifyProgramme', function($request, $response){

      //$postedData = $request->getParsedBody();
      //return $response->withJson($postedData);

    try {

      $user = UserSessionManager::getUser();

      if($user->id != "-1"){

        $postedData = $request->getParsedBody();

        $programmeDB = new ProgrammeDB();
        $resultArray = $programmeDB->createModifyPrograme($postedData['programId']
                                                          , $user->id
                                                          , $postedData['programmeName']
                                                          , $postedData['programeList']
                                                         );

        $data = array('status' => "1", 'data' => $resultArray['data'], 'message' => 'success');
        return $response->withJson($resultArray);

      }

    } catch (Exception $e) {
      $data = array('status' => "-1", 'data' => "-1", 'message' => 'exceptoin in main' . $e->getMessage());
      return $response->withJson($data);
    }
  });

  $this->get('/getProgrammes', function ($request, $response) {

    try {

      $user = UserSessionManager::getUser();
      $allGetVars = $request->getQueryParams();

      if(isset($allGetVars['id']) && $user->id != "-1"){

        $programmeDB = new ProgrammeDB();

        $result = $programmeDB->getMedicationProgrammes($user->id, $allGetVars['id']);

        return $response->withJson($result);

      }

    } catch (Exception $e) {
      $data = array('status' => "-1", 'data' => "-1", 'message' => 'exception' );
      return $response->withJson($data);
    }


  });



  $this->get('/getDoctorsCheckupPrograms', function ($request, $response) {
    try {


          $user = UserSessionManager::getUser();

          if($user->id != "-1"){

          $programmeDB = new ProgrammeDB();
          $doctorsPrograms = $programmeDB->getDoctorsCheckupPrograms($user->id);
          $data = array('status' => 1, 'data' => $doctorsPrograms, 'message' => 'success');
          return $response->withJson($data);

        }else{
          $data = array('status' => 2, 'data' => "", 'message' => 'User needs to be logged in');
          return $response->withJson($data);
        }

    } catch (Exception $e) {
        $data = array('status' => "-1", 'data' => "-1", 'message' => 'exceptoin in main' . $e->getMessage());
        return $response->withJson($data);
    }

  });

  $this->get('/getProgrammeListDetails', function ($request, $response) {
    try {

        $allGetVars = $request->getQueryParams();

        if(isset($allGetVars['id'])){

          $programmeDB = new ProgrammeDB();
          $result = $programmeDB->getProgrammeListDetails($allGetVars['id']);
          return $response->withJson($result);

        }

    } catch (Exception $e) {
        $data = array('status' => "-1", 'data' => "-1", 'message' => 'exceptoin in main' . $e->getMessage());
        return $response->withJson($data);
    }

  });

});
