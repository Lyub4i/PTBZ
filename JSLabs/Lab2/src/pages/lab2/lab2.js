function changeImage() {
  var image = document.querySelector(".symbol");
  image.src = "../../img/Logo-csharp.webp";
}

function restoreImage() {
  var image = document.querySelector(".symbol");
  image.src = "../../img/fsharp.png";
}

cityCodes = [
  { name: "Kyiv", code: 777 },
  { name: "Lviv", code: 111 },
  { name: "Odesa", code: 222 },
];

function addCityNumber() {
  var cityInput = document.getElementById("cityInput").value;
  var temp = cityInput.split(" ");
  var city = temp[0];
  var number = temp[1];
  var cityCode = null;
  var html = "<h2>Результат:</h2>";

  for (const item of cityCodes) {
    if (item.name == city) {
      cityCode = item.code;
      console.log(cityCode);
      break;
    }
  }

  if (cityCode == null) {
    html += "<p>ПОМИЛКА. Таке місто не було знайдено</p>";
  } else {
    html += "<p>Номер з кодом міста: </p>" + cityCode + number;
  }

  document.getElementById("rezult").innerHTML = html;
}
