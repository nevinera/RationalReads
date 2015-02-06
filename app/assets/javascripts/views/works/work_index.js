RationalReads.Views.WorksIndex = Backbone.CompositeView.extend({
  indexTemplate: JST['works/index'],
  recommendationsTemplate: JST['works/recommendations'],
  searchTemplate: JST['works/search'],

  initialize: function (options) {
    this.listenTo(this.collection, 'sync', this.render);
    this.style = options.style;
    this.type = options.type;
  },

  render: function () {
    if (this.type === "all") {
      this.$el.html(this.indexTemplate());
    } else if (this.type === "recommendations" ){
      this.$el.html(this.recommendationsTemplate());
    } else if (this.type === "search") {
      this.$el.html(this.searchTemplate());
    }

    this.$el.append("<div id='index'>")
    this.collection.sort()

    this.collection.each( function (work) {
      var subItem = new RationalReads.Views.WorkItem({
        model: work,
        style: this.style
      });
      this.addSubview('#index', subItem)
    }.bind(this));

    return this;
  },

});
