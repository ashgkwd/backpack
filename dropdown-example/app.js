/* global Backbone */
/* global $ */
/* global _ */

(function() {
  var app = app || {};
  var dropdownData = {
    template: '<div class="item"> First Item </div>' +
      '<div class="item"> Second Item </div>' +
      '<div class="item"> Third Item </div>',
    placement: 'top',
  };

  $(document).ready(function() {
    dropdownData.placement = 'top';
    dropdownData.triggerEl = $('#example-top');
    app.myTop = new Backbone.Dropdown(dropdownData);

    dropdownData.placement = 'bottom';
    dropdownData.triggerEl = $('#example-bottom');
    app.myBottom = new Backbone.Dropdown(dropdownData);

    dropdownData.placement = 'right';
    dropdownData.triggerEl = $('#example-not');
    app.myRight = new Backbone.Dropdown(dropdownData);
  });
})();
