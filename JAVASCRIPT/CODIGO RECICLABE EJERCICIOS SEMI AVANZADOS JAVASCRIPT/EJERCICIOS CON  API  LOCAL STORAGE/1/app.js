"strict mode"

let estado =false;
const addDataLocalStorage = (data)=>{
    estado = true;
    //asi se quite este for que agrega informacion al local storage la informacion sigue permaneciedo
    for(let i in data)localStorage.setItem(i,data[i])

}




const addData = async()=>{
    try {
        const getData = await fetch('info.json')
        const res1 = await getData.json()
        estado ==false ? addDataLocalStorage(res1):console.log('la funcion llamada ya fue ejecutada')

    } catch (e) {
        e ='a ocurrido un error'
        console.error(e)
    }
}


addData()


//pintamos por patalla el local storage

const addDom = ()=>{
    for(let i in localStorage){
        document.querySelector('.root').innerHTML+=
        `
        <h1 class='container__title'>
            clave : ${i}
            valor :  ${localStorage.getItem(i)}

        </h1>

        `
    }
    
}


addDom()