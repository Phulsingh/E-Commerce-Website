let card = document.querySelector(".trend");
let card2 = document.getElementById("#card2");
let blogs = document.querySelector(".blog");
console.log(blogs);
let mainPage = document.getElementsByClassName("main");
console.log(mainPage);

let home = document.getElementById("home");
let shop = document.getElementById("shop");
let blo= document.getElementById("blog");
let about = document.getElementById("about");
let contact = document.getElementById("contact");

function shops(){
    mainPage.style.display = "none";
    card.style.display = "block";
    card2.style.display = "block";
}
function blogs(){
    mainPage.style.display = "none";
}