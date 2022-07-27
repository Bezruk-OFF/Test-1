let div = document.querySelector(".test");
let div2 = document.querySelector(".test2");
let input = document.querySelector(".input");
let button = document.querySelector(".button");
let buttonNext = document.querySelector(".next");
let buttonPrev = document.querySelector(".prev");

button.onclick = () => {
    div2.textContent = get2dimensional(pages, 5).join(' ');
}

///////////////////////////////////////////

let pages = [];
for (let i = 1; i <= 50; i++) {
    pages.push(i);
}

function get2dimensional(array, limit) {             // Делаем из array двумерный массив get2dimensional
    const result = [];
    for (var i = 0; i < array.length; i += limit) {
        result.push(array.slice(i, i + limit));
    }

    return result;
}

//+/+/+/+//+/+/+/+/+//+/+/+/+/+/+/+/+//+/+/+/+/+/+//+/+//

let size = 7;
let pagesCount = Math.ceil(pages.length / size);

let currentPages = pages;

buttonNext.onclick = () => {

    if (currentPages[currentPages.length - 1] != pages[pages.length - 1]) {
        currentPages = pages.slice(currentPages.length);
    }

    div.textContent = currentPages.slice(size, 2 * size).join(' ');
    currentPages = currentPages.slice(size);
}

buttonPrev.onclick = () => {
    if (currentPages[0] != 1) {
        currentPages = pages.slice(0, pages.length + size - currentPages.length);
    }

    currentPages = currentPages.slice(0, -size);
    div.textContent = currentPages.slice(-size).join(' ');
}

div.textContent = pages.slice(0, size).join(' ');