var lab1List = [
  {
    Place: "ACDC",
    Laction: "Kyiv",
    Data: "11.11.2023",
  },
  {
    Place: "Rammstein",
    Laction: "Lviv",
    Data: "12.12.2023",
  },
  {
    Place: "Metallica",
    Laction: "",
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
  var text = item["Data"];
  var diffDays = ras_diff_Days(text);
  if (diffDays > 5) {
    html = html + "<tr style='background: green;'>";
    diffDays = "Встигни придбати";
  } else if (diffDays == 0) {
    html = html + "<tr style='background:blue;'>";
    diffDays = "Концерт сьогодні";
  } else {
    if (diffDays < 5) {
      html = html + "<tr style='background:red;'>";
      diffDays = "Термін закінчено";
    }
  }

  for (var key in item) {
    html = html + "<td>" + item[key] + "</td>";
  }
  html = html + "<td>" + diffDays + "</td>";
  html = html + "</>";
}

function ras() {
  html = "<table style='b-table'>";
  html =
    html +
    "<tr><td>Назва групи</td>" +
    " <td>Місце проведення</td>" +
    "<td>Дата народження</td>" +
    "<td>Статус</td></tr>";
  lab1List.forEach(vivod);
  html = html + "</table>";
  document.getElementById("rezult").innerHTML = html;
}
