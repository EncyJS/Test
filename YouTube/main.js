var songs = [
    {id: "song1", videoId: "https://www.youtube.com/watch?v=ophUM9xdRF8"},
    {id: "song2", videoId: "https://www.youtube.com/watch?v=BFgUczImZ8M"},
    {id: "song3", videoId: "https://www.youtube.com/watch?v=FY6XgOnaBdU"}
  ];
  
  songs.forEach(function(song) {
    var songElement = document.getElementById(song.id);
    songElement.addEventListener("click", function() {
      var videoElement = document.createElement("iframe");
      videoElement.setAttribute("src", "https://www.youtube.com/embed/" + song.videoId);
      videoElement.setAttribute("width", "560");
      videoElement.setAttribute("height", "315");
      songElement.appendChild(videoElement);
    });
  });
  