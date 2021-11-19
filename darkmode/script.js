
const x = document.querySelector('.lightBTN');
const displayCol = document.querySelector("body");
const child = document.querySelector('.child');
const mode = document.querySelector('.mode');
const H2 = document.querySelector("h2");
let i = 0;

x.addEventListener('click', colorChange)
function colorChange() {
    if (i % 2 == 0) {
        x.style.backgroundColor = '#fff';
        displayCol.style.backgroundColor = '#151515';
        child.style.backgroundColor = 'black';
        child.style.transform = 'translate(125%, 12.5%)'
        H2.style.color = 'white';
        mode.innerHTML = 'DARK';
    }

    else {
        x.style.backgroundColor = '#151515';
        displayCol.style.backgroundColor = "#fff";
        child.style.backgroundColor = '#fff';
        child.style.transform = 'translate(20%, 12.5%)'
        H2.style.color = 'black';
        mode.innerHTML = 'LIGHT';
    }

    i++;
    while (i > 10) {
        return i = 1;
    }
}