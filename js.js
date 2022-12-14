function video() {
   fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&chart=chartUnspecified&channelId=UCIBogasCmmKIpcTEKXH4qsA&type=video&maxResult=1&key=AIzaSyByMjwn-QLfHw_s0sPga1YCPX3tcrd6dvA",
    {
        method: 'GET',
        redirect: 'follow'
    }).then(response => response.json()).then(result => {
        const data = {
            data: {
                    video1: [
                        {
                            id: result.items[0].id.videoId,
                            title: result.items[0].snippet.title,
                            thumbnails: result.items[0].snippet.thumbnails.high.url,
                            publishedAt: result.items[0].snippet.publishedAt
                        }
                    ]
                }
            };
        require("fs").writeFileSync("./YouTubeVideo.json", JSON.stringify(data));
    }); 
}

require("fs").writeFileSync("https://sleezzi.github.io/extension/YouTubeVideo.json", JSON.stringify(data));
