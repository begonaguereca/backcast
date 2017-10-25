var Videos = Backbone.Collection.extend({
  
  model: Video,
  url: 'https://www.googleapis.com/youtube/v3/search',
  
  search: function(query) {
    this.fetch({
      data: {
        part: 'snippet',
        key: 'AIzaSyDpDdcFjkWMe5xBUstaLKsIpr1mdKW_208',
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      }
    });
  }, 
  parse: function(response) {
    console.log(response, "response inside Videos");
    return response.items;
  }
});
