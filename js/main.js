let el = document.querySelector(".element");

let deep = document.querySelector(".deep");
let deeper = document.querySelector(".deeper");
zoom1 = () => {
    el.style.transform = "scale(6, 3)";
    deep.style.display = "block"
}

zoom2 = () => {
    deep.style.transform = "scale(10, 8)";
    deeper.style.display = "block"
}