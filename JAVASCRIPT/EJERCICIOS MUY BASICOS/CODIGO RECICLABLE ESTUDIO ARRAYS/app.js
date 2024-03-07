const arr =[2,4,5,6];
console.log(arr.length)//length es para la lonigitud del array
//////////////////////////////////////////
//document.write(arr[arr.length-1])//esto trae el ultimo elemento de un array
//////////////////////////////////////////
//otra forma de acceder a un arreglo es usando el metodo at
//sdocument.write(arr.at(-1))//at es otra forma de iterar con elemento ya que funciona igual que esto arr[i]trae los valores ademas se le pueden poner valores negativos por lo que son de mucha utilidad

//para ver todo el contenido de nuestro arreglo se puede hacer de la siguiente manera


let arr22=[];
for(let i = 0 ; i<arr.length;i++){
    arr22.push(arr[i]+=1)
}



//esto es un for que recorre de atras hacia delante
//y toma el valor del arreglo de la parte de atras y la condicion
//es que cuando i sea mayo igual a 0 entonces recorre mientras i se va desincrementando
for(let i = arr.length -1 ; i>=0;i--){
   // document.write(arr[i])
}



//ejercicios con las cervesas

const arr1 =document.getElementById('arr1')
const arr2=document.getElementById('arr2')
const cervesas =['chelsea','bayerMunich','livepool','realmadrid','atletico bucaramanda','españa'];

const addElement =()=>{
    let arreglo1 = cervesas.slice(0,2+1);
    let arreglo2=cervesas.slice(3,cervesas.length-1+1)

    const run =arreglo1.forEach((i)=>{   
        const createElemnt =document.createElement('P');
        createElemnt.innerHTML=`${i}`
        arr1.appendChild(createElemnt);
    })

   
    arr2.innerHTML=`<p>${arreglo2}</p>`
}

addElement()


arr1.classList.add('arr1');
arr2.classList.add('arr2');


