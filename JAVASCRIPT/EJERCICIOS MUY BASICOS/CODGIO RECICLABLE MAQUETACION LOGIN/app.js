const registerPerson={
    email:'email',
    password:'password',
}

const actionText={
    textLabelEmail:'labelEmail',
    textLabelPassword:'labelPassword'
}


const buttonActions={
    buttonSubmit:'submit',
    buttonWhapsap:'contButtonWhapsap'
}


const data={users:[{email:'juandavid@gmail.com',pass:'12345'},{email:'elian@gmail.com',pass:'ybr3z'}]}

//instancieo los elementos para el registro
//poner el value aca esta mal ponlo cuando estes comparando algo como tal
const email = document.getElementById(registerPerson['email']); 
const pass  = document.getElementById(registerPerson['password']);

//labels
const labelEmail =document.getElementById(actionText['textLabelEmail']);
const labelPassword =document.getElementById(actionText['textLabelPassword'])
//botones de acciones
const btnSubmit = document.getElementById(buttonActions['buttonSubmit']);
const btnWhapasap =document.getElementById(buttonActions['buttonWhapsap']);




class login {
    constructor(email,pass){
        this.email=email;
        this.pass=pass;
    }

    verificacionUser(){
        let bandera=false;
        //en un bucle no se pueden hacer if o el se para verificar algo ya que basicamente renician nuestro progreso de alguna forma porlo que para verificar algo se usan banderas como metodo para que algo sea verdadero o falso
        const map1 =Object.values(data).map((element)=>{
            const map2=element.forEach((j)=>{
                if(j.email==this.email.value && j.pass==this.pass.value)bandera=true
            })
        })

        const condicion =bandera==true ?  true: false
        return condicion
    }


    setActionHtml(){
        if(this.verificacionUser()==true){
            labelEmail.innerHTML=` <b><p style='color:green;'>  email verificado exitosamente</p></b>`
            labelPassword.innerHTML=` <b><p  style='color:green;'>password verificada exitosamente</p></b> `

            setTimeout(function(){
                window.open('home.html');
            }, 500);

            
        }else{
            labelEmail.innerHTML=`<p  style='color:red;'>email de usuario invalido</p>`
            labelPassword.innerHTML=`<p  style='color:red;'>password incorrecta</p>`
         }
    }
}

const objectClass = new login(email,pass);


const eventClickBtnSubmit = btnSubmit.addEventListener('click',()=>{
    objectClass.verificacionUser()
    objectClass.setActionHtml()
})



const eventClickBtnWhapsap =btnWhapasap.addEventListener('click',()=>{
    window.open('https://web.whatsapp.com/')
})






