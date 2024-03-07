//calbasks para hacer una simple operacion

function numbers(n1,n2,callback){
    return callback(n1,n2)
}


numbers(2,2,(n1,n2)=>{
    const suma = n1+n2;
    return console.log(suma)
})


//calbask para hacer una busqueda y validacion de algo

const data ={
    users:['juan','david','guiza']
}

const Map = (user,callback)=>{
    return callback(user)
}

Map('juan',(user,msg)=>{
    data.users.forEach(Element => {
        Element==user ? msg('se a encontrado el usuario') :msg('no se a encontrado el usario')
    });
});

