/*global Backbone, jQuery, $, _ */

var ToolTip = Modal.extend({
  initialize: function() {
  	this.tooltipId = _.uniqueId("tooltip-container-");
  	this.$el.after('<div class="tooltip-container" id="'+ this.tooltipId +'">');
  	this.tooltipTrigger = this.$el;
  	this.$el = $('#' + this.tooltipId);

  	var offset = this.getOffset(this.tooltipTrigger);
  	this.$el.css('left', offset.left).css('top', offset.top);

    Modal.prototype.initialize.apply(this, {model:this.model, el:this.$el});
  },

  getOffset: function(Trigger) {
  	var left = 0;
  	var top = 0;
  	var leftOffset = Trigger.offset().left;
  	var topOffset = Trigger.offset().top;
  	var width = parseInt(this.model.options.width);
  	var height = parseInt(this.model.options.height);

  	switch (this.model.placement) {
  		case 'top':
  		top = topOffset - height;
  		left = leftOffset + (Trigger.outerWidth() / 2) - (width / 2);
  		break;

  		case 'bottom':
  		top = topOffset + Trigger.outerHeight();
  		left = leftOffset + (Trigger.outerWidth() / 2) - (width / 2);
  		break;

  		case 'left':
  		top = topOffset + (Trigger.outerHeight() / 2) - (height / 2);
  		left = leftOffset - width;
  		break;

  		default :
  		top = topOffset + (Trigger.outerHeight() / 2) - (height / 2);
  		left = leftOffset + Trigger.outerWidth();
  	}

  	return {top: parseInt(top), left: parseInt(left)};
  },

  show: function() {
  	this.$el.css('display','block');
    Modal.prototype.show.apply(this);
  	console.log(this.$el.css('display'));
  },

  hide: function() {
  	this.$el.css('display','none');
    console.log(this.$el.css('display'));
    Modal.prototype.hide.apply(this);
  }

});