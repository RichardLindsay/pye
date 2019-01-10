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

window.updateWatchList = function() {
  document.querySelectorAll('font[color="#eE2C54"]').forEach(function(e) {
    window.addElement('p', window.withBuyersPremium(window.withVat(window.currentBid(e))), e);
    window.addElement('p', window.withVat(window.currentBid(e)), e);
  });
};

window.createCalculator = function() {
  let calculator = document.createElement('div')
  calculator.style.cssText = "display: flex; flex-direction: column; padding: 20px; align-items: center; justify-content: space-between; position: fixed; top: 0; right: 0; min-width: 200px; min-height: 200px; background-color: white;"
  calculator.innerHTML = '<form><label style="margin-right: 5px">£</label><input type="text" class="potentialBid"></form><h2 style="color: green">£0</h2><h3 style="color: orange">£0</h3>'
  document.body.prepend(calculator)

  document.querySelector('.potentialBid').addEventListener('keyup', function() {
    calculator.querySelector('h3').innerText = `£${window.withVat(document.querySelector('.potentialBid').value).toFixed(2)}`;
    calculator.querySelector('h2').innerText = `£${window.withBuyersPremium(window.withVat(document.querySelector('.potentialBid').value)).toFixed(2)}`;

  });
}

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
window.updateWatchList();
window.createCalculator();
