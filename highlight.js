'use strict';

window.removeAuctions = function() {
  let count = 0;

  document.querySelectorAll('a[href*="auction_details"]').forEach(function(e) {
    if (!e.innerHTML.toLowerCase().includes('edin')) {
      e.closest('tr').style.display = 'none';
    }
    else {
      count++;
    }
  });

  if (count === 0) {
    window.addElement('h2', 'No auctions found', document.querySelector('table[cellpadding="2"] tbody'));
  }
};

// Helper methods

window.addElement = function(type, value, parent) {
  let el = document.createElement(type);
  el.innerHTML = value;
  parent.parentNode.insertBefore(el, parent);
};

window.removeAuctions();
