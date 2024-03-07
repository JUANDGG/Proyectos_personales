const containerFather = document.querySelector('#padre');
containerFather.classList.add('padre')//agrego una clase al elemento padre
const fragmentCar =document.createDocumentFragment();//SubContenedor para haorra recursos

const addCar = c=>{
    for(let i =1;i<=c;i++){
        const divChilldP = document.createElement('DIV');//conteneedor padre
        const  pChilld = document.createElement('H1');//contenedor hijo
        pChilld.innerHTML=`LLAVE  ${i}`//agregar texto a philld
        const button =document.createElement('BUTTON'); //creacion de boton
        button.innerHTML=`añadir +`//creacion de texto llamado añadir
        button.setAttribute('value',i)//se le manda un atributo al boton con el valor de lo que valga el identificador

        //anadir clases para estilos css
        button.classList.add('boton')
        button.setAttribute('id','targeta')
        divChilldP.classList.add('target');
        
        divChilldP.appendChild(pChilld);
        divChilldP.appendChild(button);
        fragmentCar.appendChild(divChilldP);
    }
   
     return containerFather.appendChild(fragmentCar)

}



addCar(50);


const buttonValor =document.getElementById('targeta');
const addCompra =()=>{
    let  traer =buttonValor.getAttribute('value')
    return console.log(traer)
}
buttonValor.onclick=addCompra()



//buscar en un arreglo que 2 numeros sumen 8

/*const arr=[5,3,4,2]

const busSum = num =>{
    for(let j =0;j<arr.length;j++){//un for que empiese desde adelante
        for(let i = 0;i<arr.length-1;i++){   //y otro for que empiese desde atras
            if(arr[i] + arr[j] ==num)return console.log(true)
        }
    }
}

busSum(8)*/
