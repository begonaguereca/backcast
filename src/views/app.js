var AppView = Backbone.View.extend({

  el: '#app',
  template: templateURL('src/templates/app.html'),
  initialize: function() {
    this.videos = new Videos();
    this.listenTo(this.videos, 'sync', this.selectedFirst);
    this.videos.search('backbone tutorial');
    this.render();
  },

  selectedFirst: function() {
    if (this.videos.length > 0) {
      this.videos.at(0).select();
    }
  },


  render: function() {
    this.$el.html(this.template());
      
    new SearchView({el: '.search', collection: this.videos}).render();
    new VideoListView({el: '.list', collection: this.videos}).render();
    new VideoPlayerView({el: '.player', collection: this.videos, model: this.videos.at(0)}).render();
   
    return this;
  
  }

});
