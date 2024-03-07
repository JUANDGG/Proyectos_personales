const container =document.getElementById('padre');
const inputValueData =document.querySelector('.data');
const inputValueSubmit =document.querySelector('.submit');
let llave=null;
const fragmenDocument=document.createDocumentFragment();//creo fragmento del documento para pintar lo contenedors que ire agregando
const data = [
    {
        model:'A01',
        precio:1000,
    }
    ,
    {
        model:'A02',
        precio:2000
    }
    ,
    {
        model:'A03',
        precio:3000
    }
    ,
    
]


const addElement =()=>{
    const run = data.forEach((i)=>{
        const createDiv = document.createElement('DIV');
        createDiv.innerHTML=
        `<article class="targArt" >
            <img src="llave.jpg" heigth="10px">
            <p> MODEL:  ${i.model}</p>   <br>
            <p> PRICE:  ${i.precio}</p>
        </article>`
        createDiv.tabIndex=1;
        createDiv.classList.add('target')//agrego clase para editar estilos con css


        //evento para cuando de click
        createDiv.addEventListener('click',()=>{
            return inputValueData.setAttribute('value',i.model)
        })

        fragmenDocument.appendChild(createDiv);
    })
    return container.appendChild(fragmenDocument);
}

addElement()



const compra =()=>{
    inputValueSubmit.addEventListener("click",()=>{
        llave=inputValueSubmit.value=inputValueData.value
        if(llave!=null){
            alert('compra realizada con exito')
        }else{
            alert('elije algo que comprar')
        }
    })
}

compra();


class calculadora {

    constructor(n1,n2){
        this.n1=n1;
        this.n2=n2;
    }


    sumar(){
        return alert(this.n1+this.n2)
    }

    resta(){
        return alert(this.n1-this.n2)
    }


}


const calq =new calculadora(4,2);
