function FetchVideo() {
  fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&chart=chartUnspecified&channelId=UCIBogasCmmKIpcTEKXH4qsA&type=video&maxResults=3&order=date&key=AIzaSyAu3iTXtYxQG4V7QUcZz9_y-fQkfmBzJCs", {
    method: "GET"
  }).then(response => {return response.json()}).then(data => {
    if (!data.error) {    
      myArrayVideos.forEach(function(item){
        document.body.innerHtml = '<pre>' + data.item + '</pre>';
      });
    }
  });
};

setInterval(function() { FetchVideo(); }, 30000);
