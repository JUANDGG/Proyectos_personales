let database=[];
const btnNext=document.querySelector('#btnNext');

const objectAttributesUser={
    name:'#name',
    lastName:'#lastName',
    userName:'#userName',
    password:'#password',
    confirmPassword:'#confirmPassword'
}


const registerDataUser=()=>{
    let arrTemporal=[]
    const map=Object.values(objectAttributesUser).map((i)=>{
        const  inputData = document.querySelector(`${i}`).value
        arrTemporal.push(inputData);
    })

    return database.push(arrTemporal)
}


const validatePassword=()=>{
    const password =document.querySelector(objectAttributesUser['password']).value;
    const confirmpassword =document.querySelector(objectAttributesUser['confirmPassword']).value;

    if(password.length>=5 &&password==confirmpassword){
        return true;
    }

  
}


const validateUser= ()=>{
    const userName=document.querySelector(objectAttributesUser['userName']).value;
    let bandera =false;


    if(database.length==0){
        return registerDataUser();
    }

    else{


        while(true){

            const recorder1= database.forEach((i) => {
                if(i==userName){
                    console.log('usuarioEncontrado')
                    bandera=true
                }else{
                    registerDataUser()
                }
            });


            if(bandera==true){
                break;
            }

        }

    }  
}





const eventClickBtnNext =btnNext.addEventListener('click',()=>{
    validateUser()
    console.log(database)
})






