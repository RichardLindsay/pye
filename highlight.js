'use strict';

window.removeAuctions = function() {
  let count = 0;

  document.querySelectorAll('a[href*="auction_details"]').forEach(function(e) {
    if (!e.innerHTML.toLowerCase().includes('near edin')) {
      e.closest('tr').style.opacity = 0.5;
    }
    else {
      count++;
    }
  });
};

window.removeAuctions();
