

const data = [

    {
        name:'juan david',
        lastName:'guiza garcia'
    }

]


/*******FOREACH*******/ 

//ES UN METODO DE RECORRIDO DE ARRAYS ESO ES LO QUE HACE RECORRER ARRAYS


//el foreach puede tener un o dos paramentro el primero son lo valores del arry y el segundo son los indices
/*data.forEach(function (number,index){
    //cuando pongo un solo parametro es decir basicamente que devuelva los resultados si encambio pogo el indice basicamente
    //me devuelve el indice
    console.log(number,index)
})*/

//con funciones flecha
/*data.forEach((number,index)=>{
    console.log(number,index)
})


//hay un tercer parametro para trabajar con foreach
//este tercer parametro nos devuelve basicamente nos devuelve es obtener el mismo arreglo que vamos a recorrer

data.forEach(function (number,index,arr){
    console.log(number,index,arr)
})

*/


//los foreach no devuelven nada por lo que tenemos que manipularlos datos dentro del foreach para returnar algo como tal


/* 
para comentar todo ala vez tenemos shift + alt + a
data.forEach((estudent)=>{
    console.log(estudent.name + " " + estudent.lastName)
}); */

//otra forma de trabajar con bucles 
/* const fullNames =[];
data.forEach(users=>fullNames.push(users.name + " " + users.lastName))
console.table(fullNames)
 */


/******MAP***** */

//A DIFERENCIA DEL FOREACH EL MAP SI NOS CREA UN ARREGLO NUEVO POR LO QUE ES INMUTABLE ,A DIFERENCIA DEL 
//FOREACH EL CUAL ES UN METODO DE RECORRIDO NADAMAS

//map tambien recibe una callback o funcion
//con funciones clasicas
/* data.map(function (){

})
 */



//cons funciones nuevas  o around function los map returnan un arreglo no un objecto
/* 
const result =data.map(element=>{
    return element.name + ' ' + element.lastName
})


console.log(result)
 */


// tambien podemos hacer esto


const result =data.map(element=>{
    //podemos crear un objecto que altera las prpiedades de  otro como tal
    //pero esto es un poco anticuado entonces que podemos hacer para digamos crear un objecto con las mismas propiedades de otro entonces podemos hacer un expreate opereator esto me ayuda a copiar la propiedades de un objecto y al final lo alteramos
    return {
        /* fullname: element.name + ' '+element.lastName,
        title:'estudents' */
        //esto es un expreate operator y lo podemos utilizar para compiar todas la propiedades de un objecto sin anadir o copiar un tras otra como tal esto tambien sirve para modificar alguna propiedad dentro de las propiedades que compiamos

        //con expreate operator podemos decir basicamente que copie todas las propiedades de un objecto que estamos recorriedo en este caso con map y nos modifique la propiedad name de todos lo objecto
        //si queremos hacer esto primero se copian los datos y luego modificamos alguna propiedad
        ...element,
        name:'guiza'//para hacer una modificacion tenemos que poner el mismo nombre de la propiedad ya que si ponemos un nombre distinto no lo agregara en lugar de modificarnolo


        //si nombramos una propiedad y despues llamamos al sprate operator basicamente la propiedad name no se agrega ni se modifica tampoco esto es por que estamos llamando al sprate operator despues 
        /* name:'guiza',
        ...element */
    }
})

console.log(result)



//ejercicio n1 modificar todos los datos de un arreglo de objectos  usando map


const ob = [
    {number:3,age:2},
    {number:2,age:3},
    {number:1,age:3}
]

//lo que hace map es crearno un arreglo nuevo esto es muy util porque podemos jugar con los datos sin la nesidad de modificar los datos originales
const Mapear = ob.map(element=>{
    return{
        ...element,
        number:'juan'
    }
})



//ademas de esto yo puedo reutilizar el map de la siguiente manera
//digamos que yo quisiera multiplicar los valores del atributos age por 2 como se podria hacer
//se podria hacer de la sigueinte manera


//esto nos devolveria otro arreglo con un objecto con los valores de las propiedades brevemente modificados
/* const Mapear2 = Mapear.map(element=>{({...element,age:element.age*2})})

console.log(Mapear2) */

