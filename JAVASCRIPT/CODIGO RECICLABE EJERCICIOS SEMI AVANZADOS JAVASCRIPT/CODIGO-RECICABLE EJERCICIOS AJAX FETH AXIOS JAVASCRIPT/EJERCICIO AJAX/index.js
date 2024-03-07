//con ajax



//peticion get:

let peticion = new XMLHttpRequest();





/*if(window.XMLHttpRequest()){
    peticion = new XMLHttpRequest();
}else{
    peticion =new ActiveXObject('Microsoft.XMLHTTP')
}*/

/*function xmlHttpCompatibleAjax (){
    peticion.open('GET','database.json')
    peticion.send();


//forma vieja de traer el ready state o si hisimos bien la conexion con el servidor o el archivo:
    peticion.addEventListener('readystatechange',()=>{
        if(peticion.readyState ==4 && peticion.status ==200){
            console.log(JSON.parse(peticion.response).data)
        }else{
            throw "error en la conexion"
        }
    })
}

xmlHttpCompatibleAjax()



//no se usa
function xmlHttpimcompatibleAjax(){

}


*/


//con post 


peticion.open('POST','https://reqres.in/api/users')
peticion.send(JSON.stringify({
    "name":"namesadas"
}));


peticion.setRequestHeader("Content-type","application/json;charset:UTF8");

peticion.addEventListener('readystatechange',()=>{
    if(peticion.readyState ==4 && (peticion.status ==200 || peticion.status ==201)){
        console.log(peticion.response)   
    }
})



