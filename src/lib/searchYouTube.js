

var searchYouTube = (options, callback) => {
  var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${options.key}&q=${options.query}&maxResults=${options.max}&videoEmbeddable=true&type=video`;
  // $.get(URL, callback);
  $.ajax({
    url: url,
    method: 'GET',
    success: function(data) { callback(data.items); }
  });
};

window.searchYouTube = searchYouTube;


// window.YOUTUBE_API_KEY




// { key: 'API_KEY', query: 'cats', max: 10 }


// callback function that takes our array from YouTube

// enpoint URL: https://www.googleapis.com/youtube/v3/search?key=AIzaSyCOP-dJChrF0q0onznsUiftLscgGMzo2cc&maxResults=5&q=piranhas&part=snippet

// Can use jquery
