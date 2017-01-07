var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      type: 'video',
      key: options.key
    },
    contentType: 'application/json',
    success: function (data) {
      console.log('Message sent', data.items);
      callback(data.items);
      // callback(data);
      console.log('Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('Failed to send message', data);
    }
  });
};

window.searchYouTube = searchYouTube;
