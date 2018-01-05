var searchYouTube = (options, callback) => {
  $.ajax({
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
    },
    error: function (data) {
      console.error('Failed to send message', data);
    }
  });
};

window.searchYouTube = searchYouTube;
