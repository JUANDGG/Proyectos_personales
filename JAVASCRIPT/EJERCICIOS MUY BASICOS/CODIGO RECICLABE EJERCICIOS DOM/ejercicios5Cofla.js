class calculadora{
    constructor(){
        this.arrSuma=[];
        this.arrResta=[];
        this.multiPlicacion=[];
        this.divicion=[];
        this.opcion=[
            {
                'suma':'1'
            }
            ,
           /* {
                'resta':'2'
            }
            ,
            {
                multiplicacion:'3'
            }
            ,
            {
                divicion:'4'
            }*/
        ]
    }



    suma(){
        let numSum = parseInt(prompt('ingrese el numero'))
        this.arrSuma.push(numSum);
        console.log(this.arrSuma)
    }


    main(){  
        for(let i =0;i<this.opcion.length;i++){
            document.write(this.opcion[i].suma + '<br>')
        }


        for(let j =0;j<this.opcion.length;j++){
            if(this.opcion[i]==op){
                console.log(this.opcion[i].op)
            }
        }
    }
 

}


const cal = new calculadora()
cal.main()
