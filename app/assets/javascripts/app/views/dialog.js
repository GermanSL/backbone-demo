
Demo.App.Views = Dp.App.Views || {};      //Addding Demo.App the views object wich will hold backbone views.

Demo.App.Views.Dialog = Backbone.View.extend({
    
    el: 'body',
    events: {
      'click .btn-ok': 'runOkCallback',
      'click .btn-cancel': 'runCancelCallback'
    },
    initialize: function(){
      this.okCallback = this.options.ok;
      this.cancelCallback = this.options.cancel;
    },
    render: function (title, msg) {
      $('.overlay').remove();
      var template = _.template($('#dialog_template').html(), {title: title, msg: msg});
      this.$el.append(template); 
      this.overlay = $('.overlay');
      this.overlay.show();
    },
    runOkCallback: function(){
      this.okCallback();
    },
    runCancelCallback: function(){
      this.cancelCallback();
    },
    closeDialog: function(){
      this.overlay.hide();
    }
        
});