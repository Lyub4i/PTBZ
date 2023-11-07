class Newspaper {
  constructor(name, isEbook) {
    this.name = name;
    this.isEbook = isEbook;
  }

  createNewspaperElement() {
    const newspaperElement = document.createElement("div");
    newspaperElement.innerText = this.name;
    return newspaperElement;
  }
}

function fetchData() {
  const apiUrl = "https://api.jsonbin.io/v3/qs/654aacae54105e766fcccc44";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const record = data.record;

      document.getElementById("ebookColumn").innerHTML = "";
      document.getElementById("nonEbookColumn").innerHTML = "";

      record.forEach((item) => {
        const newspaper = new Newspaper(item.name, item.isEbook);
        const newspaperElement = newspaper.createNewspaperElement();

        if (newspaper.isEbook) {
          document.getElementById("ebookColumn").appendChild(newspaperElement);
        } else {
          document
            .getElementById("nonEbookColumn")
            .appendChild(newspaperElement);
        }
      });
    })
    .catch((error) => {
      console.error("Помилка при отриманні даних:", error);
    });
}
