/* global Backbone */
/* global $ */
/* global _ */

(function () {

  "use strict";

  // Template used for Confirmation Dialog
  var confirmTemplate =
    '<section class="default-template template-confirm">'+
      '<div><%= userTemplate %></div>'+
    '</section>' +
    '<section class="button-box">' +
      '<button class="confirm">Confirm</button>' +
      '<button class="cancel">Cancel</button>' +
    '</section>';

  // Template used for Notification
  var notifyTemplate =
    '<section class="default-template template-notify">' +
      '<div><%= userTemplate %></div>' +
    '</section>' +
    '<section class="button-box"><button class="okay">OK</button></section>';

  // Container for the Modal
  var parentTemplate =
    '<div id="<%= templateId %>" class="bbm-template-container" ' +
      'style="height:<%= height %>; width:<%= width %>;">' +
        '<button class="bbm-close-button" id="<%= closeButtonId %>"> Close </button>' +
          '<%= content %>' +
    '</div>';

  Backbone.Modal = Backbone.View.extend({
    defaults: {
      width : '400px',
      height : '300px',
      events : {}
    },

    // It initializes module with the template options and dynamically creates
    // an unique modal container which is used as $el
    initialize: function(args) {
      var modalContainer;

      this.options = _.extend({}, this.defaults, args);

      this.templateOptions = {
        modalId : _.uniqueId('bbm-modal-container-'),
        templateId : _.uniqueId('bbm-template-container-'),
        closeButtonId : _.uniqueId('bbm-close-button-'),
        height : this.options.height,
        width : this.options.width,
        content : {}
      };

      // Creates a new DOM of the modal and add it to body
      modalContainer = $('<div>').attr('id', this.templateOptions.modalId)
        .addClass('bbm-modal-container');

      $('body').prepend(modalContainer);

      // Assign the programatically creatd DOM to $el to which Backbone can
      // attach events
      this.$el = modalContainer;

      // Extend event object with close button event
      this.events = _.extend(this.events, {
        'click .bbm-close-button' : 'hide'
      });
    },

    // Compiles the final template and attaches it to the modal
    render: function() {
      var finalTemplate;

      // Based on user's options, determine which template to render.
      switch (this.options.type) {
        case 'confirm':
          finalTemplate = _.template(confirmTemplate)({
            userTemplate: this.options.template
          });
          break;
        case 'notify':
          finalTemplate = _.template(notifyTemplate)({
            userTemplate: this.options.template
          });
          break;
        default:
          finalTemplate = this.options.template;
      }

      this.templateOptions.content = finalTemplate;

      this.$el.html(_.template(parentTemplate)(this.templateOptions));

      return this;
    },

    // Makes the modal visible and attaches the events
    show: function() {
      this.render();
      this.delegateEvents(this.events);
      this.$el.addClass('visible').trigger('modal-open');
    },

    // Makes the modal invisible and detaches the events to prevent from
    // event bubbling
    hide: function() {
      this.$el.trigger('modal-close').removeClass('visible');
      this.undelegateEvents();
    }
  });

})();

