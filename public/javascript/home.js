let monbeaubouton = document.getElementById("bouton");
let montitre = document.getElementById("montitre");

monbeaubouton.addEventListener("click", () => {
    montitre.style.color = "pink";
   
})
monbeaubouton.addEventListener("click", () => {
    montitre.style.fontSize = "150px";
   
})
function btnreset(){
    document.getElementById("montitre").style.fontSize = "50px";
}
