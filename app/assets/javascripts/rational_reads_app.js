window.RationalReads = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},
  initialize: function() {
    new RationalReads.Routers.Router
    var searchView = new RationalReads.Views.SearchView();
    
    $("#search-bar").html(searchView.render().$el);
    Backbone.history.start();
  }
};
