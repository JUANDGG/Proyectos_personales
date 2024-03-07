
let arr =[

    {
        materia:'matematicas',
        nota:[]
    
    }
    ,
    {
        materia:'fisica',
        nota:[]
    }
    ,
    {
        materia:'quimica',
        nota:[]
    }
]





const RegistraDatos = ()=>{
    for(let i =0;i<arr.length;i++){
       for(let j=0;j<2;j++){
            let nota =parseInt(prompt(`ingresa la nota para : ${arr[i].materia}`))
            arr[i].nota.push(nota)
       }
    }

}


RegistraDatos()

let contador = 0;

const sumarNotas  = () =>{
    for(let i = 0;i<arr.length;i++){
        for(let j = 0;j<arr[i].nota.length;j++){
            console.log(arr[i].nota[j])
            contador = contador + arr[i].nota[j];
            
            if(contador >=7 && contador <=10){
                document.write(`aprobaste en ${arr[i].materia} <br>`)
            }
        }

        if(contador <7){
            document.write(`lo siento crak no aprobaste en  ${arr[i].materia} <br>`)
        }
        contador=0
    }


}

console.table(arr)

sumarNotas()


