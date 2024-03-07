"use strict ";





const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');



let contadorMinutos =120;




const addDate = ()=>{
 
    return new Promise(res=>{
        res(
            contadorMinutos-1
        )
    })



        
        /* for(let i =minutes;i>=0;i--){
            setInterval(()=>{
                minutos.innerHTML = i
                console.log(i)
            },2000)
            
        }
     */
   

}



for(let i =0; i<10;i++){
    addDate()
        .then(res=>{
        setInterval(()=>{
            minutos.innerHTML=res
        },1000)
        }
    )

}





