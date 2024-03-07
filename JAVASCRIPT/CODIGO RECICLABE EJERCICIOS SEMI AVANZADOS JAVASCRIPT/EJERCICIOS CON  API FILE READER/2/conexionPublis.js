'use strict';

const contenedor_publicaciones = document.getElementById("root-publicaciones");
const fragmento = document.createDocumentFragment()
const contenedor_main = document.querySelector('.container-main')

const crearPublicacioneCodigo = (nombre,contenido)=>{
    const div =document.createElement('DIV');
    const h3 = document.createElement('H3');
    const p = document.createElement('P');
    const divComentarios = document.createElement('div');
    const inptTextoComentarios = document.createElement('INPUT');
    const inptButtoComentarios = document.createElement('INPUT')
   
    //h3 y p ,agrego nombre y contenido
    h3.textContent=nombre
    p.textContent=contenido


    //boton y input ,  agrego propiedades a elementos
    inptTextoComentarios.type= 'text'
    inptTextoComentarios.placeholder = 'agrega una publicacion'
    inptButtoComentarios.type='submit'

    //anado el h3 y la p al div

    div.appendChild(h3)
    div.appendChild(p)

    //anado la seccion los input al div comentarios

    divComentarios.appendChild(inptTextoComentarios)
    divComentarios.appendChild(inptButtoComentarios)
    
    //por ultimo agrego el div comentario a al div grande

    div.appendChild(divComentarios)

    return div

    

}

let contador = 0
let bandera =false

const cargarPublicaciones=(entries)=>{
    
    if(entries[0].isIntersecting){
        peticion(9)
    }//cada ves que intersecte la ultima cargar otras 3 ademas de las 2 de base
}

const observer = new IntersectionObserver(cargarPublicaciones)

const peticion = async (num)=>{
    const http =  await fetch('data.json')
    const respuesta1 = await http.json()
    const res = respuesta1.contenidos
        for(let i  = 0; i<num ;i++){
            if(contador<res.length){
                //el contador forma parte fundamental de esto por que basicamente el contador se suma cada vez que es menor que la longitud de ese arreglo;
                
                //por lo que cada vez que se suma se usa como hasmap para traer una pocicion del array , cada vez que se llama esta funcion el contador ya tiene un numero definido gracias a que se esta sumando , este no se va areiniciar porque basicamente el contador esta fuera de la funcion,por ejemplo si cargo por medio de la funcion creaPublicacion codigo cargo una publicacion gracias al hasmap de el contador y por ejemplo el array que tenemos porducto de la peticion http tiene una longitud de 15 publicaciones y el contador lleva una suma de 14 publicaciones cuando vuelva a llamarse la funcion gracias al observer y ala llamada de base se cargara la ultima publicacion cargada por lo que el contador seria igual al numero de longitud del array por lo que la condicion de este if deja de cumpkirse lo que quiere decir que trajo todas las publicaciones en el orden correspodiente y ya no hay mas
                const publicacion =crearPublicacioneCodigo(res[contador].nombre,res[contador].publicacion )

                fragmento.appendChild(publicacion)
                contador++
            }else{
                let noHayPublis = document.createElement('H3');
                noHayPublis.textContent='no ha publicaciones'
                bandera==false ? contenedor_main.appendChild(noHayPublis):false
                bandera=true
                
            
                
            }
            
            
        }
    contenedor_publicaciones.appendChild(fragmento);
     //esto es una manera de referirse ala ultima publicacion
    observer.observe(contenedor_publicaciones.lastElementChild)

}

//esto es para que se carguen de base solo 2
peticion(1)//para cargar el ultima publicacion
