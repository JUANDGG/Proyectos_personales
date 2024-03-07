
const httpRequest = async (url,cb) =>{
    try {        
        const peticion = await fetch(url,{
            headers :{
                "Content-Type" : "type/text; charset=utf-8",
                "Access-Control-Allow-Origin" :url
            }
        })
        const result = await peticion.text()
        cb(result)
    } catch (error) {
        
        console.error(error)
    }

}

url ="http://127.0.0.1:5500/tarea_1/data3.tsv"




const leeArchivo = (text)=> {
    let lines = text.replace(/\r/g, '').trim().split('\n');
    return lines.map(line => {
      // Por cada linea obtenemos los valores
      let values = line.split('\t');
      return values;
    });
}

httpRequest(url,(response)=>{
    let  respuesta = leeArchivo(response)
})




const consumir  =()=> {

    const table = document.getElementById("table")
    const tr_cabecero = document.createElement("TR")
    const thead = document.getElementById("thead")
    const tbody = document.getElementById("tbody")
    //cabecero

    httpRequest(url,(response)=>{
        let  respuesta = leeArchivo(response)
        for(let i in respuesta[0]){
            tr_cabecero.innerHTML += `<th>${respuesta[0][i]}</th>`
            
        }

        for(let i =1 ;i<respuesta.length;i++){
            const tr_cuerpo = document.createElement("TR")
            for(let j in respuesta[i]){
                
                for (let k in respuesta)

                if (respuesta[i][j].includes("<")){
                    respuesta[i][j] = respuesta[i][j].replaceAll("<","&lt;")
                }
                if (respuesta[i][j].includes(">")){
                    respuesta[i][j] = respuesta[i][j].replaceAll(">","&gt;")
                }
                
               
                tr_cuerpo.innerHTML += `<td>${respuesta[i][j]}</td>`
                
            }

            tbody.appendChild(tr_cuerpo)
        }


        thead.appendChild(tr_cabecero)
    })
    



    


}

consumir()