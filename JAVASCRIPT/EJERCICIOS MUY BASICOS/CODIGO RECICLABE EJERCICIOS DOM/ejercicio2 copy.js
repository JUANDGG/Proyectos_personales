class inscrip{
    constructor(){
        this.arr=[
    
            {
                materia:"matematicas",
                inscritos:[]
            }
            ,
            {
                materia:"fisica",
                inscritos:[]
            }
         
        ]
    }



    mostrar(){
        for(let i =0;i<this.arr.length;i++){
            document.write(`${this.arr[i].materia}  ${this.arr[i].inscritos.length}   <br>`)
            break;
        }
    }


    incribir(){
        for(let i=0;i<this.arr.length;i++){
            let ins=prompt('ingresa la materia').toString()
            if(this.arr[i].materia == ins  ){
                for(let j=0;j<2;j++){
                    this.arr[i].inscritos[j]=prompt('ingresa tu nombre')
                }
                
                console.log(this.arr[i].inscritos)
            }
            
        }
    
    }

}

const inscribirUsuario = new inscrip()
inscribirUsuario.incribir()



const NewArr= (i)=>{//esto es otra forma de iterar con un objecto
    let materias={
        fisica:[1,2,3],
        matematicas:[4,5,6]
    }

    if(materias[i]){
        return [materias[i]]
    }else{
        return undefined
    }
    
}




let objecto ={
    arr1:[],
    arr2:[]
}


objecto.arr1.push('fernan')
objecto.arr1.push('david')

console.log(objecto.arr1)


objecto.value
(fisica)

