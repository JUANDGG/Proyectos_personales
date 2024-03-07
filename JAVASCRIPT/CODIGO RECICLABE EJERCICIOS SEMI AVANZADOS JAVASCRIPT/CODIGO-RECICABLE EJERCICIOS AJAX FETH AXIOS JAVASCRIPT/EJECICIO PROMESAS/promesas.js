const data= {name:'juan'};

//las promesas se usasn cuando sabemos que una operacion va a tomar tiempo
function getData (users){
    return new Promise(res =>{
        if(data.name!=users){
            //primero va el error
            throw 'no encontramos el usuario'
        }else{
            res('usuario encontrado')
        }
    })
}

//con then
/*getData('juan')
    .then(result => console.log(result))
    .catch(err =>console.error(err))
*/

//cons asyn y await

async function  prosesingData(){

    try {
        const procesingPromise = await getData('david')
        //mostramos la respuesta recordemos que el await obtiene la respuesta o el resolve de una promesa  ejemplo:
        //then(respuesta=> console.log(respuesta)) esto se podria hacer asi const resultado = await promesa; console.log(resultado)
        console.log(procesingPromise)    //await tiene una peculiaridad y es que  basicamente nos permite remplazar el await por el then ya que basicamente lo que hace await es tomar la promesa y obtener la respuesta si en este caso la operacion de la promesa nos devuelve el resolve o si esta todo ok el await se ejecuta si el resolve falla y no devuelve un reject o una exepcion en este caso no podriamos manejar el erro con asyn ya que basicamente si el resultado no es correcto la funcion no se procesaria mas por lo que basicamete para manejar errores sin usar un cath dentro de la promesa lo podemos hacer con un try cath y asi si no salta un reject poder manejar el error correctamente
    } catch (error) {
        console.log(error)        
    }

    
}
prosesingData()





