const inptArchivos = document.getElementById('inptArchivos');
const root = document.getElementById('root')
//const fragment = document.createDocumentFragment();



//cuando es drop se procesa el archivo se le saca la url
const readerFile = (fileUrl)=>{
    for(let i of fileUrl){
        const reader = new FileReader();
        //se le saca el atributo name
        let cadena =''.concat(i.name).toLocaleLowerCase();
        let extencionarchivo = cadena.substring(cadena.indexOf('.'),cadena.length -1 );
        console.log(extencionarchivo)

        //y se verifica que el archivo que nosotros estamos pidiendo el usuario lo ponga
        if(extencionarchivo =='.png'){       
            reader.readAsDataURL(i);       
            reader.addEventListener('load',e=>{
                root.innerHTML+=`<img src='${e.currentTarget.result}'>`
            });


        }

        else if(extencionarchivo=='.mp4'){
            console.log('asdasd')
            //el array buffer es un tipo de array especial que cuando lo convirtamos a blob 
            reader.readAsArrayBuffer(i);
            removeEventListener('load',e =>{
                //el uint8 arryy es un tipo especioal de array
                let video =new Blob([new Uint8Array(i)],{type:'video/mp4'})
                const createElementVideo = document.createElement('VIDEO');
                createElementVideo.setAttribute('src',video)
                root.appendChild(createElementVideo)
            })
        }
            
        
        else {
            alert(`intentaste cargar un archivo ${extencionarchivo} no es un png o un video`)
            setTimeout(()=>{
                history.go()
            });
        };
        
    };
};


inptArchivos.addEventListener('change',()=>{
    readerFile(inptArchivos.files)
})



//trabajando con drag and drop



const colorZonaArrastre = (obj,background,colorBorder)=>{
    obj.style.backgroundColor =background;
    obj.style.outlineColor=colorBorder;
}

root.addEventListener('dragover',(e)=>{
    e.preventDefault()
    //el srcElement nos sirve para poner estilos en linea
    colorZonaArrastre(e.srcElement,"#306bb3","#ccc")
})

root.addEventListener('dragleave',(e)=>{
    e.preventDefault()
    //el srcElement nos sirve para poner estilos en linea
    colorZonaArrastre(e.srcElement,"#ccc","#000")
})

root.addEventListener('drop',(e)=>{
    e.preventDefault()
    colorZonaArrastre(e.srcElement,"#ccc","#000")
    //como el reader file procesa el archivo etc aca nosotros basicamente le enviamos lo que el usuario nos soloto en este caso un file o archivo
    readerFile(e.dataTransfer.files)//aca basicamente le digo que va a transferir un archivo datatransfer tambien posee la opcion de file por que trabaja con info todo objecto que trabaje con informaciona archivos etc la tiene
})