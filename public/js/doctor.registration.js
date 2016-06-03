var links={authenticateUrl:"index.php/authenticate/authenitcateUser",successRedirectUrl:"index.php/doctorDashboard/",registerDoctorUrl:"index.php/doctor/doctorInfo",adminUrl:"index.php/adminDashboard/admin",passwordRestRequestUrl:"index.php/authenticate/resetPasswordRequest",loginUrl:"index.php/authenticate/login",passwordResetUrl:"index.php/authenticate/passwordReset",forgotPasswordUrl:"index.php/authenticate/forgotPassword",doctorListingUrl:"index.php/adminDashboard/doctorListing",logoutUrl:"index.php/authenticate/logout",doctorProfile:"index.php/doctorDashboard/doctorProfile",dashboardHomeUrl:"index.php/doctorDashboard/",newAppointmentUrl:"index.php/doctorDashboard/bookAppointment",patientsEntryUrl:"index.php/doctorDashboard/patientsEntry",patientsListingUrl:"index.php/doctorDashboard/patientsListing",closeAppointmentUrl:"index.php/doctorDashboard/closeAppointment",doctorsAppointmentsListUrl:"index.php/doctorDashboard/listAppointment",newScheduleUrl:"index.php/doctorDashboard/newSchedule",listScheduleUrl:"index.php/doctorDashboard/scheduleList",getScheduleCalendarUrl:"index.php/doctorDashboard/ScheduleCalenderView",addStaffUrl:"index.php/doctorDashboard/staffEntry",doctorsStaffListingUr:"index.php/doctorDashboard/staffListing",patientsHistoryUrl:"index.php/doctorDashboard/patientHistory",createProgramForPatientUrl:"index.php/doctorDashboard/createMedicalProgram",programmeListingsUrl:"index.php/doctorDashboard/programmeList",ManageLocationsUrl:"index.php/doctorDashboard/workLocationManagement",getAnalyticsUrl:"index.php/doctorDashboard/AnalyticsReport",getCalenderUrl:"index.php/doctorDashboard/calendarTemplate",accountingUrl:"index.php/doctorDashboard/accounting",medicineSearchUrl:"index.php/doctorDashboard/medicineSearch",getLocationUrl:"index.php/locations/getDoctorLocations",createUpdateScheduleUrl:"index.php/schedule/createUpdateSchedule",getSechduleCalendarDetailsUrl:"index.php/schedule/getCalanderDetails",programmeListUrl:"index.php/programme/getMedicationProgrammeList",programmeEditUrl:"index.php/doctorDashboard/createMedicalProgram",createModifyProgrammeUrl:"index.php/programme/createModifyProgramme",getProgrammeUrl:"index.php/programme/getProgrammes",patientDetailPersistUrl:"index.php/patient/addUpdatePatient",patientsDetailsUrl:"index.php/patient/getPatientDetails",loginCheckUrl:"index.php/authenticate/isLoggedIn",getProgrammeList:"index.php/programme/getMedicationProgrammeList",programmeListDetailsUrl:"index.php/programme/getProgrammeListDetails",patientsProgrammesUrl:"index.php/programme/getPatientProgrammes",patientListingUrl:"index.php/patient/getPatientList",saveUpdateLocations:"index.php/locations/addUpdateLocation",locationListUrl:"index.php/locations/getDoctorLocations",deliveryMethodsUrl:"index.php/patient/getDeliveryMethods",doctorUrl:"index.php/doctor/saveUpdateDoctor",doctorDetailsUrl:"index.php/doctor/getDoctorDetails",loginCheckUrl:"index.php/authenticate/isLoggedIn",doctorDashUrl:"index.php/doctorDashboard/",logoutUrl:"index.php/authenticate/logout",createModifyStaffUrl:"index.php/staff/createModifyStaff",getStaffDetailsUrl:"index.php/staff/getStaffDetails",staffListingUrl:"index.php/staff/getDoctorsStaffList"};$(document).ready(function(){void 0;var t={id:0,name:"",contact:"",alternateContact:"",email:"",qualifications:"",address:"",recoveryContact:"",recoveryEmail:"",userName:"",password:"",isActive:0},o={init:function(){this.doctorUrl=links.doctorUrl,this.doctorDetailsUrl=links.doctorDetailsUrl,this.loginCheckUrl=links.loginCheckUrl,this.doctorDashUrl=links.doctorDashUrl,this.logoutUrl=links.logoutUrl,e.init(),this.getDoctorInfo()},getModel:function(){return t},getDoctorInfo:function(){$.post(o.loginCheckUrl,{}).done(function(t){void 0,"D"==t.data.type&&o.updateModelFromServer(t.data.id)})},updateModelFromServer:function(r){$.get(o.doctorDetailsUrl,{id:r}).done(function(o){void 0;var r=o.data;t.id=r.id,t.name=r.name,t.contact=r.contact,t.alternateContact=r.alternateContact,t.email=r.email,t.qualifications=r.qualifications,t.address=r.address,t.userName=r.userName,t.password=r.password,t.recoveryContact=r.recoveryContact,t.recoveryEmail=r.recoveryEmail,t.isActive=r.isActive,e.render()})},updateModelFromView:function(){return t.id=e.idControl.val(),t.name=e.nameControl.val(),t.contact=e.contactControl.val(),t.alternateContact=e.alternatContactControl.val(),t.email=e.emailControl.val(),t.qualifications=e.qualificationControl.val(),t.address=e.addressControl.val(),t.userName=e.userNameControl.val(),t.password=e.passwordControl.val(),t.recoveryContact=e.recoveryContactControl.val(),t.recoveryEmail=e.recoveryEmailControl.val(),e.activeControl.is(":checked")?t.isActive=1:t.isActive=0,t},saveDoctorAndRedirect:function(){$.post(o.doctorUrl,t).done(function(t){void 0,"-1"==t.data.status?void 0:"D"==t.data.user.type&&(void 0,window.location.href=o.logoutUrl)})}},e={init:function(){void 0,this.idControl=$("#did"),this.nameControl=$("#dname"),this.contactControl=$("#dcontact"),this.alternatContactControl=$("#dalternate-contact"),this.emailControl=$("#demail"),this.qualificationControl=$("#dqualifications"),this.addressControl=$("#daddress"),this.userNameControl=$("#duser-name"),this.passwordControl=$("#dpassword"),this.recoveryContactControl=$("#drecovery-contact"),this.recoveryEmailControl=$("#drecovery-email"),this.activeControl=$("#dactive"),this.inactiveControl=$("#dinactive"),$("#btn-doc-reg-sumit").on("click",function(o){return function(){void 0,o.updateModelFromView(),void 0,o.saveDoctorAndRedirect()}}(o)),this.render()},getControls:function(){return this.controls},render:function(){var t=o.getModel();this.idControl.val(t.id),this.nameControl.val(t.name),this.contactControl.val(t.contact),this.alternatContactControl.val(t.alternateContact),this.emailControl.val(t.email),this.qualificationControl.val(t.qualifications),this.addressControl.val(t.address),this.userNameControl.val(t.userName),this.passwordControl.val(t.password),this.recoveryContactControl.val(t.recoveryContact),this.recoveryEmailControl.val(t.recoveryEmail),1==t.isActive?(this.activeControl.prop("checked",!0),this.inactiveControl.prop("checked",!1)):(this.activeControl.prop("checked",!1),this.inactiveControl.prop("checked",!0))}};o.init()});