/*global Backbone, jQuery, _, Modal*/
$(document).ready(function(){
  var app = app || {};

  (function($){
    var myData = {
      // My custom template
      template: $('#my-modal-template').html(),
      // userTemplate: '<p> This is third level nested template! Awesome <b><%= myAwesomeVar %></b> </p>',
      // userModel: {myAwesomeVar:'Batman'},

      // Options for modal height and width
      options: {
        type: 'notify',
        height: '400px',
        width: '500px'
      },

      // My custom events. function must be defined here only.
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

    app.myModal = new Modal({model:myData, el:$('#bbm-here')});

    $('#btn-open').on('click', function() {
      app.myModal.show();
    });
    $('#btn-close').on('click', function() {
      app.myModal.hide();
    });
    $('#btn-log').on('click', function() {
      console.log(myData, app.myModal, $('#bbm-here').html());
    });
  })(jQuery);
});