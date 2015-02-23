/* global Backbone */
/* global $ */
/* global _ */

(function() {

  "use strict";

  Backbone.Popover = Backbone.Tooltip.extend({
    initialize: function(args) {
      var thisref = this;
      Backbone.Popover.__super__.initialize.call(this, args);

      // Turn off hover based show/hide
      $(this.options.triggerEl).off('mouseenter mouseleave')
        .click(function(event) {
          if (thisref.isShown) { thisref.hide(); }
          else { thisref.show(); }
        });
    }
  });
})();