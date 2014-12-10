
Demo.App.Routers = Demo.App.Routers || {};      //Addding Demo.App the routers object wich will hold backbone routers.

Demo.App.Routers.Router = Backbone.Router.extend({        //Adding backbone router object to Demo.App.Routers namespace.
        routes: {
          "": "home", 
          "edit/:id": "edit",
          "new": "edit",
        }
});
