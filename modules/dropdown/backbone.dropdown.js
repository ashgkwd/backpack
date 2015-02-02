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

      // re position for left offset, adjust arrow

      // dropdown can open down (default) or up (optional)
      // but it can never be right or left

      // it has backdrop. onclick backdrop, dropdown closes

    },

    render: function() {
      Backbone.Popover.prototype.render.call(this);
      this.$el.offset(adjustOffset(this.options));
      this.$el.find('.bb-tooltip-arrow').css('left', '10%');

      return this;
    }
  })
})();
