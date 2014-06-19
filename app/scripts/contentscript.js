/* global $*/
'use strict';

console.log('\'Allo \'Allo! Content script');

(function(){
  var list_of_video_sites = [
    'youtube',
    'vimeo'
  ]; // @TODO make configurable

  var list_of_parent_elements_to_target = [
    'p',
    'h6',
    'h5',
    'h4',
    'h3',
    'h2',
    'h1',
  ]; // @TODO ditto

  $('head').preprend("<style type='text/css'>" +
  "@font-face {" +
  "font-family: 'FontAwesome';" +
  "url('chrome-extension://__MSG_@@extension_id__/fontawesome-webfont.svg?v=4.1.0#fontawesomeregular') format('svg');" +
  "font-weight: normal;" +
  "font-style: normal;" +
  "}");

  list_of_parent_elements_to_target.forEach(function(v,i,a) {
    $(this).children('a').each(function(){
      var content_link = this;
      list_of_video_sites.forEach(function(v,i,a) {
        if ($(content_link).attr('href').match(this) && !$(content_link).hasClass('video-site-link')) {
          var video_icon = $('<i class="fa fa-youtube-play"></i>');
          $(content_link).addClass('video-site-link').append(video_icon);
        }
      });

    });
  });
});
