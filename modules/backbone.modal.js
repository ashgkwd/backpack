
Backbone.Modal = Backbone.View.extend({
  defaults: {
    width: '400px',
    height: '300px'
  },

  defaultTemplates: {
    // Default template for confirmation box.
    confirm: '<section class="default-template template-confirm"><div><%= userTemplate %></div></section>'+
      '<section class="button-box">' +
      '<button class="confirm">Confirm</button><button class="cancel">Cancel</button>' +
      '</section>',

    // Default template for notification, like alert();
    notify: '<section class="default-template template-notify"><div><%= userTemplate %></div></section>' +
      '<section class="button-box"><button class="okay">OK</button></section>'
  },

  initialize: function() {
    this.options = _.extend({}, this.defaults, this.model.options);

    this.templateOptions = {
      modalId: _.uniqueId('bbm-modal-container-'),
      templateId: _.uniqueId('bbm-template-container-'),
      closeButtonId: _.uniqueId('bbm-close-button-'),
      height: this.options.height,
      width: this.options.width
    };

    var eventSource = 'click #' + this.templateOptions.closeButtonId;
    var closeButtonEvent = {};
    closeButtonEvent[eventSource] = 'hide';
    this.model.events = _.extend(closeButtonEvent, this.model.events);
  },

  render: function() {
    var ut = _.template(this.model.template)(this.model);
    var finalTemplate = '';

    // Based on user's options, determine which template to render.
    switch (this.options.type) {
      case 'confirm':
        finalTemplate = _.template(this.defaultTemplates.confirm)({userTemplate: ut});
        break;
      case 'notify':
        finalTemplate = _.template(this.defaultTemplates.notify)({userTemplate: ut});
        break;
      default:
        finalTemplate = ut;
/* global Backbone */
/* global $ */
/* global _ */
    }

    var parentTemplate = '<div id="<%= modalId %>" class="bbm-modal-container">' +
      '<div id="<%= templateId %>" class="bbm-template-container" style="height:<%= height %>; width:<%= width %>;">' +
      '<button class="bbm-close-button" id="<%= closeButtonId %>"> Close </button>' +
       finalTemplate +
      '</div></div>';

    this.$el.html(_.template(parentTemplate)(this.templateOptions));
    return this;
  },

  show: function() {
    this.render();
    this.delegateEvents(this.model.events);
    this.model.onOpen();
  },

  hide: function() {
    this.model.onClose();
    this.$el.empty();
    this.undelegateEvents();
  }
});
