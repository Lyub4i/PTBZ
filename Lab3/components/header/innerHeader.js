var xhr = new XMLHttpRequest();
xhr.open('GET', '/components/header/header.html', true);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var header = document.createElement('div');
        header.innerHTML = xhr.responseText;

        document.body.prepend(header);
    }
};

xhr.send();
