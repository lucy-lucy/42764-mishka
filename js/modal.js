var modalCart = document.querySelector(".overlay");
var modalNoScroll = document.querySelector("body");

var orderLinkItem = document.querySelector(".featured-item__to-order");
var orderLinkVideo = document.querySelector(".video__to-order");
var orderCart = document.querySelectorAll(".catalog_item__add-to-cart");

function showModal(node) {
  node.addEventListener("click", function(event) {
    event.preventDefault();
    modalNoScroll.classList.add("no-scroll");
    modalCart.classList.add("overlay--show");
  });
}

if (orderCart) {
  Array.prototype.forEach.call(orderCart, function(elem) {
    showModal(elem);
  });
}

if (orderLinkItem) {
  showModal(orderLinkItem);
}

if (orderLinkVideo) {
  showModal(orderLinkVideo);
}

if(modalCart) {
  modalCart.addEventListener("click", function(event) {
    event.preventDefault();
    modalNoScroll.classList.remove("no-scroll");
    modalCart.classList.remove("overlay--show");
  });
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (modalCart.classList.contains("overlay--show") || modalNoScroll.classList.contains("no-scroll")) {
      modalNoScroll.classList.remove("no-scroll");
      modalCart.classList.remove("overlay--show");
    }
  }
});
