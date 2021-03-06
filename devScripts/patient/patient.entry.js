$(document).ready(function(){

  //$('#patient-profile-image').attr('src','second.jpg');

  $(function(){
    console.log('patient entry js loaded');

    var model = {

      uniqueId:'',
      patientInfo: {
        id:0,
        name:"",
        dateOfBirth: "",
        bloodGroup:"-",
        weight:"",
        height:"",
        gender:"1",
        contact1:"",
        address: "",
        picUploadPath:"",
        isActive:1
      },
      saveGuardianInfo: false,
      guardianInfo:{
        name:"",
        dateOfBirth: "",
        gender:1,
        contact1:"",
        contact2:"",
        address: "",
        picUploadPath:""
      },
      /*
      birthInfo:{
      deliveryMethodId:0,
      birthWeight:"",
      length:"",
      head:"",
      bloodGroup:"",
      mothersName:"",
      mothersBloodGroup:"",
      fathersName:"",
      fathersBloodGroup:"",
      siblings:"",
      remarks:"",
      isActive: 0
    },
    */
    patientsProgramCount: 0,
    patientsPrograms: [],
    //View related properties,i.e. to fill drop downs
    programmeNameList: [],  //contains name value pair for the drop down
    attachedProgrammeId: 0,  //this property might not be needed
    deliveryMethods: [],
    defaultPictureName: 'defaultProfile.jpg'
  };

  function MainController(){
    //initilizing the links
    this.doctorsProgramsUrl = links.doctorsProgramsUrl;
    //this.deliveryMethodsUrl = links.deliveryMethodsUrl;

    this.programmeListDetailsUrl = links.programmeListDetailsUrl;

    this.patientDetailPersistUrl = links.patientDetailPersistUrl;
    this.patientsDetailsUrl = links.patientsDetailsUrl;
    this.patientsImageUrl = links.getpatientsImageUrl;
    this.redirectPatientsListingUrl = links.patientsListingUrl;
    this.patientsPicturePath = links.patientPicturePathUrl;
    this.guardianPicturePath = links.guardianPicturePathUrl;
    this.defaultProfilePath = links.defaultProfilePathUrl;
    model.uniqueId = this.generateUUID();

    //this.patientsProgrammesUrl = links.patientsProgrammesUrl;
  };

  //common methods
  MainController.prototype.getProgrameNameList = function () {
    return model.programmeNameList;
  };

  /*
  MainController.prototype.getDeliveryMethodsList = function () {
  return model.deliveryMethods;
};
*/

MainController.prototype.generateUUID =  function(){
  var d = new Date().getTime();
  if(window.performance && typeof window.performance.now === "function"){
    d += performance.now(); //use high-precision timer if available
  }
  var uuid = '_xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (d + Math.random()*16)%16 | 0;
    d = Math.floor(d/16);
    return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });
  return uuid;
};


MainController.prototype.getUniqueId = function(){
  return model.uniqueId;
};



MainController.prototype.getDoctorsProgrameNamesList = function(){

  $.get( this.doctorsProgramsUrl , {})
  .done(function( response ) {
    console.log("programme list: " + JSON.stringify(response));

    model.programmeNameList = response.data;
    patientProgrammeView.render();

  });

};

/*
MainController.prototype.getDeliveryMethods = function() {
//birth details
$.get( this.deliveryMethodsUrl , {})
.done(function( response ) {
console.log("delivery method: " + JSON.stringify(response));

model.deliveryMethods = response.data;
patientBirthDetailsView.render();
});
};
*/

/*
MainController.prototype.getPatientsProgrameDetails = function (patientId) {
//getting the programme list for the patient
$.get( controller.patientsProgrammesUrl , {id: patientId})
.done(function( response ) {

model.programmeLists = response.data;
model.programmeCount =  model.programmeLists.length;

console.log("programme model: " + JSON.stringify(model));

patientProgrammesDetailsView.render();

});
};
*/

//patient info related functions
MainController.prototype.getPatientsInfoModel = function () {
  return model.patientInfo;
};

MainController.prototype.updatePatientInfoModelFromView = function () {

  model.patientInfo.name = patientDetailsView.name.val();
  //var dateOfBirth = moment(patientDetailsView.dateOfbirth.val(), "YYYY-MM-DD");
  model.patientInfo.dateOfBirth = patientDetailsView.dateOfbirth.val();
  console.log('getting date ' + model.patientInfo.dateOfBirth);


  var selectedOption = patientDetailsView.bloodGroup.find(":selected");
  var bloodGrp = selectedOption.attr('value');

  model.patientInfo.bloodGroup = bloodGrp;
  model.patientInfo.weight = patientDetailsView.weight.val();
  model.patientInfo.height = patientDetailsView.height.val();
  //model.patientInfo.gender  = patientDetailsView.rbMale.val();
  //model.patientInfo.picUploadPath  = "566"
  //console.log(GlobalFilePath);
  if(patientDetailsView.rbMale.is(":checked")){
    model.patientInfo.gender = 1;
  }else{
    model.patientInfo.gender = 0;
  }

  model.patientInfo.contact1 = patientDetailsView.contact1.val();
  //model.patientInfo.contact2 = patientDetailsView.contact2.val();
  model.patientInfo.address = patientDetailsView.address.val();

  if(patientDetailsView.activeControl.is(":checked")){
    model.patientInfo.isActive = 1;
  }else{
    model.patientInfo.isActive = 0;
  }

  if($('#patient-picture-container').attr('src') !== undefined){
    var str1 =$('#patient-picture-container').attr('src');
    var n1 = str1.lastIndexOf('/');
    var result1 = str1.substring(n1 + 1);
    model.patientInfo.picUploadPath = result1;
  }

  //model.patientInfo. = patientDetailsView.picUpload;
};

//guardian info related methods
MainController.prototype.getGuardianInfoModel = function () {
  return model.guardianInfo;
};

MainController.prototype.updateGuardianInfoModelFromView = function () {

  console.log( 'before update' + JSON.stringify(model.guardianInfo));

  model.guardianInfo.name = patientGuardianDetailsView.name.val();

  //var dateOfBirth = moment(patientGuardianDetailsView.dateOfBirth.val(), "YYYY-MM-DD");
  model.guardianInfo.dateOfBirth =patientGuardianDetailsView.dateOfBirth.val();

  //model.guardianInfo.gender  = patientGuardianDetailsView.rbMale.val();
  if(patientGuardianDetailsView.rbMale.is(":checked")){
    model.guardianInfo.gender = 1;
  }else{
    model.guardianInfo.gender = 0;
  }

  console.log('guardian ' + model.guardianInfo.gender);

  model.guardianInfo.contact1 = patientGuardianDetailsView.contact1.val();
  //model.guardianInfo.contact2 = patientGuardianDetailsView.contact2.val();
  model.guardianInfo.address = patientGuardianDetailsView.address.val();

  console.log( 'after update' + JSON.stringify(model.guardianInfo));

  if($('#guardian-profile-image').attr('src') !== undefined){
    var str = $('#guardian-profile-image').attr('src');
    var n = str.lastIndexOf('/');
    var result = str.substring(n + 1);
    model.guardianInfo.picUploadPath = result;
  }

};

//birth info realted functions
/*
MainController.prototype.getBirthInfoModel = function () {
return model.birthInfo;
};

MainController.prototype.updatebirthInfoFromView = function () {

model.birthInfo.deliveryMethodId = patientBirthDetailsView.selectDeliveryMethods.find(":selected").attr('value');

model.birthInfo.birthWeight = patientBirthDetailsView.birthWeight.val();
model.birthInfo.length = patientBirthDetailsView.birthLenght.val();
model.birthInfo.head = patientBirthDetailsView.birthHead.val();
model.birthInfo.bloodGroup = patientBirthDetailsView.bloodGroup.val();
model.birthInfo.mothersName = patientBirthDetailsView.mothersName.val();
model.birthInfo.mothersBloodGroup = patientBirthDetailsView.mothersBloodGroup.val();
model.birthInfo.fathersName = patientBirthDetailsView.fathersName.val();
model.birthInfo.fathersBloodGroup = patientBirthDetailsView.fathersBloodGroup.val();
model.birthInfo.siblings = patientBirthDetailsView.siblings.val();
model.birthInfo.remarks = patientBirthDetailsView.birthRemarks.val();

};
*/

//check up programe related function

MainController.prototype.getPatientsProgramsModel = function () {
  return model.patientsPrograms;
};

MainController.prototype.addDoctorsProgramToPatient = function (programmeId, programmeName) {


  var lpatientsPrograms = this.getPatientsProgramsModel();

  console.log('program id to check' + programmeId);
  for(var i = 0; i < lpatientsPrograms.length; i++ ){
    if(lpatientsPrograms[i].id == programmeId){
      //if the program is already attached to the patient then dont attach
      return;
    }
  }

  //getting the doctors programme, and rendering the programmes view
  $.get( this.programmeListDetailsUrl , {id: programmeId})
  .done(function( response ) {
    console.log('getting program details for patient' + JSON.stringify(response));
    if(response.status == 1){
      var programme = {
        id: programmeId,
        name: programmeName,
        startDate : moment().format('DD-MM-YYYY'),
        count: response.data.length,
        list: response.data
      };
      model.patientsPrograms.push(programme);
      model.patientsProgramCount = model.patientsPrograms.length;

      patientProgrammesDetailsView.render();
      //model.programmeList = response.data;
    }
  });
};

//updating models with info from the views
MainController.prototype.updateModelsFromViews = function () {

  controller.updatePatientInfoModelFromView();
  controller.updateGuardianInfoModelFromView();
  //controller.updatebirthInfoFromView();
};

//get all the info of the patient
MainController.prototype.getPatientsModelServer = function (patientId) {
  $.get( this.patientsDetailsUrl , {id:patientId})
  .done(function( response ) {
    console.log('model server' + JSON.stringify(response));
    //assign the model the data retreived from the server
    model.patientInfo = response.data.patient;

    if(response.data.guardian && response.data.guardian.empty == false){
      //if(!$.isEmptyObject(response.data.patient)){
      console.log('setting model' + response.data.guardian);
      model.guardianInfo = response.data.guardian;
    }

    console.log('model page' + JSON.stringify(model.guardianInfo));

    //model.birthInfo = response.data.birthDetails;
    model.patientsPrograms = response.data.programmeLists;
    model.patientsProgramCount = model.patientsPrograms.length;
    //patients programme info

    patientDetailsView.render();
    patientGuardianDetailsView.render();
    //patientBirthDetailsView.render();
    patientProgrammesDetailsView.render();

  });
};

//save update the entire model on server
MainController.prototype.persistModel = function () {
  //console.log('persisting ' + JSON.stringify(model));

  var postData  = {
    patientInfo: model.patientInfo,
    patientsPrograms: model.patientsPrograms,
    programmeCount: model.patientsProgramCount,
    uniqueId: model.uniqueId
  };

  if(model.saveGuardianInfo){
    console.log('adding guardians info');

    var postData  = {
      patientInfo: model.patientInfo,
      guardianInfo: model.guardianInfo,
      patientsPrograms: model.patientsPrograms,
      programmeCount: model.patientsProgramCount,
      uniqueId: model.uniqueId
    };
  }

  console.log('posting ' + JSON.stringify(postData));

  $.post( this.patientDetailPersistUrl , postData)
  .done(function( response ) {
    console.log('save response' + JSON.stringify(response));

    if(response.status == 1){
      window.location.href = links.patientsListingUrl+'?status=1';
    }
    //redirect to patient listing
  });
};


//them intilize wiring method
MainController.prototype.init = function(){

  //initilizing the views
  patientDetailsView.init();
  patientGuardianDetailsView.init();
  //patientBirthDetailsView.init();
  patientProgrammeView.init();
  patientProgrammesDetailsView.init();

  //getting data from the server, and building the model for rendering

  //getting the data for the select options
  //this.getDeliveryMethods();
  this.getDoctorsProgrameNamesList();

  var patientId = utility.getURLParam('id');

  if(!patientId){
    patientDetailsView.render();
    patientDetailsView.tab.trigger('click');
    //if this is a new patient then return
    return;
  }

  //getting patient specific data to build a model

  console.log('patient Id ' + patientId);

  this.getPatientsModelServer(patientId);

  //select the patients info tab
  patientDetailsView.tab.trigger('click');
  console.log('trigger click');

};

var patientDetailsView = {
  init: function(){
    this.tab = $('#patients-entry-link');
    this.patientForm = $("#patientDetailsEntryForm");
    this.name = $('#patient-name');
    this.dateOfbirth = $('#patient-date-of-birth');
    this.bloodGroup = $('#patient-blood-group');
    this.weight = $('#patient-weight-input');
    this.height = $('#patient-height');
    this.rbMale = $('#rb-male');
    this.rbFemale = $('#rb-female');
    this.contact1 = $('#patient-contact1');
    //this.contact2 = $('#patient-contact2');
    this.address = $('#patient-address');
    this.picUpload =$('#patient-picture');
    this.imgBox = $('#patient-picture-container');
    this.activeControl = $('#pactive');
    this.inactiveControl = $('#pinactive');
    this.submitBtn =  $('.patients-detail-form-submit');
    this.patientHistoryLinkBtn = $('#patients-history-link');

    this.patientHistorySection = $('#patient-history-panel');

    this.dateOfbirth.attr("readonly", true);



    this.initValidators();

    this.dateOfbirth.datetimepicker({
      inline: false,
      format:'DD-MM-YYYY',
      maxDate: new Date(),
      widgetPositioning:{
        vertical:'bottom'
      },
      ignoreReadonly: true
    });

    this.dateOfbirth.on('dp.change', function(){
      var dob = patientDetailsView.dateOfbirth.val();
      console.log('dob ' + dob);
      if(dob){
        $('.program-bday').val(dob);
        $('.bstart-date-radio').prop('disabled', false);
      }
    });


    this.submitBtn.on('click',function(){

      console.log("save click common");

      //validate Patient info form
      patientDetailsView.formValidator.data('bootstrapValidator').validate();

      var isPatientformValid = patientDetailsView.formValidator.data('bootstrapValidator').isValid();

      if(!isPatientformValid){

        console.log('patient form invalid');
        patientDetailsView.tab.trigger('click');
        return;
      }

      //patient form is valid, check guardian form validate only if its dirty

      var guardianFormDirty = patientGuardianDetailsView.isFormdirty();

      console.log('guardian form dirty' + guardianFormDirty);

      if(guardianFormDirty){

        patientGuardianDetailsView.formValidator.data('bootstrapValidator').validate();
        var isGuardianFormValid = patientGuardianDetailsView.formValidator.data('bootstrapValidator').isValid();

        if(!isGuardianFormValid){

          console.log('guardian form invalid');
          patientGuardianDetailsView.tab.trigger('click');
          return;
        }

      }

      //at this point guardian form is either valid or totally blank
      //if its dirty then save guardian info

      if(guardianFormDirty){
        model.saveGuardianInfo = true;
        console.log('save guardian info' + model.saveGuardianInfo);
      }

      console.log('submit data');
      //console.log('save click' + JSON.stringify(model));
      controller.updateModelsFromViews();


      controller.persistModel();

    });

    var process_url =  links.PatientUploadimage; //PHP script
    this.picUpload.fileupload({
      url: process_url,
      dataType: 'json',
      autoUpload: false,

      acceptFileTypes: /(\.|\/)(gif|jpe?g|png|mp4|mp3)$/i,
      maxFileSize: 2097152, //2MB
      maxNumberOfFiles:'1',

      // Enable image resizing, except for Android and Opera,
      // which actually support image resizing, but fail to
      // send Blob objects via XHR requests:
      disableImageResize: /Android(?!.*Chrome)|Opera/
      .test(window.navigator.userAgent),
      previewMaxWidth: 50,
      previewMaxHeight: 50,
      previewCrop: true

    });

    var progressBar = $('<div/>').addClass('progress').append($('<div/>').addClass('progress-bar')); //create progress bar
    var uploadButton = $('<button/>').addClass('btn btn-info ').text('Upload');    //create upload button



    this.picUpload.on('fileuploadadd', function (e, data) {
      var mediaType = data.files[0].type;
      console.log('file media type ' + data.files[0].type);
      var array = mediaType.split('/');
      var invalidFileType = true;
      if(array[0] == 'image'
      && (array[1] == 'jpeg')
      || (array[1] == 'png')
      || (array[1] == 'jpg')
    ){
      invalidFileType = false;
    }

    if(data.files[0].size > 2097152 || invalidFileType){

      var alertSting = '';
      if(data.files[0].size > 2097152 ){
        alertSting  = 'Maximmum file upload size is 2mb';
      }

      if(invalidFileType){
        alertSting  = alertSting  + ' and only image type of jpg,jpeg and png accepted';
      }


      utility.getAlerts(alertSting,'alert-warning','','.tab-content');

    }else{

      $("#patient-picture").attr('disabled','disabled');
      data.context = $('<div/>').addClass('file-wrapper').appendTo('#files'); //create new DIV with "file-wrapper" class
      $.each(data.files, function (index, file){  //loop though each file
        var node = $('<div/>').addClass('file-row'); //create a new node with "file-row" class
        var removeBtn  = $('<button/>').addClass('btn btn-default btn-sm ').text('Remove'); //create new remove button
        removeBtn.on('click', function(e, data){ //remove button function
          $("#patient-picture").removeAttr('disabled');
          $(this).parent().parent().remove(); //remove file's wrapper to remove queued file
        });

        //create file info text, name and file size
        var file_txt = $('<div/>').addClass('file-row-text ').append('<span>'+file.name  + '</span>');


        $("#patient-picture-container").attr('src',URL.createObjectURL(data.files[0]));

        file_txt.append(removeBtn); //add remove button inside info text element
        file_txt.prependTo(node); //add to node element
        progressBar.clone().appendTo(file_txt); //add progress bar
        if (!index){
          node.prepend(file.preview); //add image preview
        }

        node.appendTo(data.context); //attach node to data context
      });

      //go ahead and submit the data
      data.formData = {
        'uploadId': controller.getUniqueId()
      }
      console.log(JSON.stringify(data.files[0].size));

      data.submit();
    }

  });
  this.picUpload.on('fileuploadprogress', function (e, data) {
    var progress = parseInt(data.loaded / data.total * 100, 10);
    if (data.context) {
      data.context.each(function () {
        $(this).find('.progress').attr('aria-valuenow', progress).children().first().css('width',progress + '%').text(progress + '%');
      });
    }
  });
  this.picUpload.on('fileuploaddone', function (e, data) { // invoke callback method on success
    $.each(data.result.files, function (index, file) { //loop though each file
      if (file.url){ //successful upload returns a file url
        var link = $('<a>') .attr('target', '_blank') .prop('href', file.url);
        $(data.context.children()[index]).addClass('file-uploaded');
        $(data.context.children()[index]).find('canvas').wrap(link); //create a link to uploaded file url
        $(data.context.children()[index]).find('.file-remove').hide(); //hide remove button
        var done = $('<span class="text-success"/>').text('Uploaded!'); //show success message
        $(data.context.children()[index]).append(done); //add everything to data context
      } else if (file.error) {
        var error = $('<span class="text-danger"/>').text(file.error); //error text
        $(data.context.children()[index]).append(error); //add to data context
      }
    });
  });
  //this.tab.hide();
},
initValidators: function(){

  //setting up validations
  this.contact1.prop('maxlength', 15);

  this.formValidator = this.patientForm.bootstrapValidator({
    trigger:"focus click change keyup select blur ",
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok ',
      invalid: 'glyphicon glyphicon-remove ',
      validating: 'glyphicon glyphicon-refresh'
    },
    excluded: [':disabled'],
    fields:{
      P_username : {
        validators : {
          notEmpty : {
            message : 'Please Enter your  Name!'
          }
        }

      },
      P_Dob : {
        validators : {
          notEmpty :{
            message : 'Please select date'
          }
        }
      },
      p_weight :{

        validators : {
          numeric :{
            message : 'Please enter numbers',
            separator: ','
          }
        }
      },
      p_height :{

        validators : {
          numeric :{
            message : 'Please enter numbers',
            separator: ','
          }
        }
      },
      p_phnNo :{

        validators : {
          notEmpty :{
            message : 'Please enter Patients contact no'
          },
          regexp: {
            regexp: /^\+?[0-9()-\s]+$/,
            message: 'Please enter valid phone number'
          }

        }
      }
    }
  });

},
render: function(){

  //var model = controller.getPatientModel();
  var lpatientInfo = controller.getPatientsInfoModel();

  //  console.log('render patients info' + JSON.stringify(lpatientInfo));

  this.name.val(lpatientInfo.name);
  //var dateOfBirth = moment(lpatientInfo.dateOfBirth, 'DD-MM-YYYY');
  //console.log('dob model' + lpatientInfo.dateOfBirth);
  this.dateOfbirth.val(lpatientInfo.dateOfBirth);
  //console.log('dob' + dateOfBirth.format('YYYY-MM-DD'));
  this.bloodGroup.val(lpatientInfo.bloodGroup);
  this.weight.val(lpatientInfo.weight);
  this.height.val(lpatientInfo.height);
  this.contact1.val(lpatientInfo.contact1);
  //this.contact2.val(lpatientInfo.contact2);
  this.address.val(lpatientInfo.address);
  //  var picturePathe = '';
  console.log('controller profile path' + controller.defaultProfilePath );
  console.log('controller model path' + controller.patientsPicturePath );
  var imageSource = '';

  if(lpatientInfo.picturePath == 'null' || lpatientInfo.picturePath == null || !lpatientInfo.picturePath || 0 === lpatientInfo.picturePath.trim().length){

    imageSource = controller.defaultProfilePath + model.defaultPictureName;

    console.log('patient picture path is null'+ imageSource );
  }else{
    imageSource = controller.patientsPicturePath + lpatientInfo.picturePath;
    console.log('patient picture path is set' + imageSource);
  }
  console.log('full path' + imageSource);
  this.imgBox.attr('src', imageSource);
  //this.picUpload.val(model.);


  console.log('patient status' + lpatientInfo.gender);

  //$('#rb-male').prop('checked', true);


  if(+lpatientInfo.gender == 1){
    console.log('gender male');
    this.rbMale.prop('checked', true);
    //  this.rbFemale.prop('checked', false);
  } else{
    console.log('gender female');
    //this.rbMale.prop('checked', false);
    this.rbFemale.prop('checked', true);
  }

  if(lpatientInfo.isActive == 1){
    this.activeControl.prop('checked', true);
    //this.inactiveControl.prop('checked', false);
  }else{
    //this.activeControl.prop('checked', false);
    this.inactiveControl.prop('checked', true);
  }

}
};


var patientGuardianDetailsView = {
  init: function(){
    this.tab = $('#guardian-entry-link');
    this.form = $("#guardian-form");
    this.name = $('#txt-guardian-name');
    this.dateOfBirth = $('#guardian-dob');
    this.rbMale = $('#rb-male-guardian');
    this.rbFemale = $('#rb-female-guardian');
    this.contact1 = $('#guardian-contact1');
    //this.contact2 = $('#guardian-contact2');
    this.address = $('#guardian-address');
    this.save = $('#btn-guardian-save');
    this.picUpload =$('#guardian-picture');
    this.imgBox = $('#guardian-profile-image');

    this.initValidators();

    var Gprocess_url =  links.GaurdianUploadimage; //PHP script
    this.picUpload.fileupload({
      url: Gprocess_url,
      dataType: 'json',
      autoUpload: false,


      acceptFileTypes: /(\.|\/)(gif|jpe?g|png|mp4|mp3)$/i,
      maxFileSize: 2097152, //2MB
      maxNumberOfFiles:'1',

      // Enable image resizing, except for Android and Opera,
      // which actually support image resizing, but fail to
      // send Blob objects via XHR requests:
      disableImageResize: /Android(?!.*Chrome)|Opera/
      .test(window.navigator.userAgent),
      previewMaxWidth: 50,
      previewMaxHeight: 50,
      previewCrop: true

    });

    var progressBar = $('<div/>').addClass('progress').append($('<div/>').addClass('progress-bar')); //create progress bar
    var uploadButton = $('<button/>').addClass('btn btn-info ').text('Upload');    //create upload button



    this.picUpload.on('fileuploadadd', function (e, data) {

      var mediaType = data.files[0].type;
      console.log('file media type ' + data.files[0].type);
      var array = mediaType.split('/');
      var invalidFileType = true;
      if(array[0] == 'image'
      && (array[1] == 'jpeg')
      || (array[1] == 'png')
      || (array[1] == 'jpg')
    ){
      invalidFileType = false;
    }

    if(data.files[0].size > 2097152 || invalidFileType){

      var alertSting = '';
      if(data.files[0].size > 2097152 ){
        alertSting  = 'Maximmum file upload size is 2mb';
      }

      if(invalidFileType){
        alertSting  = alertSting  + ' and only image type of jpg,jpeg and png accepted';
      }


      utility.getAlerts(alertSting,'alert-warning','','.tab-content');

    }else{
      $("#guardian-picture").attr('disabled','disabled');
      data.context = $('<div/>').addClass('file-wrapper').appendTo('#files2'); //create new DIV with "file-wrapper" class

      $.each(data.files, function (index, file){  //loop though each file

        var node = $('<div/>').addClass('file-row'); //create a new node with "file-row" class

        var removeBtn  = $('<button/>').addClass('btn btn-default btn-sm ').text('Remove'); //create new remove button
        removeBtn.on('click', function(e, data){ //remove button function
          $("#guardian-picture").removeAttr('disabled');
          $(this).parent().parent().remove(); //remove file's wrapper to remove queued file
        });

        //create file info text, name and file size
        var file_txt = $('<div/>').addClass('file-row-text ').append('<span>'+file.name  + '</span>');
        //console.log('UPlaod file info '+ JSON.stringify(URL.createObjectURL(data.files[0])));



        $("#guardian-profile-image").attr('src',URL.createObjectURL(data.files[0]));

        file_txt.append(removeBtn); //add remove button inside info text element
        file_txt.prependTo(node); //add to node element
        progressBar.clone().appendTo(file_txt); //add progress bar
        if (!index){
          node.prepend(file.preview); //add image preview

        }


        node.appendTo(data.context); //attach node to data context
      });
      //go ahead and submit the data
      data.formData = {
        'uploadId': controller.getUniqueId()
      }
      console.log(JSON.stringify(data.files[0].size));

      data.submit();
    }

  });
  this.picUpload.on('fileuploadprogress', function (e, data) {
    var progress = parseInt(data.loaded / data.total * 100, 10);
    if (data.context) {
      data.context.each(function () {
        $(this).find('.progress').attr('aria-valuenow', progress).children().first().css('width',progress + '%').text(progress + '%');
      });
    }
  });
  this.picUpload.on('fileuploaddone', function (e, data) { // invoke callback method on success
    $.each(data.result.files, function (index, file) { //loop though each file
      if (file.url){ //successful upload returns a file url
        var link = $('<a>') .attr('target', '_blank') .prop('href', file.url);
        $(data.context.children()[index]).addClass('file-uploaded');
        $(data.context.children()[index]).find('canvas').wrap(link); //create a link to uploaded file url
        $(data.context.children()[index]).find('.file-remove').hide(); //hide remove button
        var done = $('<span class="text-success"/>').text('Uploaded!'); //show success message
        $(data.context.children()[index]).append(done); //add everything to data context
      } else if (file.error) {
        var error = $('<span class="text-danger"/>').text(file.error); //error text
        $(data.context.children()[index]).append(error); //add to data context
      }
    });
  });

  this.dateOfBirth.attr("readonly", true);
  this.dateOfBirth.datetimepicker({
    inline: false,
    format:'DD-MM-YYYY',
    maxDate: new Date(),
    ignoreReadonly: true
  });

},
initValidators: function(){

  //maxlenght validation
  this.contact1.prop('maxlength', 15);

  this.formValidator = this.form.bootstrapValidator({
    trigger:"focus click change keyup select blur ",
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok ',
      invalid: 'glyphicon glyphicon-remove ',
      validating: 'glyphicon glyphicon-refresh'
    },
    excluded: [':disabled'],
    fields:{
      guardianname : {
        validators : {
          notEmpty : {
            message : 'Please Enter your  Name'
          }
        }

      },
      guardiancontact1 :{

        validators : {
          notEmpty :{
            message : 'Please enter a phone no.'
          },
          regexp: {
            regexp: /^\+?[0-9()-\s]+$/,
            message: 'Please enter a valid phone no.'
          }
        }
      }
    }
  });

},
isFormdirty: function(){

  if( (this.name.val() && this.name.val().trim().length > 0) ||
  (this.contact1.val() && this.contact1.val().trim().length > 0)  ){
    return true;
  }

  return false;

},
render: function(){

  var lguardianInfo = controller.getGuardianInfoModel();

  this.name.val(lguardianInfo.name);

  this.dateOfBirth.val(lguardianInfo.dateOfBirth);
  //console.log('dob' + dateOfBirth.format('YYYY-MM-DD'));

  this.contact1.val(lguardianInfo.contact1);
  //this.contact2.val(lguardianInfo.contact2);
  this.address.val(lguardianInfo.address);



  if(lguardianInfo.picturePath == 'null' || lguardianInfo.picturePath == null || !lguardianInfo.picturePath || 0 === lguardianInfo.picturePath.trim().length){

    this.PicturePath = controller.defaultProfilePath + model.defaultPictureName;

  }else{

    this.PicturePath = controller.guardianPicturePath + lguardianInfo.picturePath;

  }

  this.imgBox.attr('src',this.PicturePath);


  //this.picUpload.val(model.);


  if(lguardianInfo.gender == 1){
    this.rbMale.prop('checked', true);
    //this.rbFemale.prop('checked', false);
  } else{
    //this.rbMale.prop('checked', false);
    this.rbFemale.prop('checked', true);

  }
}
}

