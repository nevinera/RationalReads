window.RationalReads = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},
  Plugins: {},
  initialize: function() {
    new RationalReads.Routers.Router
    var searchView = new RationalReads.Views.SearchShow();

    $("#search-bar").html(searchView.render().$el);
    Backbone.history.start();
  }
};
