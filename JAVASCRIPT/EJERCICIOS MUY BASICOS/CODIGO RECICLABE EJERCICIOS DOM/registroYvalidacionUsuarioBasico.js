let arrayUser =[];

let registerUser = ()=>{
    let nameUser =prompt("ingresa tu nombre de usuario para registrarte");
    let passUser =prompt("ingresa tu contraseña para registrarte")
    for(let i =0; i<1;i++) arrayUser[i]=[nameUser,passUser]//aca lo que digo es q array en la pocicion 0 va a tener un valor distinto
}

let validacionUser = ()=>{
    let nameUser =prompt("ingresa tu nombre de usuario para validarte");
    let passUser =prompt("ingresa tu contraseña para validarte")
    for(let i = 0;i<arrayUser.length;i++){
        if(arrayUser[i][0]==nameUser &&arrayUser[i][1]==passUser){
            return document.write(` <h1> <b style="color:green;">  Bienvenido </b> </h1> <hr> <br>  <h2 style="color:tomato;"> <b> ${arrayUser[i][0]} </b></h2>  `)
        }else{return  document.write(` <h1 style="color:red;"> El usuario ${nameUser} no se a encontrado por favor registrate </h1> `) }
    }
}


let modificadeUserPass =()=>{

   let user =prompt("ingresa el usuario a cambiar la contraseña")

    for(let i =0;i<arrayUser.length;i++){
        if(arrayUser[i][0]===user){
            let newPass=prompt("ingresa una nueva contraseña")
            return arrayUser[i][1]=newPass;
        }
    }
   
    console.log(arrayUser)
}