var patientProgrammeView = {
  init: function(){
    console.log('init docs program view');
    this.tab = $('#patients-programme-link');
    this.doctorsProgramsSel = $('#sel-program-list');
    this.attachCheckupProgram = $('#btn-attach-programme');


    this.attachCheckupProgram.click(function(){

      var selectedOption = patientProgrammeView.doctorsProgramsSel.find(":selected");

      var selectedValue = selectedOption.attr('value');
      var name = selectedOption.text();
      if(selectedValue){
        //controller.setAttachedProgrammeId(selectedValue);
        controller.addDoctorsProgramToPatient(selectedValue, name);

      }
      console.log('programme attach click selected id, name: ' + selectedValue + name);
    });

  },
  render: function(){
    var programmelist =  controller.getProgrameNameList();

    console.log('render programme view' + JSON.stringify(programmelist));
    this.doctorsProgramsSel.empty();

    for(var i= 0; i < programmelist.length; i++){
      this.doctorsProgramsSel.append($('<option value="'+programmelist[i].id +'">'+ programmelist[i].name + '</option>'));
      //console.log(this.programmeSelect);
    }

  }
};

var patientProgrammesDetailsView = {
  init: function () {
    this.tableParentPanel = $('#programme-table-parent'); //this node contains the table panels
    this.tablePanelNode = $('#programme-table-panel');  //this node contains the table inside it
    //this.tablePanelNode.hide();//used to make clones, its hidden in html but this is just a double setProgrammeFromServer
    //cloneNode(true);  clone the children too, when true is passed
    this.tableTemplate = $('.table-container');
    this.tablePanelNode.hide();
  },
  render: function() {

    //this.tableParentPanel.empty();

    var programmeModel = controller.getPatientsProgramsModel();
    console.log('program details view render ' + JSON.stringify(programmeModel));

    if(programmeModel) {

      //var cloneTablePanel = this.tablePanelNode;
      var panelBody =  this.tablePanelNode.find('.panel-body');

      panelBody.empty();

      for(var i = 0; i < programmeModel.length; i++){
        console.log('building programme table for ' + JSON.stringify(programmeModel[i]));

        var cloneTable =  this.tableTemplate.find('.clone-table').clone();
        cloneTable.removeClass('clone-table');
        cloneTable.removeClass('hidden');

        var cloneTablebody = cloneTable.find('tbody');

        //var label = cloneTablePanel.find('.programme-name');

        //console.log('name ' + programmeModel[i].name);
        var label = cloneTable.find('.header');
        label.text(programmeModel[i].name);
        var label2 = cloneTable.find('.header2');
        label2.text("Programe starts from :"+programmeModel[i].startDate);


        //cloneTablePanel.find('table').prepend('<h1>Header</h1>')

        this.renderProgramDetails(programmeModel[i].list, cloneTablebody);


    //bdate

    var bdatespan = $('<div/>',{
      class: 'input-group date col-md-4 col-sm-4',
      style:'min-width:100px'
    });
    var bSpan = $('<span/>',{
      class:'input-group-addon'
    });
    var dateIcon = $('<span/>',{
      class:"glyphicon glyphicon-calendar"
    });

    var bdate = $('<input/>', {
      type: 'text',
      class:'form-control program-bday'
    });

    bdatespan.append(bdate);
    bSpan.append(dateIcon);
    bdatespan.append(bSpan);

    bdate.attr("readonly", true);
    //need to set the birth date from the date set from patient value


    //adding dates to labels with radio buttons

    var lblContainer = $('<div/>',{
      class:"radio"
    });
    var lbl = $('<label/>',{
      text:'Birth date'
    });

    var dRadio = $('<input/>',{
      type: 'radio'
      ,class: 'bstart-date-radio'
      ,name: programmeModel[i].id
    });


    var patientInfo = controller.getPatientsInfoModel();


      if(!patientInfo.dateOfBirth || 0 === patientInfo.dateOfBirth.trim().length){
        dRadio.prop('disabled', true);
      }else{
        dRadio.prop('disabled', false);
        bdate.val(patientInfo.dateOfBirth);
      }

      var updatedueOnDateCallBack = function(programList, date){

        var mDate = moment(date, 'DD-MM-YYYY');
        for(var counter = 0; counter < programList.length; counter++ ){

          var mdueOn = mDate.add(programList[counter].durationDays, 'days');
          programList[counter].dueOn = mdueOn.format('DD-MM-YYYY');
        }

        return programList;
      }

    dRadio.on('change',(function(programModel, dateControl, updateCallback, tablebody, startDateLabel){

      return function(){
        console.log('ddate radio');

        if($(this).is(":checked")){
          console.log('bdate checked');

          var bdateVal = dateControl.val();

          if(bdateVal && bdateVal.trim().length > 0){
           console.log('update the due on date');


           programModel.startDate = bdateVal;
           startDateLabel.text("Programe starts from :"+bdateVal);

           var programList = programModel.list;

           programModel.list = updateCallback(programList, bdateVal);

           patientProgrammesDetailsView.renderProgramDetails(programModel.list, tablebody);

          }
          console.log('program model ' + JSON.stringify(programModel));

        }
      }

    })(programmeModel[i], bdate, updatedueOnDateCallBack, cloneTablebody, label2));


    lbl.prepend(dRadio);
    lblContainer.append(lbl);


    panelBody.append('<label>Change programs start date:-</label>');
    panelBody.append(lblContainer);
    panelBody.append(bdatespan);

    //second option for specific date

    var specificDateDiv = $('<div/>',{
      class: 'input-group date col-md-4 col-sm-4',
      style:'min-width:100px'
    });
    var sSpan = $('<span/>',{
      class:'input-group-addon'
    });
    var dateIcon = $('<span/>',{
      class:"glyphicon glyphicon-calendar"
    });

    var sdate = $('<input/>', {
      type: 'text',
      class:'form-control '
    });


    specificDateDiv.append(sdate);
    sSpan.append(dateIcon);
    specificDateDiv.append(sSpan);
    sdate.attr("readonly", true);
    sdate.datetimepicker({
      inline: false,
      format:'DD-MM-YYYY',
      widgetPositioning:{
        vertical:'bottom'
      },
      ignoreReadonly: true
    });

    //setting todays date
    sdate.val(moment().format('DD-MM-YYYY'));

    var lblContainer = $('<div/>',{
      class:'radio'
    });
    var lbl = $('<label/>',{
      text:'Specific date:'
    });

    var sRadio = $('<input/>',{
      type: 'radio'
      ,name: programmeModel[i].id
    });


    sRadio.on('change', (function(programModel, dateControl, updateCallback, tablebody, startDateLabel){
      return function(){
          if($(this).is(":checked")){

            var sdateVal = dateControl.val();

            if(sdateVal && sdateVal.trim().length > 0){

              programModel.startDate = sdateVal;
              startDateLabel.text("Programe starts from :"+sdateVal);

               var programList = programModel.list;

               programModel.list = updateCallback(programList, sdateVal);


               patientProgrammesDetailsView.renderProgramDetails(programModel.list, tablebody);
               //patientProgrammesDetailsView.render();

            }

          }
        //callback(programModel, dateControl);
      }
    })(programmeModel[i], sdate, updatedueOnDateCallBack, cloneTablebody, label2));

    //lbl.append('Specific date');
    lbl.prepend(sRadio);
    //lbl.append(specificDateDiv);
    lblContainer.append(lbl);
    panelBody.append(lblContainer);
    panelBody.append(specificDateDiv);
    panelBody.append('<hr class="invisible">');

    //panelBody.append(specifiedDatespan);

    panelBody.append(cloneTable);
    cloneTable.show();

    sdate.on('dp.change', (function(programModel, updateCallback, tablebody, startDateLabel){

      return function(){
        console.log('date change');
         var sdateVal = $(this).val();

         if(sdateVal && sdateVal.trim().length > 0){

           programModel.startDate = sdateVal;
           startDateLabel.text("Programe starts from :"+sdateVal);

            var programList = programModel.list;

            programModel.list = updateCallback(programList, sdateVal);

          //  programmetableRender(cloneTable,programmeModel);
          patientProgrammesDetailsView.renderProgramDetails(programModel.list, tablebody);

            //patientProgrammesDetailsView.render();

         }
      }

    })(programmeModel[i], updatedueOnDateCallBack, cloneTablebody, label2));

    //cloneTablePanel.show();

  }//outer for loop

  this.tableParentPanel.append(this.tablePanelNode);
  this.tableParentPanel.removeClass('hidden');
  this.tablePanelNode.show();

}

//adding the table panel

},
renderProgramDetails: function(programmeList, cloneTablebody){

  cloneTablebody.empty();

  for(var j = 0; j <  programmeList.length; j++ ){

    var tr = $('<tr/>');

    var td = $('<td/>');
    td.text(programmeList[j].durationText);
    tr.append(td);

    td = $('<td/>');
    td.text(programmeList[j].medicine);
    tr.append(td);

    td = $('<td/>');
    td.text(programmeList[j].doseNo);
    tr.append(td);

    //due on
    var dateDiv = $('<div/>',{
      class: 'input-group date',
      style:'min-width:100px'
    });

    var spanDate = $('<span/>',{
      class:'input-group-addon'
    });

    var dateGlyphicon = $('<span/>',{
      class:"glyphicon glyphicon-calendar"
    });

    var dueOn = $('<input/>', {
      type: 'text',
      class:'form-control'


    });
    dateDiv.append(dueOn);
    spanDate.append(dateGlyphicon);
    dateDiv.append(spanDate);
    dueOn.attr("readonly", true);
    dueOn.attr("disabled",true);
    dueOn.datetimepicker({
      inline: false,
      format:'DD-MM-YYYY',
      widgetPositioning:{
        vertical:'bottom'
      },
      ignoreReadonly: true
      //minDate: moment()
    });

    dueOn.val(programmeList[j].dueOn);

    td = $('<td/>');
    td.append(dateDiv);
    tr.append(td);

    //givenOn
    var dateDiv = $('<div/>',{
      class: 'input-group date',
      style:'min-width:100px'
    });

    var spanDate = $('<span/>',{
      class:'input-group-addon'
    });

    var dateGlyphicon = $('<span/>',{
      class:"glyphicon glyphicon-calendar"
    });

    var givenOn = $('<input/>', {
      type: 'text',
      class:'form-control'
    });

    dateDiv.append(givenOn);
    spanDate.append(dateGlyphicon);
    dateDiv.append(spanDate);
    givenOn.attr("readonly", true);
    givenOn.datetimepicker({
      inline: false,
      format:'DD-MM-YYYY',
      widgetPositioning:{
        vertical:'bottom'
      },
      ignoreReadonly: true
    });

    if(programmeList[j].dueOn){
      //var mdueDate = moment(programmeModel[i].list[j].dueOn, 'DD-MM-YYYY');
      //givenOn.data("DateTimePicker").minDate(programmeModel[i].list[j].dueOn);
    }

    //var date = moment(programmeModel[i].list[j].givenOn, 'DD-MM-YYYY');
    givenOn.val(programmeList[j].givenOn);

    givenOn.on('dp.change', (function(model, givenOnControl, dueOnControl){
      return  function() {
        //var dueDate = moment(model.dueOn, 'YYYY-MM-DD');
        //var givenOn = moment(control.val(), 'YYYY-MM-DD');

        //set min date of givenon to one day less then due date

        model.givenOn = givenOnControl.val();

        console.log('change + ' + JSON.stringify(model));
      }
    })(programmeList[j], givenOn, dueOn));


    //event controller for dueon date picker
    dueOn.on('dp.change', (function(model, dueOnControl, givenOnControl){
      return  function() {

        var dueOnStr = dueOnControl.val();

        /*
        if(dueOnStr &&  model.givenOn){

        var dueOn = moment(dueOnControl.val(), 'DD-MM-YYYY');
        var givenOn = moment(model.givenOn, 'DD-MM-YYYY');

        givenOnControl.data("DateTimePicker").minDate(dueOnStr);

        if(dueOn > givenOn){
        model.givenOn = dueOnStr;
        givenOnControl.val(dueOnStr);
      }

    }
    */

    model.dueOn = dueOnStr;
    console.log('change + ' + JSON.stringify(model));

  }
})(programmeList[j], dueOn, givenOn));

td = $('<td/>');
td.append(dateDiv);
tr.append(td);

//batchNo
var input = $('<input/>', {
  type: 'input',
  class:'form-control'
});

input.val(programmeList[j].batchNo);

input.keyup((function(model, control){
  return  function() {
    model.batchNo = control.val();
    console.log('change + ' + JSON.stringify(model));
  }
})(programmeList[j], input));

td = $('<td/>');
td.append(input);
tr.append(td);

cloneTablebody.append(tr);
} //inner for loop

}
}

