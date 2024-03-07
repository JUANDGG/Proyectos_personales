const titleTarea =document.getElementById('titleTarea');
const tarea = document.getElementById('Tarea');
const btnAgg =document.getElementById('btnAgg');
const root = document.getElementById('root');
const paragrafElemError= document.querySelectorAll('p')
const removeChildH1 = document.querySelector('.remove')

const container = document.querySelector('.container');


let bandera =false
const anonimateFunction =()=>{
    root.removeChild(removeChildH1);
    bandera=true
}


//creo evento para 
function originEvent(){
    const valueInpt = [titleTarea.value,tarea.value]
    const htmlCode = 
    ` <div>
        <h1>${valueInpt[0]}</h1>
        <p>${valueInpt[1]}</p>
    </div>
        `;
    const promesa = new Promise((res,rej)=>{
        valueInpt[0]=='' ||valueInpt[1]=='' ? rej('hay espacios vacios'):res(bandera ? false:anonimateFunction(),root.innerHTML+=htmlCode)
    });

    promesa.then((result)=>{
        paragrafElemError.forEach((Element)=>{
            Element.innerHTML='';
        });
    }).catch((error)=>{
        paragrafElemError.forEach((Element)=>{
            Element.innerHTML=error;
        });
    });
}   


//event mouse Click
btnAgg.addEventListener('click',originEvent)
container.addEventListener('keypress',(e)=>{
    if(e.key =='Enter'){
        originEvent()
    }
})

