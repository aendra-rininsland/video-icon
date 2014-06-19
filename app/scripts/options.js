'use strict';

(function(){
  $(document).ready(function(){
    chrome.storage.sync.get({
      flaggedSites: ["youtube", "vimeo"]
    }, function(items) {
      console.log(items.flaggedSites.join("\n"));
      $('#flaggedSites').val(items.flaggedSites.join("\n"));
    });
  });

  $('#save').on('click', function(e) {
    e.preventDefault();
    console.log('hurr')
    var sites = $('#flaggedSites').val();
    console.log(sites);
    chrome.storage.sync.set({
      flaggedSites: sites.split("\n")
    }, function() {
      // Update status to let user know options were saved.
      var status = $('status').text('Options saved.');
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  });

})(jQuery)
// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
