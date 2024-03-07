const in1 = document.querySelector("#in1");
const in2 = document.querySelector("#in2");





const ipt1 =()=>{
    in1.type='text'
    in1.setAttribute('value',in1.value)
    in1.name="input#1"
    in1.className="inputt11"
}



const ipt2 = () =>{
    in2.setAttribute("type","submit")
    in2.value='data'
    in2.name="button"
}



ipt1()
ipt2()
let arr = [];
const tomar = ()=>{

    let guardar = in1.value;
    
    if(guardar == 'juan'){
        console.warn('no digas su nombre')
    }else{
        arr.push([guardar])
    }
}

tomar()
console.table(arr)