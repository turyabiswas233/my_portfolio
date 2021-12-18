const h2 = document.querySelector('h2');
const x = document.querySelector('.lightBTN');
const displayCol = document.querySelector("body");
const child = document.querySelector('.child');
let i = 0;

x.addEventListener('click', colorChange)

function colorChange() {
    if (i % 2 == 0) { //will be dark mode
        x.style.backgroundColor = '#fff';
        displayCol.style.backgroundColor = '#151515';
        child.style.backgroundColor = 'black';
        child.style.transform = 'translate(125%, 12.5%)';
        h2.style.color = '#efefef';
    }

    else { //will be white mode
        x.style.backgroundColor = '#151515';
        displayCol.style.backgroundColor = "#fff";
        child.style.backgroundColor = '#fff';
        child.style.transform = 'translate(20%, 12.5%)';
        h2.style.color = '#113';
    }

    i++;
    while (i > 10) {
        return i = 1;
    }
}
