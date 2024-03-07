
//ejercicio 1
const person = {
    name:'juan',
    hello:()=>console.log(person.name)
}



person.hello()
Object.freeze(person)//object freeze vuelve inmutable un objecto asiendo que no se pueda cambiar o modificar ninguna de sus propiedades



//ejercicico2
 

console.log('')
console.log('ejercicio 2')
console.log('')

const ciudad = ['juan','juan','david','guiza']


let contador = 0
//estos contadores cuando dice i = 0 es que va a empezar desde la pocicion 0 hacia la pocicion -1 o la ultia pocicion como tal
for(let i = 0 ;i<ciudad.length;j++){
    console.log('bucle1')
    for(let j=1;j<ciudad.length;i++){
        console.log('bucle2')
        
        
    }
    
    
}


console.log(contador)