
class clases {
    constructor(){
        this.arr=[

            {
                materia:'matematicas',
                profesor:'elkin bueno',
                alumnos:[['juan david'],['mario roman'],['cofla'],['heli'],['hernesto'],['perez'],['jaime'],['roberto'],['luiz diaz'],['cr7']]
            }
            ,
             {
                materia:'quimica',
                profesor:'Andres pinilla',
                alumnos:[['messi'],['cr7'],['heli'],['juan david'],['hernesto'],['daniel'],['ricardo'],['chechi'],['firmino'],['andres']]
            }
            ,
             {
                materia:'fisica',
                profesor:'francia marquez',
                 alumnos:[['felipe'],['nazareth'],['rey david'],['arias monrrony'],['jaime ceballos'],['cofla'],['julian'],['zully pena'],['gabriel jesus'],['jaime narvaez']]
            }
            ,
             {
                materia:'sociales',
                profesor:'enrique pardo',
                 alumnos:[['francia marquez'],['luiz diaz'],['javier gonzales'],['benito malo'],['negra'],['jhoana'],['andres'],['rafael perea'],['andres martinez'],['felipe agamenon']]
            }
            ,
             {
                materia:'espanol',
                profesor:'francisca rosario',
                alumnos:[['francia marquez'],['luiz diaz'],['javier gonzales'],['benito malo'],['negra'],['jhoana'],['andres'],['rafael perea'],['andres martinez'],['felipe agamenon']]
            }
            ,
             {
                materia:'educacion fisica',
                profesor:'roberto garces',
                alumnos:[['francia marquez'],['luiz diaz'],['javier gonzales'],['benito malo'],['negra'],['jhoana'],['andres'],['rafael perea'],['andres martinez'],['felipe agamenon']]
            }
            ,
             {
                materia:'informatica',
                profesor:'jaime velasco',
                alumnos:[['felipe'],['nazareth'],['rey david'],['arias monrrony'],['jaime ceballos'],['cofla'],['julian'],['zully pena'],['gabriel jesus'],['jaime narvaez']]
            
            }
            ,
             {
                materia:'ciencias politicas',
                profesor:'farid trepalacios',
                    alumnos:[['messi'],['cr7'],['heli'],['juan david'],['hernesto'],['daniel'],['ricardo'],['chechi'],['firmino'],['andres']]
            }
            ,
             {
                materia:'filosofia',
                profesor:'leon villamizar',
                    alumnos:[['messi'],['cr7'],['heli'],['juan david'],['hernesto'],['daniel'],['ricardo'],['chechi'],['firmino'],['andres']]
            }
            ,
            
             {
                materia:'arte y cultura',
                profesor:'jennifer garces',
                    alumnos:[['messi'],['cr7'],['heli'],['juan david'],['hernesto'],['daniel'],['ricardo'],['chechi'],['firmino'],['andres']]
            }
            ,
            
             {
                materia:'musica',
                profesor:'maria paula novoa',
                alumnos:[['nernesto'],['javier'],['felipe'],['rey salvatierra'],['jaime mosquera'],['andres gusman'],['francisco tejano'],['felipe gutierres'],['farid mondragon'],['kevin cubides']]
            }
            ,
            
             {
                materia:'danza',
                profesor:'fabian mogollon',
                alumnos:[['felipe'],['nazareth'],['rey david'],['arias monrrony'],['jaime ceballos'],['cofla'],['julian'],['zully pena'],['gabriel jesus'],['jaime narvaez']]

            }
            ,

        ]
    }

    mostrarClasesetc(){
        const arreglo =this.arr.filter((i)=>{
            document.write(` <h1  style='color:red;' >${i['materia']}  </h1> :  <br> <h2 style;color;green:> ${i['profesor']}  </h2> <br>  <h3>${i['alumnos']}</h3>  `)
        })
 
        //recursividad
        /*for(let i =0;i<this.arr.length;i++){
            document.write(` <h1  style='color:red;' >${this.arr[i].materia}  </h1> :  <br> <h2 style;color;green:> ${this.arr[i].profesor}  </h2> <br>  <h3>${this.arr[i].alumnos}</h3>  `)                 
        }*/
    }



    mostrarCofla(){
        //const arreglo =this.arr.filter ((i)=>i['alumnos']=='cofla'  )

       /* for(let i = 0;i<this.arr.length;i++){//creo un for para recorrer el arrelgo de objectos //esta es otra forma
            for(let j = 0;j<this.arr[i].alumnos.length;j++){//creo otro for para iterar con el arreglo alumnos que es una matris
                if(this.arr[i].alumnos[j]=='cofla'){
                    console.log(this.arr[i].materia)
                }
            }
            
        }*/

        for(let i =0;i<this.arr.length;i++){
            for(let j = 0;j<this.arr.length;j++){
                if(this.arr[i].alumnos[j]=='cofla'){
                    document.write(`  <p> ${this.arr[i].materia} <p>  =   <p>${this.arr[i].profesor}<p> ,,`)
                }
            }
        }
        
           
    }
}



const classs =new clases();
classs.mostrarClasesetc()
classs.mostrarCofla()




const arreglo1 =[
    //este arreglo solo tiene una pocicion externa la cual es la pocicion externa 0 que a su vez esta contiene subpociciones internas
    //esto es solo un for si quiero recorrer pociciones externas
    {
        valor1:'estas en el arreglo 1',//con esto arr[i]el bucle entra acada una de las pociciones internas y muestra los valores y no la pociciones como tal
        arreglo2:{
            valor2:'estas en el; arreglo 2',
            arreglo3:{
                matriz:[['juan',123],{name:'david'},[true],[1,2,3,4]] //el length es diferente alas pociciones ya que el length cuenta cuantos elementos hay dentro de un areglo y no cuenta sus pociciones
            }
        }
    }

    ,



    {

    }

]

/*for(let i =0;i<arreglo1.length;i++){//aca solo estoy iterando en pociciones externas del arreglo
    console.log(arreglo1[i].arreglo2.arreglo3.matriz[i])//con un for no puedo iterar 2 arreglos de objectos mas no una matris interna para esto se usa otro for ala vez 
}*/



/*for(let i in arreglo1){
    for(let j in arreglo1.arreglo2.arreglo3,matriz){
        console.log(j)
    }
}*/



/*for(let i =0;i<arreglo1.length;i++){
    for(let j = 0;j<arreglo1[i].arreglo2;i++){//asi no entra porque no hay una longitud que recorrer
        console.log('log')
        console.log(arreglo2[j])
    }
}*/




/*for(let i =0;i<arreglo1.length;i++){
    for(let j = 0;j<arreglo1[i].arreglo2){//asi no entra porque no hay una longitud que recorrer
        console.log('log')
        
    }
}*/

