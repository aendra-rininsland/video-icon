/* global $*/
'use strict';

(function(){
  chrome.storage.sync.get({
    flaggedSites: ["youtube", "vimeo"]
  }, function(items) {
    var listOfParentElementsToTarget = [
      'p',
      'h6',
      'h5',
      'h4',
      'h3',
      'h2',
      'h1',
      'div.post-content'
    ]; // make configurable

    listOfParentElementsToTarget.forEach(function(element) {
      $(element).children('a').each(function(){
        var contentLink = this;
        items.flaggedSites.forEach(function(site) {
          var flagged = new RegExp(site, "gi");
          console.log($(contentLink).attr('href').match(flagged))
          console.log($(contentLink).hasClass('video-site-link'))
          if ($(contentLink).attr('href').match(flagged) && !$(contentLink).hasClass('video-site-link')) {
            var videoIcon = $('<i class="fa fa-youtube-play"></i>');
            $(contentLink).append(videoIcon).addClass('video-site-link');
          }
        });
      });
    });
  });
})(jQuery)
