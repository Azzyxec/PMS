<?php
namespace Pms\Entities;

class Appointment{
  public $id;
  public $locationId;
  public $scheduleDayId;
  public $patientId;
  public $contact;
  public $appointmentDate;
  public $startMins;
  public $endMins;
  public $description;
}
