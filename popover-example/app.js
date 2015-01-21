/* global Backbone */
/* global $ */
/* global _ */

(function() {
  var app = app || {};
  var popoverData = {
    template: 'This is a Popover with <%= placement %> placement',
    placement: 'left',
  };

  $(document).ready(function() {
    popoverData.placement = 'left';
    popoverData.triggerEl = $('#example-left');
    app.myLeft = new Backbone.Popover(popoverData);

    popoverData.placement = 'top';
    popoverData.triggerEl = $('#example-top');
    app.myTop = new Backbone.Popover(popoverData);

    popoverData.placement = 'bottom';
    popoverData.triggerEl = $('#example-bottom');
    app.myBottom = new Backbone.Popover(popoverData);

    popoverData.placement = 'right';
    popoverData.triggerEl = $('#example-right');
    app.myRight = new Backbone.Popover(popoverData);
  });
})();
