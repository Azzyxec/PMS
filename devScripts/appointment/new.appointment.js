$(document).ready(function(){

  var appController = makeAppointmentController();
  appController.setCompleteEventHandler(function(data){
    console.log('got this' + JSON.stringify(data));
    if(data.status == 1){
      console.log('appointmetn added success fully');
      //todayAppointmentListView.newAppointmentModal.modal('hide');
      //update the location list with new values

    }else if(data.status == 2){
      console.log('timimng clash with existign appointment');
    }else if(data.status == 3){
      console.log('schedule not added or timimgs dont match');
    }
  });
  appController.init();


/*
    $(function(){

        $('#datetimepicker24').datetimepicker({
              format: 'DD/MM/YYYY'

                });
           $('#datetimepicker23').datetimepicker({
              format: 'hh:mm a'

                });
    });

    //initilizing the source typeahead
        $('#new-appointment-patients-name').typeahead({

        source: ['akhil','joseph','Agnelo','Ruban','Ronald','Sonia']
        });


    $(".feedback-Custom > i").css("right","53px !important");
    var validator = $("#book-Appointment-Form").bootstrapValidator({
        trigger:" blur",
        feedbackIcons: {
        valid: 'glyphicon glyphicon-ok ',
        invalid: 'glyphicon glyphicon-remove ',
        validating: 'glyphicon glyphicon-refresh'
    },
        fields:{
            newBookSelLocations : {
                validators : {
                    notEmpty : {
                        message : 'Please select location!'
                    }
                }

            },

            bloodgroup : {

                validators : {
                    notEmpty : {
                        message : 'please blood group is required'
                    },
                    stringLength : {
                        min : 6,
                        max : 35,
                        message : 'please dont put characters more than 6 or 35'
                    }

                }
            },
            newAppointmentDate : {
                validators : {
                    notEmpty :{
                        message : 'please select date'
                    }
                }
            }
        }
    });


  console.log('new appointment');

  $(function() {

    var model = {
      appointment:{
        locationId: 0,
        date:moment().format('DD-MM-YYYY'),
        startTimeMins: '09:00 AM',
        endTimeMins:0,
        contact:'', //contact of the patient in appointment could change
        description:'',
      },
      patient:{
        id:0,
        name:'',
        dateOfBirth:'',
        gender:0,
        height: '',
        weight:'',
        bloodGroup:'',
        contact: ''
      },
      patientList:['Azzy','Akki','Steve','Ashton'],
      locationList:[],
      appointmentTimes: [{id:10, name:'10 mins'}, {id:15, name:'15 mins'}, {id:20, name:'20 mins'}]
    };


    function mainController(){
      this.getLocationUrl = links.getLocationUrl;
      this.bookAppointmentUrl = links.bookAppointmentUrl;
    };

    mainController.prototype.getLocationList = function() {
      return model.locationList;
    };

    mainController.prototype.getAppointmentTimes = function(){
      return model.appointmentTimes;
    };

    mainController.prototype.getAppointmentModel = function () {
      return model.appointment;
    };

    mainController.prototype.getPatientModel = function () {
      return model.patient;
    };

    mainController.prototype.getPatientsList = function () {
      return model.patientList;
    };

    mainController.prototype.init = function () {

      appointmentView.init();


      //getting work locations for the doctor
      $.get(this.getLocationUrl , {})
      .done(function( response ) {
        console.log('response ' + JSON.stringify(response));
        model.locationList = response.data;
        appointmentView.render();
      });

    }

    mainController.prototype.updateModelFromview = function () {
      //getting the selected location id
      var selectedOption = appointmentView.locationSelect.find(":selected");
      var locId = selectedOption.attr('value');

      model.appointment.locationId = locId;

      model.appointment.date =  appointmentView.appointmentDate.val();

      var mStartTime = moment(appointmentView.appointmentTime.val(), "hh:mm A");

      model.appointment.startTimeMins = mStartTime.hours()*60 + mStartTime.minutes();

      var durationOption = appointmentView.appointmentDurationSelect.find(":selected");
      var endMins = durationOption.attr('value');

      model.appointment.endTimeMins = +model.appointment.startTimeMins + +endMins;
      model.appointment.contact = appointmentView.contact.val();
      model.appointment.description = appointmentView.descrip.val();

      //console.log('description ' + appointmentView.descrip.val());


      //patient properties
      model.patient.name = appointmentView.patientsName.val();
      model.patient.dateOfBirth = appointmentView.patientsDOB.val();

      if(appointmentView.rbMale.is(":checked")){
        model.patient.gender = 1;
      }else{
        model.patient.gender = 0;
      }


      model.patient.height = appointmentView.patientsHeight.val();
      model.patient.weight = appointmentView.patientsWeight.val();
      model.patient.bloodGroup = appointmentView.patientsBloodGroup.val();
      model.patient.contact = appointmentView.contact.val();

    };

    mainController.prototype.bookAppointment = function(){
      //getting work locations for the doctor

      $.post(this.bookAppointmentUrl , {appointment: model.appointment, patient: model.patient})
      .done(function( response ) {
        console.log('response ' + JSON.stringify(response));
      });
    };



    var appointmentView = {
      init: function(){
        this.locationSelect = $('#sel-locations');
        this.appointmentDate = $('#new-appointment-date');
        this.appointmentTime = $('#new-appointment-time');
        this.appointmentDurationSelect = $('#sel-appointment-duration');
        this.patientsName = $('#new-appointment-patients-name');
        this.patientsDOB = $('#book-appointment-dob');
        this.rbMale = $('#new-appointment-rb-male');
        this.rbFemale = $('#new-appointment-rb-female');
        this.patientsHeight = $('#patient-height');
        this.patientsWeight = $('#patient-weight');
        this.patientsBloodGroup = $('#patient-blood-group');
        this.contact = $('#book-appointment-contact');
        this.descrip = $('#book-appointment-description');

        this.saveButton = $('#book-appointment-button');


        //intilizing the date and time controls
        this.appointmentDate.datetimepicker({
          inline: false,
          format:'DD-MM-YYYY'
        });

        this.appointmentTime.datetimepicker({
          inline: false,
          format : "LT"
        });

        this.patientsDOB.datetimepicker({
          inline: false,
          format:'DD-MM-YYYY'
        });

        this.saveButton.click(function(){

          console.log('book appointment');
          controller.updateModelFromview();
          controller.bookAppointment();

        });

      },
      render: function(){
        console.log('render view');
        var locList = controller.getLocationList();

        //console.log(JSON.stringify(locList));
        //initilizing location list
        this.locationSelect.empty();

        this.locationSelect.append($('<option/>', {
          value: 0,
          text: 'select'
        }));

        for(var i = 0; i < locList.length; i++){

          console.log('loop');

          var option = $('<option/>', {
            value: locList[i].id,
            text: locList[i].name
          });

          this.locationSelect.append(option);

        }

        //initilizign time duration list
        var timeList = controller.getAppointmentTimes();
        this.appointmentDurationSelect.empty();

        this.appointmentDurationSelect.append($('<option/>', {
          value: 0,
          text: 'select'
        }));

        for(var i = 0; i < timeList.length; i++){

          console.log('loop');
          //make 15 mins as default option

          var option = $('<option/>', {
            value: timeList[i].id,
            text: timeList[i].name
          });

          this.appointmentDurationSelect.append(option);

        }

        this.appointmentDurationSelect.val(15);


        //initilize patients typeahead
      //  var patientsList = controller.getPatientsList();


        var appoint = controller.getAppointmentModel();

        this.appointmentDate.val(appoint.date);
        this.appointmentTime.val(appoint.startTimeMins);

        this.descrip.val(appoint.description);

      },
      renderPatientsView: function(){
        var patient = controller.getPatientModel();
        this.patientsName.val(patient.name);
        this.patientsDOB.val(patient.dateOfBirth);

        if(model.patient.gender == 1){
          this.rbMale.attr('checked', true);
          this.rbFemale.attr('checked', false);
        }else{
          this.rbMale.attr('checked', false);
          this.rbFemale.attr('checked', true);
        }

        this.patientsHeight.val(patient.height);
        this.patientsWeight.val(patient.weight);
        this.patientsBloodGroup.val(patient.bloodGroup);
        this.contact.val();

      }
    };

    var controller = new mainController();
    controller.init();


  }());
*/

});
