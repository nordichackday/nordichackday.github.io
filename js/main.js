$(document).ready(function() {
  //Flexslider
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails",
    directionNav: false
  });

  //Instagram feed
  var feed = new Instafeed({
    get: 'tagged',
    tagName: 'nordichackday',
    limit: '4',
    resolution: 'low_resolution',
    clientId: '3fe9e79f1bb34715b17594ef5c54a565',
    template: '<div class="instagram-post"><a target="_blank" href="{{link}}"><img alt="Instagram image" src="{{image}}"></a>' +
    '<p class="caption">{{caption}}</p></div>'
  });
  feed.run();
});
