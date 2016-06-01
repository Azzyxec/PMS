var links={authenticateUrl:"index.php/authenticate/authenitcateUser",successRedirectUrl:"index.php/doctorDashboard/",registerDoctorUrl:"index.php/doctor/doctorInfo",adminUrl:"index.php/adminDashboard/admin",doctorListingUrl:"index.php/adminDashboard/doctorListing",logoutUrl:"index.php/authenticate/logout",doctorProfile:"index.php/doctorDashboard/doctorProfile",dashboardHomeUrl:"index.php/doctorDashboard/",newAppointmentUrl:"index.php/doctorDashboard/bookAppointment",patientsEntryUrl:"index.php/doctorDashboard/patientsEntry",patientsListingUrl:"index.php/doctorDashboard/patientsListing",closeAppointmentUrl:"index.php/doctorDashboard/closeAppointment",doctorsAppointmentsListUrl:"index.php/doctorDashboard/listAppointment",newScheduleUrl:"index.php/doctorDashboard/newSchedule",listScheduleUrl:"index.php/doctorDashboard/scheduleList",getScheduleCalendarUrl:"index.php/doctorDashboard/ScheduleCalenderView",addStaffUrl:"index.php/doctorDashboard/staffEntry",doctorsStaffListingUr:"index.php/doctorDashboard/staffListing",patientsHistoryUrl:"index.php/doctorDashboard/patientHistory",createProgramForPatientUrl:"index.php/doctorDashboard/createMedicalProgram",programmeListingsUrl:"index.php/doctorDashboard/programmeList",ManageLocationsUrl:"index.php/doctorDashboard/workLocationManagement",getAnalyticsUrl:"index.php/doctorDashboard/AnalyticsReport",getCalenderUrl:"index.php/doctorDashboard/calendarTemplate",accountingUrl:"index.php/doctorDashboard/accounting",medicineSearchUrl:"index.php/doctorDashboard/medicineSearch",getLocationUrl:"index.php/locations/getDoctorLocations",createUpdateScheduleUrl:"index.php/schedule/createUpdateSchedule",getSechduleCalendarDetailsUrl:"index.php/schedule/getCalanderDetails",programmeListUrl:"index.php/programme/getMedicationProgrammeList",programmeEditUrl:"index.php/doctorDashboard/createMedicalProgram",createModifyProgrammeUrl:"index.php/programme/createModifyProgramme",getProgrammeUrl:"index.php/programme/getProgrammes",patientDetailPersistUrl:"index.php/patient/addUpdatePatient",patientsDetailsUrl:"index.php/patient/getPatientDetails",loginCheckUrl:"index.php/authenticate/isLoggedIn",getProgrammeList:"index.php/programme/getMedicationProgrammeList",programmeListDetailsUrl:"index.php/programme/getProgrammeListDetails",patientsProgrammesUrl:"index.php/programme/getPatientProgrammes",patientListingUrl:"index.php/patient/getPatientList",saveUpdateLocations:"index.php/locations/addUpdateLocation",locationListUrl:"index.php/locations/getDoctorLocations",deliveryMethodsUrl:"index.php/patient/getDeliveryMethods",doctorUrl:"index.php/doctor/saveUpdateDoctor",doctorDetailsUrl:"index.php/doctor/getDoctorDetails",loginCheckUrl:"index.php/authenticate/isLoggedIn",doctorDashUrl:"index.php/doctorDashboard/",logoutUrl:"index.php/authenticate/logout",createModifyStaffUrl:"index.php/staff/createModifyStaff",getStaffDetailsUrl:"index.php/staff/getStaffDetails",staffListingUrl:"index.php/staff/getDoctorsStaffList"};$(document).ready(function(){$(function(){void 0;var t={init:function(){this.logoutUrl=links.logoutUrl,this.doctorProfile=links.doctorProfile,this.dashboardHomeUrl=links.dashboardHomeUrl,this.newAppointmentUrl=links.newAppointmentUrl,this.patientsEntryUrl=links.patientsEntryUrl,this.patientsListingUrl=links.patientsListingUrl,this.closeAppointmentUrl=links.closeAppointmentUrl,this.doctorsAppointmentsListUrl=links.doctorsAppointmentsListUrl,this.newScheduleUrl=links.newScheduleUrl,this.listScheduleUrl=this.listScheduleUrl,this.ScheduleCalendarUrl=links.getScheduleCalendarUrl,this.addStaffUrl=links.addStaffUrl,this.doctorsStaffListingUr=links.doctorsStaffListingUr,this.patientsHistoryUrl=links.patientsHistoryUrl,this.createProgramForPatientUrl=links.createProgramForPatientUrl,this.programmeListingsUrl=links.programmeListingsUrl,this.ManageLocationsUrl=links.ManageLocationsUrl,this.CalendarTemplateUrl=links.getCalenderUrl,this.analyticsReportUrl=links.getAnalyticsUrl,this.accountingUrl=links.accountingUrl,this.medicineSearchUrl=links.medicineSearchUrl,e.init()}},e={init:function(){$("#pms-brand-btn-link").click(function(t){t.preventDefault(),void 0}),$("#user-Profile-Btn-Link").attr("href",t.doctorProfile),$("#doctor-dash-logout-btn").attr("href",t.logoutUrl),$("#dashboard-Section-Btn").attr("href",t.dashboardHomeUrl),$("#appointment-section-link-btn").attr("href",t.doctorsAppointmentsListUrl),$("#manage-Doctors-Schedule-Section-Link-Btn").attr("href",t.ScheduleCalendarUrl),$("#btn-programme-section-link").attr("href",t.programmeListingsUrl),$("#create-program-for-patient-section").attr("href",t.createProgramForPatientUrl),$("#patients-Entry-Section-Link-Btn").attr("href",t.patientsListingUrl),$("#staff-managment-section-link-btn").attr("href",t.doctorsStaffListingUr),$("#btn-manage-locations").attr("href",t.ManageLocationsUrl),$("#analytics-side-navigation-link-btn").attr("href",t.analyticsReportUrl),$("#accounting-side-navigation-link-btn").attr("href",t.accountingUrl),$("#medicine-side-navigation-link-btn").attr("href",t.medicineSearchUrl),$("#other-settings-section-link-btn").click(function(t){t.preventDefault()}),$("#calendar-template-section-link-btn").click(function(t){t.preventDefault()})},render:function(){}};t.init()}())}),$(document).ready(function(){$(function(){void 0;var t={},e={init:function(){this.staffListingUrl=links.staffListingUrl,this.addStaffUrl=links.addStaffUrl,i.init(),$.get(e.staffListingUrl,{}).done(function(e){void 0,t=e.data,i.render()})},getListModel:function(){return t}},i={init:function(){this.tablebody=$("#staff-list-table-body"),this.newStaffButton=$("#btn-new-staff"),this.newStaffButton.on("click",function(){window.location.href=e.addStaffUrl})},render:function(){for(var t=e.getListModel(),i=0;i<t.length;i++){var r=$("<tr/>"),n=$("<td/>");n.text(t[i].firstName),r.append(n);var n=$("<td/>");n.text(t[i].contact1),r.append(n);var n=$("<td/>");n.text(t[i].email),r.append(n);var n=$("<td/>");n.text(t[i].locationName),r.append(n);var n=$("<td/>");n.text(t[i].createdDate),r.append(n);var n=$("<td/>");n.text(1==t[i].isActive?"Active":"In Active"),r.append(n);var n=$("<a/>",{text:"Edit",href:e.addStaffUrl+"?id="+t[i].id});r.append(n),this.tablebody.append(r)}}};e.init()}())});