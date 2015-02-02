/* global Backbone */
/* global $ */
/* global _ */

(function() {
  var app = app || {};
  var dropdownData = {
    template: 'This is a Popover with <%= placement %> placement',
    placement: 'left',
  };

  $(document).ready(function() {
    // dropdownData.placement = 'left';
    // dropdownData.triggerEl = $('#example-left');
    // app.myLeft = new Backbone.Dropdown(dropdownData);

    dropdownData.placement = 'top';
    dropdownData.triggerEl = $('#example-top');
    app.myTop = new Backbone.Dropdown(dropdownData);

    dropdownData.placement = 'bottom';
    dropdownData.triggerEl = $('#example-bottom');
    app.myBottom = new Backbone.Dropdown(dropdownData);

    // dropdownData.placement = 'right';
    // dropdownData.triggerEl = $('#example-right');
    // app.myRight = new Backbone.Dropdown(dropdownData);
  });
})();
