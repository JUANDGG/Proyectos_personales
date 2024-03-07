//primer ejercicio 
let bandera =false;//scope global
const validarCliente =(hora,edad)=>{
    if(edad>=18 && edad<=110){
        if(hora>=2 && hora<=6 && bandera===false){
            bandera=true;
            let ganador =prompt("ingresa tu nombre hijo")
            alert(`eres el ganador  ${ganador} `)
        }else{
            alert(" eres mayor puedes entrar pero  paga a haora")
        }

    }else{alert("eres menor de edad")}
}

validarCliente(2,19)


//segundo ejercicio

let cantidad = parseInt(prompt("ingresa el numero de alumnos de la clase"));
let arr = [];

for(var i = 0;i<cantidad;i++){
    arr[i]=[prompt("ingresa el nombre del alumno " +  (i+1)),0,0]//asi puedo crear matriceses y dar valores
    console.log(arr)
}

const tomarAsistencia = (nombre,pocicion)=>{
    let asistencia =prompt(`ingresa presente P o ausente A segun corresponda a: ${nombre}`);
    if(asistencia =="p" || asistencia =="P"){
        arr[i][1]++
    }

}

for(var j =0;j<30;j++){
    for(i in arr){
        /*con arr[i]en este for in tomo todos los valores de las pociciones y cuando hago esto:  arr[i][0] estoy tomando todos lo valores de las pociciones de la pocicion 0 */
        tomarAsistencia(arr[i][0],posicion)
    }

}