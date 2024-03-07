
let array =[];


let Register =c=>{
    for(let i =0;i<c;i++){
        array[i]= [prompt("ingresa tu nombre de usuario"),prompt("ingresa tu contraseña")];
        console.log(array)
    }
}




let buscar = ()=>{
    let user = prompt("ingresa el nombre de usuario")
    let pass = prompt("ingresa la contraseña")

    for(let i =0;i<array.length;i++){
        console.log(array[i])
        if(array[i][0]==user && array[i][1]==pass){
            document.write(` <h1 style="color:green;" >Bienvenido hijo</h1> <br> --------------  `)
            break;
        }else{
            document.write(`<h1 style="color:red;"  >lo siento no estas en la base de datos </h1>`)
            break;
        }
    }
}

Register(2)
buscar()

//ejercicio 2 cofla


let arr =[];

let registrar = (c)=>{
    for(let i=0;i<c;i++ ){
        arr[i]=[prompt("ingrese el nombre del alumno " + i+1 ),0,0];
    }
}

let tomarAsistencia = ()=>{
    for(let i =0;i<30;i++){
        for(let i =0;i<arr.length;i++){
            let asistencia = prompt(`ingrese p o a para  ${arr[i][0]}` )
            if(asistencia ==="p" || asistencia ==="P"){
                arr[i][1]++
                console.log(arr)
            }else if(asistencia ==="a" || asistencia ==="A"){
                arr[i][2]++
                console.log(arr)
            }else{
                alert("esta lista no soporta otros caracteres")
            }
        }
    }
}


let mostrar=()=>{
    for(let i =0;i<arr.length;i++){
        document.write(` <h1>  ${arr[i][0]}-------Asistencias # ${arr[i][1]} <br>
        --------Inacistencias de ${arr[i][2]} </h1>  <br> `)

        if(arr[i][2]>18){
            document.write(`el alumno ${arr[i][0]} <b style="color:red;" >ha reprobado</b>`)
        }else{
            document.write(`<b style:color:green;>ha aprobado felicitaciones</b>`)
    }
}

}

registrar(3)
tomarAsistencia()
mostrar();