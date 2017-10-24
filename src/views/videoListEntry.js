var VideoListEntryView = Backbone.View.extend({
  initialize: function() {
   // console.log(view.$('.video-list-entry-title'))
  },

  events: {'click .video-list-entry-title': 'handleClick'},

  handleClick: function() {
    this.model.select();
  },
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },


  template: templateURL('src/templates/videoListEntry.html')

});




    //  $('.video-list-entry-title').bind('click', function() {
    //   console.log('inside video list entry ');
    //   this.model.select();
    // });
