const main = document.getElementById("main");
const flexDirection = document.getElementById("fd");

flexDirection.addEventListener("change", function(){
    main.style.flexDirection = this.value;
});
const justify = document.getElementById("jc");

justify.addEventListener("change", function(){
    main.style.justifyContent = this.value;
});
const align = document.getElementById("ai");

align.addEventListener("chenge", function(){
    main.style.alignItems = this.value;
});
const bola = document.querySelector(".bola");
const quadrado = document.querySelector(".quadrado");

bola.addEventListener("click", function(){
    const caixas = document.querySelectorAll("#main div");
    caixas.forEach(function(box){
        box.style.borderRadius = "50%";
    });
});
quadrado.addEventListener("click", function(){
    const caixas = document.querySelectorAll("#main div");
    caixas.forEach(function(box){
        box.style.borderRadius = "5px";
    })
});