function changeColor() {
    const nb = Math.random();
    if (nb == 1) {
        document.body.style.backgroundColor = "green";
    }
    if (nb == 0) {
        document.body.style.backgroundColor = "red";
    }
    document.body.style.backgroundColor = "red";
}
