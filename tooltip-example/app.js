/* global Backbone */
/* global $ */
/* global _ */

(function() {
  var app = app || {};
  var tooltipData = {
    template: 'This is tooltip with <%= placement %> placement',
    placement: 'left',
    events: {
      'click .button-close': 'hide'
    }
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

    $('#example-left').on('mouseenter', function() {
      app.myLeft.show();
    }).on('mouseleave', function() {
      app.myLeft.hide();
    });

    $('#example-top').on('mouseenter', function() {
      app.myTop.show();
    }).on('mouseleave', function() {
      app.myTop.hide();
    });

    $('#example-bottom').on('mouseenter', function() {
      app.myBottom.show();
    }).on('mouseleave', function() {
      app.myBottom.hide();
    });

    $('#example-right').on('mouseenter', function() {
      app.myRight.show();
    }).on('mouseleave', function() {
      app.myRight.hide();
    });
  });
})();

