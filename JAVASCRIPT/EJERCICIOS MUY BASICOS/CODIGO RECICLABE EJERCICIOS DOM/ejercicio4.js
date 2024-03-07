class app {
    constructor(name,cDowload,points){
        this.name=name;
        this.cDowload=cDowload;
        this.points=points;
        this.installing=false;//no esta instalada todavia cuando este true significa que estara instalada
        this.exitOpen =false;//cuando esta false significa que la app esta cerrada y cuando esta true significa que esta abierta
    }

    decition(){
        if(this.points >=3  &&  this.points <=5 && this.cDowload>=10.000000) return document.write('descarga esta app por fa ' + '<br>')
        else return document.write('esta app no te sirve por fa no la descargues' + '<br>')
    }
    
    installApp(){
        if(this.installing ==false){
            this.installing =true;//al pasar esta variable a true digo que esta instalada
            return alert('app instalada sactisfactoriamente')
        }else{
            return alert('la app ya a sido instalada en tu telfono')
        }
    }

    abrir(){
        if(this.installing == true){
            if(this.exitOpen==false){//si esta cerrada
                this.exitOpen=true;//entonces aq
                return alert('app abierta exitosamente')
            }else{return alert('la app ya esta abierta')}
        }else{
            return alert('la app no esta instalada en el telefono')
        }
    }

    cerrar(){
        if(this.installing == true){
            if(this.exitOpen ==true){
                this.exitOpen =false;
                return alert ('app cerrada exitosamente')
            }else { return alert('la app ya esta cerrda')}
        }else{ return alert('la app que intentas cerrar esta desistalada')}
    }
    
    desistall(){
        if(this.installing ==true){
            this.installing =false;
            return alert('la app se a desistalado sactisfactoriamiente');
        }else{return alert('la app que intentas desitalar la ha sido desistalada')}
    }

}

let app1 =new app('clash royale',5.000000,4);
let app2 =new app('gta sandreas',30.000000,5);


app2.decition();

app2.installApp();
app2.abrir();
app2.cerrar();

app2.desistall();
app2.abrir();
app2.cerrar();


