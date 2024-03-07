/* 
"use strict";

const btnDesplegable = document.getElementById('btnContainerDesplegable');
const containerDesplegable = document.getElementById('containerDesplegable');

let bandera =false
btnDesplegable.addEventListener('click',()=>{
    containerDesplegable.classList.remove('container-cabecero__encabesado-lista-displayNone')
    bandera=true
})

if(bandera){
    console.log('hola')
    addEventListener('click',()=>{
        containerDesplegable.classList.add('container-cabecero__encabesado-lista-displayNone')
    })

}
 */