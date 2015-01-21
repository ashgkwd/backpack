/* global Backbone */
/* global $ */
/* global _ */

(function() {

  "use strict";

  // private:


  // public:
  Backbone.Popover = Backbone.Tooltip.extend({
    initialize: function(args) {
      Backbone.Tooltip.prototype.initialize.call(this, args);
      var thisref = this;

      // Turn off hover based show/hide
      console.log(this.options.triggerEl);
      $(this.options.triggerEl)
        .off('mouseenter mouseleave')
        .click(function(event) {
          if (thisref.isShown) {
            thisref.hide();
          } else {
            thisref.show();
          }
        });
    }
  })
})();