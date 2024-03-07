//esto no funciona pero se intento
class Register{//creo clase registro
    constructor(user,pass){//anado las caracteristicas al objecto register recordemos que esto es un objecto
        this.user =user;
        this.pass=pass;
        this.arr =[];
    }

    registerUser(){//anado el  metodo  que crear un push que crea una matris de las dimenciones que las queramso
        this.arr.push([this.user,this.pass]);
    }

    mostrarArr(){//anado un metodo para mostrar el arreglo
        console.log(this.arr)
    }
}


class validationUser extends Register{ //creo una clase hijo que obtenga las mismas caracteristicas del padre
    constructor(user,pass,arr){
        super(user,pass,arr)//heredo esas 3 del padre
    }

    validationUser(){//creo un metodo para validar el usuario
        for(let i = 0; i<this.arr.length;i++){//creo un for que mide la longitud del arreglo que heredo esta clase
            if(this.arr[i][0]===prompt('ingresar tu usuario' && this.arr[i][1]===prompt('ingresa tu pass '))){//creo una condicion que si en cada condicion esta esacatamente ingual que en el arreglo entonces me returne estas y si no no estas
                return alert('usuario encontrado')
            }else{return alert('usuario no encontrado')}
        }
    }
}


validationUser('juan','guiza')

//metodo de cadena

const metCade = (c) =>{
    if(c.includes('@')&& c.includes('.') && c.includes('com') ){
        alert(true)
    }else{alert(false)}
}


//recursividad








