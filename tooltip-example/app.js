/* global Backbone */
/* global $ */
/* global _ */

(function() {
  var app = app || {};
  var tooltipData = {
    template: 'This is a tooltip with <%= placement %> placement',
    placement: 'left',
  };

  $(document).ready(function() {
    tooltipData.placement = 'left';
    tooltipData.triggerEl = $('#example-left');
    app.myLeft = new Backbone.Tooltip(tooltipData);

    tooltipData.placement = 'top';
    tooltipData.triggerEl = $('#example-top');
    app.myTop = new Backbone.Tooltip(tooltipData);

    tooltipData.placement = 'bottom';
    tooltipData.triggerEl = $('#example-bottom');
    app.myBottom = new Backbone.Tooltip(tooltipData);

    tooltipData.placement = 'right';
    tooltipData.triggerEl = $('#example-right');
    app.myRight = new Backbone.Tooltip(tooltipData);
  });
})();
