// GENERAL LOPEZ --------------------------------------------------

const ArticleMayor =document.querySelector('.ArtDivFotos')
const img = document.querySelectorAll('.imagen')
const h1Img = document.querySelectorAll('.h1Imagenes')
const DivFotos = document.querySelector('.DivdeFotos')
const CadaImagen = document.querySelector('#CadaImagen')
const divImgH1 = document.querySelectorAll('.divImg1')

img.forEach(( cadaImg , i )=>{
    img[i].addEventListener("click", ()=>{
        ArticleMayor.classList.add('visible')
        DivFotos.innerHTML = `<img src=${img[i].currentSrc} class= "fotoDentroDiv">`
    })
})

const cruz = document.querySelector('.Cruz')
cruz.addEventListener("click", ()=>{
    ArticleMayor.classList.remove('visible')
})


