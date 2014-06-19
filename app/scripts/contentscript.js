/* global $*/
'use strict';

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
  ]; // make configurable

  listOfParentElementsToTarget.forEach(function(element) {
    $(element).children('a').each(function(){
      var contentLink = this;
      items.flaggedSites.forEach(function(site) {
        var flagged = new RegExp(site);
        if ($(contentLink).attr('href').match(flagged) && !$(contentLink).hasClass('video-site-link')) {
          var videoIcon = $('<i class="fa fa-youtube-play"></i>');
          $(contentLink).addClass('video-site-link').append(videoIcon);
        }
      });
    });
  });
});
