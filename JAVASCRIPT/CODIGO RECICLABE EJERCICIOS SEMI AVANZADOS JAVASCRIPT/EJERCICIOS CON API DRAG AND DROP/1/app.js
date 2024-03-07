const ContenedorImg = document.querySelector('.imagenes')
const ContenedoArrastre= document.querySelector('.contenedor')

ContenedorImg.addEventListener('dragstart',function(e){
    console.log(e.target.src)
    e.dataTransfer.setData("text-plain",e.target.src)
})


//propiedades del contenedor

ContenedoArrastre.addEventListener('dragover',function(e){
    e.preventDefault()
})

ContenedoArrastre.addEventListener('drop',function(e){
    ContenedoArrastre.style.backgroundImage=  `url(${e.dataTransfer.getData('text-plain')})` 
    ContenedoArrastre.style.backgroundRepeat= ` no-repeat`
    ContenedoArrastre.style.backgroundSize= ` cover`

    if(ContenedoArrastre.getAttribute('style')){
        ContenedoArrastre.innerHTML=""
    }
    
    
})
