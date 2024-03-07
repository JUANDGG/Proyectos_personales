//ejercicion #1
let suma =0;
const funcion = (n) =>{
    //este for lo que hace es incrementar de uno en uno hasta este numero
    for(let i = 0;i<=n;i++) {suma =suma + i} 
}   

funcion(4)
console.log(suma)






let arr =[1,4,3,5]

arr.sort();//metodo para ordenar
arr.reverse();//metodo para poner en reversa un arreglo



let temporal = null;
let resultado =null;
for(let i =0;i<arr.length;i++){
    temporal =arr[i]
    resultado =temporal -arr[i]
   
}
console.log(resultado)






//chat


class chat {
    constructor() {
        this.arr = [];
    }

    registrarUsuario(){ 
        const user =prompt('ingresa tu usuario');
        const pass = prompt('ingresa tu password');
        this.arr.push([user,pass,true,null])
    
    }
    
    iniciarSeccion(){
        const user =prompt('ingresa tu usuario');
        const pass = prompt('ingresa tu password')
        for(let i = 0 ;i<this.arr.length;i++){
            if(this.arr[i][0]==user && this.arr[i][1]==pass && this.arr[i][2]==true){
                document.write('BIENVENIDO AL CHAT MAS GRANDE DEL MUNDO' + '<br>')
                this.arr[i][3]=prompt('ingresa tu mensaje al grupo')
                this.mostrarChat();    
            }
            else{alert('el usuario introducido no existe o esta desactivado temporalmente')}
        }
    }


    mostrarChat(){for(let i = 0;i<this.arr.length;i++){document.write(`<h5 style='color:red;'>${this.arr[i][0]}</h5>   <br>   <pre style = 'color:green;'>${this.arr[i][3]}<pre>`)}}

    menu(){
        alert('BIENVENIDO')
        alert('ELIJE UNA DE LAS SIGUEINTE OPCIONES')
        alert('////REGISTRARSE:1////') 
        alert('////CHATEAR:2////')
        let op =  parseInt(prompt('que accion deseas realizar')) 
        if(op==1){
           this.registrarUsuario();
        }
        else if (op==2){
            this.iniciarSeccion();
        }
    }
}




const chatbook =new chat()

for(let i = 0;i<2;i++){
    chatbook.menu()
}



