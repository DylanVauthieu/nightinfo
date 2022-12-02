function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
  
function changeColor() {
    const nb = getRandomInt(0, 2);
    if (nb == 1) {
        document.body.style.backgroundColor = "green";
        const elem = document.createElement("h1")
        elem.innerHTML = "PAS SIDA"
        document.body.appendChild(elem);    
    }
    if (nb == 0) {
        document.body.style.backgroundColor = "red";
        const elem = document.createElement("h1")
        elem.innerHTML = "SIDA"
        document.body.appendChild(elem);
    }
}

