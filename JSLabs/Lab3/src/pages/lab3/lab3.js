//Task1
countriesArray = [];

function addCountry(ele) {
  if (event.key != "Enter") {
    return;
  }

  var country = document.getElementById("countriField").value;
  if (country == "") {
    return;
  }

  if (!containsOnlyLettersAndText(country)) {
    alert("Текст містить заборонені знаки");
    return;
  }
  countriesArray.push(country);
  printCountries();
}

function printCountries() {
  var html = "<p>";
  for (let i = 0; i < countriesArray.length; i++) {
    if (i == countriesArray.length - 1) {
      html += countriesArray[i];
    } else {
      html += countriesArray[i] + ", ";
    }
  }
  html += "</p>";

  document.getElementById("countryRezult").innerHTML = html;
}

cityCodes = [
  { name: "Kyiv", code: 777 },
  { name: "Lviv", code: 111 },
  { name: "Odesa", code: 222 },
];

function containsOnlyLettersAndText(inputString) {
  var regex = /[^A-Za-z\s]/;
  return !regex.test(inputString);
}

//Task2
function showNumbers() {
  const numbers = [];
  const table = document.querySelectorAll("table td");

  table.forEach((cell) => {
    const number = parseInt(cell.textContent);
    if (!isNaN(number)) {
      numbers.push(number);
    }
  });

  numbers.sort((a, b) => a - b);
  const outputField = document.getElementById("output");
  outputField.value = numbers.join(", ");
}
