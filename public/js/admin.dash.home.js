var links={authenticateUrl:"index.php/authenticate/authenitcateUser",successRedirectUrl:"index.php/doctorDashboard/",registerDoctorUrl:"index.php/doctor/doctorInfo",adminUrl:"index.php/adminDashboard/admin",doctorListingUrl:"index.php/adminDashboard/doctorListing",logoutUrl:"index.php/authenticate/logout",doctorProfile:"index.php/doctorDashboard/doctorProfile",dashboardHomeUrl:"index.php/doctorDashboard/",newAppointmentUrl:"index.php/doctorDashboard/bookAppointment",patientsEntryUrl:"index.php/doctorDashboard/patientsEntry",patientsListingUrl:"index.php/doctorDashboard/patientsListing",closeAppointmentUrl:"index.php/doctorDashboard/closeAppointment",doctorsAppointmentsListUrl:"index.php/doctorDashboard/listAppointment",newScheduleUrl:"index.php/doctorDashboard/newSchedule",listScheduleUrl:"index.php/doctorDashboard/scheduleList",getScheduleCalendarUrl:"index.php/doctorDashboard/ScheduleCalenderView",addStaffUrl:"index.php/doctorDashboard/staffEntry",doctorsStaffListingUr:"index.php/doctorDashboard/staffListing",patientsHistoryUrl:"index.php/doctorDashboard/patientHistory",createProgramForPatientUrl:"index.php/doctorDashboard/createMedicalProgram",programmeListingsUrl:"index.php/doctorDashboard/programmeList",ManageLocationsUrl:"index.php/doctorDashboard/workLocationManagement",getAnalyticsUrl:"index.php/doctorDashboard/AnalyticsReport",getCalenderUrl:"index.php/doctorDashboard/calendarTemplate",accountingUrl:"index.php/doctorDashboard/accounting",medicineSearchUrl:"index.php/doctorDashboard/medicineSearch",getLocationUrl:"index.php/locations/getDoctorLocations",createUpdateScheduleUrl:"index.php/schedule/createUpdateSchedule",getSechduleCalendarDetailsUrl:"index.php/schedule/getCalanderDetails",programmeListUrl:"index.php/programme/getMedicationProgrammeList",programmeEditUrl:"index.php/doctorDashboard/createMedicalProgram",createModifyProgrammeUrl:"index.php/programme/createModifyProgramme",getProgrammeUrl:"index.php/programme/getProgrammes",patientDetailPersistUrl:"index.php/patient/addUpdatePatient",patientsDetailsUrl:"index.php/patient/getPatientDetails",loginCheckUrl:"index.php/authenticate/isLoggedIn",getProgrammeList:"index.php/programme/getMedicationProgrammeList",programmeListDetailsUrl:"index.php/programme/getProgrammeListDetails",patientsProgrammesUrl:"index.php/programme/getPatientProgrammes",patientListingUrl:"index.php/patient/getPatientList",saveUpdateLocations:"index.php/locations/addUpdateLocation",locationListUrl:"index.php/locations/getDoctorLocations",deliveryMethodsUrl:"index.php/patient/getDeliveryMethods",doctorUrl:"index.php/doctor/saveUpdateDoctor",doctorDetailsUrl:"index.php/doctor/getDoctorDetails",loginCheckUrl:"index.php/authenticate/isLoggedIn",doctorDashUrl:"index.php/doctorDashboard/",logoutUrl:"index.php/authenticate/logout",createModifyStaffUrl:"index.php/staff/createModifyStaff",getStaffDetailsUrl:"index.php/staff/getStaffDetails",staffListingUrl:"index.php/staff/getDoctorsStaffList"};$(document).ready(function(){$(function(){void 0;var t={init:function(){this.logoutUrl=links.logoutUrl,this.DoctorListingUrl=links.doctorListingUrl,e.init()}},e={init:function(){$("#pms-brand-btn-link").click(function(t){t.preventDefault(),void 0}),$("#admin-dash-logout-btn").click(function(e){e.preventDefault(),void 0,window.location.href=t.logoutUrl}),$("#btn-manage-doctors").click(function(t){t.preventDefault(),void 0}),$("#btn-doctor-listings").click(function(e){e.preventDefault(),void 0,window.location.href=t.DoctorListingUrl})}};t.init()}())}),$(document).ready(function(){$(function(){void 0}())});