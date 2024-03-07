

//aca lo que hago basicamente es hacer una peticion a una api que devuelve 6 links u url alas que voy a hacerles una peticcion

/*const getData = async()=>{
    try {
        const consm= await fetch('https://swapi.dev/api/')
        const data = await consm.json()  
        return data
    } catch (error) {
        console.error(error , 'a fallado la solicitud')
    }
} 





const data = async ()=>{
    const result = await getData()
    for(let i in result){
        const resultados = await fetch(result[i])
        const respue = await resultados.json();

        
        
        for(let i of respue.results){
            let lukSkaY = [i]
            console.log(lukSkaY[0])


        }
        

        
    }

}


data()
*/


//peticion usando then esto no funcionaria con then cuando hacemos una comprobacion si todo salio bien nos devuelve undefined ya que la respuesta tarda demasiado

/*
   try {
    fetch('https://swapi.dev/api/')
        .then(result=>{
            if(result.ok)Promise.resolve(result)
            else throw 'a ocurrido un error'
        }).then(result=>console.log(result))
   } catch (error) {
        console.log(error)
   }
*/

const root = document.getElementById('root');

const title = async ()=>{
    //con asyn y await basicamente no tendremos que usar then then en espanol significa entonces ,entonces basicamente dice entonces(respuesta) then(result) cuando manejamos then estamos manejado el resolve() cuando usamos cath estamos usando reject()

    //xhttp devuelve una promesa es como decir
    const xhttp = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=malabares')
    //xttp.then(resultado)//recordemos que resutaldo es una promesa ya que las peticiones por lo general devuelven una promesa en la cual esta el resultado
    //aca basicamente con await accdemos ala promesa y convertimos el resultado a json()
    const resultado = await xhttp.json()

    console.log(resultado)

    const titulo = resultado.results[0].title
    const img =resultado.results[0].thumbnail

    
    root.innerHTML =
    `
    <h1>${titulo}</h1>
    <img src='${img}'>
    
    `

    
}


title()



