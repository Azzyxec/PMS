<?php
namespace Pms\Entities;

class Patient{
  public $id;
  public $name;
  public $dateOfBirth;
  public $bloodGroup;
  public $weight;
  public $height;
  public $gender;
  public $contact1;
  public $contact2;
  public $address;
  public $picturePath;
  public $isGuardian;
  public $guardianId;
  //public $medicalProgrammeId;

  function __construct(){
    $this->id = "-1";
  }

  public static function  getInsanceFromArray($dataAray){

    $patient = new self();
    $patient->id = $dataAray['id'];
    $patient->name = $dataAray['name'];
    $patient->dateOfBirth = $dataAray['dateOfBirth'];
    $patient->bloodGroup = $dataAray['bloodGroup'];
    $patient->weight = $dataAray['weight'];
    $patient->height = $dataAray['height'];
    $patient->gender = $dataAray['gender'];
    $patient->contact1 = $dataAray['contact1'];
    $patient->contact2 = $dataAray['contact2'];
    //$patient->email = $dataAray[''];
    $patient->address = $dataAray['address'];
    $patient->isGuardian = $dataAray['isGuardian'];
    $patient->guardianId = $dataAray['guardianId'];
    //$patient->medicalProgrammeId = $dataAray[''];

    return $patient;

  }

}
