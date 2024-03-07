
//ejercicio #1
class celulares {// clase padre
    constructor(color,peso,resolucion,camara,memRam){
        this.color=color;
        this.peso=peso;
        this.resolucion=resolucion;
        this.camara=camara;
        this.memRam=memRam;
        this.info=null;
    }
    //a los set siempre debo pasarles un paremetro
    set setInfo(newInfo){ return this.info =newInfo;}

     prender(){return alert(`prendiendo tu movil`)}
    reiniciar(){return alert(`reiniciando tu movil`)}
    tomarFotos(){return alert(`tomando foto`)}
    grabar(){return alert(`reiniciando tu movil`)}
}

//instanceo la clase como un objecto
const celular =new celulares("rojo","100gr","5.5pg","5mpx","4gbram",);

//modifico la propiedad info del constructor con un set
celular.setInfo=`el telefono es de color ${celular.color} pesa ${celular.peso} la resolucion es de ${celular.resolucion} tiene una camara de ${celular.camara} tiene ${celular.memRam} de memoria ram`





//ejercicio #2

class samsung extends celulares{//creo una clase hijo que hereda caracteristicas del padre
    constructor (color,peso,camara,resolucion,memRam){
        super(color,peso,camara,resolucion,memRam)
        this.garantia='2años';
        this.model='galaxys10plus'
        this.arrReconFace =['face1','face2'];
    }
    
    reconFace(){
        let imgFace = prompt('pon tu cara sobre el celular');
        for(let i = 0;i<this.arrReconFace.length;i++){
            if(this.arrReconFace[i]==imgFace)return alert('bienvenido');
            else return alert('datos biometricos incorrectos');
        }

    }

    newcaracterisrecorder (){
        let selecionGrabar =['camara lenta','camra rapida','camara normal'];

        let camara = prompt('como deseas grabar camara lenta, o camara rapida,camara normal');
        
        for(let i =0;i<selecionGrabar.length;i++){
            if(selecionGrabar[i]==camara) return alert(`grabando en ${selecionGrabar[i]} : con resolucion ${this.camara} `)
            else return alert('ingresa una opcion valida por favor ')
        }
    }

   
}

const celular1 =new samsung ("negro","150gr","5.5px","5mpx","4gbram")

celular1.reconFace()
celular1.newcaracterisrecorder()
