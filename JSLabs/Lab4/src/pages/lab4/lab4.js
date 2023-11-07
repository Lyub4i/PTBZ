class Refrigerator {
  constructor(color, brand, model, price) {
      this.color = color;
      this.brand = brand;
      this.model = model;
      this.price = price;
  }
}

var refrigerators = [
  new Refrigerator("Білий", "Samsung", "RF28HMEDBSR", 1200),
  new Refrigerator("Сріблястий", "LG", "LFXS26973D", 1500),
  new Refrigerator("Чорний", "Whirlpool", "WRS588FIHZ", 1100),
];

function showRefrigerators() {
  var table = document.getElementById('table');
  table.innerHTML = "<tr><th>Колір</th><th>Марка</th><th>Модель</th><th>Ціна</th></tr>";

  refrigerators.forEach(function(refrigerator) {
      var row = table.insertRow(-1);
      var colorCell = row.insertCell(0);
      var brandCell = row.insertCell(1);
      var modelCell = row.insertCell(2);
      var priceCell = row.insertCell(3);

      colorCell.innerHTML = refrigerator.color;
      brandCell.innerHTML = refrigerator.brand;
      modelCell.innerHTML = refrigerator.model;
      priceCell.innerHTML = refrigerator.price;
  });
}