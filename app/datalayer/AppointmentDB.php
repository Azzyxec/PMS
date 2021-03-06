<?php
namespace Pms\Datalayer;

use \PDO;
use Pms\Datalayer\DBHelper;
use Pms\Entities\Appointment;


class AppointmentDB{

  public function getAppointmentInfo($appointmentId){
    try {

      $paramArray = array(
        'pappointment_id' => $appointmentId,

      );

      $statement = DBHelper::generateStatement('get_appointment_info',  $paramArray);

      $statement->execute();

      $result = $statement->fetch();

      $appointmentInfo = array();
      $appointmentInfo['date'] =  $result['appointment_date'];
      $appointmentInfo['contact'] =  $result['contact'];
      $appointmentInfo['time'] =  $result['appointment_time'];
      $appointmentInfo['patient'] =  $result['patient'];
      $appointmentInfo['doctor'] =  $result['doctor'];
      $appointmentInfo['location'] =  $result['location'];

      return $appointmentInfo;

    } catch (Exception $e) {
      return 1;
    }

  }

  public function getAppointmentsForTheDay($doctorId, $locationId, $date){
    try {

      $paramArray = array(
        'pdoctor_id' => $doctorId,
        'plocation_id' => $locationId,
        'pdate' => $date
      );

      $statement = DBHelper::generateStatement('get_appointments_for_the_day',  $paramArray);

      $statement->execute();

      $appointments = array();
      while (($result = $statement->fetch(PDO::FETCH_ASSOC)) !== false) {

        $appointment = array();
        $appointment['id'] = $result['id'];
        $appointment['contact'] = $result['contact'];
        $appointment['patientId'] = $result['fk_patient_id'];
        $appointment['name'] = $result['name'];
        $appointment['contact'] = $result['contact'];
        $appointment['startMins'] = $result['start_mins'];
        $appointment['endMins'] = $result['end_mins'];
        $appointment['description'] = $result['description'];
        $appointment['remarks'] = $result['remarks'];
        $appointment['state'] = $result['state'];
        $appointment['scheduleDayId'] = $result['fk_schedule_day_id'];
        //$appointment['isRescheduled'] = $result['is_rescheduled'];
        $appointment['locId'] = $result['loc'];

        $appointments[] = $appointment;
      }

      return $appointments;




    } catch (Exception $e) {
      return -1;
    }

  }


  public function getAllAppointments($doctorId){


      try {
            $paramArray = array(
        'pdoctor_id' => $doctorId
      );
      $statement = DBHelper::generateStatement('get_all_appointments',  $paramArray);
      $statement->execute();


      $Allappointments = array();
      while (($result = $statement->fetch(PDO::FETCH_ASSOC)) !== false) {

      $Allappointment = array();
      $Allappointment['id'] = $result['id'];
      $Allappointment['name'] = $result['name'];
      $Allappointment['patientId'] = $result['fk_patient_id'];
      $Allappointment['date'] = $result['appointment_date'];
      $Allappointment['startMins'] = $result['start_mins'];
      $Allappointment['location'] = $result['location_name'];
      $Allappointment['description'] = $result['description'];

        $Allappointments[] = $Allappointment;
      }

      return $Allappointments;

      } catch(Exception $e) {
          return -1;
      }

  }

  public function getScheduleTimingsForTheDay($doctorId, $locationId, $date){
    try {

      $paramArray = array(
        'pdoctor_id' => $doctorId,
        'plocation_id' => $locationId,
        'pdate' => $date
      );

      $statement = DBHelper::generateStatement('get_schedules_timings_for_the_day',  $paramArray);

      $statement->execute();

      $timingList = array();
      while (($result = $statement->fetch(PDO::FETCH_ASSOC)) !== false) {

        $timing = array();
        $timing['startMins'] = $result['start_time_mins'];
        $timing['endMins'] = $result['end_time_mins'];
        $timing['locId'] = $result['loc_id'];
        $timing['scheduleId'] = $result['schedule_id'];
        $timing['scheduleDayId'] = $result['id'];

        $timingList[] = $timing;
      }

      return $timingList;

    } catch (Exception $e) {
      return -1;
    }

  }

  public function checkAppointmentAvailibility($appointment, $doctorId){
    try {

      $paramArray = array(
        'pdoctor_id' => $doctorId,
        'plocation_id' => $appointment->locationId,
        'pappointment_date' => $appointment->appointmentDate,
        'pstart_time' => $appointment->startMins,
        'pend_time' => $appointment->endMins
      );
      $statmentType = "select"; //for a function call

      $statement = DBHelper::generateStatement('check_appointment_avalibility',  $paramArray, $statmentType);

      $statement->execute();

      $row = $statement->fetch();

      return $row[0];


    } catch (Exception $e) {
      return -1;
    }

  }

