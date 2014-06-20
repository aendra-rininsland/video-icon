'use strict';

(function(){
  $(document).ready(function(){
    chrome.storage.sync.get({
      flaggedSites: ["youtube", "vimeo"]
    }, function(items) {
      console.log(items.flaggedSites.join("\n"));
      $('#flaggedSites').val(items.flaggedSites.join("\n"));
    });

    $('#save').on('click', function(e) {
      e.preventDefault();
      var sites = $('#flaggedSites').val();
      chrome.storage.sync.set({
        flaggedSites: sites.split("\n")
      }, function() {
        // Update status to let user know options were saved.
        var status = $('#status').text('Options saved.').fadeIn('slow');
        setTimeout(function() {
          $('#status').text('Options saved.').fadeOut('slow');
        }, 750);
      });
    });

  });
})(jQuery)