/*
var patientBirthDetailsView = {
init: function(){
this.tab = $('#birth-entry-link');
this.selectDeliveryMethods = $('#delivery-method');
this.birthWeight = $('#birth-weight');
this.birthLenght = $('#birth-length');
this.birthHead = $('#birth-head');
this.bloodGroup = $('#birth-blood-group');
this.mothersName = $('#mother-name');
this.mothersBloodGroup = $('#mother-blood-group');
this.fathersName = $('#father-name');
this.fathersBloodGroup = $('#father-blood-group');
this.siblings = $('#siblings');
this.birthRemarks = $('#birth-remarks');

},
render: function(){

this.selectDeliveryMethods.empty();

//adding the select option to the list
var option = $('<option/>',{
value: 0,
text: 'Select...',
selected: 'selected'
}
);
this.selectDeliveryMethods.append(option);

var deliveryMethods = controller.getDeliveryMethodsList();

for(var i = 0; i < deliveryMethods.length; i++){
var option = $('<option/>',{
value: deliveryMethods[i].id,
text: deliveryMethods[i].name
}
);
this.selectDeliveryMethods.append(option);

}//

var lbirthInfo = controller.getBirthInfoModel();

this.selectDeliveryMethods.val(lbirthInfo.deliveryMethodId);
this.birthWeight.val(lbirthInfo.birthWeight);
this.birthLenght.val(lbirthInfo.length);
this.birthHead.val(lbirthInfo.head);
this.bloodGroup.val(lbirthInfo.bloodGroup);
this.mothersName.val(lbirthInfo.mothersName);
this.mothersBloodGroup.val(lbirthInfo.mothersBloodGroup);
this.fathersName.val(lbirthInfo.fathersName);
this.fathersBloodGroup.val(lbirthInfo.fathersBloodGroup);
this.siblings.val(lbirthInfo.siblings);
this.birthRemarks.val(lbirthInfo.remarks);

}
}
*/

//controller.init();

controller = new MainController();
controller.init();

}());

});
