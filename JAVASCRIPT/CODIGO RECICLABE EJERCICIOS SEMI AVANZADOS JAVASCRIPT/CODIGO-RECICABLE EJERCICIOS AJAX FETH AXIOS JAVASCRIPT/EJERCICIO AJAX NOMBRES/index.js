const containerRoot = document.getElementById('root')
const button = document.querySelector('button')



const addElement = (text)=>{
    const createDiv = document.createElement('DIV');
    createDiv.innerHTML=text;
    containerRoot.appendChild(createDiv)
}




//ajax
const getData= ()=>{

    let peticion = new XMLHttpRequest   
    
    peticion.open('GET','database.json');
    peticion.send();


    //aca es si esta cambiando el estaod


    function stateChange (){

        if(peticion.readyState ==4 && (peticion.status == 200 || peticion.status ==201)){
            const object = JSON.parse(peticion.response)

            for(let i in object){
                for(let j in object[i]){
                    for(let k in object[i][j]){
                        addElement(object[i][j][k])
                    }
                }
            }

    
            
        }

        }

        return peticion.addEventListener('readystatechange',stateChange)


}


button.addEventListener('click',getData)