  public function checkNextAppointmentAvailibility($appointmentId, $ppDate, $appStartTime, $appEndTime){
    try {

      $paramArray = array(
        'pappointment_id' => $appointmentId,
        'pappointment_date' => $ppDate,
        'pstart_time' => $appStartTime,
        'pend_time' => $appEndTime
      );

      $statmentType = "select"; //for a function call

      $statement = DBHelper::generateStatement('check_next_appointment_avilibility',  $paramArray, $statmentType);

      $statement->execute();

      $row = $statement->fetch();

      return $row[0];


    } catch (Exception $e) {
      return -1;
    }

  }

  public function closeAppointment(
                                    $appointmentInfo
                                  , $prescriptionListXML
                                  , $prescriptionCount
                                  , $uploadedFileListXml
                                  , $uploadedFileCount
                                  , $loggedinUserId
                                  , $loggedinUserType){
    try {

      $paramArray = array(
        'pappointment_id' => $appointmentInfo['appointmentId'],
        'pclosing_date' => $appointmentInfo['closingDate'],
        'pclosing_time_mins' => $appointmentInfo['closingTime'],
        'premarks' => $appointmentInfo['remarks'],
        'pclosed_by_id' => $loggedinUserId,
        'pclosed_by_type' => $loggedinUserType,
        'pprescription_count' => $prescriptionCount,
        'puploaded_file_list_count' => $uploadedFileCount,
        'pprescription_xml' => $prescriptionListXML,
        'puploaded_file_list_xml' => $uploadedFileListXml
      );

      $statement = DBHelper::generateStatement('close_appointment_proc',  $paramArray);

      $statement->execute();

      $result = $statement->fetch();

      return $result['status'];

    } catch (Exception $e) {
      return -1;
    }

  }

  public function cancelAppointment($appointmentId, $remarks, $loggedinUserId, $loggedinUserType){
    try {

      $paramArray = array(
        'pappointment_id' => $appointmentId,
        'premarks' => $remarks,
        'pcancelled_by_id' => $loggedinUserId,
        'pcancelled_by_type' => $loggedinUserType
      );

      $statement = DBHelper::generateStatement('cancel_appointment',  $paramArray);

      $statement->execute();

      $result = $statement->fetch();

      return $result['status'];

    } catch (Exception $e) {
      return 1;
    }

  }

  public function insertAppointmentEntry($appointment, $doctorId, $loggedinUserId, $loggedinUserType){
    try {

      $paramArray = array(
        'pdoctor_id' => $doctorId,
        'plocation_id' => $appointment->locationId,
        'pfk_schedule_day_id' => $appointment->scheduleDayId,
        'ppatient_id' => $appointment->patientId,
        'pappointment_date' => $appointment->appointmentDate,
        'pstart_mins' => $appointment->startMins,
        'pend_mins' => $appointment->endMins,
        'pcreated_by_id' => $loggedinUserId,
        'pcreated_by_type' => $loggedinUserType,
        'pcontact' => $appointment->contact,
        'pdescription' => $appointment->description
      );

      $statement = DBHelper::generateStatement('insert_new_appointment',  $paramArray);

      $statement->execute();

      $result = $statement->fetch();

      return $result['id'];


    } catch (Exception $e) {
      return  -1;
    }
  }

  public function insertNextAppointmentEntry($appointmentId, $appointmentdate, $startMins, $endMins, $loggedinUserId, $loggedinUserType){
    try {

      $paramArray = array(
        'pappointment_id' => $appointmentId,
        'pappointment_date' => $appointmentdate,
        'pstart_mins' => $startMins,
        'pend_mins' => $endMins,
        'pcreated_by_id' => $loggedinUserId,
        'pcreated_by_type' => $loggedinUserType
      );

      $statement = DBHelper::generateStatement('insert_next_appointment',  $paramArray);

      $statement->execute();

      $result = $statement->fetch();

      if( $result['status'] == 1){
        return $result['id'];
      }else{
        return -1;
      }

    } catch (Exception $e) {
      return  -1;
    }
  }

  public function rescheduleAppointment($appointmentId, $appointmentdate, $startMins, $endMins, $loggedinUserId, $loggedinUserType, $remarks){
    try {

      $paramArray = array(
        'pappointment_id' => $appointmentId,
        'pappointment_date' => $appointmentdate,
        'pstart_mins' => $startMins,
        'pend_mins' => $endMins,
        'pcreated_by_id' => $loggedinUserId,
        'pcreated_by_type' => $loggedinUserType,
        'premarks' => $remarks
      );

      $statement = DBHelper::generateStatement('reschedule_appointment',  $paramArray);

      $statement->execute();

      $result = $statement->fetch();

      if( $result['status'] == 1){
        return $result['id'];
      }else{
        return -1;
      }

    } catch (Exception $e) {
      return  -1;
    }
  }

}
