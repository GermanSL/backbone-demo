
var Demo = Demo || {};  //Main Application object domain.

Demo.App = {          //App holding all application objects.(routers, collections, models, views).
    
    router: null,
    userListView:null,
    userFormView: null,
    
    init: function(){           //Start application.
      
      var me = this;            //Saving current context variable.
      
      //Asigning backbone object to Dp.App.
      this.router = new this.Routers.Router();
      this.userListView = new this.Views.UserList();
      this.userFormView = new this.Views.UserForm();
      
      //Initialize routers events.
      this.router.on('route:home', function() {
        me.userListView.render(); // render user list
      });
      this.router.on('route:edit', function(id) {
        me.userFormView.render({id: id});
      });
        
      Backbone.history.start();     //Init backbone to start tracking history
      
      this.initSerializable();
      
    },
    
    htmlEncode: function (value){
      return $('<div/>').text(value).html();
    },
    
    initSerializable: function(){
      //Function for serializing form values.
      $.fn.serializeObject = function() {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
          if (o[this.name] !== undefined) {
              if (!o[this.name].push) {
                  o[this.name] = [o[this.name]];
              }
              o[this.name].push(this.value || '');
          } else {
              o[this.name] = this.value || '';
          }
        });
        return o;
      };
        
    }
    
}