//lo anterior lo podemos simplificar de la sigueinte manera como el primer ma

//como esto returna un objecto al finaliza lo podemos recorrer y alterar su propiedades con otro map
const doubleAge = ob.map(element=>{
    return{
        ...element,
        number:'juan'//aca modificamos una cosa
    }
}).map(element=>({...element,age:element.age*5}))


console.log(doubleAge)



///////////*****FILTER////////////***** */

//filter nos ayuda a buscar algo y nos devuelve un arreglo con lo que encontro de las busqueda que le dijimos que hiciera
//si quisieramos hacer un filtro de elemento por edades de estoudiante sin el filter seria asi


const estudents = [
    {name:'Jonh',lastName:'doe',age:20,course:'web development'},
    {name:'Ryan',lastName:'Ray',age:20,course:'data sciense'}
]

//sin el filter tendriamos que basicamente o usar un metodos de repeticion como foreach o for exactamente asi :

//esto es un sin el filter con un simple for
for(let i in estudents){
    if((estudents[i].course)&&(estudents[i].course ==='web development')){
        console.log(estudents[i])
    }
}


console.log('*************************************************')

//con filter seria asi :pasame una funcion que cumplan una condicion y yo te devuelvo el arreglo con las codiciones que me pasate el filter returna algo si cumple una condicion es muy diferente del map

//si la condicion es verdadera o true nos devuelve un arreglo con lo que buscamos si no no devuelve nada
const dataModifyEstudents = estudents.filter(element=>(element.course)&&(element.course==='web development'))


//haciendo esto mismo pero con mas lineas de codigo

// el flujo de ejecucion es el siguiente si primero por ejemplo entrara aca
const dataModifyEstudents2=estudents.filter(element=>{
    //primero revisa la condicion que le pasamos y si se cumple
    if(element.course ==='data sciense'){
        return true //returnamos true , al returnar true basicamente es como decirle devuelve lo que busque en un arreglo
    }
})

console.log(dataModifyEstudents2)


console.log('*****************************************************************')

//////////////////////METODO REDUCE////////////////////////

//EL REDUCE BASICAMENTE TOMA LAS PROPIEDADES DE UN OBJECTO Y LAS REDUCE A UN SOLO VALOR PUEDE HACER OPERACIONES DENTRO DE UN ARREGLO U OBJECTO Y REDUCIENDO TODAS ESAS PROPIEDADES A UN  SOLO VALOR
//UNA EXPLICACION DE QUE ES REDUCE HAGAMOS DE CUENTA QUE NOSOTROS DESEAMOS BASICAMENTE SUMAR TODAS LAS EDADES DE UNAS PERSONA DENTRO DE UN ARRY DE OBJECTO ESTO LO PODRIAMOS HACER DE LA SIGUIENTE MANERA 



const usersPage=[
    {name:'daivis',age:10},
    {name:'john',age:20},
    {name:'ryan',age:30},
]


/* 

esto lo podriamos hacer de esta manera pero como vemos es un poco engoroso por lo que hay un metodo de arrays que es mucho mas efectivo y rapido llamado reduce

let count= 0;
for(let i in usersPage){
    count += usersPage[i].age
}
console.log(count) */


//si hicieramos lo mismo pero con reduce
//reduce recibe 1 callback o funcion que puede tener 1 o 2 parametros el primero es una variable contador y el segundo es el encargado de mostrarnos lo elementos
/* const value = usersPage.reduce((count,element)=>{
    return count+element.age;     
},0);//cuando ponemos un 0 de esta manera estamos diciendo que le count o el contador empiese en 0

console.log(value) */

//podriamos reducir el codigo anterior a un mas de esta manera

const value = usersPage.reduce((count,result)=> count + result.age , 0)
//es lo mismo que lo anterior si no que mas reducido
console.log(value)

//EJERCICIO CON REDUCE :
//DADO EK OBJECTO DEVELOPERS JUNTAR TODAS LAS SKILLS DE LOS DESARROLLADORES EN UN SOLO ARREGLO

