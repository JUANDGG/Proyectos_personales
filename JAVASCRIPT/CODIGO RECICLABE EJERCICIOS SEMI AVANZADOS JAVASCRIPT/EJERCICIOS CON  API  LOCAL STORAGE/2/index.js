



const addZeros =(dataHourMinuteOrSeconds)=>{
    return dataHourMinuteOrSeconds.toString().length <2 ? "0" + dataHourMinuteOrSeconds :dataHourMinuteOrSeconds
}


const addTime =()=>{
    //no instanceo el objecto por fuera por que basicamente tenemos que llamarlo cuando llamamos ala funcion
    const getdate = new Date();
    const hour = addZeros(getdate.getHours())
    const minutes = addZeros(getdate.getMinutes())
    const seconds = addZeros(getdate.getSeconds())

    const hora = document.getElementById('hora').innerHTML = hour
    const minuto = document.getElementById('minuto').innerHTML = minutes
    const segundo = document.getElementById('segundo').innerHTML = seconds


    const arr = {
        hora,//colocamos los shortham para resumir las claves
        minuto,
        segundo
    }

    //como estamos cargandola en tiempo real y estamos llamanala funcion varias veses con con el intervalo tenemos que se actualize por decirlo en tiempo real se tiene que usar el for que va añadiendo en tiempo real la info al local storaje
    for(let i in arr)localStorage.setItem(i,arr[i])
    

    

}


addTime()


//llamamos la funcion cada segundo
setInterval(addTime,1000)