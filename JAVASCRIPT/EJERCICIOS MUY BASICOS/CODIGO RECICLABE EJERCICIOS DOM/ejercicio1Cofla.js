
//esto es una forma de hacerlo
let palitoDeAgua =0.6;
let heladoDeCrema=1;
let bombomHeladoMarcaHeladix =1.6;
let bombomHeladoMarcaHeladovich=1.7;
let bombomHeladoMarcaHelardo=1.8;
let potecitoHeladoConfetis=2.9;
let poteHelado=2.9;


let dinero =parseFloat(prompt("ingresa cuanto dinero tienes")) ;

if (dinero>=0.6 && dinero <1){//esto es un rango
    document.write("comprate el helado de agua")
    let cambio =parceo-palitoDeAgua;
    document.write(`tu cambio es de ${cambio} `)
}

else if (dinero>=1 && dinero<1.6){
    document.write("comprate el helado de crema")
    let cambio = parceo-heladoDeCrema
    document.write(`tu cambio es de ${cambio} `)
}

else if (dinero>=1.6 && dinero<1.7){
    document.write("comprate el helado de marcaHeladix")
    let cambio = parceo-bombomHeladoMarcaHeladix
    document.write(`tu cambio es de ${cambio} `)
}

else if(dinero>=1.7 && dinero<1.8){
    document.write("comprate el helado marca Heladovich")
    let cambio = parceo-bombomHeladoMarcaHeladovich
    document.write(`tu cambio es de ${cambio} `)
}

else if(dinero>=1.8 && dinero<2.9){
    document.write("comprate el helado marca Helardo")
    let cambio = parceo-bombomHeladoMarcaHelardo
    document.write(`tu cambio es de ${cambio} `)
}

else if (dinero>=2.9){
    document.write("puedes comprar o el pote de helado con confetis  o el pote de helado")
    let cambio = parceo-poteHelado
    document.write(`tu cambio es de ${cambio} `)
}

else{
    document.write("tu dinero no es suficiente")
}


//esto es otra forma de hacerlo esto es una around funcion

const definirCompra = ()=>{
    let dinero = parseFloat(prompt(`ingresa cuanto dinero tienes `))
    let helados=[

        {
            nombre:"helado de vainilla",
            precio:1
        }
        ,
        {
            nombre:"helado de chocolate",
            precio:2.9
        }

    ]


    for(let i =0;i<helados.length;i++){
        //if((helados[i]["precio"]>=dinero && helados[i]["precio"]<=dinero))return document.write("estas en el rango del dinero")

        if((dinero>=helados[i]["precio"]&& dinero<=helados[i]["precio"]))return document.write("tenes mucha plata para comprar")//esto quedo mal toca arreglarlo
        


    }

    
}

document.write(definirCompra())



let helados =[
    
    {
        nameHelado:'vainilla',
        precio:2000
    }
     ,
    {
        namehelado:'fresa',
        precio:1000
    }
    ,
    {
        nameHelado:'franbuesa',
        precio:4000
    }

]

let plata = parseInt(prompt('ingresa tu monto')) 
const rSh=helados.filter((i)=> plata>=i['precio'])//aca lo que digo es basicamente es que me traiga un arreglo en los que el precio de los helados sean menores  o iguales al monto introducido

console.log(rSh)