const developers =[
    {
        id:1,
        name:'John',
        skills:['html','react','javascript','java']
    }
    ,
    {
        id:2,
        name:'Jane',
        skills:['html','react','javascript','java','angular','firebase']
    }
    ,
    {
        id:3,
        name:'fabricio',
        skills:['html','react','javascript','java','angular','firebase','sql','mongoDB']
    }
]

/* 

este ejercicio se puede hacer asi pero queda un poco feo
const skills = developers.reduce((arr,elements)=> arr+=[elements.skills],[])
console.log(skills)
 */


//hagamolo asi



const skills = developers.reduce((array,elements)=>{
    
/* 
basicamente se podria hacer asi : returno un arreglo con 2 operadores sprate el primero es para que pegue todos los elementos que siguen al arreglo osea ...array es para que copie y pegue esto ...element.skills que son todas la skills de los desarrolladores

*/
    return [...array,...elements.skills]
},[])

//todo muy bien hasta aqui pero por ejemplo si rebisamo el array creado podemos ver que hay alguno elementos repetidos entonces como podriamos decirle que lo que se agregue no sean elemento repetidos🤱? se podria hacer con un objecto llamado set() que es un conjunto que no permite que agreguemos datos repetidos a un arreglo


 /* 
    basicamente se podria hacer asi : returno un arreglo con 2 operadores sprate el primero es para que pegue todos los elementos que siguen al arreglo osea ...array es para que copie y pegue esto ...element.skills que son todas la skills de los desarrolladores
    
*/


const skillsNoRepetidas = developers.reduce((array,elements)=>{
        return  new Set([...array,...elements.skills])
    },[])


console.log(skillsNoRepetidas)


/* 
    pero hay otro pequeno problema que el set no nos devuelve una estrutura o un array entoces que podriamos hacer? : prodiamos hacer lo siguinete
*/



const skillsNoRepetidasARRY = developers.reduce((array,elements)=>{
    //con array from lo que digo es llamar al objecto global array para que con el metodo from convierta todo a un arreglo o toda la escrutura como tal
    return Array.from(new Set([...array,...elements.skills]))
},[])


console.log(skillsNoRepetidasARRY)





//***************************METODO SORT************************* */

//SORT RECIBE DOS PARAMENTROS UNO ES EL PRIMER ARREGLO ACOMPARAR Y EL SEGUNDO ES EL SEGUNDO ARREGLO A COMPARAR
//SORT ES PARA ORDENAR DIGAMOS QUE TENGO UN ARREGLO DE OBJECTO QUE DESEEMOS ORDENAR CON SORT LO PODEMOS HACER DE LA MANERA QUE DESSEMOS DE LA SIGUIENTE MANERA


const database = [

    {
        id:5,
        name:'John',
        skills:['html','react','javascript','java']
    }
    ,
    {
        id:20,
        name:'Jane',
        skills:['html','react','javascript','java','angular','firebase']
    }
    ,
    {
        id:2,
        name:'fabricio',
        skills:['html','react','javascript','java','angular']
    }
]


//a hace referencia a al primer elemento del arreglo y b al segundo elemento del arreglo 
/* const arrOrder = database.sort((a,b)=>a.id-b.id)//cuando yo digo a-b es que ordene desde el id mas pequeno al id mas grande de forma decendete pero si yo dijiea b-a entonces se ordenaria de forma accendente desde el mas pequeno al mas grande
 */


/* const arrOrder2 = database.sort((a,b)=>b.name-a.id)//si utilizamos estamanera decimos que primero se ordenen los nombres y luego las id
console.log(arrOrder2)
 */


//se podria hacer de las otras formas pero hay otra formas como esta


/* const arrOrder2 = database.sort((a,b)=>{
    
    if(a.id > b.id){
        return 1 //basicamente es como decir return true si no que con sort es para hacer referencia a a es mayor a b 
    }else{
        return -1 //basicamente es como decir return false que es basicamente que b es mayor a a recordemos que sort nos retorna un arreglo ordenado
    }
})

 */


//lo anterior tambien se podria simplificar asi


const arrOrder2 = database.sort((a,b)=>a.id>b.id ? 1:-1)
console.log(arrOrder2)


//quedamos en el minuto 49 del curso de arrays de fazt