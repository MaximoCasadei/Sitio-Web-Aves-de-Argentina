const lineas = document.querySelector(".img3lineas")
const MenuGrande = document.querySelector(".DivMenuGrande")
const imgCruz = document.querySelector(".imgCruz")


lineas.addEventListener("click", ()=>{
    MenuGrande.style.transform = "translate(0%)";
    MenuGrande.style.transition = "1s";
    MenuGrande.classList.add("sombra");
})
imgCruz.addEventListener("click", ()=>{
    MenuGrande.style.transform = "translate(-150%)";
    MenuGrande.style.transition = "1s";
    MenuGrande.classList.remove("sombra");
})

















        


