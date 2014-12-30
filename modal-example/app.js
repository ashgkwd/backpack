/* global Backbone */
/* global jQuery */
/* global _ */

(function($){

  "use strict";

  var app = app || {};

  $(document).ready(function() {

    var myData = {
      // Custom template
      template: $('#my-modal-template').html(),

      // Options for modal height and width
      options: {
        type: 'notify',
        height: '400px',
        width: '500px'
      },

      // function must be defined here only.
      // It does not support functions declared outside events: property.
      events: {
        'click .confirm': function() {
          console.log('User clicked on confirm button');
        }
      },

      // template will use following custom properties.
      paragraph: 'This should go in my p tag!',

      // Default functions onOpen, onClose.
      onOpen: function() {console.log('Modal is opened. Cheers!');},
      onClose: function() {console.log('Modal will be closed. Amazing!');},
    };

    app.myModal = new Backbone.Modal({model:myData, el:$('#bbm-here')});

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

})(jQuery);