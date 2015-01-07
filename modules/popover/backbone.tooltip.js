/* global Backbone */
/* global $ */
/* global _ */

(function(){
  "use strict";

  // private:
  var tooltipTemplate = '<div class="bb-tooltip-arrow <%= "bb-arrow-" + placement %>"></div>' +
    '<div class="bb-tooltip-container"></div>';

  var getOffset = function(options) {
    var width = options.width;
    var height = options.height;
    var leftOffset = options.trigger.offset().left;
    var topOffset = options.trigger.offset().top;
    var outerWidth = options.trigger.outerWidth();
    var outerHeight = options.trigger.outerHeight();
    var top = 0;
    var left = 0;

    switch (options.placement) {
      case 'top':
      top = topOffset - height;
      left = leftOffset + (outerWidth / 2) - (width / 2);
      break;

      case 'bottom':
      top = topOffset + outerHeight;
      left = leftOffset + (outerWidth / 2) - (width / 2);
      break;

      case 'left':
      top = topOffset + (outerHeight / 2) - (height / 2);
      left = leftOffset - width;
      break;

      default :
      top = topOffset + (outerHeight / 2) - (height / 2);
      left = leftOffset + outerWidth;
    }

    return {top: parseInt(top), left: parseInt(left)};
  };

  // public:
  Backbone.Tooltip = Backbone.View.extend({
    defaults: {
      placement: 'top',
      trigger: null
    },

    initialize: function(args) {
      var tip;

      this.options = _.extend({}, this.defaults, args);
      if(this.options.trigger == null) {
        throw "No Trigger Element Specified";
      }

      this.tooltipId = _.uniqueId("bb-tooltip-");

      tip = $('<div>').attr('id', this.tooltipId)
        .addClass('bb-tooltip');

      $('body').prepend(tip);
      this.$el = tip;
    },

    render: function() {
      this.$el.html(_.template(tooltipTemplate)(this.options))
        .find('.bb-tooltip-container')
        .html(_.template(this.options.template)(this.options));

      this.options.height = this.$el.outerHeight();
      this.options.width = this.$el.outerWidth();
      this.$el.offset(getOffset(this.options));
      return this;
    },

    show: function() {
      this.render();
      this.delegateEvents(this.events);
      this.$el.addClass('visible').trigger('tooltip-show')
        .find('.bb-tooltip-template').addClass('visible');
      return this;
    },

    hide: function() {
      this.$el.trigger('tooltip-hide').removeClass('visible')
        .find('.bb-tooltip-template').removeClass('visible');
      this.undelegateEvents();
      return this;
    }

  });
})();
