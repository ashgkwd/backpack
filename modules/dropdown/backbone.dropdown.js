/* global Backbone */
/* global $ */
/* global _ */

(function() {

  "use strict";

  // private:
  var adjustOffset = function(options) {
    var leftOffset = options.triggerEl.offset().left;
    return {left : leftOffset};
  };

  // public:
  Backbone.Dropdown = Backbone.Popover.extend({
    initialize: function(args) {
      Backbone.Popover.prototype.initialize.call(this, args);
      var thisref = this;

      this.$el.on('focusout', function() {
        thisref.hide();
      });

      // dropdown can open down (default) or up (optional)
      // but it can never be right or left
      if (!(this.options.placement == "top" || this.options.placement == "bottom"))
        this.options.placement = "bottom";
    },

    render: function() {
      Backbone.Popover.prototype.render.call(this);
      
      this.$el.offset(adjustOffset(this.options))
        .find('.bb-tooltip-arrow').css('left', '15%');

      return this;
    },

    show: function() {
      Backbone.Popover.prototype.show.call(this);
      this.$el.focus();
    }
  })
})();
