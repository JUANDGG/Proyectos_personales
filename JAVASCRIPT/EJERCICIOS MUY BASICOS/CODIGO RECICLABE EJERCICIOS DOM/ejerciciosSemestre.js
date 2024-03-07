class semestre{
    constructor(){
        this.arr = [
            {
                semestre1:90,
                materias:[[],[],[],[]]
            }
        ]
    }

    aproboOreprobo(){
        for(let i =0;i<this.arr.length;i++){
            for(let j =0;j<this.arr[i].materias.length;j++){
               for(let k=0;k<2;k++)             {
                    this.arr[i].materias[j][k]='hola'
                
               }
            }
        }
        console.table(this.arr)
    }

    app(){
        for(let i in this.arr){
            if(this.arr[i].materias){
                for(let j in this.arr[i].materias){       
                    for(let o = 0 ; o<4; o++){//crear varios holas en cada arreglo
                        this.arr[i].materias[j][o]='hola'
                        console.log(this.arr[i])
                    }
                }
            }
        }

        
    }


    m
}



const ins = new semestre();
ins.app()




