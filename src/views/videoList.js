var VideoListView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('all', function() {
      this.render();
    },this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    this.collection.models.forEach(function(video) {
      var firstVideo = new VideoListEntryView({model: video});
      firstVideo.render();
    }, this);
    return this;
  },
  template: templateURL('src/templates/videoList.html')

});
