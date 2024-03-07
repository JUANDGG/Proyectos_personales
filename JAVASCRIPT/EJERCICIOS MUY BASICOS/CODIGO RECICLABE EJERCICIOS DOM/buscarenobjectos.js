const object =
    [{'año': 2000, 'metros': 100, 'habitaciones': 3, 'garaje': true, 'zona': 'A'},
    {'año': 2012, 'metros': 60, 'habitaciones': 2, 'garaje': true, 'zona': 'B'},
    {'año': 1980, 'metros': 120, 'habitaciones': 4, 'garaje': false, 'zona': 'A'},
    {'año': 2005, 'metros': 75, 'habitaciones': 3, 'garaje': true, 'zona': 'B'},
    {'año': 2015, 'metros': 90, 'habitaciones': 2, 'garaje': false, 'zona': 'A'}];




/*const filter = object.filter((i)=>i.año==2000)

console.log(filter)

const filtro =object.filter((i)=>{
    if(i.metros===100)return i
})
console.log(filtro)*/

/*for(let i =0;i<object.length;i++){
    
    if(object[i].año ===2000){
        console.log(i,object[i])//traigo la pocicion y traigo el objecto como tal lo que vale en ese momento
    }
}*/
console.log('**************************forma 1**********************************')

for(let j = 0;j<object.length;j++){
    console.log(object[j].año===2000 , j)///imprime true o false ya que le estoy pasando un valor que estoy buscando como tal no algo donde debe imprimir
}

console.log('**************************forma 2**********************************')
for(let j = 0;j<object.length;j++){
    if(object[j].año===2000)console.log(object[j],j)//imprime el valor y su pocicion
}

console.log('**************************forma 3**********************************')
const recor = object.forEach((i)=>{
    if(i.año===2000)return console.log(i.año)//imprime solamente el año
})



if(!true){
    console.log('hola guapo')
}


const sumNum =(n)=>{
    let count =0;
    for(let i = 0;i<n;i++){count +=i}
    return console.log(count)

}

sumNum(5)