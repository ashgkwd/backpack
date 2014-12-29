/*global Backbone, jQuery, _, Modal*/
$(document).ready(function(){
  var app = app || {};

  (function($) {
    var toolTipData = {
      template: '<div> <h1>The Title</h1> <p> Body of tooltip </p> </div>',
      placement: 'left',
      options: {
      	width: '275px',
      	height: '140px'
      },

      // Default functions onOpen, onClose.
      onOpen: function() {console.log('ToolTip is opened. Cheers!');},
      onClose: function() {console.log('ToolTip will be closed. Amazing!');},
    }

    app.myLeft = new ToolTip({model: toolTipData, el:$('#bbtt-here')});
    toolTipData.placement = 'top';
    app.myTop = new ToolTip({model: toolTipData, el:$('#bbtt-here-2')});

    toolTipData.placement = 'bottom';
    app.myBottom = new ToolTip({model: toolTipData, el:$('#bbtt-here-3')});

    toolTipData.placement = 'right';
    app.myRight = new ToolTip({model: toolTipData, el:$('#bbtt-here-4')});

    $('#bbtt-here').on('click', function() {
    	app.myLeft.show();
    });

    $('#bbtt-here-2').on('click', function() {
    	app.myTop.show();
    });

    $('#bbtt-here-3').on('click', function() {
    	app.myBottom.show();
    });

    $('#bbtt-here-4').on('click', function() {
    	app.myRight.show();
    });

  })(jQuery);
});