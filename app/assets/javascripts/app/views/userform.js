
Demo.App.Views = Demo.App.Views || {};

Demo.App.Views.UserForm = Backbone.View.extend({
    el: '.content',
    events: {
      'submit .user-form': 'saveUser',
      'click .back-btn': 'goBack'
    },
    saveUser: function (e) {
      var me = this;
      var userDetails = $(e.currentTarget).serializeObject();
      var user = new Demo.App.Models.User(); 
      user.save(userDetails, {
        success: function (user) {
          me.goBack(e);
        }
      });
      return false;
    },
    render: function (options) {
      var me = this;
      if(options.id) {
        me.user = new Demo.App.Models.User({id: options.id});
        me.user.fetch({
          success: function (user) {    
            var template = _.template($('#user_template').html(), {user: user});
            me.$el.html(template);
          }
        })
      } else {
        var template = _.template($('#user_template').html(), {user: null});
        me.$el.html(template);
      }
    },
    goBack: function(e){
      e.preventDefault();
      Demo.App.router.navigate('', {trigger:true});
    }
  
  });