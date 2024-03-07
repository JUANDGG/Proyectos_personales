const hijo1 = document.getElementById('hijo1');
const hijo2=document.getElementById('hijo2');



const data =['hello','world','juandavid'];
console.log(data[data.length-1])//con esto puedo ver el ultimo elemento de un array

//tambien puedo acceder a un elemento conforma de un array conforme a un metodo

console.log(data.at(0))//con at podemos acceder acada uno de los elementos de un array por ejemplo aca accederiamos ala posision 0
console.log(data.at(-1))//aca acederiamos ala pocicion -1 o ala ultima pocision correspondientemente


//basicamente aca lo que hago es darle a i 
for(let i =data.length;i>0;i--){

}



for(let i =0;i<data.reverse().length;i++){
    hijo1.innerHTML+=`<p>${data[i]}</p>`//el mas igual es para que basicamente se agregen el numero de equiqutas y no se remplazen ala hora de agregar
}

