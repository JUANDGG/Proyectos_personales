const zonaArrastre = document.querySelector('.zona-arrastre')
const barraDeCarga =  document.querySelector('.zona-arrastre__barraDeCarga')


const changeStyle = (obj,colorBackground,bordeColor)=>{
    obj.style.backgroundColor=colorBackground
    obj.style.border=`6px dashed ${bordeColor}`
}

zonaArrastre.addEventListener('dragover',(e)=>{
    e.preventDefault()
    changeStyle(e.srcElement,"#ccc","#0ff")

})


zonaArrastre.addEventListener('drop',(e)=>{
    e.preventDefault()
    changeStyle(e.srcElement,"#f2f2f2","#ccc")
    procesoData(e.dataTransfer.files[0])
})


const procesoData =(file)=>{
    
    const reader = new FileReader();
    reader.readAsArrayBuffer(file)

    reader.addEventListener('progress',(e)=>{
        console.log(e.loaded)//loaded es el cuanto cargo del total del peso
        let carga = Math.round(e.loaded / e.total * 100)
        barraDeCarga.textContent=`${carga}%`//el textcontent remplaza texto y elemento
        barraDeCarga.style.color ='#fff'
        barraDeCarga.style.width=`${carga/3.6}%`
        barraDeCarga.style.backgroundColor='#ccc'
        barraDeCarga.style.zIndex=1
        zonaArrastre.innerHTML=''
        zonaArrastre.style.zIndex =0
    })

    //load end es cuando termino de cargar
    reader.addEventListener('loadend',()=>{
        barraDeCarga.style.backgroundColor='#22e322'
        zonaArrastre.style.border='none'
        
        setTimeout(()=>{
            barraDeCarga.style.animation = 'aparecer 1s forwards'
            barraDeCarga.textContent = 'CARGA COMPLETADA'
            barraDeCarga.style.boxShadow='0px 0px 0px 100vmax rgba(0,0,0,0.4)'
        },0.5)
    })

    reader.addEventListener('load',(e)=>{
        let video =new Blob([new Uint8Array(e.currentTarget.result)],{type:'video/mp4'})
        let url = URL.createObjectURL(video)
        let crateContainerData = document.createElement('VIDEO')
        crateContainerData.src=url
        crateContainerData.setAttribute('class','resultado__containerData')
        document.querySelector('.resultado').appendChild(crateContainerData)
        crateContainerData.play()

    })
    
}