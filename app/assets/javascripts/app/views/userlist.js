
Demo.App.Views = Demo.App.Views || {};

Demo.App.Views.UserList = Backbone.View.extend({
      
    el: '.content',
    events: {
      'click .delete': 'confirmUserDelete'
    }
    ,
    render: function () {
      var me = this;
      var users = new Demo.App.Collections.Users();
        
      users.fetch({
        success: function (users) {
          me.users = users;
          var template = _.template($('#user_list_template').html(), {users: users.models});
          me.$el.html(template);
        }
      })
    }
    ,
    confirmUserDelete: function (e, el) {
      var user = this.getUser( $(e.target).data().userid ); 
      
      user.destroy({
        success: function () {
          console.log('destroyed');
          Demo.App.userListView.render();
        }
      });

      return false;
        
    }
    
    ,
    getUser: function(id){
      return this.users.find(function(m) { return m.get('id') == id; });
    }
      
});