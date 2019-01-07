'use strict';

window.updateBidsList = function() {
  document.querySelectorAll('td[width="13%"] h5').forEach(function(e) {
    if (e.textContent !== 'No Bids') {
      window.addElement('h5', window.withBuyersPremium(window.withVat(window.currentBid(e))), e);
      window.addElement('h5', window.withVat(window.currentBid(e)), e);
    }
  });
};

window.updateBidsDetail = function() {
  document.querySelectorAll('#currentbid').forEach(function(e) {
    if (e.textContent !== 'No Bids') {
      window.addElement('h5', window.withBuyersPremium(window.withVat(window.currentBid(e))), e);
      window.addElement('h5', window.withVat(window.currentBid(e)), e);
    }
  });
};

// Helper methods

window.addElement = function(type, value, parent) {
  let el = document.createElement(type);
  el.innerHTML = `£${value.toFixed(2)}`;
  parent.parentNode.insertBefore(el, parent);
};

window.currentBid = function(e) {
  return parseInt(e.innerHTML.replace('£', '')) || parseInt(e.value.replace('£', ''));
};

window.withVat = function(value) {
  return value * 1.2;
};

window.withBuyersPremium = function(value) {
  return value * 1.2;
};

window.updateBidsList();
window.updateBidsDetail();
