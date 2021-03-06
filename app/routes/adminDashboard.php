<?php
use Pms\Datalayer\DoctorDB;

//Admin group
$app->group('/adminDashboard', function(){

  $this->get('/admin', function ($request, $response) {
    return $this->view->render($response, '/admin/doctor-listing.html',
                        array('basePath' => AppConfig::$basePath,
                              'active' => "doctors",
                              'addOverlay' => true));
  })->setName('adminDashboard');

  $this->get('/doctorListing', function ($request, $response) {
      return $this->view->render($response, '/admin/doctor-listing.html',
                          array('basePath' => AppConfig::$basePath, 'active' => "doctors", 'addOverlay' => true));
  });




  $this->get('/getAllDoctors', function ($request, $response) {
    try {

      $doctorDB = new DoctorDB();
      $queryResult = $doctorDB->getAllDoctors();

      $data = array('status' => "1", 'data' => $queryResult['data'], 'message' => 'success' );
      return $response->withJson($data);

    } catch (Exception $e) {
      $data = array('status' => "-1", 'data' => "-1", 'message' => 'exception' );
      return $response->withJson($data);
    }

  });

  $this->get('/adminDoctorEdit', function ($request, $response) {
      return $this->view->render($response, '/admin/doctor-edit.html',
                                                                array('basePath' => AppConfig::$basePath
                                                                      , 'active' => "doctors"
                                                                      , 'showActiveContol' => "true"
                                                                      , 'title' => "Update Doctor"
                                                                      , 'addOverlay' => true
                                                                     ));
  });


})->add('Pms\Middleware\AuthenticateMiddleware:redirectNonLogin');
//Admin group
