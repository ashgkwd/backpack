/* global Backbone */
/* global $ */
/* global _ */

(function () {

  "use strict";

  var confirmTemplate =
    '<section class="default-template template-confirm">'+
      '<div><%= userTemplate %></div>'+
    '</section>' +
    '<section class="button-box">' +
      '<button class="confirm">Confirm</button>' +
      '<button class="cancel">Cancel</button>' +
    '</section>';

  var notifyTemplate =
    '<section class="default-template template-notify">' +
      '<div><%= userTemplate %></div>' +
    '</section>' +
    '<section class="button-box"><button class="okay">OK</button></section>';

  var parentTemplate =
    '<div id="<%= templateId %>" class="bbm-template-container" ' +
      'style="height:<%= height %>; width:<%= width %>;">' +
        '<button class="bbm-close-button" id="<%= closeButtonId %>"> Close </button>' +
          '<%= content %>' +
    '</div>';

  Backbone.Modal = Backbone.View.extend({
    defaults: {
      width : '400px',
      height : '300px'
    },

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

      modalContainer = $('<div>').attr('id', this.templateOptions.modalId)
        .addClass('bbm-modal-container');

      $('body').prepend(modalContainer);

      this.$el = modalContainer;
    },

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

    show: function() {
      this.render();
      this.delegateEvents(this.options.events);
      this.$el.addClass('visible').trigger('modal-open');
    },

    hide: function() {
      this.undelegateEvents();
      this.$el.removeClass('visible').trigger('modal-close');
    }
  });

})();

