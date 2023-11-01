var lab1List = [
  {
    Place: "ACDC",
    Location: "Kyiv",
    Data: "07.11.2023",
  },
  {
    Place: "Rammstein",
    Location: "Lviv",
    Data: "12.12.2023",
  },
  {
    Place: "Metallica",
    Location: "",
    Data: "01.11.2023",
  },
];

function ras_diff_Days(text) {
  var currentDate = new Date();
  var date1 = new Date(text.replace(/(\d+).(\d+).(\d+)/, "$3/$2/$1"));
  var timeDiff = Math.abs(currentDate.getTime() - date1.getTime());
  var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) - 1;
  return daysDiff;
}

function vivod(item, i, array) {
  html = html + "<tr>";
  for (var key in item) {
    switch (key) {
      case "Data":
        var text = item[key];
        var diffDays = ras_diff_Days(text);
        if (diffDays > 5) {
          diffDays = "Встигни придбати";
        } else if (diffDays == 0) {
          diffDays = "День концерту";
        } else if (diffDays == 5) {
          diffDays = "Останній день";
        } else {
          if (diffDays < 5) {
            diffDays = "Термін закінчено";
          }
        }

        html = html + "<td>" + text + "</td>";
        html = html + "<td>" + diffDays + "</td>";
        break;
      case "Place":
        html = html + "<td>" + item[key] + "</td>";
        break;
      case "Location":
        if (item[key].length == 0) {
          html = html + "<td>" + "Місце не вказано" + "</td>";
          break;
        }
        html = html + "<td>" + item[key] + "</td>";
        break;
    }
  }
  html = html + "</tr>";
}

function ras() {
  html = "<table style='border: 1px black solidl'>";
  html =
    html +
    "<tr style='background: red;><td>Назва групи</td>" +
    " <td>Місце проведення</td>" +
    "<td>Дата проведення</td>" +
    "<td>Статус</td></tr>";
  lab1List.forEach(vivod);
  html = html + "</table>";
  document.getElementById("rezult").innerHTML = html;
}
