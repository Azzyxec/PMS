//helper function to get the url query parameters
var utility = {
  getURLParam: function(name){
    var url = window.location.href;

    name = name.replace(/[\[\]]/g, "\\$&");

    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);

    if (!results) return null;
    if (!results[2]) return '';

    return decodeURIComponent(results[2].replace(/\+/g, " "));
  },
  getTimeMinutesArray:  function(){

  }
}

var links = {

  //login js urls
   authenticateUrl : "index.php/authenticate/authenitcateUser",
   successRedirectUrl : "index.php/doctorDashboard/",
   registerDoctorUrl : "index.php/doctor/doctorInfo",
   adminUrl:"index.php/adminDashboard/admin",

   //admin related
   doctorListingUrl: "index.php/adminDashboard/doctorListing",
 
   logoutUrl : "index.php/authenticate/logout",

   //doctor dashboard links
   doctorProfile : "index.php/doctorDashboard/doctorProfile",
   dashboardHomeUrl : "index.php/doctorDashboard/",
   newAppointmentUrl : "index.php/doctorDashboard/bookAppointment",
   patientsEntryUrl : "index.php/doctorDashboard/patientsEntry",
   patientsListingUrl : "index.php/doctorDashboard/patientsListing",
   closeAppointmentUrl : "index.php/doctorDashboard/closeAppointment",
   doctorsAppointmentsListUrl : "index.php/doctorDashboard/listAppointment",
   newScheduleUrl : "index.php/doctorDashboard/newSchedule",
   listScheduleUrl : "index.php/doctorDashboard/scheduleList",
   addStaffUrl : "index.php/doctorDashboard/staffEntry",
   doctorsStaffListingUr : "index.php/doctorDashboard/staffListing",
   patientsHistoryUrl : "index.php/doctorDashboard/patientHistory",
   createProgramForPatientUrl : "index.php/doctorDashboard/createMedicalProgram",
   programmeListingsUrl : "index.php/doctorDashboard/programmeList",
   ManageLocationsUrl : "index.php/doctorDashboard/workLocationManagement",
   getCalenderUrl : "index.php/doctorDashboard/calendarTemplate",
    
     
   //schedule
   getLocationUrl: "index.php/locations/getDoctorLocations",
   createUpdateScheduleUrl: "index.php/schedule/createUpdateSchedule",

   //programme
   programmeListUrl:"index.php/programme/getMedicationProgrammeList",
   programmeEditUrl:"index.php/doctorDashboard/createMedicalProgram",
   createModifyProgrammeUrl:"index.php/programme/createModifyProgramme",
   getProgrammeUrl:"index.php/programme/getProgrammes",


   //patient
   patientDetailPersistUrl:"index.php/patient/addUpdatePatient",
   patientsDetailsUrl:"index.php/patient/getPatientDetails",
   loginCheckUrl:"index.php/authenticate/isLoggedIn",
   getProgrammeList:"index.php/programme/getMedicationProgrammeList",
   programmeListDetailsUrl:"index.php/programme/getProgrammeListDetails",
   patientsProgrammesUrl:"index.php/programme/getPatientProgrammes",
   patientListingUrl:"index.php/patient/getPatientList",

   saveUpdateLocations:"index.php/locations/addUpdateLocation",
   locationListUrl:"index.php/locations/getDoctorLocations",


   //registartion
   doctorUrl:"index.php/doctor/saveUpdateDoctor",
   doctorDetailsUrl:"index.php/doctor/getDoctorDetails",
   loginCheckUrl:"index.php/authenticate/isLoggedIn",
   doctorDashUrl:"index.php/doctorDashboard/",
   logoutUrl:"index.php/authenticate/logout",

   createModifyStaffUrl:"index.php/staff/createModifyStaff",
   getStaffDetailsUrl: "index.php/staff/getStaffDetails",
   staffListingUrl: "index.php/staff/getDoctorsStaffList"

}

$(document).ready(function(){

    //defining the helper functions in global

    $(function(){

      console.log('Doctor Dashboard js loaded');

          //top level controller
      var controller = {
        init: function(){
          //wiring the navigation
          this.logoutUrl = links.logoutUrl;
          this.doctorProfile = links.doctorProfile;
          this.dashboardHomeUrl = links.dashboardHomeUrl;
          this.newAppointmentUrl = links.newAppointmentUrl;
          this.patientsEntryUrl = links.patientsEntryUrl;
          this.patientsListingUrl = links.patientsListingUrl;
          this.closeAppointmentUrl = links.closeAppointmentUrl;
          this.doctorsAppointmentsListUrl = links.doctorsAppointmentsListUrl;

          this.newScheduleUrl = links.newScheduleUrl;
          this.listScheduleUrl = this.listScheduleUrl;
          this.addStaffUrl = links.addStaffUrl;
          this.doctorsStaffListingUr = links.doctorsStaffListingUr;

          this.patientsHistoryUrl = links.patientsHistoryUrl;

          this.createProgramForPatientUrl = links.createProgramForPatientUrl ;
          this.programmeListingsUrl = links.programmeListingsUrl;

          this.ManageLocationsUrl = links.ManageLocationsUrl;
          this.CalendarTemplateUrl = links.getCalenderUrl;

          //do somethng about doctors info and registration

          //The url from the browser  can be compared to set the active navigation
          navView.init();

        }
      };

      var navView = {
        init: function(){

          //wiring the navigation clicks


          $("#pms-brand-btn-link").click(function(e){
              e.preventDefault();
              console.log('PMS brand click');

          });



          $("#btn-programme-section-link").click(function(e){
                  e.preventDefault();

          });

            $("#create-program-for-patient-section").click(function(e){
                    e.preventDefault();
            console.log('create program for patient');
            window.location.href = controller.createProgramForPatientUrl;
            });

            $("#btn-manage-locations").click(function(e){
                    e.preventDefault();
            console.log('manage locations');
            window.location.href = controller.ManageLocationsUrl;
            });



            $("#btn-list-program-section").click(function(e){
              e.preventDefault();
              window.location.href = controller.programmeListingsUrl;
            });



            $("#patients-entry-create-section-link-Btn").click(function(e){
              e.preventDefault();
              console.log('patients Entryclick');
              window.location.href = controller.patientsEntryUrl;
            });

          $("#patients-entry-list-section-link-Btn").click(function(e){
            e.preventDefault();
            console.log('patients listing click');
            window.location.href = controller.patientsListingUrl;
          });

          $("#user-Profile-Btn-Link").click(function(e){
              e.preventDefault();
              console.log('user profile click');
              window.location.href = controller.doctorProfile;

          });

          $("#doctor-dash-logout-btn").click(function(e){
            e.preventDefault();
            console.log('logout click');
            window.location.href = controller.logoutUrl;
          });

          $("#dashboard-Section-Btn").click(function(e){
              e.preventDefault();
              window.location.href = controller.dashboardHomeUrl;
              console.log('dashboard click');
          });

          $("#book-Appointments-Section-Btn").click(function(e){
              e.preventDefault();
              window.location.href = controller.newAppointmentUrl;
          });

          $("#close-Book-Appointment-Section-Link-Btn").click(function(e){
                e.preventDefault();
                window.location.href = controller.closeAppointmentUrl;
          });

          $("#view-Appointment-Section-Link-Btn").click(function(e){
                e.preventDefault();
                window.location.href = controller.doctorsAppointmentsListUrl;
          });


          $("#manage-Doctors-Schedule-Section-Link-Btn").click(function(e){
              e.preventDefault();
              console.log('schedule click');
          });

          $("#manage-schedule-create-section-link-Btn").click(function(e){
              e.preventDefault();
              console.log('new schedule click');
              window.location.href = controller.newScheduleUrl;
          });

          $("#manage-schedule-list-section-link-Btn").click(function(e){
              e.preventDefault();
              console.log('schedule list click');
              window.location.href = controller.listScheduleUrl;
          });


           $("#add-Staff-Section-Link-Btn").click(function(e){
               e.preventDefault();
               window.location.href = controller.addStaffUrl;
           });

           $("#btn-staff-listing").click(function(e){
                e.preventDefault();
                window.location.href = controller.doctorsStaffListingUr;
           });
             
            $("#calendar-Template-Btn-Link").click(function(e){
                e.preventDefault();
                window.location.href = controller.CalendarTemplateUrl;
               console.log("hello hid"); 
            });

           $("#patients-History-Section-Link-Btn").click(function(e){
               e.preventDefault();
               window.location.href = controller.patientsHistoryUrl;
           });

        },
        render: function(){
          //highlight the right navigation
        }
      }

    controller.init();

  }());

});

