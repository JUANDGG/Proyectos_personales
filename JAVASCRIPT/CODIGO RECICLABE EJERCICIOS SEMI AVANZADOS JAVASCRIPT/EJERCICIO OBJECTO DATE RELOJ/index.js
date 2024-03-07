"strict mode";

const hora = document.getElementById('hora')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')



const addCeros= n =>{
    if(n.toString().length <2)  return "0".concat(n) //aca convierte el datos pasado a string se recorre su longitud y si la longitud es menor a 2 entonces contatena el numero o n con una cadena o cero
    return n //si n es es un numero >=2 esto nos devuelve n o el numero
    //y lo anterior por que no usamos un else , es simple no lo usamos por que basicamente si la condicion anterior se cumple la funcion terminaria por lo que es innesesario poner un else si algo se cunple o no cuando vamos a retornar algo
}

const actualizarHora = ()=>{
    const tiempo = new Date()
    let tiempoHora =  addCeros(tiempo.getHours());   
    let tiempoMinutos =addCeros(tiempo.getMinutes()); 
    let tiempoSegundos = addCeros(tiempo.getSeconds());
    
    hora.innerHTML=tiempoHora
    minutos.innerHTML=tiempoMinutos
    segundos.innerHTML=tiempoSegundos

    //esto tiene un problema y es que tanto como los minutos y segundos no nos la devuelve con formato en  ceros  si no que no las devuelve de uno hasta de 10 y fin de la historia si quieres que tenga ceros asi 00 00 00  o 01 22 03 entonces se crea la funcion addCeros
}

actualizarHora()//esto lo hago porque cada vez  que recargamos la pagina nos muesta el intervalo cada segundo y cuando de aqui aque lo veamos cada segundo nos muestra los ceros antes de que enpiese el intervalor

setInterval(actualizarHora,1000)//set interval no se usa mas porque consume muchos recursos
