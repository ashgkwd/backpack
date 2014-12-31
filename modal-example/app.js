/* global Backbone */
/* global $ */
/* global _ */

(function(){

  "use strict";

  var app = app || {};

  $(document).ready(function() {

    var myData = {
      type : 'confirm',
      height : '400px',
      width : '500px',

      template : $('#my-modal-template').html(), // Customizable template

      // function must be defined here only.
      // It does not support functions declared outside events: property.
      events : {
        'click .confirm' : function(ev) {
          console.log('Clicked on Confirm', ev);
        },
        'modal-open' : function (ev) {
          console.log('Modal is opened', ev);
        },
        'modal-close' : function(ev) {
          console.log('Modal is closed', ev);
        }
      },
    };

    app.myModal = new Backbone.Modal(myData);

    $('#btn-open').on('click', function() {
      app.myModal.show();
    });
    $('#btn-close').on('click', function() {
      app.myModal.hide();
    });
    $('#btn-log').on('click', function() {
      console.log(myData, app.myModal, $('#bbm-here').html());
    });

  });

})();