$(document).ready(function(){

    $(function(){

        console.log('add staff js loaded');
    var model = {
      locations:[],
      staff:{
         id:0,
         firstName:"",
         lastName:"",
         contact1:"",
         contact2:"",
         email:"",
         address:"",
         userName:"",
         pasword:"",
         recoveryContact:"",
         recoveryEmail:"",
         locationId:0,
         isActive:0
      }
  }

    var controller = {
      init: function(){
        this.getLocationsUrl = links.locationListUrl;
        this.createModifyStaffUrl = links.createModifyStaffUrl;
        this.getStaffDetailsUrl = links.getStaffDetailsUrl;

        CreateUpdateView.init();

        $.get(this.getLocationsUrl , {})
         .done(function( response ) {
           console.log('locs ' + JSON.stringify(response));
           model.locations = response.data;
           CreateUpdateView.render();


           var staffId = utility.getURLParam('id');

           if(staffId){
             console.log(staffId);
             controller.updateStaffModelFromServer(staffId);
             CreateUpdateView.render();
           }


         });

      },
      getLocationList: function(){
        return model.locations;
      },
      getStaffModel: function(){
        return model.staff;
      },
      updateStaffModelFromServer: function(staffId){
        $.get(controller.getStaffDetailsUrl , {id:staffId})
         .done(function( response ) {
           console.log('staff details ' + JSON.stringify(response));
           model.staff = response.data;
           CreateUpdateView.render();
         });
      },
      getUpdateModelFromView: function(){

        model.staff.firstName = CreateUpdateView.firstName.val();
        model.staff.lastName = CreateUpdateView.lastName.val();
        model.staff.contact1 = CreateUpdateView.contact1.val();
        model.staff.contact2 = CreateUpdateView.contact2.val();
        model.staff.email = CreateUpdateView.email.val();
        model.staff.address = CreateUpdateView.address.val();
        model.staff.userName = CreateUpdateView.userName.val();
        model.staff.pasword = CreateUpdateView.pasword.val();
        model.staff.recoveryContact = CreateUpdateView.recoveryContact.val();
        model.staff.recoveryEmail = CreateUpdateView.recoveryEmail.val();

        var selectedValue = CreateUpdateView.selectLocations.find(":selected").attr('value');
        if(selectedValue){
          model.staff.locationId = selectedValue;
        }

        if(CreateUpdateView.activeControl.is(":checked")){
          model.staff.isActive = 1;
        }else{
          model.staff.isActive = 0;
        }

        return model.staff;

      }
    }

    var CreateUpdateView = {
      init: function(){
        this.firstName = $('#fname');
        this.lastName = $('#lname');
        this.contact1 = $('#contact1');
        this.contact2 = $('#contact2');
        this.email = $('#email');
        this.address = $('#address');
        this.userName = $('#uname');
        this.pasword = $('#pswd');
        this.recoveryContact = $('#recovery-contact');
        this.recoveryEmail = $('#recovery-email');
        this.activeControl  = $('#sactive');
        this.inActiveControl  = $('#sinactive');
        this.selectLocations = $('#sel-locations');

        this.saveButton = $('#btn-save');

        this.saveButton.click(function() {

          console.log('save click');

          var staff = controller.getUpdateModelFromView();

          $.post(controller.createModifyStaffUrl , staff)
           .done(function( response ) {
             console.log('response ' + JSON.stringify(response));
             //model.locations = response.data;
             //CreateUpdateView.render();
           });

        });

      },
      render: function(){

        //adding the select option to the list
        var option = $('<option/>',{
                        value: 0,
                        text: 'Select...',
                        selected: 'selected'
                      }
                      );
        this.selectLocations.append(option);

        var locations = controller.getLocationList();

        for(var i = 0; i < locations.length; i++){
          var option = $('<option/>',{
                          value: locations[i].id,
                          text: locations[i].name
                        }
                        );
         this.selectLocations.append(option);

       }//


       //updating the staff details in the view

       CreateUpdateView.firstName.val(model.staff.firstName);
       CreateUpdateView.lastName.val(model.staff.lastName);
       CreateUpdateView.contact1.val(model.staff.contact1);
       CreateUpdateView.contact2.val(model.staff.contact2);
       CreateUpdateView.email.val(model.staff.email);
       CreateUpdateView.address.val(model.staff.address);
       CreateUpdateView.userName.val(model.staff.userName);
       CreateUpdateView.pasword.val(model.staff.pasword);
       CreateUpdateView.recoveryContact.val(model.staff.recoveryContact);
       CreateUpdateView.recoveryEmail.val(model.staff.recoveryEmail);

       //setting the locatio option
       CreateUpdateView.selectLocations.val(model.staff.locationId);

         // CreateUpdateView.selectLocations.find(':option[value="' + model.staff.locationId + '"]').attr('selected', 'selected');

       if(model.staff.isActive){
         CreateUpdateView.activeControl.prop('checked', true);
         CreateUpdateView.inActiveControl.prop('checked', false);
       }else{
         CreateUpdateView.activeControl.prop('checked', false);
         CreateUpdateView.inActiveControl.prop('checked', true);
       }

      }
    }

    controller.init();

  }());


});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxpdHkuanMiLCJsaW5rcy5qcyIsImRvY3RvckRhc2hib2FyZC5qcyIsImFkZC5zdGFmZi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhZGQuc3RhZmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2hlbHBlciBmdW5jdGlvbiB0byBnZXQgdGhlIHVybCBxdWVyeSBwYXJhbWV0ZXJzXHJcbnZhciB1dGlsaXR5ID0ge1xyXG4gIGdldFVSTFBhcmFtOiBmdW5jdGlvbihuYW1lKXtcclxuICAgIHZhciB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHJcbiAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXFxdXS9nLCBcIlxcXFwkJlwiKTtcclxuXHJcbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiWz8mXVwiICsgbmFtZSArIFwiKD0oW14mI10qKXwmfCN8JClcIik7XHJcbiAgICB2YXIgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKTtcclxuXHJcbiAgICBpZiAoIXJlc3VsdHMpIHJldHVybiBudWxsO1xyXG4gICAgaWYgKCFyZXN1bHRzWzJdKSByZXR1cm4gJyc7XHJcblxyXG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCBcIiBcIikpO1xyXG4gIH0sXHJcbiAgZ2V0VGltZU1pbnV0ZXNBcnJheTogIGZ1bmN0aW9uKCl7XHJcblxyXG4gIH1cclxufVxyXG4iLCJ2YXIgbGlua3MgPSB7XHJcblxyXG4gIC8vbG9naW4ganMgdXJsc1xyXG4gICBhdXRoZW50aWNhdGVVcmwgOiBcImluZGV4LnBocC9hdXRoZW50aWNhdGUvYXV0aGVuaXRjYXRlVXNlclwiLFxyXG4gICBzdWNjZXNzUmVkaXJlY3RVcmwgOiBcImluZGV4LnBocC9kb2N0b3JEYXNoYm9hcmQvXCIsXHJcbiAgIHJlZ2lzdGVyRG9jdG9yVXJsIDogXCJpbmRleC5waHAvZG9jdG9yL2RvY3RvckluZm9cIixcclxuICAgYWRtaW5Vcmw6XCJpbmRleC5waHAvYWRtaW5EYXNoYm9hcmQvYWRtaW5cIixcclxuXHJcbiAgIC8vYWRtaW4gcmVsYXRlZFxyXG4gICBkb2N0b3JMaXN0aW5nVXJsOiBcImluZGV4LnBocC9hZG1pbkRhc2hib2FyZC9kb2N0b3JMaXN0aW5nXCIsXHJcbiBcclxuICAgbG9nb3V0VXJsIDogXCJpbmRleC5waHAvYXV0aGVudGljYXRlL2xvZ291dFwiLFxyXG5cclxuICAgLy9kb2N0b3IgZGFzaGJvYXJkIGxpbmtzXHJcbiAgIGRvY3RvclByb2ZpbGUgOiBcImluZGV4LnBocC9kb2N0b3JEYXNoYm9hcmQvZG9jdG9yUHJvZmlsZVwiLFxyXG4gICBkYXNoYm9hcmRIb21lVXJsIDogXCJpbmRleC5waHAvZG9jdG9yRGFzaGJvYXJkL1wiLFxyXG4gICBuZXdBcHBvaW50bWVudFVybCA6IFwiaW5kZXgucGhwL2RvY3RvckRhc2hib2FyZC9ib29rQXBwb2ludG1lbnRcIixcclxuICAgcGF0aWVudHNFbnRyeVVybCA6IFwiaW5kZXgucGhwL2RvY3RvckRhc2hib2FyZC9wYXRpZW50c0VudHJ5XCIsXHJcbiAgIHBhdGllbnRzTGlzdGluZ1VybCA6IFwiaW5kZXgucGhwL2RvY3RvckRhc2hib2FyZC9wYXRpZW50c0xpc3RpbmdcIixcclxuICAgY2xvc2VBcHBvaW50bWVudFVybCA6IFwiaW5kZXgucGhwL2RvY3RvckRhc2hib2FyZC9jbG9zZUFwcG9pbnRtZW50XCIsXHJcbiAgIGRvY3RvcnNBcHBvaW50bWVudHNMaXN0VXJsIDogXCJpbmRleC5waHAvZG9jdG9yRGFzaGJvYXJkL2xpc3RBcHBvaW50bWVudFwiLFxyXG4gICBuZXdTY2hlZHVsZVVybCA6IFwiaW5kZXgucGhwL2RvY3RvckRhc2hib2FyZC9uZXdTY2hlZHVsZVwiLFxyXG4gICBsaXN0U2NoZWR1bGVVcmwgOiBcImluZGV4LnBocC9kb2N0b3JEYXNoYm9hcmQvc2NoZWR1bGVMaXN0XCIsXHJcbiAgIGFkZFN0YWZmVXJsIDogXCJpbmRleC5waHAvZG9jdG9yRGFzaGJvYXJkL3N0YWZmRW50cnlcIixcclxuICAgZG9jdG9yc1N0YWZmTGlzdGluZ1VyIDogXCJpbmRleC5waHAvZG9jdG9yRGFzaGJvYXJkL3N0YWZmTGlzdGluZ1wiLFxyXG4gICBwYXRpZW50c0hpc3RvcnlVcmwgOiBcImluZGV4LnBocC9kb2N0b3JEYXNoYm9hcmQvcGF0aWVudEhpc3RvcnlcIixcclxuICAgY3JlYXRlUHJvZ3JhbUZvclBhdGllbnRVcmwgOiBcImluZGV4LnBocC9kb2N0b3JEYXNoYm9hcmQvY3JlYXRlTWVkaWNhbFByb2dyYW1cIixcclxuICAgcHJvZ3JhbW1lTGlzdGluZ3NVcmwgOiBcImluZGV4LnBocC9kb2N0b3JEYXNoYm9hcmQvcHJvZ3JhbW1lTGlzdFwiLFxyXG4gICBNYW5hZ2VMb2NhdGlvbnNVcmwgOiBcImluZGV4LnBocC9kb2N0b3JEYXNoYm9hcmQvd29ya0xvY2F0aW9uTWFuYWdlbWVudFwiLFxyXG4gICBnZXRDYWxlbmRlclVybCA6IFwiaW5kZXgucGhwL2RvY3RvckRhc2hib2FyZC9jYWxlbmRhclRlbXBsYXRlXCIsXHJcbiAgICBcclxuICAgICBcclxuICAgLy9zY2hlZHVsZVxyXG4gICBnZXRMb2NhdGlvblVybDogXCJpbmRleC5waHAvbG9jYXRpb25zL2dldERvY3RvckxvY2F0aW9uc1wiLFxyXG4gICBjcmVhdGVVcGRhdGVTY2hlZHVsZVVybDogXCJpbmRleC5waHAvc2NoZWR1bGUvY3JlYXRlVXBkYXRlU2NoZWR1bGVcIixcclxuXHJcbiAgIC8vcHJvZ3JhbW1lXHJcbiAgIHByb2dyYW1tZUxpc3RVcmw6XCJpbmRleC5waHAvcHJvZ3JhbW1lL2dldE1lZGljYXRpb25Qcm9ncmFtbWVMaXN0XCIsXHJcbiAgIHByb2dyYW1tZUVkaXRVcmw6XCJpbmRleC5waHAvZG9jdG9yRGFzaGJvYXJkL2NyZWF0ZU1lZGljYWxQcm9ncmFtXCIsXHJcbiAgIGNyZWF0ZU1vZGlmeVByb2dyYW1tZVVybDpcImluZGV4LnBocC9wcm9ncmFtbWUvY3JlYXRlTW9kaWZ5UHJvZ3JhbW1lXCIsXHJcbiAgIGdldFByb2dyYW1tZVVybDpcImluZGV4LnBocC9wcm9ncmFtbWUvZ2V0UHJvZ3JhbW1lc1wiLFxyXG5cclxuXHJcbiAgIC8vcGF0aWVudFxyXG4gICBwYXRpZW50RGV0YWlsUGVyc2lzdFVybDpcImluZGV4LnBocC9wYXRpZW50L2FkZFVwZGF0ZVBhdGllbnRcIixcclxuICAgcGF0aWVudHNEZXRhaWxzVXJsOlwiaW5kZXgucGhwL3BhdGllbnQvZ2V0UGF0aWVudERldGFpbHNcIixcclxuICAgbG9naW5DaGVja1VybDpcImluZGV4LnBocC9hdXRoZW50aWNhdGUvaXNMb2dnZWRJblwiLFxyXG4gICBnZXRQcm9ncmFtbWVMaXN0OlwiaW5kZXgucGhwL3Byb2dyYW1tZS9nZXRNZWRpY2F0aW9uUHJvZ3JhbW1lTGlzdFwiLFxyXG4gICBwcm9ncmFtbWVMaXN0RGV0YWlsc1VybDpcImluZGV4LnBocC9wcm9ncmFtbWUvZ2V0UHJvZ3JhbW1lTGlzdERldGFpbHNcIixcclxuICAgcGF0aWVudHNQcm9ncmFtbWVzVXJsOlwiaW5kZXgucGhwL3Byb2dyYW1tZS9nZXRQYXRpZW50UHJvZ3JhbW1lc1wiLFxyXG4gICBwYXRpZW50TGlzdGluZ1VybDpcImluZGV4LnBocC9wYXRpZW50L2dldFBhdGllbnRMaXN0XCIsXHJcblxyXG4gICBzYXZlVXBkYXRlTG9jYXRpb25zOlwiaW5kZXgucGhwL2xvY2F0aW9ucy9hZGRVcGRhdGVMb2NhdGlvblwiLFxyXG4gICBsb2NhdGlvbkxpc3RVcmw6XCJpbmRleC5waHAvbG9jYXRpb25zL2dldERvY3RvckxvY2F0aW9uc1wiLFxyXG5cclxuXHJcbiAgIC8vcmVnaXN0YXJ0aW9uXHJcbiAgIGRvY3RvclVybDpcImluZGV4LnBocC9kb2N0b3Ivc2F2ZVVwZGF0ZURvY3RvclwiLFxyXG4gICBkb2N0b3JEZXRhaWxzVXJsOlwiaW5kZXgucGhwL2RvY3Rvci9nZXREb2N0b3JEZXRhaWxzXCIsXHJcbiAgIGxvZ2luQ2hlY2tVcmw6XCJpbmRleC5waHAvYXV0aGVudGljYXRlL2lzTG9nZ2VkSW5cIixcclxuICAgZG9jdG9yRGFzaFVybDpcImluZGV4LnBocC9kb2N0b3JEYXNoYm9hcmQvXCIsXHJcbiAgIGxvZ291dFVybDpcImluZGV4LnBocC9hdXRoZW50aWNhdGUvbG9nb3V0XCIsXHJcblxyXG4gICBjcmVhdGVNb2RpZnlTdGFmZlVybDpcImluZGV4LnBocC9zdGFmZi9jcmVhdGVNb2RpZnlTdGFmZlwiLFxyXG4gICBnZXRTdGFmZkRldGFpbHNVcmw6IFwiaW5kZXgucGhwL3N0YWZmL2dldFN0YWZmRGV0YWlsc1wiLFxyXG4gICBzdGFmZkxpc3RpbmdVcmw6IFwiaW5kZXgucGhwL3N0YWZmL2dldERvY3RvcnNTdGFmZkxpc3RcIlxyXG5cclxufVxyXG4iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vZGVmaW5pbmcgdGhlIGhlbHBlciBmdW5jdGlvbnMgaW4gZ2xvYmFsXHJcblxyXG4gICAgJChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ0RvY3RvciBEYXNoYm9hcmQganMgbG9hZGVkJyk7XHJcblxyXG4gICAgICAgICAgLy90b3AgbGV2ZWwgY29udHJvbGxlclxyXG4gICAgICB2YXIgY29udHJvbGxlciA9IHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgLy93aXJpbmcgdGhlIG5hdmlnYXRpb25cclxuICAgICAgICAgIHRoaXMubG9nb3V0VXJsID0gbGlua3MubG9nb3V0VXJsO1xyXG4gICAgICAgICAgdGhpcy5kb2N0b3JQcm9maWxlID0gbGlua3MuZG9jdG9yUHJvZmlsZTtcclxuICAgICAgICAgIHRoaXMuZGFzaGJvYXJkSG9tZVVybCA9IGxpbmtzLmRhc2hib2FyZEhvbWVVcmw7XHJcbiAgICAgICAgICB0aGlzLm5ld0FwcG9pbnRtZW50VXJsID0gbGlua3MubmV3QXBwb2ludG1lbnRVcmw7XHJcbiAgICAgICAgICB0aGlzLnBhdGllbnRzRW50cnlVcmwgPSBsaW5rcy5wYXRpZW50c0VudHJ5VXJsO1xyXG4gICAgICAgICAgdGhpcy5wYXRpZW50c0xpc3RpbmdVcmwgPSBsaW5rcy5wYXRpZW50c0xpc3RpbmdVcmw7XHJcbiAgICAgICAgICB0aGlzLmNsb3NlQXBwb2ludG1lbnRVcmwgPSBsaW5rcy5jbG9zZUFwcG9pbnRtZW50VXJsO1xyXG4gICAgICAgICAgdGhpcy5kb2N0b3JzQXBwb2ludG1lbnRzTGlzdFVybCA9IGxpbmtzLmRvY3RvcnNBcHBvaW50bWVudHNMaXN0VXJsO1xyXG5cclxuICAgICAgICAgIHRoaXMubmV3U2NoZWR1bGVVcmwgPSBsaW5rcy5uZXdTY2hlZHVsZVVybDtcclxuICAgICAgICAgIHRoaXMubGlzdFNjaGVkdWxlVXJsID0gdGhpcy5saXN0U2NoZWR1bGVVcmw7XHJcbiAgICAgICAgICB0aGlzLmFkZFN0YWZmVXJsID0gbGlua3MuYWRkU3RhZmZVcmw7XHJcbiAgICAgICAgICB0aGlzLmRvY3RvcnNTdGFmZkxpc3RpbmdVciA9IGxpbmtzLmRvY3RvcnNTdGFmZkxpc3RpbmdVcjtcclxuXHJcbiAgICAgICAgICB0aGlzLnBhdGllbnRzSGlzdG9yeVVybCA9IGxpbmtzLnBhdGllbnRzSGlzdG9yeVVybDtcclxuXHJcbiAgICAgICAgICB0aGlzLmNyZWF0ZVByb2dyYW1Gb3JQYXRpZW50VXJsID0gbGlua3MuY3JlYXRlUHJvZ3JhbUZvclBhdGllbnRVcmwgO1xyXG4gICAgICAgICAgdGhpcy5wcm9ncmFtbWVMaXN0aW5nc1VybCA9IGxpbmtzLnByb2dyYW1tZUxpc3RpbmdzVXJsO1xyXG5cclxuICAgICAgICAgIHRoaXMuTWFuYWdlTG9jYXRpb25zVXJsID0gbGlua3MuTWFuYWdlTG9jYXRpb25zVXJsO1xyXG4gICAgICAgICAgdGhpcy5DYWxlbmRhclRlbXBsYXRlVXJsID0gbGlua3MuZ2V0Q2FsZW5kZXJVcmw7XHJcblxyXG4gICAgICAgICAgLy9kbyBzb21ldGhuZyBhYm91dCBkb2N0b3JzIGluZm8gYW5kIHJlZ2lzdHJhdGlvblxyXG5cclxuICAgICAgICAgIC8vVGhlIHVybCBmcm9tIHRoZSBicm93c2VyICBjYW4gYmUgY29tcGFyZWQgdG8gc2V0IHRoZSBhY3RpdmUgbmF2aWdhdGlvblxyXG4gICAgICAgICAgbmF2Vmlldy5pbml0KCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIHZhciBuYXZWaWV3ID0ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgLy93aXJpbmcgdGhlIG5hdmlnYXRpb24gY2xpY2tzXHJcblxyXG5cclxuICAgICAgICAgICQoXCIjcG1zLWJyYW5kLWJ0bi1saW5rXCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUE1TIGJyYW5kIGNsaWNrJyk7XHJcblxyXG4gICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAkKFwiI2J0bi1wcm9ncmFtbWUtc2VjdGlvbi1saW5rXCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKFwiI2NyZWF0ZS1wcm9ncmFtLWZvci1wYXRpZW50LXNlY3Rpb25cIikuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRlIHByb2dyYW0gZm9yIHBhdGllbnQnKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBjb250cm9sbGVyLmNyZWF0ZVByb2dyYW1Gb3JQYXRpZW50VXJsO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoXCIjYnRuLW1hbmFnZS1sb2NhdGlvbnNcIikuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbWFuYWdlIGxvY2F0aW9ucycpO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGNvbnRyb2xsZXIuTWFuYWdlTG9jYXRpb25zVXJsO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJChcIiNidG4tbGlzdC1wcm9ncmFtLXNlY3Rpb25cIikuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gY29udHJvbGxlci5wcm9ncmFtbWVMaXN0aW5nc1VybDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICQoXCIjcGF0aWVudHMtZW50cnktY3JlYXRlLXNlY3Rpb24tbGluay1CdG5cIikuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwYXRpZW50cyBFbnRyeWNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBjb250cm9sbGVyLnBhdGllbnRzRW50cnlVcmw7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICQoXCIjcGF0aWVudHMtZW50cnktbGlzdC1zZWN0aW9uLWxpbmstQnRuXCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwYXRpZW50cyBsaXN0aW5nIGNsaWNrJyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gY29udHJvbGxlci5wYXRpZW50c0xpc3RpbmdVcmw7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkKFwiI3VzZXItUHJvZmlsZS1CdG4tTGlua1wiKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzZXIgcHJvZmlsZSBjbGljaycpO1xyXG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gY29udHJvbGxlci5kb2N0b3JQcm9maWxlO1xyXG5cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICQoXCIjZG9jdG9yLWRhc2gtbG9nb3V0LWJ0blwiKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nb3V0IGNsaWNrJyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gY29udHJvbGxlci5sb2dvdXRVcmw7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkKFwiI2Rhc2hib2FyZC1TZWN0aW9uLUJ0blwiKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBjb250cm9sbGVyLmRhc2hib2FyZEhvbWVVcmw7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Rhc2hib2FyZCBjbGljaycpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgJChcIiNib29rLUFwcG9pbnRtZW50cy1TZWN0aW9uLUJ0blwiKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBjb250cm9sbGVyLm5ld0FwcG9pbnRtZW50VXJsO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgJChcIiNjbG9zZS1Cb29rLUFwcG9pbnRtZW50LVNlY3Rpb24tTGluay1CdG5cIikuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGNvbnRyb2xsZXIuY2xvc2VBcHBvaW50bWVudFVybDtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICQoXCIjdmlldy1BcHBvaW50bWVudC1TZWN0aW9uLUxpbmstQnRuXCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBjb250cm9sbGVyLmRvY3RvcnNBcHBvaW50bWVudHNMaXN0VXJsO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICQoXCIjbWFuYWdlLURvY3RvcnMtU2NoZWR1bGUtU2VjdGlvbi1MaW5rLUJ0blwiKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NjaGVkdWxlIGNsaWNrJyk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkKFwiI21hbmFnZS1zY2hlZHVsZS1jcmVhdGUtc2VjdGlvbi1saW5rLUJ0blwiKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25ldyBzY2hlZHVsZSBjbGljaycpO1xyXG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gY29udHJvbGxlci5uZXdTY2hlZHVsZVVybDtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICQoXCIjbWFuYWdlLXNjaGVkdWxlLWxpc3Qtc2VjdGlvbi1saW5rLUJ0blwiKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NjaGVkdWxlIGxpc3QgY2xpY2snKTtcclxuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGNvbnRyb2xsZXIubGlzdFNjaGVkdWxlVXJsO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAkKFwiI2FkZC1TdGFmZi1TZWN0aW9uLUxpbmstQnRuXCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gY29udHJvbGxlci5hZGRTdGFmZlVybDtcclxuICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgJChcIiNidG4tc3RhZmYtbGlzdGluZ1wiKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gY29udHJvbGxlci5kb2N0b3JzU3RhZmZMaXN0aW5nVXI7XHJcbiAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhci1UZW1wbGF0ZS1CdG4tTGlua1wiKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gY29udHJvbGxlci5DYWxlbmRhclRlbXBsYXRlVXJsO1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvIGhpZFwiKTsgXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAkKFwiI3BhdGllbnRzLUhpc3RvcnktU2VjdGlvbi1MaW5rLUJ0blwiKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGNvbnRyb2xsZXIucGF0aWVudHNIaXN0b3J5VXJsO1xyXG4gICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcclxuICAgICAgICAgIC8vaGlnaGxpZ2h0IHRoZSByaWdodCBuYXZpZ2F0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgY29udHJvbGxlci5pbml0KCk7XHJcblxyXG4gIH0oKSk7XHJcblxyXG59KTtcclxuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhZGQgc3RhZmYganMgbG9hZGVkJyk7XHJcbiAgICB2YXIgbW9kZWwgPSB7XHJcbiAgICAgIGxvY2F0aW9uczpbXSxcclxuICAgICAgc3RhZmY6e1xyXG4gICAgICAgICBpZDowLFxyXG4gICAgICAgICBmaXJzdE5hbWU6XCJcIixcclxuICAgICAgICAgbGFzdE5hbWU6XCJcIixcclxuICAgICAgICAgY29udGFjdDE6XCJcIixcclxuICAgICAgICAgY29udGFjdDI6XCJcIixcclxuICAgICAgICAgZW1haWw6XCJcIixcclxuICAgICAgICAgYWRkcmVzczpcIlwiLFxyXG4gICAgICAgICB1c2VyTmFtZTpcIlwiLFxyXG4gICAgICAgICBwYXN3b3JkOlwiXCIsXHJcbiAgICAgICAgIHJlY292ZXJ5Q29udGFjdDpcIlwiLFxyXG4gICAgICAgICByZWNvdmVyeUVtYWlsOlwiXCIsXHJcbiAgICAgICAgIGxvY2F0aW9uSWQ6MCxcclxuICAgICAgICAgaXNBY3RpdmU6MFxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAgIHZhciBjb250cm9sbGVyID0ge1xyXG4gICAgICBpbml0OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuZ2V0TG9jYXRpb25zVXJsID0gbGlua3MubG9jYXRpb25MaXN0VXJsO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTW9kaWZ5U3RhZmZVcmwgPSBsaW5rcy5jcmVhdGVNb2RpZnlTdGFmZlVybDtcclxuICAgICAgICB0aGlzLmdldFN0YWZmRGV0YWlsc1VybCA9IGxpbmtzLmdldFN0YWZmRGV0YWlsc1VybDtcclxuXHJcbiAgICAgICAgQ3JlYXRlVXBkYXRlVmlldy5pbml0KCk7XHJcblxyXG4gICAgICAgICQuZ2V0KHRoaXMuZ2V0TG9jYXRpb25zVXJsICwge30pXHJcbiAgICAgICAgIC5kb25lKGZ1bmN0aW9uKCByZXNwb25zZSApIHtcclxuICAgICAgICAgICBjb25zb2xlLmxvZygnbG9jcyAnICsgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcclxuICAgICAgICAgICBtb2RlbC5sb2NhdGlvbnMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgIENyZWF0ZVVwZGF0ZVZpZXcucmVuZGVyKCk7XHJcblxyXG5cclxuICAgICAgICAgICB2YXIgc3RhZmZJZCA9IHV0aWxpdHkuZ2V0VVJMUGFyYW0oJ2lkJyk7XHJcblxyXG4gICAgICAgICAgIGlmKHN0YWZmSWQpe1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coc3RhZmZJZCk7XHJcbiAgICAgICAgICAgICBjb250cm9sbGVyLnVwZGF0ZVN0YWZmTW9kZWxGcm9tU2VydmVyKHN0YWZmSWQpO1xyXG4gICAgICAgICAgICAgQ3JlYXRlVXBkYXRlVmlldy5yZW5kZXIoKTtcclxuICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgfSk7XHJcblxyXG4gICAgICB9LFxyXG4gICAgICBnZXRMb2NhdGlvbkxpc3Q6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIG1vZGVsLmxvY2F0aW9ucztcclxuICAgICAgfSxcclxuICAgICAgZ2V0U3RhZmZNb2RlbDogZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gbW9kZWwuc3RhZmY7XHJcbiAgICAgIH0sXHJcbiAgICAgIHVwZGF0ZVN0YWZmTW9kZWxGcm9tU2VydmVyOiBmdW5jdGlvbihzdGFmZklkKXtcclxuICAgICAgICAkLmdldChjb250cm9sbGVyLmdldFN0YWZmRGV0YWlsc1VybCAsIHtpZDpzdGFmZklkfSlcclxuICAgICAgICAgLmRvbmUoZnVuY3Rpb24oIHJlc3BvbnNlICkge1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGFmZiBkZXRhaWxzICcgKyBKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xyXG4gICAgICAgICAgIG1vZGVsLnN0YWZmID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICBDcmVhdGVVcGRhdGVWaWV3LnJlbmRlcigpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgZ2V0VXBkYXRlTW9kZWxGcm9tVmlldzogZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgbW9kZWwuc3RhZmYuZmlyc3ROYW1lID0gQ3JlYXRlVXBkYXRlVmlldy5maXJzdE5hbWUudmFsKCk7XHJcbiAgICAgICAgbW9kZWwuc3RhZmYubGFzdE5hbWUgPSBDcmVhdGVVcGRhdGVWaWV3Lmxhc3ROYW1lLnZhbCgpO1xyXG4gICAgICAgIG1vZGVsLnN0YWZmLmNvbnRhY3QxID0gQ3JlYXRlVXBkYXRlVmlldy5jb250YWN0MS52YWwoKTtcclxuICAgICAgICBtb2RlbC5zdGFmZi5jb250YWN0MiA9IENyZWF0ZVVwZGF0ZVZpZXcuY29udGFjdDIudmFsKCk7XHJcbiAgICAgICAgbW9kZWwuc3RhZmYuZW1haWwgPSBDcmVhdGVVcGRhdGVWaWV3LmVtYWlsLnZhbCgpO1xyXG4gICAgICAgIG1vZGVsLnN0YWZmLmFkZHJlc3MgPSBDcmVhdGVVcGRhdGVWaWV3LmFkZHJlc3MudmFsKCk7XHJcbiAgICAgICAgbW9kZWwuc3RhZmYudXNlck5hbWUgPSBDcmVhdGVVcGRhdGVWaWV3LnVzZXJOYW1lLnZhbCgpO1xyXG4gICAgICAgIG1vZGVsLnN0YWZmLnBhc3dvcmQgPSBDcmVhdGVVcGRhdGVWaWV3LnBhc3dvcmQudmFsKCk7XHJcbiAgICAgICAgbW9kZWwuc3RhZmYucmVjb3ZlcnlDb250YWN0ID0gQ3JlYXRlVXBkYXRlVmlldy5yZWNvdmVyeUNvbnRhY3QudmFsKCk7XHJcbiAgICAgICAgbW9kZWwuc3RhZmYucmVjb3ZlcnlFbWFpbCA9IENyZWF0ZVVwZGF0ZVZpZXcucmVjb3ZlcnlFbWFpbC52YWwoKTtcclxuXHJcbiAgICAgICAgdmFyIHNlbGVjdGVkVmFsdWUgPSBDcmVhdGVVcGRhdGVWaWV3LnNlbGVjdExvY2F0aW9ucy5maW5kKFwiOnNlbGVjdGVkXCIpLmF0dHIoJ3ZhbHVlJyk7XHJcbiAgICAgICAgaWYoc2VsZWN0ZWRWYWx1ZSl7XHJcbiAgICAgICAgICBtb2RlbC5zdGFmZi5sb2NhdGlvbklkID0gc2VsZWN0ZWRWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKENyZWF0ZVVwZGF0ZVZpZXcuYWN0aXZlQ29udHJvbC5pcyhcIjpjaGVja2VkXCIpKXtcclxuICAgICAgICAgIG1vZGVsLnN0YWZmLmlzQWN0aXZlID0gMTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIG1vZGVsLnN0YWZmLmlzQWN0aXZlID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtb2RlbC5zdGFmZjtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgQ3JlYXRlVXBkYXRlVmlldyA9IHtcclxuICAgICAgaW5pdDogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmZpcnN0TmFtZSA9ICQoJyNmbmFtZScpO1xyXG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSAkKCcjbG5hbWUnKTtcclxuICAgICAgICB0aGlzLmNvbnRhY3QxID0gJCgnI2NvbnRhY3QxJyk7XHJcbiAgICAgICAgdGhpcy5jb250YWN0MiA9ICQoJyNjb250YWN0MicpO1xyXG4gICAgICAgIHRoaXMuZW1haWwgPSAkKCcjZW1haWwnKTtcclxuICAgICAgICB0aGlzLmFkZHJlc3MgPSAkKCcjYWRkcmVzcycpO1xyXG4gICAgICAgIHRoaXMudXNlck5hbWUgPSAkKCcjdW5hbWUnKTtcclxuICAgICAgICB0aGlzLnBhc3dvcmQgPSAkKCcjcHN3ZCcpO1xyXG4gICAgICAgIHRoaXMucmVjb3ZlcnlDb250YWN0ID0gJCgnI3JlY292ZXJ5LWNvbnRhY3QnKTtcclxuICAgICAgICB0aGlzLnJlY292ZXJ5RW1haWwgPSAkKCcjcmVjb3ZlcnktZW1haWwnKTtcclxuICAgICAgICB0aGlzLmFjdGl2ZUNvbnRyb2wgID0gJCgnI3NhY3RpdmUnKTtcclxuICAgICAgICB0aGlzLmluQWN0aXZlQ29udHJvbCAgPSAkKCcjc2luYWN0aXZlJyk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RMb2NhdGlvbnMgPSAkKCcjc2VsLWxvY2F0aW9ucycpO1xyXG5cclxuICAgICAgICB0aGlzLnNhdmVCdXR0b24gPSAkKCcjYnRuLXNhdmUnKTtcclxuXHJcbiAgICAgICAgdGhpcy5zYXZlQnV0dG9uLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZlIGNsaWNrJyk7XHJcblxyXG4gICAgICAgICAgdmFyIHN0YWZmID0gY29udHJvbGxlci5nZXRVcGRhdGVNb2RlbEZyb21WaWV3KCk7XHJcblxyXG4gICAgICAgICAgJC5wb3N0KGNvbnRyb2xsZXIuY3JlYXRlTW9kaWZ5U3RhZmZVcmwgLCBzdGFmZilcclxuICAgICAgICAgICAuZG9uZShmdW5jdGlvbiggcmVzcG9uc2UgKSB7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2UgJyArIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgICAvL21vZGVsLmxvY2F0aW9ucyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAvL0NyZWF0ZVVwZGF0ZVZpZXcucmVuZGVyKCk7XHJcbiAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgfSxcclxuICAgICAgcmVuZGVyOiBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAvL2FkZGluZyB0aGUgc2VsZWN0IG9wdGlvbiB0byB0aGUgbGlzdFxyXG4gICAgICAgIHZhciBvcHRpb24gPSAkKCc8b3B0aW9uLz4nLHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdTZWxlY3QuLi4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogJ3NlbGVjdGVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnNlbGVjdExvY2F0aW9ucy5hcHBlbmQob3B0aW9uKTtcclxuXHJcbiAgICAgICAgdmFyIGxvY2F0aW9ucyA9IGNvbnRyb2xsZXIuZ2V0TG9jYXRpb25MaXN0KCk7XHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsb2NhdGlvbnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgdmFyIG9wdGlvbiA9ICQoJzxvcHRpb24vPicse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBsb2NhdGlvbnNbaV0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbG9jYXRpb25zW2ldLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICB0aGlzLnNlbGVjdExvY2F0aW9ucy5hcHBlbmQob3B0aW9uKTtcclxuXHJcbiAgICAgICB9Ly9cclxuXHJcblxyXG4gICAgICAgLy91cGRhdGluZyB0aGUgc3RhZmYgZGV0YWlscyBpbiB0aGUgdmlld1xyXG5cclxuICAgICAgIENyZWF0ZVVwZGF0ZVZpZXcuZmlyc3ROYW1lLnZhbChtb2RlbC5zdGFmZi5maXJzdE5hbWUpO1xyXG4gICAgICAgQ3JlYXRlVXBkYXRlVmlldy5sYXN0TmFtZS52YWwobW9kZWwuc3RhZmYubGFzdE5hbWUpO1xyXG4gICAgICAgQ3JlYXRlVXBkYXRlVmlldy5jb250YWN0MS52YWwobW9kZWwuc3RhZmYuY29udGFjdDEpO1xyXG4gICAgICAgQ3JlYXRlVXBkYXRlVmlldy5jb250YWN0Mi52YWwobW9kZWwuc3RhZmYuY29udGFjdDIpO1xyXG4gICAgICAgQ3JlYXRlVXBkYXRlVmlldy5lbWFpbC52YWwobW9kZWwuc3RhZmYuZW1haWwpO1xyXG4gICAgICAgQ3JlYXRlVXBkYXRlVmlldy5hZGRyZXNzLnZhbChtb2RlbC5zdGFmZi5hZGRyZXNzKTtcclxuICAgICAgIENyZWF0ZVVwZGF0ZVZpZXcudXNlck5hbWUudmFsKG1vZGVsLnN0YWZmLnVzZXJOYW1lKTtcclxuICAgICAgIENyZWF0ZVVwZGF0ZVZpZXcucGFzd29yZC52YWwobW9kZWwuc3RhZmYucGFzd29yZCk7XHJcbiAgICAgICBDcmVhdGVVcGRhdGVWaWV3LnJlY292ZXJ5Q29udGFjdC52YWwobW9kZWwuc3RhZmYucmVjb3ZlcnlDb250YWN0KTtcclxuICAgICAgIENyZWF0ZVVwZGF0ZVZpZXcucmVjb3ZlcnlFbWFpbC52YWwobW9kZWwuc3RhZmYucmVjb3ZlcnlFbWFpbCk7XHJcblxyXG4gICAgICAgLy9zZXR0aW5nIHRoZSBsb2NhdGlvIG9wdGlvblxyXG4gICAgICAgQ3JlYXRlVXBkYXRlVmlldy5zZWxlY3RMb2NhdGlvbnMudmFsKG1vZGVsLnN0YWZmLmxvY2F0aW9uSWQpO1xyXG5cclxuICAgICAgICAgLy8gQ3JlYXRlVXBkYXRlVmlldy5zZWxlY3RMb2NhdGlvbnMuZmluZCgnOm9wdGlvblt2YWx1ZT1cIicgKyBtb2RlbC5zdGFmZi5sb2NhdGlvbklkICsgJ1wiXScpLmF0dHIoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XHJcblxyXG4gICAgICAgaWYobW9kZWwuc3RhZmYuaXNBY3RpdmUpe1xyXG4gICAgICAgICBDcmVhdGVVcGRhdGVWaWV3LmFjdGl2ZUNvbnRyb2wucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICAgICBDcmVhdGVVcGRhdGVWaWV3LmluQWN0aXZlQ29udHJvbC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgfWVsc2V7XHJcbiAgICAgICAgIENyZWF0ZVVwZGF0ZVZpZXcuYWN0aXZlQ29udHJvbC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICBDcmVhdGVVcGRhdGVWaWV3LmluQWN0aXZlQ29udHJvbC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29udHJvbGxlci5pbml0KCk7XHJcblxyXG4gIH0oKSk7XHJcblxyXG5cclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
