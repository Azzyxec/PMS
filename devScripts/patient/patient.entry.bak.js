$(document).ready(function(){


  $(function () {
    $('[data-toggle="popover"]').popover()
  });

  $(function(){
    console.log('patient entry js loaded');

    var model = {
      patientInfo: {
        id:0,
        name:"",
        dateOfBirth: "",
        bloodGroup:"",
        weight:"",
        height:"",
        gender:"1",
        contact1:"",
        contact2:"",
        address: "",
        isGuardian: 0,
        guardianId: 0
      },
      guardianInfo:{
        name:"",
        dateOfBirth: "",
        gender:"1",
        contact1:"",
        contact2:"",
        address: "",
      },
      birthInfo:{
        deliveryMethodId:1,
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
      programmeCount: 0,
      programmeLists: [],
      //View related properties,i.e. to fill drop downs
      programmeNameList: [],  //contains name value pair for the drop down
      attachedProgrammeId: 0,
      deliveryMethods: []
    };

    function MainController(){
      //initilizing the links
      this.patientDetailPersistUrl = links.patientDetailPersistUrl;
      this.patientsDetailsUrl = links.patientsDetailsUrl;
      this.loginCheckUrl = links.loginCheckUrl;
      this.getProgrammeList = links.getProgrammeList;
      this.programmeListDetailsUrl = links.programmeListDetailsUrl;
      //this.patientsProgrammesUrl = links.patientsProgrammesUrl;
      this.deliveryMethodsUrl = links.deliveryMethodsUrl;
    };

    //common methods
    MainController.prototype.getProgrameNameList = function () {
      return model.programmeNameList;
    };

    MainController.prototype.getDeliveryMethodsList = function () {
      return model.deliveryMethods;
    };

    MainController.prototype.getDoctorsProgrameNamesList = function(){

      $.post( this.loginCheckUrl , {})
      .done(function( response ) {
        console.log("MainController doc login check: " + JSON.stringify(response));

        //getting the programme list for the doctor
        console.log('programme list link ' + this.getProgrammeList);
        $.get( this.getProgrammeList , {id: response.data.id})
        .done(function( response ) {
          console.log("programme list: " + JSON.stringify(response));

          model.programmeNameList = response.data;
          patientProgrammeView.render();

        });

      });

    };

    MainController.prototype.getDeliveryMethods = function() {
      //birth details
      $.get( this.deliveryMethodsUrl , {})
      .done(function( response ) {
        console.log("delivery method: " + JSON.stringify(response));

        model.deliveryMethods = response.data;
        patientBirthDetailsView.render();
      });
    };

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
      var dateOfBirth = moment(patientDetailsView.dateOfbirth.val(), "YYYY-MM-DD");
      model.patientInfo.dateOfBirth = dateOfBirth.format('DD-MM-YYYY');
      console.log('getting date ' + model.patientInfo.dateOfBirth);
      model.patientInfo.bloodGroup = patientDetailsView.bloodGroup.val();
      model.patientInfo.weight = patientDetailsView.weight.val();
      model.patientInfo.height = patientDetailsView.height.val();
      model.patientInfo.gender  = patientDetailsView.rbMale.val();

      if(patientDetailsView.rbMale.is(":checked")){
        model.patientInfo.gender = 1;
      }else{
        model.patientInfo.gender = 0;
      }

      model.patientInfo.contact1 = patientDetailsView.contact1.val();
      model.patientInfo.contact2 = patientDetailsView.contact2.val();
      model.patientInfo.address = patientDetailsView.address.val();

      //model.patientInfo. = patientDetailsView.picUpload;
    };

    //guardian info related methods
    MainController.prototype.getGuardianInfoModel = function () {
      return model.guardianInfo;
    };

    MainController.prototype.updateGuardianInfoModelFromView = function () {

      model.guardianInfo.name = patientGuardianDetailsView.name.val();

      var dateOfBirth = moment(patientGuardianDetailsView.dateOfBirth.val(), "YYYY-MM-DD");
      model.guardianInfo.dateOfBirth = dateOfBirth.format('DD-MM-YYYY');


      model.guardianInfo.gender  = patientGuardianDetailsView.rbMale.val();

      if(patientDetailsView.rbMale.is(":checked")){
        model.guardianInfo.gender = 1;
      }else{
        model.guardianInfo.gender = 0;
      }

      model.guardianInfo.contact1 = patientGuardianDetailsView.contact1.val();
      model.guardianInfo.contact2 = patientGuardianDetailsView.contact2.val();
      model.guardianInfo.address = patientGuardianDetailsView.address.val();

    };


    //birth info realted functions
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

    //updating models with info from the views
    MainController.prototype.updateModelsFromViews = function () {
      cont.updatePatientInfoModelFromView();
      cont.updateGuardianInfoModelFromView();
      cont.updatebirthInfoFromView();
    };

    //get all the info of the patient
    MainController.prototype.getPatientsModelServer = function (patientId) {
      $.get( this.patientsDetailsUrl , {id:patientId})
      .done(function( response ) {
        console.log(JSON.stringify(response));
        //assign the model the data retreived from the server
        model.patientInfo = response.data.patient;
        model.guardianInfo = response.data.guardian;
        model.birthInfo = response.data.birthDetails;
        //patients programme info

        patientDetailsView.render();
        patientGuardianDetailsView.render();
        patientBirthDetailsView.render();

      });
    };

    //save update the entire model on server
    MainController.prototype.persistModel = function () {
      console.log('persisting ' + JSON.stringify(model));
      $.post( this.patientDetailPersistUrl , {patient: model.patientInfo, guardian: model.guardinaInfo, birthDetails: model.birthInfo })
      .done(function( response ) {
        console.log('save response' + JSON.stringify(response));
      });
    };


    //them intilize wiring method
    MainController.prototype.init = function(){

      //initilizing the views
      patientDetailsView.init();
      patientGuardianDetailsView.init();
      patientBirthDetailsView.init();
      //patientProgrammeView.init();
      //patientProgrammesDetailsView.init();

      //getting data from the server, and building the model for rendering

      //getting the data for the select options
      this.getDeliveryMethods();
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


      //for info in patients info tab
      this.getPatientsModelServer(patientId);

      //for info in patients programme tab
      //might want to remove this as getPatientsModelServer will get all the data in one call
      //this.getPatientsProgrameDetails(patientId);


      //select the patients info tab
      patientDetailsView.tab.trigger('click');
      console.log('trigger click');

    };



    var controller = {
      init :function(){
        this.patientDetailPersistUrl = links.patientDetailPersistUrl;
        this.patientsDetailsUrl = links.patientsDetailsUrl;
        this.loginCheckUrl = links.loginCheckUrl;
        this.getProgrammeList = links.getProgrammeList;
        this.programmeListDetailsUrl = links.programmeListDetailsUrl;
        this.patientsProgrammesUrl = links.patientsProgrammesUrl;
        this.deliveryMethodsUrl = links.deliveryMethodsUrl;

        patientDetailsView.init();
        patientGuardianDetailsView.init();
        patientBirthDetailsView.init();
        patientProgrammeView.init();
        patientProgrammesDetailsView.init();

        $.post( controller.loginCheckUrl , {})
        .done(function( response ) {
          console.log("login check for doctor: " + JSON.stringify(response));

          //getting the programme list for the doctor
          $.get( controller.getProgrammeList , {id: response.data.id})
          .done(function( response ) {
            console.log("programme list: " + JSON.stringify(response));

            model.programmeNameList = response.data;
            patientProgrammeView.render();

          });

        });


        ///check is the url has a id
        var patientId = utility.getURLParam('id');

        if(patientId){
          //this is a update patients entry
          console.log('patient Id ' + patientId);

          $.get( controller.patientsDetailsUrl , {id:patientId})
          .done(function( response ) {
            console.log(JSON.stringify(response));
            model.patient = response.data.patient;
            patientDetailsView.render();

          });

          //getting the programme list for the patient
          $.get( controller.patientsProgrammesUrl , {id: patientId})
          .done(function( response ) {

            model.programmeLists = response.data;
            model.programmeCount =  model.programmeLists.length;

            console.log("programme model: " + JSON.stringify(model));

            patientProgrammesDetailsView.render();

          });



        }else{
          //if this is a new patients entry
          patientDetailsView.render();
        }


        //birth details
        $.get( controller.deliveryMethodsUrl , {})
        .done(function( response ) {
          console.log("delivery method: " + JSON.stringify(response));

          model.deliveryMethods = response.data;
          patientBirthDetailsView.render();

        });

        patientDetailsView.tab.trigger('click');

      },
      getPatientModel: function(){
        return model.patient;
      },
      getUpdatedPatientModelFromView: function(){

        model.patient.name = patientDetailsView.name.val();
        var dateOfBirth = moment(patientDetailsView.dateOfbirth.val(), "YYYY-MM-DD");
        model.patient.dateOfBirth = dateOfBirth.format('DD-MM-YYYY');
        console.log('getting date ' + model.patient.dateOfBirth);
        model.patient.bloodGroup = patientDetailsView.bloodGroup.val();
        model.patient.weight = patientDetailsView.weight.val();
        model.patient.height = patientDetailsView.height.val();
        model.patient.gender  = patientDetailsView.rbMale.val();

        if(patientDetailsView.rbMale.is(":checked")){
          model.patient.gender = 1;
        }else{
          model.patient.gender = 0;
        }

        model.patient.contact1 = patientDetailsView.contact1.val();
        model.patient.contact2 = patientDetailsView.contact2.val();
        model.patient.address = patientDetailsView.address.val();

        //model.patient. = patientDetailsView.picUpload;

        return model.patient;

      },
      persistPatient: function(){

        $.post( controller.patientDetailPersistUrl , model)
        .done(function( response ) {
          console.log(JSON.stringify(response));
        });
      },
      getProgrammeNames: function(){
        return model.programmeNameList;
      },
      setAttachedProgrammeId: function(id){
        model.attachedProgrammeId = id;
        //console.log('model: ' + JSON.stringify(model));
      },
      setProgrammeFromServer: function(programmeId, programmeName){

        $.get( controller.programmeListDetailsUrl , {id: programmeId})
        .done(function( response ) {
          //console.log(JSON.stringify(response));
          if(response.status == 1){
            for(var i = 0; i < model.programmeLists.length; i++ ){
              if(model.programmeLists[i].id == programmeId){
                return;
              }
            }
            var programme = {
              id: programmeId,
              name: programmeName,
              count: response.data.length,
              list: response.data
            };
            model.programmeLists.push(programme);
            model.programmeCount = model.programmeLists.length;
            patientProgrammesDetailsView.render();
            //model.programmeList = response.data;
          }
        });
      },
      getProgrammeModel: function(){
        return model.programmeLists;
      },
      getDeliveryMethods: function(){
        return model.deliveryMethods;
      }
    };

    var patientDetailsView = {
      init: function(){
        this.tab = $('#patients-entry-link');
        this.name = $('#patient-name');
        this.dateOfbirth = $('#patient-date-of-birth');
        this.bloodGroup = $('#patient-blood-group');
        this.weight = $('#patient-weight-input');
        this.height = $('#patient-height');
        this.rbMale = $('#rb-male');
        this.rbFemale = $('#rb-female');
        this.contact1 = $('#patient-contact1');
        this.contact2 = $('#patient-contact2');
        this.address = $('#patient-address');
        this.picUpload =$('#patient-picture');

        $('#patient-save-button').click(function(){
          console.log('patient click');

          cont.updateModelsFromViews();
          console.log('save click' + JSON.stringify(model));
          cont.persistModel();

        });

        //this.tab.hide();
      },
      render: function(){

        //var model = controller.getPatientModel();
        var lpatientInfo = cont.getPatientsInfoModel();

      //  console.log('render patients info' + JSON.stringify(lpatientInfo));

        this.name.val(lpatientInfo.name);
        var dateOfBirth = moment(lpatientInfo.dateOfBirth, 'DD-MM-YYYY');
        //console.log('dob model' + lpatientInfo.dateOfBirth);
        this.dateOfbirth.val(dateOfBirth.format('YYYY-MM-DD'));
        //console.log('dob' + dateOfBirth.format('YYYY-MM-DD'));
        this.bloodGroup.val(lpatientInfo.bloodGroup);
        this.weight.val(lpatientInfo.weight);
        this.height.val(lpatientInfo.height);
        this.contact1.val(lpatientInfo.contact1);
        this.contact2.val(lpatientInfo.contact2);
        this.address.val(lpatientInfo.address);
        //this.picUpload.val(model.);


        if(lpatientInfo.gender == 1){
          this.rbMale.prop('checked', true);
          this.rbFemale.prop('checked', false);
        } else{
          this.rbMale.prop('checked', false);
          this.rbFemale.prop('checked', true);

        }

      }
    };


    var patientGuardianDetailsView = {
      init: function(){
        this.tab = $('#guardian-entry-link');
        this.name = $('#txt-guardian-name');
        this.dateOfBirth = $('#guardian-dob');
        this.rbMale = $('#rb-male-guardian');
        this.rbFemale = $('#rb-female-guardian');
        this.contact1 = $('#guardian-contact1');
        this.contact2 = $('#guardian-contact2');
        this.address = $('#guardian-address');
        this.save = $('#btn-guardian-save');

        this.dateOfBirth.datetimepicker({
          inline: false,
          format:'DD-MM-YYYY'
        });

      },
      render: function(){

        var lguardianInfo = cont.getGuardianInfoModel();

        this.name.val(lguardianInfo.name);

        this.dateOfBirth.val(lguardianInfo.dateOfBirth);
        //console.log('dob' + dateOfBirth.format('YYYY-MM-DD'));

        this.contact1.val(lguardianInfo.contact1);
        this.contact2.val(lguardianInfo.contact2);
        this.address.val(lguardianInfo.address);
        //this.picUpload.val(model.);


        if(lguardianInfo.gender == 1){
          this.rbMale.prop('checked', true);
          this.rbFemale.prop('checked', false);
        } else{
          this.rbMale.prop('checked', false);
          this.rbFemale.prop('checked', true);

        }
      }
    }

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

      var deliveryMethods = cont.getDeliveryMethodsList();

      for(var i = 0; i < deliveryMethods.length; i++){
        var option = $('<option/>',{
          value: deliveryMethods[i].id,
          text: deliveryMethods[i].name
        }
      );
      this.selectDeliveryMethods.append(option);

    }//

      var lbirthInfo = cont.getBirthInfoModel();

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

var patientProgrammeView = {
  init: function(){
    this.tab = $('#patients-programme-link');
    this.programmeSelect = $('#sel-program-list');

    $('#btn-attach-programme').click(function(){

      var selectedValue = patientProgrammeView.programmeSelect.find(":selected").attr('value');
      var name = patientProgrammeView.programmeSelect.find(":selected").text();
      if(selectedValue){
        controller.setAttachedProgrammeId(selectedValue);
        controller.setProgrammeFromServer(selectedValue, name);

      }
      console.log('programme attach click selected id, name: ' + selectedValue + name);
    });



    //
  },
  render: function(){
    var programmelist =  cont.getProgrameNameList();

    if(programmelist){

    console.log('render programme view' + programmelist);
    this.programmeSelect.empty();

    for(var i= 0; i < programmelist.length; i++){
      this.programmeSelect.append($('<option value="'+programmelist[i].id +'">'+ programmelist[i].name + '</option>'));
      //console.log(this.programmeSelect);
    }
  }

  }
};

var patientProgrammesDetailsView = {
  init: function () {
    this.tableParentPanel = $('#programme-table-parent'); //this node contains the table panels
    this.tablePanelNode = $('#programme-table-panel');  //this node contains the table inside it
    this.tablePanelNode.hide();//used to make clones, its hidden in html but this is just a double check


    //cloneNode(true);  clone the children too, when true is passed
  },
  render: function() {

    //this.tableParentPanel.empty();

    var programmeModel = controller.getProgrammeModel();

    for(var i = 0; i < programmeModel.length; i++){
      console.log('building programme table for ' + JSON.stringify(programmeModel[i]));

      var cloneTablePanel = this.tablePanelNode.clone();

      var cloneTablebody = cloneTablePanel.find('table').find('tbody');

      var label = cloneTablePanel.find('.programme-name');

      console.log('name ' + programmeModel[i].name);

      label.text(programmeModel[i].name);


      for(var j = 0; j <  programmeModel[i].list.length; j++ ){

        var tr = $('<tr/>');

        var td = $('<td/>');
        td.text(programmeModel[i].list[j].durationDays);
        tr.append(td);

        td = $('<td/>');
        td.text(programmeModel[i].list[j].medicine);
        tr.append(td);

        td = $('<td/>');
        td.text(programmeModel[i].list[j].doseNo);
        tr.append(td);

        //due on
        var input = $('<input/>', {
          type: 'date'
        });

        var date = moment(programmeModel[i].list[j].dueOn, 'DD-MM-YYYY');
        input.val(date.format('YYYY-MM-DD'));

        input.change((function(model, control){
          return  function() {
            var date = moment(control.val(), 'YYYY-MM-DD');
            model.dueOn = date.format('DD-MM-YYYY');
            console.log('change + ' + JSON.stringify(model));
          }
        })(programmeModel[i].list[j], input));

        td = $('<td/>');
        td.append(input);
        tr.append(td);

        //givenOn
        var input = $('<input/>', {
          type: 'date'
        });

        var date = moment(programmeModel[i].list[j].givenOn, 'DD-MM-YYYY');
        input.val(date.format('YYYY-MM-DD'));

        input.change((function(model, control){
          return  function() {
            var date = moment(control.val(), 'YYYY-MM-DD');
            model.givenOn = date.format('DD-MM-YYYY');
            console.log('change + ' + JSON.stringify(model));
          }
        })(programmeModel[i].list[j], input));

        td = $('<td/>');
        td.append(input);
        tr.append(td);

        //batchNo
        var input = $('<input/>', {
          type: 'input'
        });

        input.val(programmeModel[i].list[j].batchNo);

        input.keyup((function(model, control){
          return  function() {
            model.batchNo = control.val();
            console.log('change + ' + JSON.stringify(model));
          }
        })(programmeModel[i].list[j], input));

        td = $('<td/>');
        td.append(input);
        tr.append(td);

        cloneTablebody.append(tr);
      } //inner for loop

      this.tableParentPanel.append(cloneTablePanel);
      cloneTablePanel.show();

    }//outer for loop

    //adding the table panel



  }
}

//controller.init();

cont = new MainController();
cont.init();

}());

});