const data = {
    name:'juan',
    lastName:'guiza garcia'
}


//una promesa es un objecto que nos permite revolver una respuesta  y errores si no hay respuestas



//un codigo asincrono es basicamente que toma tiempo en procesarse
const promesa =new Promise ((resolve,reject)=>{
    if(!data.name){//primero hay que colocar si la app encontro errores porque bassicamente es una buena practica poner si hay algun error arriba de todo y si no hay pues revuelve las respuestass

        //set time out simula esta operacion
        return reject('no hemos encontrado la propiedad')//reject es un manejador de expeciones como throw es basicamente lo mismo 
    }else{
        return resolve('hemos encontrado la propiedad')
    }
})


/*promesa
    //cuando usamos then es decir si todo salio bien, esto hace referencia al resolve de la promesa antes puesto
    .then(respuesta=>console.log(respuesta))
    .catch(errores =>console.log(errores))
*/


//seguir viendo este tutorial 

//con asyng y await

const f =async ()=>{

    try {
        //await es otra forma de referirnos alas respuesta o resolve es igual que el then si no que con mas ventajas
        const respuestaPromesa =await promesa //como await solo toma el resolve tendremos que usar try cath para que no tome el reject o error por si lo hay   
        console.log(respuestaPromesa)     
    } catch (error) {
        console.error(error)
    }
}

f()