function loadHeader() {
  var headerContainer = document.getElementById("header-container");
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "/components/header/header.html", true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      headerContainer.innerHTML = xhr.responseText;
    }
  };

  xhr.send();
}

function loadFooter() {
  var footerContainer = document.getElementById("footer-container");
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "/components/footer/footer.html", true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      footerContainer.innerHTML = xhr.responseText;
    }
  };

  xhr.send();
}

loadHeader();
loadFooter();
