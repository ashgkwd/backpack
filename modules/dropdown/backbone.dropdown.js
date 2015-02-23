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
      var thisref = this;
      Backbone.Dropdown.__super__.initialize.call(this, args);

      this.$el.on('focusout', function() {
        thisref.hide();
      });

      // dropdown can open down (default) or up (optional)
      // but it can never be right or left
      if (!(this.options.placement == "top" || this.options.placement == "bottom"))
        this.options.placement = "bottom";
    },

    render: function() {
      Backbone.Dropdown.__super__.render.call(this);
      this.$el.offset(adjustOffset(this.options))
        .find('.bb-tooltip-arrow').css('left', '15%');

      return this;
    },

    show: function() {
      Backbone.Dropdown.__super__.show.call(this);
      this.$el.focus();
    },

    hide: function() {
      var thisref = this;

      Backbone.Dropdown.__super__.hide.call(this);
      this.isShown = true;
      setTimeout(function() { thisref.isShown = false; }, 100);
    }
  });
})();
