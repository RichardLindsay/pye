window.update_bids_list = function() {
  document.querySelectorAll("td[width='13%'] h5").forEach(function(e) {
    if (e.textContent != "No Bids") {
      add_element(with_buyers_premium(with_vat(current_bid(e))), e);
      add_element(with_vat(current_bid(e)), e);
    }
  })
}

window.update_bids_detail = function() {
  document.querySelectorAll("#currentbid").forEach(function(e) {
    if (e.textContent != "No Bids") {
      add_element(with_buyers_premium(with_vat(current_bid(e))), e);
      add_element(with_vat(current_bid(e)), e);
    }
  })
}

// Helper methods

window.add_element = function(value, parent) {
  let el = document.createElement("h5");
  el.innerHTML = `£${value.toFixed(2)}`;
  parent.parentNode.insertBefore(el, parent);
}

window.current_bid = function(e) {
  return parseInt(e.innerHTML.replace("£", "")) || parseInt(e.value.replace("£", ""));
}

window.with_vat = function(value) {
  return value * 1.2;
}

window.with_buyers_premium = function(value) {
  return value * 1.2;
}

update_bids_list()
update_bids_detail()
