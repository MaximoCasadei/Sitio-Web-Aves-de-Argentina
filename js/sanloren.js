// SAN LORENZO --------------------------------------------------


const ArticleMayor =document.querySelector('.ArtDivFotos')
const img = document.querySelectorAll('.imagen')
const h1Img = document.querySelectorAll('.h1Imagenes')
const DivFotos = document.querySelector('.DivdeFotos')
const CadaImagen = document.querySelector('#CadaImagen')
const divImgH1 = document.querySelectorAll('.divImg1')



divImgH1.forEach (( cadaDiv , i )=>{

    // imagen 1 ----------------------------------

    divImgH1[0].addEventListener("mouseover", ()=>{
        h1Img[0].classList.remove('oculto')
        h1Img[0].innerHTML = "LOGO"  
        img[0].style.filter = "blur(5px)"
        img[0].style.transition = ".5s"
    })
    divImgH1[0].addEventListener("mouseout", ()=>{
        h1Img[0].classList.add('oculto') 
        img[0].style.filter = "blur(0px)"
    })
    
    // imagen 2 ----------------------------------

    divImgH1[1].addEventListener("mouseover", ()=>{
        h1Img[1].classList.remove('oculto')
        h1Img[1].innerHTML = "CHINGOLO"    
        img[1].style.filter = "blur(5px)"
        img[1].style.transition = ".5s"
    })
    divImgH1[1].addEventListener("mouseout", ()=>{
        h1Img[1].classList.add('oculto') 
        img[1].style.filter = "blur(0px)"
    })

    // imagen 3 ----------------------------------

    divImgH1[2].addEventListener("mouseover", ()=>{
        h1Img[2].classList.remove('oculto')
        h1Img[2].innerHTML = "CALANDRIA"    
        img[2].style.filter = "blur(5px)"
        img[2].style.transition = ".5s"
    })
    divImgH1[2].addEventListener("mouseout", ()=>{
        h1Img[2].classList.add('oculto') 
        img[2].style.filter = "blur(0px)"
    })
})



img.forEach (( cadaImg , i )=>{

    // imagen 1 -------------------------------
    img[0].addEventListener("click", ()=>{
        ArticleMayor.classList.add('visible')
        
        DivFotos.innerHTML = 
        '<img src="../img/HORNERO.JPG">' 
        + '<div class="divDescripcionImg">' 
        + '<h1>HORNERO</h1>'
        + '<h4>(furnarius rufus)</h4> '
        + '</div>'
    })

    // imagen 2 -------------------------------
    img[1].addEventListener("click", ()=>{
        ArticleMayor.classList.add('visible')
        
        DivFotos.innerHTML = 
        '<img src="../img/CHINGOLO.jpg">' 
        + '<div class="divDescripcionImg">' 
        + '<h1>CHINGOLO</h1>'
        + '<h4>Firmat</h4> '
        + '</div>'
    })

    // imagen 3 -------------------------------
    img[2].addEventListener("click", ()=>{
        ArticleMayor.classList.add('visible')
        
        DivFotos.innerHTML = 
        '<img src="../img/calandria.jpg">' 
        + '<div class="divDescripcionImg">' 
        + '<h1>CALANDRIA</h1>'
        + '<h4>Firmat</h4> '
        + '</div>'
    })
})

const cruz = document.querySelector('.Cruz')
cruz.addEventListener("click", ()=>{
    ArticleMayor.classList.remove('visible')
})