
const p =document.querySelector('p')
const getData = async()=>{
    try {
        //esta peticion nos devuelve una promesa
        const http = await fetch('https://api.coinbase.com/v2/exchange-rates?currecy=BTC/')
        //desemcapsulamos esta promesa
        const result = await http.json()
        p.innerHTML=result.data.rates.EUR
    } catch (error) {
        console.error(error)
    }
}

getData()